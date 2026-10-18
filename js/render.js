/*
 * Reads SITE_CONTENT from content.js and fills the page in the chosen language.
 * You should not need to edit this file: change content.js instead.
 */
const SUPPORTED_LANGS = ["tr", "en"];
const LANG_STORAGE_KEY = "lang";

let CONTENT = null;

function getSavedLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    /* storage blocked: language just won't be remembered */
  }
}

function detectLang() {
  // ?lang=en in the address wins, then the visitor's last choice, then the browser language
  const param = new URLSearchParams(location.search).get("lang");
  if (SUPPORTED_LANGS.includes(param)) return param;
  const saved = getSavedLang();
  if (SUPPORTED_LANGS.includes(saved)) return saved;
  const browser = (navigator.language || "").toLowerCase();
  return browser.startsWith("en") ? "en" : "tr";
}

// Turns { tr: "...", en: "..." } into the text for the current language.
// {name} becomes the studio name, {teacher} the teacher's name.
function pick(value, lang) {
  if (value == null) return "";
  const text = typeof value === "string" ? value : (value[lang] ?? value.tr ?? "");
  return text
    .replaceAll("{name}", CONTENT.site.name)
    .replaceAll("{teacher}", CONTENT.site.teacherName || "");
}

function getPath(obj, path) {
  return path.split(".").reduce((o, key) => (o == null ? undefined : o[key]), obj);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderAbout(lang) {
  const about = CONTENT.about;

  const paragraphs = document.getElementById("about-paragraphs");
  paragraphs.replaceChildren(...about.paragraphs.map((p) => el("p", "", pick(p, lang))));

  const highlights = document.getElementById("about-highlights");
  highlights.replaceChildren(...about.highlights.map((h) => {
    const li = el("li");
    li.append(el("strong", "", pick(h.title, lang)), el("span", "", pick(h.text, lang)));
    return li;
  }));
}

function renderLessons(lang) {
  const lessons = CONTENT.lessons;

  const formats = document.getElementById("lesson-formats");
  formats.replaceChildren(...lessons.formats.map((f) => {
    const box = el("div", "format reveal");
    box.append(el("h3", "", pick(f.title, lang)), el("p", "", pick(f.text, lang)));
    return box;
  }));

  // Card design: "ust" = photo on top, "arka" = blurred photo behind the text.
  // ?kart=ust or ?kart=arka in the address overrides it, for comparing.
  const param = new URLSearchParams(location.search).get("kart");
  const style = ["ust", "arka"].includes(param) ? param : (lessons.cardStyle || "ust");

  const cards = document.getElementById("lesson-cards");
  cards.className = "cards cards--" + style;
  cards.replaceChildren(...lessons.items.map((item) => {
    const card = el("article", "card reveal");

    if (item.image) {
      const media = el("div", "card-media");
      const img = el("img");
      img.alt = "";
      img.loading = "lazy";
      setImage(img, item.image, lessonPlaceholder(item.image));
      media.append(img);
      card.append(media);
    }

    const body = el("div", "card-body");
    if (item.icon) body.append(el("span", "lesson-icon", item.icon));
    body.append(el("h3", "", pick(item.title, lang)));
    if (item.levels) body.append(el("p", "levels", pick(item.levels, lang)));
    body.append(el("p", "", pick(item.description, lang)));

    const tags = el("div", "tags");
    if (item.inPerson) tags.append(el("span", "tag", pick(lessons.inPersonLabel, lang)));
    if (item.online) tags.append(el("span", "tag", pick(lessons.onlineLabel, lang)));
    if (tags.children.length) body.append(tags);

    card.append(body);
    return card;
  }));
}

// images/ders-piyano.jpg -> images/placeholders/ders-piyano.svg (falls back to a generic one)
function lessonPlaceholder(src) {
  const name = src.split("/").pop().replace(/\.[^.]+$/, "");
  return ["images/placeholders/" + name + ".svg", "images/placeholders/ders.svg"];
}

// Shows the photo, or the placeholder if the photo file isn't uploaded yet
// (placeholder can also be a list, tried in order)
function setImage(img, src, placeholder) {
  const fallbacks = [].concat(placeholder);
  img.onerror = () => {
    if (fallbacks.length) img.src = fallbacks.shift();
    else img.onerror = null;
  };
  img.src = src || fallbacks.shift();
}

function renderImages(lang) {
  const placeholders = { hero: "images/placeholders/hero.svg", teacher: "images/placeholders/teacher.svg" };
  document.querySelectorAll("[data-image]").forEach((img) => {
    const image = CONTENT.images[img.dataset.image] || {};
    // Only reload when the file changes, so switching language doesn't flash the photo
    if (img.dataset.src !== image.src) {
      img.dataset.src = image.src;
      setImage(img, image.src, placeholders[img.dataset.image]);
    }
    img.alt = pick(image.alt, lang);
  });
}

function renderGallery(lang) {
  const gallery = CONTENT.gallery;

  const grid = document.getElementById("gallery-grid");
  grid.replaceChildren(...gallery.images.map((image, i) => {
    const button = el("button", "gallery-item reveal");
    button.type = "button";
    const img = el("img");
    img.loading = "lazy";
    setImage(img, image.src, "images/placeholders/gallery-" + ((i % 6) + 1) + ".svg");
    img.alt = pick(image.alt, lang);
    button.append(img);
    return button;
  }));

  // Videos only render once the iframes change, so switching language doesn't reload them
  const videos = document.getElementById("gallery-videos");
  const ids = gallery.videos || [];
  videos.hidden = ids.length === 0;
  if (videos.dataset.ids !== ids.join(",")) {
    videos.dataset.ids = ids.join(",");
    videos.replaceChildren(...ids.map((id, i) => {
      const wrap = el("div", "video reveal");
      const iframe = el("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id);
      iframe.title = "Video " + (i + 1);
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      wrap.append(iframe);
      return wrap;
    }));
  }
}

function renderSite(lang) {
  const site = CONTENT.site;

  document.querySelectorAll("[data-site]").forEach((node) => {
    node.textContent = site[node.dataset.site] ?? "";
  });

  const links = {
    phone: "tel:" + site.phone,
    email: "mailto:" + site.email,
    instagram: site.instagramUrl,
    youtube: site.youtubeUrl,
    whatsapp: "https://wa.me/" + site.whatsapp + "?text=" + encodeURIComponent(pick(CONTENT.whatsappMessage, lang))
  };
  document.querySelectorAll("[data-link]").forEach((node) => {
    const href = links[node.dataset.link];
    // Hide a link (and its contact row) when its address is left empty in content.js
    const target = node.closest(".contact-list li") || node;
    target.hidden = !href;
    if (href) node.href = href;
  });
}

// Accepts a full YouTube link (watch, youtu.be, shorts, embed) or a bare video ID
function youtubeId(value) {
  if (!value) return "";
  const match = value.match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([\w-]{11})/);
  if (match) return match[1];
  return /^[\w-]{11}$/.test(value.trim()) ? value.trim() : "";
}

function renderIntro(lang) {
  const intro = CONTENT.intro;
  const box = document.getElementById("intro-video");
  const id = youtubeId(intro.video);

  // Keep the player when switching language so the video doesn't restart
  if (id && box.dataset.id === id && box.querySelector("iframe")) return;
  box.dataset.id = id;

  if (id) {
    const iframe = el("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?rel=0";
    iframe.title = pick(intro.title, lang);
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    box.replaceChildren(iframe);
  } else {
    const placeholder = el("div", "intro-placeholder");
    placeholder.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-youtube"/></svg>';
    placeholder.append(el("span", "", pick(intro.placeholder, lang)));
    box.replaceChildren(placeholder);
  }
}

function applyLang(lang) {
  if (!CONTENT) return;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPath(CONTENT, node.dataset.i18n);
    if (value !== undefined) node.textContent = pick(value, lang);
  });

  document.title = pick(CONTENT.meta.title, lang);
  document.querySelector('meta[name="description"]').setAttribute("content", pick(CONTENT.meta.description, lang));

  renderSite(lang);
  renderImages(lang);
  renderAbout(lang);
  renderIntro(lang);
  renderLessons(lang);
  renderGallery(lang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  observeReveals();
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLang(btn.dataset.lang);
    saveLang(btn.dataset.lang);
  });
});

if (typeof SITE_CONTENT !== "undefined") {
  CONTENT = SITE_CONTENT;
  applyLang(detectLang());
} else {
  // content.js missing or has a typo: the Turkish fallback text in index.html stays
  console.error("content.js could not be loaded. Check it for a missing comma or quote.");
}
