const GATE_PASSWORD = "Skibidi123XD";

let currentCat = "All";
let currentQuery = "";

/* =========================================================
   GATE
   ========================================================= */
function tryGate() {
  const input = document.getElementById("gatePw").value;
  const err = document.getElementById("gateErr");
  const card = document.querySelector("#gate .gate-card");

  if (!input) {
    err.textContent = "Password tidak boleh kosong.";
    return;
  }

  if (input === GATE_PASSWORD) {
    setAuthOK();
    openApp();
  } else {
    err.textContent = "Password salah. Coba lagi.";
    document.getElementById("gatePw").value = "";
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 400);
  }
}

/* =========================================================
   OPEN APP
   ========================================================= */
function openApp() {
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
  document.getElementById("gateBtn").addEventListener("click", tryGate);
  document.getElementById("gatePw").addEventListener("keydown", e => {
    if (e.key === "Enter") tryGate();
  });

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Hapus semua riwayat permainan?")) {
      clearHistory();
      renderHistory();
    }
  });

  let timer;
  document.getElementById("search").addEventListener("input", e => {
    currentQuery = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(render, 80);
  });

  document.getElementById("totalFoot").textContent = games.length;

  // Auto-login kalau masih dalam 5 menit idle
  if (isAuthenticated()) {
    touchAuth();
    openApp();
  }
});
