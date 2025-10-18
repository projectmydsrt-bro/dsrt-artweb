const games = [
  { title: "Block Jumper", img: "img/block.jpg", url: "https://example.com/block" },
  { title: "Crazy Motorcycle", img: "img/moto.jpg", url: "https://example.com/moto" },
  { title: "Fragen Shooter", img: "img/shooter.jpg", url: "https://example.com/shooter" },
  { title: "Farm Merge Valley", img: "img/farm.jpg", url: "https://example.com/farm" },
  { title: "Thief Puzzle", img: "img/thief.jpg", url: "https://example.com/thief" },
  { title: "Skydom", img: "img/sky.jpg", url: "https://example.com/sky" },
];

// === THEME MODE ===
const themeBtn = document.getElementById("themeBtn");

function setTheme(isLight) {
  if (isLight) {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    themeBtn.textContent = "🌞 Light Mode";
    localStorage.setItem("theme", "dark");
  }
}

themeBtn.addEventListener("click", () => {
  const isLight = !document.body.classList.contains("light-mode");
  setTheme(isLight);
});

(function autoTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) setTheme(saved === "light");
  else setTheme(new Date().getHours() >= 6 && new Date().getHours() <= 18);
})();

// === GAME DISPLAY ===
const featured = document.querySelector(".featured-container");
const grid = document.querySelector(".game-grid");
const favGrid = document.querySelector(".fav-grid");
const modal = document.getElementById("gameModal");
const iframe = document.getElementById("gameFrame");
const closeModal = document.getElementById("closeModal");
const backBtn = document.getElementById("backBtn");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(title) {
  if (favorites.includes(title)) favorites = favorites.filter(f => f !== title);
  else favorites.push(title);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function createCard(game) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <img src="${game.img}" alt="${game.title}">
    <h3>${game.title}</h3>
    <span class="favorite-icon ${favorites.includes(game.title) ? 'active' : ''}">❤️</span>
  `;
  card.querySelector(".favorite-icon").addEventListener("click", e => {
    e.stopPropagation();
    toggleFavorite(game.title);
    e.target.classList.toggle("active");
    renderFavorites();
  });
  card.addEventListener("click", () => openModal(game.url));
  return card;
}

function renderGames() {
  featured.innerHTML = "";
  grid.innerHTML = "";
  games.slice(0, 2).forEach(g => featured.appendChild(createCard(g)));
  games.forEach(g => grid.appendChild(createCard(g)));
}

function renderFavorites() {
  favGrid.innerHTML = "";
  const favGames = games.filter(g => favorites.includes(g.title));
  if (!favGames.length) favGrid.innerHTML = "<p>No favorites yet ❤️</p>";
  else favGames.forEach(g => favGrid.appendChild(createCard(g)));
}

function openModal(url) {
  iframe.src = url;
  modal.style.display = "block";
}

closeModal.onclick = () => {
  iframe.src = "";
  modal.style.display = "none";
};
backBtn.onclick = () => {
  iframe.src = "";
  modal.style.display = "none";
};

// === TABS ===
const tabs = document.querySelectorAll(".tab-btn");
const allSection = document.querySelector(".best");
const favSection = document.querySelector(".favorites");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const showFav = tab.dataset.tab === "favorites";
    allSection.style.display = showFav ? "none" : "block";
    favSection.style.display = showFav ? "block" : "none";
    if (showFav) renderFavorites();
  });
});

renderGames();
