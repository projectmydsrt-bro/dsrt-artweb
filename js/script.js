// ===============================
//  DUMMY GAME DATA (bisa diganti Supabase / API)
// ===============================
const games = [
  {
    id: 1,
    title: "Cyber Runner",
    image: "https://cdn.jsdelivr.net/gh/Bayuu7/assets@main/game1.jpg",
    url: "https://example.com/games/cyberrunner",
  },
  {
    id: 2,
    title: "Pixel War",
    image: "https://cdn.jsdelivr.net/gh/Bayuu7/assets@main/game2.jpg",
    url: "https://example.com/games/pixelwar",
  },
  {
    id: 3,
    title: "Drift King",
    image: "https://cdn.jsdelivr.net/gh/Bayuu7/assets@main/game3.jpg",
    url: "https://example.com/games/driftking",
  },
  {
    id: 4,
    title: "Space Shooter",
    image: "https://cdn.jsdelivr.net/gh/Bayuu7/assets@main/game4.jpg",
    url: "https://example.com/games/spaceshooter",
  },
  {
    id: 5,
    title: "Jungle Dash",
    image: "https://cdn.jsdelivr.net/gh/Bayuu7/assets@main/game5.jpg",
    url: "https://example.com/games/jungledash",
  },
  {
    id: 6,
    title: "Tower Defense",
    image: "https://cdn.jsdelivr.net/gh/Bayuu7/assets@main/game6.jpg",
    url: "https://example.com/games/towerdefense",
  },
];

// ===============================
//  LEADERBOARD DATA
// ===============================
const leaderboardData = [
  { rank: 1, user: "PlayerX", score: 9420 },
  { rank: 2, user: "Neo", score: 8120 },
  { rank: 3, user: "Ghost", score: 7520 },
  { rank: 4, user: "Astra", score: 6890 },
  { rank: 5, user: "Nova", score: 6030 },
];

// ===============================
//  RENDER GAMES
// ===============================
function renderGames() {
  const grid = document.querySelector(".game-grid");
  grid.innerHTML = games
    .map(
      (g) => `
      <div class="game-card" onclick="openGame(${g.id})">
        <img src="${g.image}" alt="${g.title}" />
        <h4>${g.title}</h4>
      </div>
    `
    )
    .join("");
}

// ===============================
//  RENDER LEADERBOARD
// ===============================
function renderLeaderboard() {
  const lb = document.querySelector(".leaderboard-grid");
  lb.innerHTML = leaderboardData
    .map(
      (item) => `
    <div class="leaderboard-item">
      <span>#${item.rank} ${item.user}</span>
      <span>${item.score}</span>
    </div>`
    )
    .join("");
}

// ===============================
//  GAME MODAL HANDLING
// ===============================
const modal = document.getElementById("gameModal");
const gameFrame = document.getElementById("gameFrame");
const modalTitle = document.querySelector(".modal-title");
const modalThumb = document.querySelector(".modal-thumb");
const loadingOverlay = document.querySelector(".loading-overlay");

function openGame(id) {
  const game = games.find((g) => g.id === id);
  if (!game) return;

  modalTitle.textContent = game.title;
  modalThumb.src = game.image;
  gameFrame.src = ""; // reset dulu
  modal.style.display = "flex";

  loadingOverlay.style.display = "flex";
  setTimeout(() => {
    gameFrame.src = game.url;
    loadingOverlay.style.display = "none";
  }, 1000);
}

function closeModal() {
  modal.style.display = "none";
  gameFrame.src = "";
}

// BACK BUTTON (KEMBALI KE HALAMAN)
function goBack() {
  closeModal();
}

// FULLSCREEN TOGGLE
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    gameFrame.requestFullscreen().catch((err) => {
      console.warn("Fullscreen error:", err);
    });
  } else {
    document.exitFullscreen();
  }
}

// ===============================
//  TABS
// ===============================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    tabContents.forEach((c) =>
      c.classList.toggle("active", c.id === target)
    );
  });
});

// ===============================
//  THEME TOGGLE
// ===============================
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.innerHTML = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// ===============================
//  INIT
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  renderGames();
  renderLeaderboard();
});
