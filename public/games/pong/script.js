const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let p1={x:10,y:150,w:10,h:100,vy:0}, p2={x:580,y:150,w:10,h:100,vy:0};
let ball={x:300,y:200,vx:4,vy:3};
document.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  p1.y = e.clientY - rect.top - p1.h/2;
});
function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // ai paddle simple
  p2.y += (ball.y - (p2.y + p2.h/2)) * 0.08;
  // ball
  ball.x += ball.vx; ball.y += ball.vy;
  if(ball.y<0 || ball.y>canvas.height) ball.vy *= -1;
  // paddle collision
  if(ball.x < p1.x + p1.w && ball.y > p1.y && ball.y < p1.y + p1.h) { ball.vx *= -1; ball.x = p1.x + p1.w; }
  if(ball.x > p2.x - p2.w && ball.y > p2.y && ball.y < p2.y + p2.h) { ball.vx *= -1; ball.x = p2.x - p2.w; }
  if(ball.x < 0 || ball.x > canvas.width){ ball.x=300; ball.y=200; ball.vx = 4*(Math.random()>0.5?1:-1); ball.vy=3; }
  // draw
  ctx.fillStyle='#fff';
  ctx.fillRect(p1.x,p1.y,p1.w,p1.h);
  ctx.fillRect(p2.x,p2.y,p2.w,p2.h);
  ctx.beginPath(); ctx.arc(ball.x,ball.y,8,0,Math.PI*2); ctx.fill();
}
setInterval(loop, 1000/60);
