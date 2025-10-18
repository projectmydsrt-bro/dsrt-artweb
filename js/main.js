/* DSRT Games — Portal interactions (fresh, original) */

/* Sample data — replace/add items */
const GAMES = [
  { id: 'g1', title: 'Pumpkin Dash', category: 'Arcade', thumb: 'assets/images/cover1.svg', url: 'about:blank' },
  { id: 'g2', title: 'Tong Hop', category: 'Puzzle', thumb: 'assets/images/cover2.svg', url: 'about:blank' },
  { id: 'g3', title: 'Pixel Battler', category: 'Action', thumb: 'assets/images/cover3.svg', url: 'about:blank' },
  { id: 'g4', title: 'Sky Blocks', category: 'Casual', thumb: 'assets/images/placeholder.png', url: 'about:blank' },
  { id: 'g5', title: 'Moto Flip', category: 'Racing', thumb: 'assets/images/placeholder.png', url: 'about:blank' },
  { id: 'g6', title: 'Farm Merge', category: 'Simulation', thumb: 'assets/images/placeholder.png', url: 'about:blank' },
];

/* DOM references */
const carTrack = document.getElementById('carTrack');
const carousel = document.getElementById('carousel');
const gameGrid = document.getElementById('gameGrid');
const modal = document.getElementById('modal');
const gameFrame = document.getElementById('gameFrame');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalThumb = document.getElementById('modalThumb');
const modalCategory = document.getElementById('modalCategory');
const openExtern = document.getElementById('openExtern');

let slideIndex = 0;

/* Populate carousel (first 3 as featured) */
function renderCarousel(){
  const featured = GAMES.slice(0,3);
  carTrack.innerHTML = '';
  featured.forEach((g, i) => {
    const slide = document.createElement('div');
    slide.className = 'car-slide';
    slide.innerHTML = `
      <img alt="${escapeHtml(g.title)}" src="${g.thumb}" />
      <div class="label">${escapeHtml(g.title)}</div>
    `;
    slide.onclick = () => openGameModal(g);
    carTrack.appendChild(slide);
  });
  updateCarousel();
}

/* Simple carousel scroll */
function updateCarousel(){
  const slides = carTrack.children;
  if (!slides.length) return;
  // center current
  const slideWidth = slides[0].getBoundingClientRect().width + 14; // gap
  carTrack.style.transform = `translateX(${ - (slideIndex * slideWidth) }px)`;
}

/* Prev/Next */
carousel.addEventListener('click', (e) => {
  if (e.target.closest('.car-arrow')){
    const dir = Number(e.target.closest('.car-arrow').dataset.dir || 0);
    const max = Math.max(0, carTrack.children.length - 1);
    slideIndex = Math.min(max, Math.max(0, slideIndex + dir));
    updateCarousel();
  }
});

/* Grid of games */
function renderGrid(){
  gameGrid.innerHTML = '';
  GAMES.forEach(g => {
    const card = document.createElement('div');
    card.className = 'card-game';
    card.innerHTML = `
      <img src="${g.thumb}" alt="${escapeHtml(g.title)}">
      <div class="g-title">${escapeHtml(g.title)}</div>
      <div class="g-sub">${escapeHtml(g.category)}</div>
      <div style="width:100%;display:flex;gap:8px;justify-content:center;margin-top:6px">
        <button class="btn play small" data-id="${g.id}">Main</button>
        <button class="btn ghost small" data-id="${g.id}" data-preview>Preview</button>
      </div>
    `;
    // open modal on play
    card.querySelector('.play').onclick = () => openGameModal(g);
    // preview (open detail or trailer - here just modal too)
    card.querySelector('[data-preview]').onclick = () => openGameModal(g);
    gameGrid.appendChild(card);
  });
}

/* Open modal with game */
function openGameModal(g){
  modal.setAttribute('aria-hidden','false');
  modalTitle.textContent = g.title;
  modalCategory.textContent = g.category;
  modalThumb.src = g.thumb;
  // in this starter, url is 'about:blank' — if you have an html game, set g.url accordingly
  gameFrame.src = g.url || 'about:blank';
  openExtern.onclick = () => window.open(g.url || '#','_blank');
}

/* Close */
closeModal.onclick = () => {
  modal.setAttribute('aria-hidden','true');
  gameFrame.src = '';
};

/* Click outside to close */
modal.addEventListener('click', (ev) => {
  if (ev.target === modal) {
    closeModal.click();
  }
});

/* Search */
document.getElementById('search').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  // simple filter: show only matching cards
  const cards = Array.from(gameGrid.children);
  cards.forEach(card => {
    const title = card.querySelector('.g-title').textContent.toLowerCase();
    card.style.display = title.includes(q) ? '' : 'none';
  });
});

/* Utilities */
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

/* Init */
renderCarousel();
renderGrid();

/* Optional: auto-advance carousel */
setInterval(() => {
  const max = Math.max(0, carTrack.children.length - 1);
  slideIndex = (slideIndex >= max) ? 0 : slideIndex + 1;
  updateCarousel();
}, 4500);
