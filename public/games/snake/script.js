const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const grid = 20;
let count = 0;
let snake = { x: 160, y: 160, dx: grid, dy: 0, cells: [], maxCells: 4 };
let apple = { x: 320, y: 320 };

function randomPos() { return Math.floor(Math.random() * (canvas.width / grid)) * grid; }

function loop() {
  requestAnimationFrame(loop);
  if (++count < 6) return;
  count = 0;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  snake.x += snake.dx; snake.y += snake.dy;
  if(snake.x < 0) snake.x = canvas.width - grid;
  else if(snake.x >= canvas.width) snake.x = 0;
  if(snake.y < 0) snake.y = canvas.height - grid;
  else if(snake.y >= canvas.height) snake.y = 0;
  snake.cells.unshift({x:snake.x,y:snake.y});
  if (snake.cells.length > snake.maxCells) snake.cells.pop();
  ctx.fillStyle = '#7C3AED';
  ctx.fillRect(apple.x, apple.y, grid-1, grid-1);
  ctx.fillStyle = '#06b6d4';
  snake.cells.forEach((cell, i) => {
    ctx.fillRect(cell.x, cell.y, grid-1, grid-1);
    if(cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      apple.x = randomPos(); apple.y = randomPos();
    }
    for(let j=i+1;j<snake.cells.length;j++){
      if(cell.x === snake.cells[j].x && cell.y === snake.cells[j].y){
        snake.x = 160; snake.y = 160; snake.cells = []; snake.maxCells = 4; snake.dx = grid; snake.dy = 0;
        apple.x = randomPos(); apple.y = randomPos();
      }
    }
  });
}
document.addEventListener("keydown", e => {
  if(e.key === "ArrowLeft" && snake.dx === 0){ snake.dx = -grid; snake.dy = 0; }
  else if(e.key === "ArrowUp" && snake.dy === 0){ snake.dy = -grid; snake.dx = 0; }
  else if(e.key === "ArrowRight" && snake.dx === 0){ snake.dx = grid; snake.dy = 0; }
  else if(e.key === "ArrowDown" && snake.dy === 0){ snake.dy = grid; snake.dx = 0; }
});
requestAnimationFrame(loop);
