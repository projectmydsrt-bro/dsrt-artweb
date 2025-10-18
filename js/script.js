// ==============================
// GAME DATA
// ==============================
const games = [
  {
    id: 1,
    title: "Galaxy Shooter",
    image: "https://i.ibb.co/4V6H4tS/galaxy.jpg",
    url: "https://html5.gamedistribution.com/xyz/shooter/index.html",
    category: "Action",
  },
  {
    id: 2,
    title: "Puzzle Quest",
    image: "https://i.ibb.co/mJ8MRkJ/puzzle.jpg",
    url: "https://html5.gamedistribution.com/xyz/puzzle/index.html",
    category: "Puzzle",
  },
  {
    id: 3,
    title: "Car Racing 3D",
    image: "https://i.ibb.co/vc2v9Lk/racing.jpg",
    url: "https://html5.gamedistribution.com/xyz/racing/index.html",
    category: "Racing",
  },
  {
    id: 4,
    title: "Chess Online",
    image: "https://i.ibb.co/7S5zT4C/chess.jpg",
    url: "https://html5.gamedistribution.com/xyz/chess/index.html",
    category: "Board",
  },
];

// ==============================
// DOM ELEMENTS
// ==============================
const grid = document.querySelector(".game-grid");
const searchInput = document.getElementById("search");
const tabs = document.querySelectorAll(".tab-btn");
const modal = document.getElementById("gameModal");
const modalFrame = document.getElementById("modalFrame");
const closeBtn = document.querySelector(".close");
const leaderboardContainer = document.querySelector(".leaderboard-grid");
const toggleBtn = document.getElementById("toggleMode");

// ==============================
// RENDER GAME CARDS
// ==============================
function renderGames(filter = "All", search = "") {
  grid.innerHTML = "";

  const filtered = games.filter(game => {
    const matchCategory = filter === "All" || game.category === filter;
    const matchSearch = game.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  filtered.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h4>${game.title}</h4>
    `;
    card.onclick = () => openModal(game);
    grid.appendChild(card);
  });
}

// ==============================
// SEARCH FUNCTIONALITY
// ==============================
searchInput.addEventListener("input", (e) => {
  renderGames(getActiveCategory(), e.target.value);
});

// ==============================
// CATEGORY TABS
// ==============================
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.textContent;
    renderGames(category);
  });
});

function getActiveCategory() {
  const active = document.querySelector(".tab-btn.active");
  return active ? active.textContent : "All";
}

// ==============================
// MODAL FUNCTION
// ==============================
function openModal(game) {
  modal.style.display = "flex";
  modalFrame.src = game.url;
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  modalFrame.src = "";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    modalFrame.src = "";
  }
};

// ==============================
// LEADERBOARD DUMMY DATA
// ==============================
const leaderboard = [
  { name: "Bayu", score: 920 },
  { name: "Dewi", score: 850 },
  { name: "Rian", score: 800 },
  { name: "Luna", score: 750 },
  { name: "Arka", score: 700 },
];

function renderLeaderboard() {
  leaderboardContainer.innerHTML = "";
  leaderboard.forEach((player, index) => {
    const div = document.createElement("div");
    div.classList.add("leaderboard-item");
    div.innerHTML = `<span>#${index + 1} ${player.name}</span><span>${player.score}</span>`;
    leaderboardContainer.appendChild(div);
  });
}

// ==============================
// DARK/LIGHT MODE TOGGLE
// ==============================
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    document.body.style.background = "linear-gradient(135deg, #f5f5f5, #ffffff)";
    document.body.style.color = "#222";
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    document.body.style.background = "linear-gradient(135deg, #12071d, #1b0930)";
    document.body.style.color = "#fff";
    toggleBtn.textContent = "☀️ Light Mode";
  }
});

// ==============================
// INIT APP
// ==============================
renderGames();
renderLeaderboard();

console.log("🚀 Game Portal Loaded Successfully!");
