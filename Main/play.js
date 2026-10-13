const IFRAME_TIMEOUT = 6000;

document.addEventListener("DOMContentLoaded", () => {
  // Kalau belum login gate, balik ke index
  if (!isAuthenticated()) {
    location.href = "index.html";
    return;
  }

  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const game = games.find(g => g.slug === slug);

  if (!game) {
    document.getElementById("playerTitle").textContent = "Game tidak ditemukan";
    document.getElementById("loading").innerHTML = "<p>Game tidak ditemukan.</p>";
    return;
  }

  document.title = game.name + " — Game Hub";
  document.getElementById("playerTitle").textContent = game.name;
  document.getElementById("openNewTab").href = game.url;
  document.getElementById("fallbackBtn").href = game.url;

  addHistory(slug);

  const frame = document.getElementById("gameFrame");
  const loading = document.getElementById("loading");
  const fallback = document.getElementById("fallback");

  let loaded = false;
  let fallbackShown = false;

  frame.src = game.url;

  frame.addEventListener("load", () => {
    loaded = true;
    loading.classList.add("hidden");
    frame.classList.remove("hidden");
  });

  setTimeout(() => {
    if (!loaded && !fallbackShown) {
      fallbackShown = true;
      loading.classList.add("hidden");
      fallback.classList.remove("hidden");
      frame.classList.remove("hidden");
    }
  }, IFRAME_TIMEOUT);

  document.getElementById("backBtn").addEventListener("click", e => {
    e.preventDefault();
    if (document.referrer && document.referrer.includes("index.html")) {
      history.back();
    } else {
      location.href = "index.html";
    }
  });
});
