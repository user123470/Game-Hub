/* =========================================================
   KONFIGURASI
   ========================================================= */
const PASSWORD = "Skibidi123XD";
const IMG_BASE = "https://radiantoptimizer.app/product/games/";
const LS_AUTH = "gh_auth";
const LS_HISTORY = "gh_history";
const IDLE_MS = 1000 * 60 * 5;

const CATEGORIES = [
  "Shooter", "Action", "Retro", "Sandbox", "RPG",
  "Strategy", "Puzzle", "Casual", "Horror",
  "Racing", "Sports", "Adventure"
];

/* =========================================================
   DAFTAR GAME
   ========================================================= */
const games = [
  { name: "Quake", slug: "quake", url: "https://q1.pieter.com/", cat: "Shooter" },
  { name: "CS Surf", slug: "cs-surf", url: "https://surfd.net/", cat: "Shooter" },
  { name: "Black Ops Zombies", slug: "bo1-zombies", url: "https://vel.gg/bo1z", cat: "Shooter" },
  { name: "Halo: Combat Evolved", slug: "halo-ce", url: "https://mitchellhynes.com/halo", cat: "Shooter" },
  { name: "Skate 3", slug: "skate-3", url: "https://skate.aaddpp.lol/", cat: "Sports" },
  { name: "Diablo", slug: "diablo", url: "https://johnimril.github.io/diablo_web/", cat: "RPG" },
  { name: "Moon Zombies", slug: "moon-zombies", url: "https://radiantoptimizer.app/en/games/moon-zombies", cat: "Shooter" },
  { name: "Kino der Toten", slug: "kino-der-toten", url: "https://theeagler1234-alt.github.io/kino-der-toten/", cat: "Shooter" },
  { name: "Cheese Cube", slug: "cheese-cube", url: "https://radiantoptimizer.app/en/games/cheese-cube", cat: "Casual" },
  { name: "Claude of Duty: Vibe Slops II", slug: "black-ops-2", url: "https://playops.netlify.app/", cat: "Shooter" },
  { name: "Skate Rust", slug: "skate-rust", url: "https://global-terror-skate-rust.fvc3less.workers.dev/full.html", cat: "Sports" },
  { name: "Halo CE Mobile", slug: "halo-mobile", url: "https://hcemobile.com/", cat: "Shooter" },
  { name: "PES 6", slug: "pes-6", url: "https://pes6.optijuegos.net/", cat: "Sports" },
  { name: "GTA: Vice City Project", slug: "vice-city", url: "https://joncodeofficial.github.io/gta-vice-city-wasm/", cat: "Action" },
  { name: "The Simpsons: Hit & Run", slug: "simpsons-hit-and-run", url: "https://shar-wasm.cjoseph.workers.dev/?skipmovie", cat: "Action" },
  { name: "Quake II", slug: "quake-2", url: "https://q2.pieter.com/", cat: "Shooter" },
  { name: "Quake III", slug: "quake-3", url: "https://q3.pieter.com/", cat: "Shooter" },
  { name: "Return to Castle Wolfenstein", slug: "wolfenstein", url: "https://rtcw.pieter.com/", cat: "Shooter" },
  { name: "Urban Terror", slug: "urban-terror", url: "https://ut.pieter.com/", cat: "Shooter" },
  { name: "Half-Life Web", slug: "half-life", url: "https://pixelsuft.github.io/hl/", cat: "Shooter" },
  { name: "Half-Life / CS 1.6", slug: "webxash", url: "https://x8bitrain.github.io/webXash/", cat: "Shooter" },
  { name: "TuffyMon", slug: "tuffymon", url: "https://tuffymon.app/", cat: "RPG" },
  { name: "PokéSurvivor", slug: "pokesurvivor", url: "https://pokesurvivor.com/", cat: "Action" },
  { name: "DELTARUNE Fight Simulator", slug: "deltarune-fight-simulator", url: "https://deltarunesim.com/", cat: "RPG" },
  { name: "Web Dashers", slug: "web-dashers", url: "https://web-dashers.github.io/", cat: "Action" },
  { name: "Songspot", slug: "songspot", url: "https://songspot.net/", cat: "Casual" },
  { name: "Fermi", slug: "fermi", url: "https://fermi.gg/", cat: "Casual" },
  { name: "Swervle", slug: "swervle", url: "https://swervle.com/", cat: "Casual" },
  { name: "All 22 Pokémon", slug: "all-22-pokemon", url: "https://all22pokemon.com/", cat: "Casual" },
  { name: "Lagos Life", slug: "lagos-life", url: "https://lagoslife.com.ng/play/", cat: "Action" },
  { name: "Chainle", slug: "chainle", url: "https://chainle.io/", cat: "Puzzle" },
  { name: "Checkers: Cardgames.io", slug: "checkers-cardgames", url: "https://cardgames.io/checkers/", cat: "Puzzle" },
  { name: "Hearts: Cardgames.io", slug: "hearts-cardgames", url: "https://cardgames.io/hearts/", cat: "Puzzle" },
  { name: "Jigsaw Planet", slug: "jigsaw-planet", url: "https://www.jigsawplanet.com/", cat: "Puzzle" },
  { name: "I Can Smell You from Here", slug: "i-can-smell-you-from-here", url: "https://catproblem9735.itch.io/i-can-smell-you-from-here", cat: "Horror" },
  { name: "Krillion", slug: "krillion", url: "https://krillion.io/", cat: "Casual" },
  { name: "Poople", slug: "poople", url: "https://poople.io/", cat: "Casual" },
  { name: "Songless", slug: "songless", url: "https://lessgames.com/songless", cat: "Puzzle" },
  { name: "RNGdle", slug: "rngdle", url: "https://www.rngdle.com/", cat: "Puzzle" },
  { name: "Dragonkind", slug: "dragonkind", url: "https://dragonkind.com/", cat: "Casual" },
  { name: "NoomiClone: Browser Prototype", slug: "noomiclone", url: "https://jamesnorth.itch.io/noomiclone", cat: "Casual" },
  { name: "Krunker.io", slug: "krunker", url: "https://krunker.io/", cat: "Shooter" },
  { name: "Connections: NYT", slug: "connections", url: "https://www.nytimes.com/games/connections", cat: "Puzzle" },
  { name: "AI Dungeon", slug: "ai-dungeon", url: "https://play.aidungeon.com/", cat: "RPG" },
  { name: "wosu! Community Browser Client", slug: "wosu", url: "https://wosu.dino.icu/", cat: "Casual" },
  { name: "OpenFront.io", slug: "openfront", url: "https://openfront.io/", cat: "Strategy" },
  { name: "MapTap.gg", slug: "maptap", url: "https://maptap.gg/home", cat: "Puzzle" },
  { name: "DEADSHOT.io", slug: "deadshot", url: "https://deadshot.io/", cat: "Shooter" },
  { name: "enclose.horse", slug: "enclose-horse", url: "https://enclose.horse/", cat: "Puzzle" },
  { name: "Magnitudle", slug: "magnitudle", url: "https://magnitudle.com/", cat: "Puzzle" },
  { name: "Costcodle", slug: "costcodle", url: "https://costcodle.com/", cat: "Puzzle" },
  { name: "TypeRacer", slug: "typeracer", url: "https://play.typeracer.com/", cat: "Casual" },
  { name: "ZType", slug: "ztype", url: "https://zty.pe/", cat: "Casual" },
  { name: "GTA V", slug: "gta-v", url: "https://web.archive.org/web/20261006055917/https://playgta5.com/", cat: "Action" },
  { name: "GTA V (Alternative)", slug: "gta-v-alt", url: "https://gta.deloskiyt.pl", cat: "Action" },
  { name: "Counter-Strike 1.6", slug: "counter-strike", url: "https://combatskirmish.net/quickjoin", cat: "Shooter" },
  { name: "Pokémon Redstone", slug: "pokemon-redstone", url: "https://pokemon-redstone.pages.dev/", cat: "RPG" },
  { name: "Taipei Rush", slug: "taipei-rush", url: "https://www.taipei-rush.app/", cat: "Racing" },
  { name: "Nacht der Untoten", slug: "nacht-der-untoten", url: "https://zombies.bitcoinsapi.com/", cat: "Shooter" },
  { name: "GTA III", slug: "gta-3", url: "https://wasmarcade.com/gta3", cat: "Action" },
  { name: "Fortnite OG", slug: "fortnite-og", url: "https://fortniteog.lol/", cat: "Shooter" },
  { name: "Tweetcraft", slug: "tweetcraft", url: "https://tweetcraft.jai.vin/", cat: "Sandbox" },
  { name: "Super Mario Zombies", slug: "super-mario-zombies", url: "https://smz.fun/", cat: "Action" },
  { name: "DOOM II Multiplayer", slug: "doom-2-multiplayer", url: "https://doom.pieter.com/", cat: "Shooter" },
  { name: "Modern Warfare 2", slug: "modern-warfare-2", url: "https://ovz-game-production.up.railway.app/", cat: "Shooter" },
  { name: "Minecraft 1.8.8", slug: "minecraft", url: "https://wasmarcade.com/minecraft", cat: "Sandbox" },
  { name: "Crash Bash Online", slug: "crash-bash", url: "https://crashbash.app/", cat: "Action" },
  { name: "RuneScape Classic", slug: "runescape-classic", url: "https://runescapeclassic.gold/", cat: "RPG" },
  { name: "Cuphead", slug: "cuphead", url: "https://wasm.rip/files/cuphead/index.html", cat: "Action" },
  { name: "Stardew Valley", slug: "stardew-valley", url: "https://wasm.rip/files/stardewvalley/index.html", cat: "RPG" },
  { name: "Among Us", slug: "among-us", url: "https://wasm.rip/files/amongus/index.html", cat: "Casual" },
  { name: "Lethal Company", slug: "lethal-company", url: "https://wasm.rip/files/lethal/index.html", cat: "Horror" },
  { name: "PEAK", slug: "peak", url: "https://wasm.rip/files/peak/PEAK.html", cat: "Adventure" },
  { name: "RimWorld", slug: "rimworld", url: "https://wasm.rip/files/rimworld/index.html", cat: "Strategy" },
  { name: "Inscryption", slug: "inscryption", url: "https://wasm.rip/files/inscryption/index.html", cat: "Puzzle" },
  { name: "Bendy and the Ink Machine", slug: "bendy", url: "https://wasm.rip/files/BATIM/index.html", cat: "Horror" },
  { name: "MiSide", slug: "miside", url: "https://wasm.rip/files/miside/miside.html", cat: "Horror" },
  { name: "OneShot: World Machine Edition", slug: "oneshot", url: "https://wasm.rip/files/oneshot-wme/index.html", cat: "Puzzle" },
  { name: "Helltaker", slug: "helltaker", url: "https://wasm.rip/files/Helltaker/helltaker.html", cat: "Puzzle" },
  { name: "FEZ", slug: "fez", url: "https://wasm.rip/files/FEZ/fez.html", cat: "Puzzle" },
  { name: "Brotato Paws n' Claws", slug: "brotato", url: "https://wasm.rip/files/bpac/index.html", cat: "Action" },
  { name: "Ravenfield", slug: "ravenfield", url: "https://wasm.rip/files/ravenfield/index.html", cat: "Shooter" },
  { name: "Clustertruck", slug: "clustertruck", url: "https://wasm.rip/files/ClusterTruck/clustertruck.html", cat: "Action" },
  { name: "Plague Inc", slug: "plague-inc", url: "https://wasm.rip/files/plauge/index.html", cat: "Strategy" },
  { name: "Lobotomy Corporation", slug: "lobotomy-corporation", url: "https://wasm.rip/files/lob-corp/index.html", cat: "Strategy" },
  { name: "Trombone Champ", slug: "trombone-champ", url: "https://wasm.rip/files/tchamp/index.html", cat: "Casual" },
  { name: "Granny 3", slug: "granny-3", url: "https://wasm.rip/files/granny/granny3.html", cat: "Horror" },
  { name: "How to Fish", slug: "how-to-fish", url: "https://wasm.rip/files/HowToFish/HowToFish.html", cat: "Casual" },
  { name: "SCP: Containment Breach", slug: "scp-containment-breach", url: "https://wasm.rip/files/scp/index.html", cat: "Horror" },
  { name: "Baldi's Basics Birthday Bash", slug: "baldis-birthday-bash", url: "https://wasm.rip/files/birthdaybash/index.html", cat: "Horror" },
  { name: "Boil Noodles at Night", slug: "boil-noodles-at-night", url: "https://wasm.rip/files/boilnoodles/index.html", cat: "Horror" },
  { name: "Cheese Rolling", slug: "cheese-rolling", url: "https://wasm.rip/files/cheese-rolling/index.html", cat: "Casual" },
  { name: "Dice A Million", slug: "dice-a-million", url: "https://wasm.rip/files/diceAmillion/diceamillion.html", cat: "Casual" },
  { name: "The Man From The Window 2", slug: "man-from-the-window-2", url: "https://wasm.rip/files/MFDW2/index.html", cat: "Horror" },
  { name: "Beatblock", slug: "beatblock", url: "https://wasm.rip/files/beatblock/index.html", cat: "Casual" },
  { name: "Happy Room", slug: "happy-room", url: "https://wasm.rip/files/happy-room/index.html", cat: "Casual" },
  { name: "Ages of Conflict", slug: "ages-of-conflict", url: "https://wasm.rip/files/aoc/index.html", cat: "Strategy" },
  { name: "while True: learn()", slug: "while-true-learn", url: "https://wasm.rip/files/wtl/index.html", cat: "Puzzle" },
  { name: "Crashout Crew", slug: "crashout-crew", url: "https://wasm.rip/files/cc/index.html", cat: "Action" },
  { name: "The Message From Deep Space", slug: "message-from-deep-space", url: "https://wasm.rip/files/TMFDS/index.html", cat: "Puzzle" },
  { name: "Dude, Stop", slug: "dude-stop", url: "https://wasm.rip/files/dudestop/index.html", cat: "Puzzle" },
  { name: "Hill Climb Racing", slug: "hill-climb-racing", url: "https://wasm.rip/files/hcr/index.html", cat: "Racing" },
  { name: "Toasterball", slug: "toasterball", url: "https://wasm.rip/files/toasterball/index.html", cat: "Sports" },
  { name: "Flash Games (878)", slug: "flash-games", url: "https://wasmarcade.com/flash-games", cat: "Retro" },
  { name: "Arcade Classics (227)", slug: "arcade-classics", url: "https://wasmarcade.com/retro-games", cat: "Retro" },
  { name: "Toss Office", slug: "toss-office", url: "https://ravenous-den.itch.io/toss-office", cat: "Casual" },
  { name: "The Margot Collapse", slug: "the-margot-collapse", url: "https://funday-games.itch.io/the-margot-collapse", cat: "Adventure" },
  { name: "The Binding of Isaac: Repentance+", slug: "binding-of-isaac", url: "https://tboi.online/", cat: "Action" },
  { name: "Sort the Court!", slug: "sort-the-court", url: "https://graebor.itch.io/sort-the-court", cat: "Casual" },
  { name: "Six Cats Under", slug: "six-cats-under", url: "https://teambeanloop.itch.io/six-cats-under", cat: "Puzzle" },
  { name: "We Become What We Behold", slug: "we-become-what-we-behold", url: "https://ncase.itch.io/wbwwb", cat: "Casual" },
  { name: "last seen online", slug: "last-seen-online", url: "https://qwook.itch.io/last-seen-online", cat: "Horror" },
  { name: "Friday Night Funkin'", slug: "friday-night-funkin", url: "https://ninja-muffin24.itch.io/funkin", cat: "Casual" },
  { name: "The Evolution of Trust", slug: "evolution-of-trust", url: "https://ncase.me/trust/", cat: "Casual" },
  { name: "2048", slug: "2048", url: "https://play2048.co/", cat: "Puzzle" },
  { name: "Cookie Clicker", slug: "cookie-clicker", url: "https://orteil.dashnet.org/cookieclicker/", cat: "Casual" },
  { name: "Little Alchemy 2", slug: "little-alchemy-2", url: "https://littlealchemy2.com/", cat: "Puzzle" },
  { name: "A Dark Room", slug: "a-dark-room", url: "https://adarkroom.doublespeakgames.com/", cat: "RPG" },
  { name: "Unusual Suspects", slug: "unusual-suspects", url: "https://neal.fun/unusual-suspects/", cat: "Puzzle" },
  { name: "Infinite Craft", slug: "infinite-craft", url: "https://neal.fun/infinite-craft/", cat: "Casual" },
  { name: "The Password Game", slug: "password-game", url: "https://neal.fun/password-game/", cat: "Puzzle" },
  { name: "Stimulation Clicker", slug: "stimulation-clicker", url: "https://neal.fun/stimulation-clicker/", cat: "Casual" },
  { name: "I'm Not a Robot", slug: "not-a-robot", url: "https://neal.fun/not-a-robot/", cat: "Puzzle" },
  { name: "Slow Roads", slug: "slow-roads", url: "https://slowroads.io/", cat: "Racing" },
  { name: "LEGO Island", slug: "lego-island", url: "https://isle.pizza/", cat: "Adventure" },
  { name: "Minecraft Classic", slug: "minecraft-classic", url: "https://classic.minecraft.net/", cat: "Sandbox" },
  { name: "Redcoats.io", slug: "redcoats", url: "https://redcoats.io/app/", cat: "Shooter" },
  { name: "Salty Seas", slug: "salty-seas", url: "https://saltyseas.io/app/", cat: "Shooter" },
  { name: "Park Baron", slug: "park-baron", url: "https://parkbaron.com/play", cat: "Casual" },
  { name: "SandStorm", slug: "sandstorm", url: "https://sandstorm.ink/play.html", cat: "Action" },
  { name: "Seedbed", slug: "seedbed", url: "https://playseedbed.com/", cat: "Casual" },
  { name: "DOOM", slug: "doom", url: "https://dos.zone/doom-dec-1993/", cat: "Retro" },
  { name: "DOOM II", slug: "doom-2", url: "https://dos.zone/doom-ii-oct-10-1994/", cat: "Retro" },
  { name: "Wolfenstein 3D", slug: "wolfenstein-3d", url: "https://dos.zone/wolfenstein-3d-may-05-1992/", cat: "Retro" },
  { name: "Duke Nukem 3D", slug: "duke-nukem-3d", url: "https://dos.zone/duke-nukem-3d-1996/", cat: "Retro" },
  { name: "Blood", slug: "blood", url: "https://dos.zone/blood-may-31-1997/", cat: "Retro" },
  { name: "OpenTTD", slug: "openttd", url: "https://dos.zone/open-ttd/", cat: "Strategy" },
  { name: "Dune II: Open Dune", slug: "dune-2", url: "https://dos.zone/dune-ii-the-building-of-a-dynasty-dec-1992/", cat: "Strategy" },
  { name: "Command & Conquer", slug: "command-and-conquer", url: "https://dos.zone/command-conquer-sep-26-1995/", cat: "Strategy" },
  { name: "Prince of Persia", slug: "prince-of-persia", url: "https://dos.zone/prince-of-persia-1990/", cat: "Retro" },
  { name: "3D Pinball: Space Cadet", slug: "space-cadet-pinball", url: "https://dos.zone/microsoft-3d-pinball-space-cadet/", cat: "Retro" },
  { name: "The Need for Speed", slug: "need-for-speed", url: "https://dos.zone/the-need-for-speed-sep-1995/", cat: "Retro" },
  { name: "Heroes of Might and Magic II", slug: "heroes-2", url: "https://dos.zone/heroes-of-might-and-magic-ii/", cat: "Strategy" },
  { name: "SimCity 2000", slug: "simcity-2000", url: "https://dos.zone/sim-city-2000-1993/", cat: "Strategy" }
];

