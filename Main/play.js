
const IFRAME_TIMEOUT = 6000; // 6 detik

document.addEventListener("DOMContentLoaded", () => {
  // Cek login
  if (!isLoggedIn()) {
    location.href = "index.html";
    return;
  }

  // Ambil slug dari URL
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const game = games.find(g => g.slug === slug);

  if (!game) {
    document.getElementById("playerTitle").textContent = "Game tidak ditemukan";
    document.getElementById("loading").innerHTML = "<p>Game tidak ditemukan.</p>";
    return;
  }

  // Update title & tombol buka tab baru
  document.title = game.name + " — Game Hub";
  document.getElementById("playerTitle").textContent = game.name;
  document.getElementById("openNewTab").href = game.url;
  document.getElementById("fallbackBtn").href = game.url;

  // Catat riwayat
  addHistory(slug);

  // Load game di iframe
  const frame = document.getElementById("gameFrame");
  const loading = document.getElementById("loading");
  const fallback = document.getElementById("fallback");

  let loaded = false;
  let fallbackShown = false;

  frame.src = game.url;

  // Tampilkan iframe setelah onload
  frame.addEventListener("load", () => {
    loaded = true;
    loading.classList.add("hidden");
    frame.classList.remove("hidden");
  });

  // Kalau 6 detik belum muncul, tampilkan fallback
  setTimeout(() => {
    if (!loaded && !fallbackShown) {
      fallbackShown = true;
      loading.classList.add("hidden");
      fallback.classList.remove("hidden");

      // Coba tetap tampilkan iframe di belakang (siapa tahu lambat)
      frame.classList.remove("hidden");
    }
  }, IFRAME_TIMEOUT);

  // Tombol kembali — pakai history API biar smooth
  document.getElementById("backBtn").addEventListener("click", e => {
    e.preventDefault();
    if (document.referrer && document.referrer.includes("index.html")) {
      history.back();
    } else {
      location.href = "index.html";
    }
  });
});
