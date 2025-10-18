const featuredContainer = document.getElementById('featuredContainer');
const gameGrid = document.getElementById('gameGrid');
const searchInput = document.getElementById('searchInput');

// Tampilkan featured games
featuredContainer.innerHTML = games
  .filter(g => g.featured)
  .map(g => `
    <div class="feature-card" onclick="openGame('${g.url}')">
      <img src="${g.image}" alt="${g.title}">
      <div class="info">
        <h3>${g.title}</h3>
      </div>
    </div>
  `)
  .join('');

// Tampilkan semua game
function renderGames(filter="") {
  const filtered = games.filter(g =>
    g.title.toLowerCase().includes(filter.toLowerCase())
  );
  gameGrid.innerHTML = filtered.map(g => `
    <div class="game-card" onclick="openGame('${g.url}')">
      <img src="${g.image}" alt="${g.title}">
      <h4>${g.title}</h4>
    </div>
  `).join('');
}
renderGames();

searchInput.addEventListener('input', e => renderGames(e.target.value));

function openGame(url){
  if(url && url !== "#"){
    window.location.href = url;
  } else {
    alert("Game ini belum tersedia!");
  }
}
