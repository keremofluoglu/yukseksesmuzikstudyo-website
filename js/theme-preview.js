/*
 * TEMPORARY: color theme switcher for previewing palettes.
 * The choice is not saved; reloading the page returns to the default.
 * ?tema=gece, ?desen=lale, ?aralik=1..7, ?koyuluk=4..35 and ?serit=0..1100 in the address preset the controls.
 * To remove: delete this file, css/pattern-gaps.css, its <script> tag in index.html
 * and the "TEMPORARY theme preview" block at the end of css/style.css.
 *
 * Each theme is 3 colors: light background, dark (text and dark sections), accent.
 */
(function () {
  const THEMES = [
    { id: "klasik", name: "Klasik", scheme: "analog, sıcak kahve", light: "#f7f1e8", dark: "#2b1d14", accent: "#b08a4f" },
    { id: "gece", name: "Gece", scheme: "tamamlayıcı: lacivert + kehribar", light: "#f4f1ea", dark: "#1c2541", accent: "#e09f3e" },
    { id: "bordo", name: "Bordo", scheme: "analog: bordo + kiremit", light: "#f8efe9", dark: "#4a1420", accent: "#c96f53" },
    { id: "zeytin", name: "Zeytin", scheme: "tamamlayıcı: zeytin + bakır", light: "#f3f2ea", dark: "#2f3b2a", accent: "#c8763f" },
    { id: "okyanus", name: "Okyanus", scheme: "tamamlayıcı: petrol + mercan", light: "#eef5f4", dark: "#0f3b47", accent: "#e07a5f" },
    { id: "lavanta", name: "Lavanta", scheme: "tamamlayıcı: mor + altın", light: "#f5f2f8", dark: "#2e2347", accent: "#c9a227" },
    { id: "orman", name: "Orman Gülü", scheme: "tamamlayıcı: yeşil + gül", light: "#f1f4ee", dark: "#1f3d2b", accent: "#c8617a" },
    { id: "nane", name: "Nane", scheme: "ayrık tamamlayıcı: koyu yeşil + hardal", light: "#f0f7f4", dark: "#16423c", accent: "#e9b44c" },
    { id: "gunbatimi", name: "Gün Batımı", scheme: "analog: erik + turuncu", light: "#fdf3ec", dark: "#3d1f2b", accent: "#f2994a" },
    { id: "toprak", name: "Toprak", scheme: "analog: kahve + terrakota", light: "#f7efe6", dark: "#3b2a20", accent: "#c0582f" },
    { id: "deniz", name: "Deniz", scheme: "monokromatik mavi", light: "#eef3f9", dark: "#12355b", accent: "#4a90c2" },
    { id: "gulkurusu", name: "Gül Kurusu", scheme: "monokromatik gül", light: "#faf1f1", dark: "#3a2c2f", accent: "#b5838d" },
    { id: "kraliyet", name: "Kraliyet", scheme: "üçlü: çivit + kırmızı + krem", light: "#f3f4f9", dark: "#1b1f5e", accent: "#d64545" },
    { id: "komur", name: "Kömür", scheme: "akromatik + tek vurgu: sarı", light: "#f5f5f0", dark: "#232323", accent: "#d4a017" },
    { id: "sahil", name: "Sahil", scheme: "tamamlayıcı: deniz mavisi + kum", light: "#f6f4ee", dark: "#1d3c4f", accent: "#d9a066" },
    { id: "erik", name: "Erik", scheme: "ayrık tamamlayıcı: erik + yeşil", light: "#f7f2f5", dark: "#3c1a3f", accent: "#7fa36b" },
    { id: "akdeniz", name: "Akdeniz", scheme: "üçlü: mavi + kırmızı + sarı krem", light: "#f6f1e2", dark: "#1e4d6b", accent: "#d1495b" },
    { id: "bahar", name: "Bahar", scheme: "üçlü: mor + turuncu + yeşil", light: "#f2f7ea", dark: "#3d2c5e", accent: "#e8833a" },
    { id: "retro", name: "Retro", scheme: "üçlü: petrol + kızıl + sarı krem", light: "#fbf3e0", dark: "#234e52", accent: "#e4572e" },
    { id: "lavantatarla", name: "Lavanta Tarlası", scheme: "üçlü: mor + adaçayı + şeftali", light: "#fbf3ec", dark: "#2d2a4a", accent: "#8fae7f" },
    { id: "safran", name: "Safran", scheme: "üçlü: erik + safran + mavi beyaz", light: "#f1f5fa", dark: "#3b1f2b", accent: "#e6a700" },
    { id: "cini", name: "Çini", scheme: "tamamlayıcı: kobalt + turuncu", light: "#f2f6fb", dark: "#0b3d91", accent: "#e85d04" },
    { id: "caz", name: "Caz", scheme: "tamamlayıcı: gece mavisi + turuncu", light: "#f2efe9", dark: "#14213d", accent: "#fca311" },
    { id: "turkuaz", name: "Turkuaz", scheme: "tamamlayıcı: koyu turkuaz + somon", light: "#eff8f7", dark: "#123c3a", accent: "#ff8a5b" },
    { id: "neon", name: "Neon Gece", scheme: "tamamlayıcı: gece mavisi + pembe", light: "#eef0f7", dark: "#0d1321", accent: "#ef476f" },
    { id: "vintage", name: "Vintage", scheme: "ayrık tamamlayıcı: kahve + adaçayı", light: "#f4ecdc", dark: "#4a3b2a", accent: "#6b9080" },
    { id: "sarap", name: "Şarap & Altın", scheme: "analog: şarap + altın", light: "#f7f0ea", dark: "#5a0f24", accent: "#d4af37" },
    { id: "kayisi", name: "Kayısı", scheme: "analog: kahve + kayısı", light: "#fff4ea", dark: "#44302a", accent: "#f4a261" },
    { id: "fistik", name: "Fıstık", scheme: "analog: koyu yeşil + fıstık", light: "#f3f6ea", dark: "#2d3a1f", accent: "#9ab02e" },
    { id: "murdum", name: "Mürdüm", scheme: "monokromatik mürdüm", light: "#f6eef3", dark: "#4b1d3f", accent: "#c27ba0" },
    { id: "buz", name: "Buz", scheme: "monokromatik buz mavisi", light: "#f0f6fa", dark: "#1b2a38", accent: "#5fa8d3" },
    { id: "kiraz", name: "Kiraz", scheme: "akromatik + tek vurgu: kiraz", light: "#faf6f4", dark: "#2b1b1e", accent: "#c1121f" }
  ];

  const root = document.documentElement;

  const bar = document.createElement("div");
  bar.className = "theme-preview";
  bar.setAttribute("role", "group");
  bar.setAttribute("aria-label", "Renk teması");

  const label = document.createElement("div");
  label.className = "theme-preview-label";
  bar.append(label);

  function setTheme(id) {
    const theme = THEMES.find((t) => t.id === id) || THEMES[0];
    if (theme.id === "klasik") {
      root.removeAttribute("data-theme");
      ["--c-light", "--c-dark", "--c-accent"].forEach((p) => root.style.removeProperty(p));
    } else {
      root.dataset.theme = theme.id;
      root.style.setProperty("--c-light", theme.light);
      root.style.setProperty("--c-dark", theme.dark);
      root.style.setProperty("--c-accent", theme.accent);
    }

    label.textContent = "Tema: " + theme.name + " ";
    const scheme = document.createElement("small");
    scheme.textContent = "· " + theme.scheme;
    label.append(scheme);

    bar.querySelectorAll("button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.theme === theme.id));
    });
  }

  THEMES.forEach((theme) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.theme = theme.id;
    btn.title = theme.name;
    btn.setAttribute("aria-label", theme.name);
    btn.style.setProperty("--sw-light", theme.light);
    btn.style.setProperty("--sw-dark", theme.dark);
    btn.style.setProperty("--sw-accent", theme.accent);
    btn.addEventListener("click", () => setTheme(theme.id));
    bar.append(btn);
  });

  // Background pattern choice (?desen=<id>); tiles are in css/patterns.css
  const PATTERNS = [
    { id: "kilim", name: "Kilim Baklavası", group: "Türk Kilimi" },
    { id: "elibelinde", name: "Basamaklı Baklava", group: "Türk Kilimi" },
    { id: "kocboynuzu", name: "Koçboynuzu", group: "Türk Kilimi" },
    { id: "turkmen", name: "Türkmen Gülü", group: "Türk Kilimi" },
    { id: "muska", name: "Muska", group: "Türk Kilimi" },
    { id: "suyolu", name: "Su Yolu", group: "Türk Kilimi" },
    { id: "bereket", name: "Bereket Haçı", group: "Türk Kilimi" },
    { id: "cintemani", name: "Çintemani", group: "Osmanlı" },
    { id: "kaftan", name: "Kaftan Şebekesi", group: "Osmanlı" },
    { id: "yildiz", name: "Selçuklu Yıldızı", group: "Osmanlı" },
    { id: "rumi", name: "Rumi Kıvrımı", group: "Osmanlı" },
    { id: "lale", name: "İznik Lalesi", group: "İznik" },
    { id: "karanfil", name: "İznik Karanfili", group: "İznik" },
    { id: "rozet", name: "Hatayi Rozeti", group: "İznik" },
    { id: "saz", name: "Saz Yaprağı", group: "İznik" },
    { id: "bulut", name: "Çin Bulutu", group: "İznik" },
    { id: "meander", name: "Rum Meandırı", group: "Rum / Bizans" },
    { id: "halka", name: "Bizans Halkaları", group: "Rum / Bizans" },
    { id: "dalga", name: "Rum Dalgası", group: "Rum / Bizans" },
    { id: "mozaik", name: "Bizans Mozaiği", group: "Rum / Bizans" },
    { id: "nota", name: "Nota", group: "Müzik" },
    { id: "piyano", name: "Piyano Tuşları", group: "Müzik" },
    { id: "porte", name: "Porte ve Notalar", group: "Müzik" },
    { id: "solanahtari", name: "Sol Anahtarı", group: "Müzik" },
    { id: "plak", name: "Plak", group: "Müzik" },
    { id: "ekolayzer", name: "Ses Dalgası", group: "Müzik" },
    { id: "gitar", name: "Gitar", group: "Müzik" },
    { id: "mikrofon", name: "Mikrofon", group: "Müzik" },
    { id: "kulaklik", name: "Kulaklık", group: "Müzik" },
    { id: "notalar", name: "Karışık Notalar", group: "Müzik" },
    { id: "yok", name: "Desensiz", group: "Diğer" }
  ];

  const patternRow = document.createElement("label");
  patternRow.className = "theme-preview-patterns";
  patternRow.append("Desen:");
  const select = document.createElement("select");

  [...new Set(PATTERNS.map((p) => p.group))].forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group;
    PATTERNS.filter((p) => p.group === group).forEach((p) => {
      optgroup.append(new Option(p.name, p.id));
    });
    select.append(optgroup);
  });

  function setPattern(id) {
    const pattern = PATTERNS.find((p) => p.id === id) || PATTERNS[0];
    root.dataset.pattern = pattern.id;
    select.value = pattern.id;
  }

  select.addEventListener("change", () => setPattern(select.value));
  patternRow.append(select);

  // Pattern darkness (?koyuluk=5..35, percent of the dark color mixed in)
  const strengthRow = document.createElement("label");
  strengthRow.className = "theme-preview-patterns";
  const strengthValue = document.createElement("span");
  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = "4";
  slider.max = "35";

  function setStrength(value) {
    const v = Math.min(35, Math.max(4, Number(value) || 16));
    root.style.setProperty("--pattern-strength", v + "%");
    slider.value = v;
    strengthValue.textContent = "%" + v;
  }

  slider.addEventListener("input", () => setStrength(slider.value));
  strengthRow.append("Koyuluk:", slider, strengthValue);

  // Width of the plain band in the middle (?serit=0..1100, px)
  const bandRow = document.createElement("label");
  bandRow.className = "theme-preview-patterns";
  const bandValue = document.createElement("span");
  const bandSlider = document.createElement("input");
  bandSlider.type = "range";
  bandSlider.min = "0";
  bandSlider.max = "1100";
  bandSlider.step = "20";

  function setBand(value) {
    const v = value === null || value === "" || isNaN(value) ? 720 : Math.min(1100, Math.max(0, Number(value)));
    root.style.setProperty("--pattern-band", v + "px");
    bandSlider.value = v;
    bandValue.textContent = v ? v + "px" : "yok";
  }

  bandSlider.addEventListener("input", () => setBand(bandSlider.value));
  bandRow.append("Şerit:", bandSlider, bandValue);

  // Space between motifs (?aralik=1..7, 3 = default); variants are in css/pattern-gaps.css
  const gapsCss = document.createElement("link");
  gapsCss.rel = "stylesheet";
  gapsCss.href = "css/pattern-gaps.css";
  document.head.append(gapsCss);

  const GAP_LABELS = ["çok sık", "sık", "normal", "seyrek", "daha seyrek", "çok seyrek", "en seyrek"];
  const gapRow = document.createElement("label");
  gapRow.className = "theme-preview-patterns";
  const gapValue = document.createElement("span");
  const gapSlider = document.createElement("input");
  gapSlider.type = "range";
  gapSlider.min = "1";
  gapSlider.max = "7";

  function setGap(value) {
    const v = Math.min(7, Math.max(1, Math.round(Number(value)) || 3));
    if (v === 3) root.removeAttribute("data-gap");
    else root.dataset.gap = v;
    gapSlider.value = v;
    gapValue.textContent = GAP_LABELS[v - 1];
  }

  gapSlider.addEventListener("input", () => setGap(gapSlider.value));
  gapRow.append("Aralık:", gapSlider, gapValue);

  bar.append(patternRow, gapRow, strengthRow, bandRow);
  document.body.append(bar);
  const params = new URLSearchParams(location.search);
  setTheme(params.get("tema"));
  setPattern(params.get("desen"));
  setStrength(params.get("koyuluk"));
  setBand(params.get("serit"));
  setGap(params.get("aralik"));
})();
