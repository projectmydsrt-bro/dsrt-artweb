const GAMES = [
  { id: 'block', title: 'Block Jumper', category: 'Arcade', thumb: 'games/block-jumper/cover.png', url: 'games/block-jumper/index.html' },
  { id: 'g1', title: 'Pumpkin Dash', category: 'Arcade', thumb: 'assets/images/cover1.svg', url: 'about:blank' },
  { id: 'g2', title: 'Tong Hop', category: 'Puzzle', thumb: 'assets/images/cover2.svg', url: 'about:blank' },
  { id: 'g3', title: 'Pixel Battler', category: 'Action', thumb: 'assets/images/cover3.svg', url: 'about:blank' },
  { id: 'g4', title: 'Sky Blocks', category: 'Casual', thumb: 'assets/images/placeholder.png', url: 'about:blank' },
];
/* Parallax carousel animation */
let carOffset = 0;
function animateCarousel(){
  carOffset += 0.2;
  carTrack.style.transform = `translateX(${-slideIndex*340 + Math.sin(carOffset/20)*10}px)`;
  carTrack.style.opacity = 0.85 + 0.15*Math.sin(carOffset/30);
  requestAnimationFrame(animateCarousel);
}
animateCarousel();
