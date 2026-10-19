/*
 * TEMPORARY: color theme switcher for previewing palettes.
 * The choice is not saved; reloading the page returns to the default.
 * ?tema=gece (or any id below) in the address opens a theme directly.
 * To remove: delete this file, its <script> tag in index.html and the
 * "TEMPORARY theme preview" block at the end of css/style.css.
 *
 * Each theme is 3 colors: light background, dark (text and dark sections), accent.
 * Also previews text color (light mode only) and text/heading sizes.
 */
(function () {
  const THEMES = [
    { id: "klasik", name: "Klasik", scheme: "analog, sıcak kahve", light: "#f7f1e8", dark: "#2b1d14", accent: "#b08a4f" },
    { id: "murekkep", name: "Kağıt & Mürekkep", scheme: "siyah-beyaz, sıcak beyaz + altın", light: "#f5f3ee", dark: "#1a1a1a", accent: "#a8874f" },
    { id: "komurgri", name: "Kırık Beyaz & Kömür", scheme: "siyah-beyaz, gri vurgu", light: "#f6f6f4", dark: "#1c1c1c", accent: "#7a7a7a" },
    { id: "piyanokey", name: "Piyano", scheme: "siyah-beyaz + kırmızı vurgu", light: "#f8f7f4", dark: "#161616", accent: "#a3242a" },
    { id: "gumus", name: "Gümüş", scheme: "siyah-beyaz, soğuk gri", light: "#f2f3f5", dark: "#1b1d20", accent: "#8c96a1" },
    { id: "fildisi", name: "Fildişi & Antrasit", scheme: "siyah-beyaz, fildişi + koyu gri", light: "#faf8f1", dark: "#262626", accent: "#555555" },
    { id: "kontrast", name: "Yüksek Kontrast", scheme: "siyaha ve beyaza en yakın", light: "#fafafa", dark: "#121212", accent: "#3c3c3c" },
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

    bar.querySelectorAll("button[data-theme]").forEach((btn) => {
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

  // Text color (light mode only) and text sizes
  function row(labelText) {
    const r = document.createElement("div");
    r.className = "theme-preview-row";
    r.append(labelText);
    bar.append(r);
    return r;
  }

  const colorRow = row("Yazı rengi:");
  const TEXT_COLORS = ["#121212", "#1f1f1f", "#2e2e2e", "#404040", "#2b1d14", "#1c2433"];

  function setTextColor(color) {
    if (color) {
      root.style.setProperty("--text-pick", color);
      root.style.setProperty("--text-pick-soft", "color-mix(in srgb, " + color + " 80%, var(--cream))");
    } else {
      root.style.removeProperty("--text-pick");
      root.style.removeProperty("--text-pick-soft");
    }
    colorRow.querySelectorAll(".text-swatch").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.color === color));
    });
  }

  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "text-reset";
  reset.textContent = "Tema";
  reset.addEventListener("click", () => setTextColor(null));
  colorRow.append(reset);

  TEXT_COLORS.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "text-swatch";
    btn.dataset.color = color;
    btn.title = color;
    btn.style.setProperty("--sw", color);
    btn.addEventListener("click", () => setTextColor(color));
    colorRow.append(btn);
  });

  const picker = document.createElement("input");
  picker.type = "color";
  picker.value = "#1f1f1f";
  picker.title = "Başka bir renk seç";
  picker.addEventListener("input", () => setTextColor(picker.value));
  colorRow.append(picker);

  function slider(labelText, cssVar, min, max) {
    const r = row(labelText);
    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.step = 5;
    input.value = 100;
    const value = document.createElement("span");
    value.textContent = "%100";
    input.addEventListener("input", () => {
      root.style.setProperty(cssVar, input.value / 100);
      value.textContent = "%" + input.value;
    });
    r.append(input, value);
  }

  slider("Yazı boyutu:", "--body-scale", 85, 130);
  slider("Başlık boyutu:", "--heading-scale", 75, 130);

  document.body.append(bar);
  setTheme(new URLSearchParams(location.search).get("tema"));
})();
