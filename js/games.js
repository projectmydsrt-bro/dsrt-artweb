const games = [
  {
    title: "Block Jumper",
    img: "https://cdn.jsdelivr.net/gh/Bayuu7/assets-games/block-jumper.jpg",
    url: "https://example.com/block-jumper"
  },
  {
    title: "Crazy Motorcycle",
    img: "https://cdn.jsdelivr.net/gh/Bayuu7/assets-games/crazy-motorcycle.jpg",
    url: "https://example.com/crazy-motorcycle"
  },
  {
    title: "Fragen Shooter",
    img: "https://cdn.jsdelivr.net/gh/Bayuu7/assets-games/fragen-shooter.jpg",
    url: "https://example.com/fragen-shooter"
  },
  {
    title: "Farm Merge Valley",
    img: "https://cdn.jsdelivr.net/gh/Bayuu7/assets-games/farm-merge-valley.jpg",
    url: "https://example.com/farm-merge-valley"
  },
  {
    title: "Thief Puzzle",
    img: "https://cdn.jsdelivr.net/gh/Bayuu7/assets-games/thief-puzzle.jpg",
    url: "https://example.com/thief-puzzle"
  },
  {
    title: "Skydom",
    img: "https://cdn.jsdelivr.net/gh/Bayuu7/assets-games/skydom.jpg",
    url: "https://example.com/skydom"
  }
];

function renderGames() {
  const featured = document.querySelector(".featured-container");
  const best = document.querySelector(".game-grid");
  games.slice(0, 2).forEach(game => featured.appendChild(createCard(game)));
  games.forEach(game => best.appendChild(createCard(game)));
}

function createCard(game) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <img src="${game.img}" alt="${game.title}">
    <h3>${game.title}</h3>
  `;
  card.addEventListener("click", () => openModal(game.url));
  return card;
}

// === MODAL ELEMENTS ===
const modal = document.getElementById("gameModal");
const gameFrame = document.getElementById("gameFrame");
const closeModal = document.getElementById("closeModal");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const loadingOverlay = document.getElementById("loadingOverlay");
const backBtn = document.getElementById("backBtn");

// === OPEN GAME MODAL ===
function openModal(url) {
  modal.style.display = "flex";
  loadingOverlay.style.display = "flex";
  gameFrame.src = "";

  setTimeout(() => {
    gameFrame.src = url;
  }, 300);

  gameFrame.onload = () => {
    setTimeout(() => {
      loadingOverlay.style.display = "none";
    }, 500);
  };
}

// === CLOSE GAME ===
function closeGame() {
  modal.style.display = "none";
  gameFrame.src = "";
  loadingOverlay.style.display = "flex";
}

// Close modal or outside click
closeModal.addEventListener("click", closeGame);
window.addEventListener("click", e => { if (e.target === modal) closeGame(); });

// === FULLSCREEN TOGGLE ===
fullscreenBtn.addEventListener("click", toggleFullscreen);
backBtn.addEventListener("click", exitGame);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    gameFrame.requestFullscreen().catch(err => {
      alert(`Error attempting fullscreen: ${err.message}`);
    });
    backBtn.style.display = "block";
  } else {
    document.exitFullscreen();
    backBtn.style.display = "none";
  }
}

// Exit fullscreen & close modal
function exitGame() {
  if (document.fullscreenElement) document.exitFullscreen();
  backBtn.style.display = "none";
  closeGame();
}

// Reset saat keluar fullscreen manual (ESC)
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    backBtn.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", renderGames);

// === 🌓 THEME MODE SYSTEM ===
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

function autoTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme === "light");
  } else {
    const hour = new Date().getHours();
    setTheme(hour >= 6 && hour <= 18);
  }
}

autoTheme();