/* =========================================================
   HELPERS
   ========================================================= */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function isAuthed() {
  try {
    const raw = localStorage.getItem(LS_AUTH);
    if (!raw) return false;
    const s = JSON.parse(raw);
    if (!s.t) return false;
    if (Date.now() - s.t > IDLE_MS) {
      localStorage.removeItem(LS_AUTH);
      return false;
    }
    return true;
  } catch { return false; }
}

function touchAuth() {
  localStorage.setItem(LS_AUTH, JSON.stringify({ t: Date.now() }));
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY) || "[]"); }
  catch { return []; }
}

function addHistory(slug) {
  const g = games.find(x => x.slug === slug);
  if (!g) return;
  let h = getHistory().filter(x => x.slug !== slug);
  h.unshift({ slug, name: g.name, cat: g.cat });
  h = h.slice(0, 20);
  localStorage.setItem(LS_HISTORY, JSON.stringify(h));
}

const isPlayerPage = document.body.classList.contains("player-body");

/* =========================================================
   HALAMAN INDEX
   ========================================================= */
if (!isPlayerPage) {
  let currentCat = "All";
  let currentQuery = "";

  function openApp() {
    document.getElementById("gate").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    renderChips();
    renderHistory();
    renderGrid();
  }

  function showVerifikasi() {
    const overlay = document.getElementById("verifikasiOverlay");
    overlay.classList.remove("hidden");
    // Sembunyikan lagi setelah 2 detik
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 2000);
  }

  function tryGate() {
    const input = document.getElementById("gatePw").value;
    const err = document.getElementById("gateErr");
    const card = document.querySelector("#gate .gate-card");

    if (!input) { err.textContent = "Password tidak boleh kosong."; return; }

    if (input === PASSWORD) {
      touchAuth();
      openApp();
    } else {
      err.textContent = "Password salah. Coba lagi.";
      document.getElementById("gatePw").value = "";
      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 400);
      // ✅ Tampilkan gambar verifikasi
      showVerifikasi();
    }
  }

  function renderChips() {
    const box = document.getElementById("chips");
    const total = games.length;
    const counts = {};
    CATEGORIES.forEach(c => counts[c] = games.filter(g => g.cat === c).length);

    let html = `<button class="chip ${currentCat === "All" ? "active" : ""}" data-cat="All">All <span class="cnt">${total}</span></button>`;

    CATEGORIES.forEach(c => {
      if (counts[c] > 0) {
        html += `<button class="chip ${currentCat === c ? "active" : ""}" data-cat="${c}">${c} <span class="cnt">${counts[c]}</span></button>`;
      }
    });

    box.innerHTML = html;
    box.querySelectorAll(".chip").forEach(chip => {
      chip.onclick = () => {
        currentCat = chip.dataset.cat;
        renderChips();
        renderGrid();
      };
    });
  }

  function renderHistory() {
    const hist = getHistory();
    const section = document.getElementById("historySection");
    const grid = document.getElementById("historyGrid");

    if (hist.length === 0) { section.classList.add("hidden"); return; }
    section.classList.remove("hidden");

    grid.innerHTML = hist.map(h => {
      const g = games.find(x => x.slug === h.slug);
      if (!g) return "";
      return `<a class="history-card" href="play.html?slug=${encodeURIComponent(g.slug)}">
        <div class="history-thumb">
          <img src="${IMG_BASE}${g.slug}.webp" alt="" loading="lazy" onerror="this.style.display='none'">
        </div>
        <span>${escapeHtml(g.name)}</span>
      </a>`;
    }).join("");
  }

  function renderGrid() {
    const grid = document.getElementById("grid");
    const empty = document.getElementById("empty");
    const count = document.getElementById("count");
    const q = currentQuery.toLowerCase().trim();

    const list = games.filter(g => {
      const mc = currentCat === "All" || g.cat === currentCat;
      const mq = !q || g.name.toLowerCase().includes(q) || g.url.toLowerCase().includes(q) || g.cat.toLowerCase().includes(q);
      return mc && mq;
    });

    count.textContent = q || currentCat !== "All"
      ? `${list.length} hasil dari ${games.length} game`
      : `${games.length} game tersedia`;

    if (list.length === 0) {
      grid.innerHTML = "";
      empty.classList.remove("hidden");
      return;
    }
    empty.classList.add("hidden");

    grid.innerHTML = list.map(g => {
      const init = g.name.trim().charAt(0).toUpperCase();
      return `<a class="card" href="play.html?slug=${encodeURIComponent(g.slug)}">
        <div class="card-thumb">
          <div class="card-cat" data-cat="${g.cat}">${g.cat}</div>
          <div class="initial">${init}</div>
          <img src="${IMG_BASE}${g.slug}.webp" alt="" loading="lazy" referrerpolicy="no-referrer"
               onload="this.classList.add('loaded')" onerror="this.remove()">
        </div>
        <div class="card-body">
          <div class="card-title">${escapeHtml(g.name)}</div>
        </div>
      </a>`;
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gateBtn").onclick = tryGate;
    document.getElementById("gatePw").addEventListener("keydown", e => {
      if (e.key === "Enter") tryGate();
    });

    document.getElementById("clearHistoryBtn").onclick = () => {
      if (confirm("Hapus semua riwayat?")) {
        localStorage.removeItem(LS_HISTORY);
        renderHistory();
      }
    };

    let timer;
    document.getElementById("search").addEventListener("input", e => {
      currentQuery = e.target.value;
      clearTimeout(timer);
      timer = setTimeout(renderGrid, 80);
    });

    document.getElementById("totalFoot").textContent = games.length;

    if (isAuthed()) {
      touchAuth();
      openApp();
    }

    ["click", "keydown", "touchstart"].forEach(evt => {
      document.addEventListener(evt, () => { if (isAuthed()) touchAuth(); }, { passive: true });
    });
  });
}

/* =========================================================
   HALAMAN PLAYER
   ========================================================= */
if (isPlayerPage) {
  document.addEventListener("DOMContentLoaded", () => {
    if (!isAuthed()) {
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
      }
    }, 6000);

    document.getElementById("backBtn").addEventListener("click", e => {
      e.preventDefault();
      location.href = "index.html";
    });
  });
   }
