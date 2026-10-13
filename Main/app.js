let currentCat = "All";
let currentQuery = "";
let authMode = "login"; // "login" atau "register"

/* =========================================================
   AUTH UI
   ========================================================= */
function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll(".auth-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.tab === mode);
  });
  document.getElementById("authBtn").textContent = mode === "login" ? "MASUK" : "DAFTAR";
  document.getElementById("err").textContent = "";
}

function handleAuth(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const err = document.getElementById("err");
  const card = document.querySelector(".gate-card");

  if (authMode === "register") {
    const r = registerUser(username, password);
    if (!r.ok) {
      err.textContent = r.msg;
      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 400);
      return;
    }
    // auto login setelah daftar
    setSession(username);
    openApp();
  } else {
    const r = loginUser(username, password);
    if (!r.ok) {
      err.textContent = r.msg;
      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 400);
      return;
    }
    setSession(username);
    openApp();
  }
}

/* =========================================================
   OPEN APP
   ========================================================= */
function openApp() {
  const u = currentUser();
  document.getElementById("brandName").textContent = "Game Hub";
  document.getElementById("userName").textContent = u;

  document.getElementById("gate").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  renderChips();
  renderHistory();
  render();
}

/* =========================================================
   CHIPS
   ========================================================= */
function renderChips() {
  const box = document.getElementById("chips");
  const total = games.length;

  const counts = {};
  CATEGORIES.forEach(c => counts[c] = games.filter(g => g.cat === c).length);

  const allChip = `
    <button class="chip ${currentCat === "All" ? "active" : ""}" data-cat="All">
      All <span class="cnt">${total}</span>
    </button>`;

  const catChips = CATEGORIES
    .filter(c => counts[c] > 0)
    .map(c => `
      <button class="chip ${currentCat === c ? "active" : ""}" data-cat="${c}">
        ${c} <span class="cnt">${counts[c]}</span>
      </button>`).join("");

  box.innerHTML = allChip + catChips;

  box.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      currentCat = chip.dataset.cat;
      renderChips();
      render();
    });
  });
}

/* =========================================================
   HISTORY
   ========================================================= */
function renderHistory() {
  const hist = getHistory();
  const section = document.getElementById("historySection");
  const grid = document.getElementById("historyGrid");

  if (hist.length === 0) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");
  grid.innerHTML = hist.map(h => {
    const g = games.find(x => x.slug === h.slug);
    if (!g) return "";
    return `
      <a class="history-card" href="play.html?slug=${encodeURIComponent(g.slug)}">
        <div class="history-thumb">
          <img src="${IMG_BASE}${g.slug}.webp" alt="" loading="lazy"
               onerror="this.style.display='none'">
        </div>
        <span>${escapeHtml(g.name)}</span>
      </a>`;
  }).join("");
}

/* =========================================================
   RENDER GRID
   ========================================================= */
function render() {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const count = document.getElementById("count");

  const q = currentQuery.toLowerCase().trim();

  const list = games.filter(g => {
    const matchCat = currentCat === "All" || g.cat === currentCat;
    const matchQ = !q ||
      g.name.toLowerCase().includes(q) ||
      g.url.toLowerCase().includes(q) ||
      g.cat.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const parts = [];
  if (currentCat !== "All") parts.push(`kategori: ${currentCat}`);
  if (q) parts.push(`pencarian: "${currentQuery}"`);
  count.textContent = parts.length
    ? `${list.length} hasil (${parts.join(" • ")})`
    : `${games.length} game tersedia`;

  if (list.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  grid.innerHTML = list.map(g => {
    const img = `${IMG_BASE}${g.slug}.webp`;
    const initial = g.name.trim().charAt(0).toUpperCase();
    return `
      <a class="card" href="play.html?slug=${encodeURIComponent(g.slug)}">
        <div class="card-thumb">
          <div class="card-cat" data-cat="${g.cat}">${g.cat}</div>
          <div class="initial">${initial}</div>
          <img src="${img}" alt="" loading="lazy" referrerpolicy="no-referrer"
               onload="this.classList.add('loaded')"
               onerror="this.remove()">
        </div>
        <div class="card-body">
          <div class="card-title">${escapeHtml(g.name)}</div>
        </div>
      </a>
    `;
  }).join("");
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Auth tabs
  document.querySelectorAll(".auth-tab").forEach(tab => {
    tab.addEventListener("click", () => setAuthMode(tab.dataset.tab));
  });

  // Auth form
  document.getElementById("authForm").addEventListener("submit", handleAuth);

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", logout);

  // Clear history
  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Hapus semua riwayat permainan?")) {
      clearHistory();
      renderHistory();
    }
  });

  // Search
  let timer;
  document.getElementById("search").addEventListener("input", e => {
    currentQuery = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(render, 80);
  });

  document.getElementById("totalFoot").textContent = games.length;

  // Auto login
  if (isLoggedIn()) {
    touchSession();
    openApp();
  }
});
