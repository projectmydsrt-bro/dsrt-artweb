/* 
  Arcade Sprint — brand new game code (from zero).
  Single-file game engine for a simple infinite-runner style game.
  Controls: Space or Click to jump. Buttons: Start / Pause / Reset.
  Leaderboard uses localStorage key: "arcade_sprint_scores"
*/

/* --------- Game constants & state --------- */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let W = canvas.width;
let H = canvas.height;

let state = {
  running: false,
  paused: false,
  frame: 0,
  score: 0,
  lives: 3
};

/* Player */
const player = {
  x: 80,
  y: H - 84,
  w: 40,
  h: 60,
  vy: 0,
  gravity: 0.8,
  jumpPower: -14,
  grounded: true
};

/* Obstacles */
let obstacles = [];
let obstacleTimer = 0;
let obstacleInterval = 90; // frames

/* Difficulty */
let speed = 4;

/* DOM */
const elScore = document.getElementById('score');
const elLives = document.getElementById('lives');
const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnPause');
const btnReset = document.getElementById('btnReset');
const leaderList = document.getElementById('leaderList');
const scoreForm = document.getElementById('scoreForm');
const clearBtn = document.getElementById('clearScores');

/* ---------- Initialization ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

/* Input: jump */
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') jump();
  if (e.code === 'KeyP') togglePause();
});
canvas.addEventListener('mousedown', (e) => { jump(); });

/* Buttons */
btnStart.addEventListener('click', startGame);
btnPause.addEventListener('click', togglePause);
btnReset.addEventListener('click', resetGame);

/* Leaderboard */
loadScores();
scoreForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const name = document.getElementById('playerName').value.trim() || 'Anonymous';
  const scoreVal = parseInt(document.getElementById('playerScore').value) || 0;
  saveScore({name, score: scoreVal, ts: Date.now()});
  scoreForm.reset();
  loadScores();
});
clearBtn.addEventListener('click', () => {
  if (confirm('Clear local leaderboard?')) {
    localStorage.removeItem('arcade_sprint_scores');
    loadScores();
  }
});

/* ---------- Core functions ---------- */
function resizeCanvas(){
  // keep internal resolution fixed but scale visually
  // internal size stays W x H but canvas CSS handles responsiveness
  canvas.style.width = '100%';
  // update players baseline if needed
}

function startGame(){
  if(state.running) return;
  state.running = true;
  state.paused = false;
  state.frame = 0;
  state.score = 0;
  state.lives = 3;
  obstacles = [];
  obstacleTimer = 0;
  speed = 4;
  player.y = H - player.h - 20;
  player.vy = 0;
  loop();
}

function togglePause(){
  if(!state.running) return;
  state.paused = !state.paused;
  btnPause.textContent = state.paused ? 'Resume' : 'Pause';
  if(!state.paused) loop();
}

function resetGame(){
  state.running = false;
  state.paused = false;
  state.frame = 0;
  state.score = 0;
  state.lives = 3;
  obstacles = [];
  updateHUD();
  clearScreen();
}

/* Jump logic */
function jump(){
  if(!state.running || state.paused) return;
  if(player.grounded){
    player.vy = player.jumpPower;
    player.grounded = false;
  }
}

/* Obstacle spawn */
function spawnObstacle(){
  const h = 30 + Math.random() * 50;
  const y = H - 20 - h; // sit on ground
  obstacles.push({ x: W + 50, y, w: 24 + Math.random() * 30, h, passed: false });
}

/* Update physics & game */
function update(){
  if(state.paused) return;

  state.frame++;
  state.score = Math.floor(state.frame / 6);
  obstacleTimer++;
  if(obstacleTimer > obstacleInterval){
    spawnObstacle();
    obstacleTimer = 0;
    // gradually increase difficulty
    if(obstacleInterval > 40) obstacleInterval -= 2;
    speed += 0.05;
  }

  // player physics
  player.vy += player.gravity;
  player.y += player.vy;
  if(player.y + player.h >= H - 20){
    player.y = H - 20 - player.h;
    player.vy = 0;
    player.grounded = true;
  } else {
    player.grounded = false;
  }

  // obstacles move
  for(let i = obstacles.length - 1; i >= 0; i--){
    const o = obstacles[i];
    o.x -= speed;
    // collision
    if(rectIntersect(player, o)){
      // handle collision: lose a life and remove obstacle
      obstacles.splice(i,1);
      state.lives -= 1;
      if(state.lives <= 0){
        // game over
        state.running = false;
        promptGameOver();
        return;
      }
    } else {
      // remove if offscreen
      if(o.x + o.w < -50) obstacles.splice(i,1);
    }
  }

  updateHUD();
}

/* Draw */
function draw(){
  // clear
  ctx.clearRect(0,0,W,H);

  // background gradient
  const grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'#071827');
  grad.addColorStop(1,'#05202b');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,W,H);

  // ground
  ctx.fillStyle = '#052b2b';
  ctx.fillRect(0,H-20,W,20);

  // player
  ctx.fillStyle = '#ffd27a';
  ctx.fillRect(player.x, player.y, player.w, player.h);
  // simple eye
  ctx.fillStyle = '#00141a';
  ctx.fillRect(player.x + player.w - 12, player.y + 12, 6, 6);

  // obstacles
  ctx.fillStyle = '#ff7b7b';
  obstacles.forEach(o => {
    ctx.fillRect(o.x, o.y, o.w, o.h);
  });

  // score text
  ctx.fillStyle = '#dff6ff';
  ctx.font = '16px monospace';
  ctx.fillText('Score: ' + state.score, 10, 24);
}

/* Game loop */
function loop(){
  if(!state.running) return;
  if(state.paused) return;
  update();
  draw();
  requestAnimationFrame(loop);
}

/* Helpers */
function rectIntersect(a,b){
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function updateHUD(){
  elScore.textContent = state.score;
  elLives.textContent = state.lives;
}

function clearScreen(){
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle = '#071827';
  ctx.fillRect(0,0,W,H);
  ctx.fillStyle = '#dff6ff';
  ctx.font = '18px sans-serif';
  ctx.fillText('Ready — Click Start or press Space', 20, 40);
}

/* Game over */
function promptGameOver(){
  draw(); // final frame
  setTimeout(() => {
    const s = state.score;
    const name = prompt('Game Over. Your score: ' + s + '\\nEnter name to save to local leaderboard:', 'Player');
    if(name !== null){
      saveScore({name: name || 'Player', score: s, ts: Date.now()});
      loadScores();
    }
    // reset game state (but keep UI)
    state.running = false;
    state.paused = false;
    updateHUD();
  }, 80);
}

/* ---------- Local leaderboard functions ---------- */
function getSavedScores(){
  return JSON.parse(localStorage.getItem('arcade_sprint_scores') || '[]');
}
function saveScore(entry){
  const arr = getSavedScores();
  arr.push(entry);
  // keep top 20 by score desc
  arr.sort((a,b)=> b.score - a.score);
  localStorage.setItem('arcade_sprint_scores', JSON.stringify(arr.slice(0,20)));
}
function loadScores(){
  const arr = getSavedScores();
  leaderList.innerHTML = arr.slice(0,10).map(s => `<li>${escapeHtml(s.name)} — ${s.score}</li>`).join('');
}

/* simple html esc */
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

/* ---------- Start with clear screen ---------- */
clearScreen();
updateHUD();
