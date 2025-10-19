const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const cols = 10, rows = 20, block = 30;
canvas.width = cols * block;
canvas.height = rows * block;
const grid = Array.from({length:rows},()=>Array(cols).fill(0));
function drawCell(x,y,color){ctx.fillStyle=color;ctx.fillRect(x*block,y*block,block-1,block-1)}
function randomPiece(){
  const pieces = [
    {shape:[[1,1,1,1]], color:'#7C3AED'},
    {shape:[[1,1],[1,1]], color:'#06b6d4'},
    {shape:[[0,1,0],[1,1,1]], color:'#f59e0b'},
    {shape:[[1,1,0],[0,1,1]], color:'#ef4444'},
    {shape:[[0,1,1],[1,1,0]], color:'#10b981'}
  ];
  return JSON.parse(JSON.stringify(pieces[Math.floor(Math.random()*pieces.length)]));
}
let piece = randomPiece(), px = 3, py = 0;
function collide() {
  for(let y=0;y<piece.shape.length;y++) for(let x=0;x<piece.shape[y].length;x++){
    if(piece.shape[y][x]){
      if(grid[py+y] && grid[py+y][px+x] === 1) return true;
      if(py+y>=rows) return true;
    }
  } return false;
}
function merge(){
  for(let y=0;y<piece.shape.length;y++) for(let x=0;x<piece.shape[y].length;x++){
    if(piece.shape[y][x]) grid[py+y][px+x]=1;
  }
  piece = randomPiece(); px=3; py=0;
  // clear rows
  for(let y=rows-1;y>=0;y--){
    if(grid[y].every(c=>c===1)){ grid.splice(y,1); grid.unshift(Array(cols).fill(0)); y++; }
  }
}
function rotate() {
  const s = piece.shape;
  const h = s.length, w = s[0].length;
  const r = Array.from({length:w},()=>Array(h).fill(0));
  for(let y=0;y<h;y++) for(let x=0;x<w;x++) r[x][h-1-y]=s[y][x];
  piece.shape = r;
  if(collide()){ // rollback simple
    piece.shape = s;
  }
}
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft'){ px--; if(px<0)px=0; if(collide())px++; }
  else if(e.key==='ArrowRight'){ px++; if(px>cols-1)px=cols-1; if(collide())px--; }
  else if(e.key==='ArrowDown'){ py++; if(collide()){ py--; merge(); } }
  else if(e.key==='ArrowUp'){ rotate(); }
});
function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // draw grid blocks
  for(let y=0;y<rows;y++) for(let x=0;x<cols;x++) if(grid[y][x]) drawCell(x,y,'#333');
  // draw piece
  for(let y=0;y<piece.shape.length;y++) for(let x=0;x<piece.shape[y].length;x++){
    if(piece.shape[y][x]) drawCell(px+x,py+y,piece.color);
  }
}
setInterval(()=>{ py++; if(collide()){ py--; merge(); } }, 600);
setInterval(loop, 50);
