# Music Teacher Website

A simple bilingual (Turkish / English) one-page site. It's plain HTML, CSS and JavaScript, so there's nothing to install or build.

```
content.js       ALL text, lessons, contact info, gallery: edit this
index.html       page structure (Turkish fallback text)
css/style.css    design: colors and fonts are at the top
js/render.js     reads content.js and fills the page
js/main.js       menu, gallery popup, animations
images/          photos (placeholders/ holds the stand-in images)
```

## Preview locally

Double-click `index.html` to open it in a browser.

## Editing content (`content.js`)

Every text has a Turkish and an English version:

```json
"title": { "tr": "Verdiğim dersler", "en": "Lessons I teach" }
```

Write `{name}` anywhere in a text and it's replaced with the teacher's name.

### Formatting rules
- Text goes in double quotes `"..."`.
- Items are separated by commas, but the last item in a list or block has **no** comma after it.
- After editing, open `index.html` to check. If the lesson cards and gallery are empty, there's a typo, usually a missing or extra comma or quote.

### Teacher name and contact details
These are in the `site` block at the top:

```json
"name": "Ad Soyad",
"phone": "+905321234567",
"phoneDisplay": "+90 532 123 45 67",
"whatsapp": "905321234567",
"email": "...",
"instagram": "@...",
"instagramUrl": "https://instagram.com/..."
```

- `phone` is used for tap-to-call.
- `phoneDisplay` is what visitors see.
- `whatsapp` is digits only: 90, then the number without the leading 0.

The prefilled WhatsApp message is in `whatsappMessage`.

### Lessons
Each lesson is one block in `lessons.items`. To add a lesson, copy a block, put a comma between blocks, and edit it:

```json
{
  "icon": "🎻",
  "title": { "tr": "Keman", "en": "Violin" },
  "description": { "tr": "...", "en": "..." },
  "levels": { "tr": "Başlangıç · Orta", "en": "Beginner · Intermediate" },
  "online": true,
  "inPerson": true
}
```

- `online` and `inPerson` control the "Online" and "Yüz yüze" badges. Set either to `false` to hide it.
- To remove a lesson, delete its block, including the comma before it.
- Emoji ideas for `icon`: 🎹 🎸 🎤 🎻 🥁 🎺 🎷 🪕 🪗

`image` is the card's photo. Remove the line to show the card without a photo.

### Lesson card design
`lessons.cardStyle` in `content.js` picks how the photo appears:
- `"ust"`: the photo sits across the top of the card.
- `"arka"`: a blurred photo covers the whole card, with the text on top.

To compare them without editing anything, open `index.html?kart=ust` or `index.html?kart=arka` (this also works on the live site).

Prices are not shown. The "call or message for prices" box text is in `priceTitle` and `priceText`.

### Photos
All photo file names are set in `content.js`. Put photos in the `images/` folder with these names:

| File | Where it appears |
|---|---|
| `images/ana-gorsel.jpg` | large photo at the top |
| `images/ogretmen.jpg` | About section |
| `images/galeri-1.jpg` … `galeri-6.jpg` | gallery |
| `images/ders-piyano.jpg`, `ders-gitar.jpg`, `ders-san.jpg`, `ders-ukulele.jpg` | lesson cards |

- Until a photo exists, a brown placeholder showing the expected file name appears in its place.
- Names are case-sensitive once online: use lowercase `.jpg`. `Galeri-1.JPG` won't be found.
- To use a different name or format (for example `.png`), change the `src` in `content.js`.
- To add more gallery photos, add a line to `gallery.images` in `content.js`:

```json
{ "src": "images/galeri-7.jpg", "alt": { "tr": "Öğrenci konseri", "en": "Student concert" } }
```

The `alt` text describes the photo for screen readers and search engines.

### Videos
Add YouTube video IDs to `gallery.videos`. In `https://www.youtube.com/watch?v=abc123XYZ`, the ID is `abc123XYZ`:

```json
"videos": ["abc123XYZ", "def456UVW"]
```

When the list is empty, the video area is hidden.

### Photo sizes
- `ana-gorsel.jpg`: portrait, about 1100×1260
- `ogretmen.jpg`: portrait, about 960×1120
- gallery: square works best (other shapes are cropped to a square)

Compress photos first (https://squoosh.app) so the site stays fast. Phone photos are often 3–5 MB, and around 200–400 KB is enough.

### Colors and fonts
They're at the top of `css/style.css`, under `:root`.

## Publishing (free) on Cloudflare Pages

1. Create a free account at https://dash.cloudflare.com.
2. Go to **Workers & Pages**, click **Create**, choose the **Pages** tab, then **Upload assets**.
3. Name the project. The name becomes `name.pages.dev`.
4. Drag this whole folder in and click **Deploy**.
5. To update the site later, edit `content.js`, then open the project, click **Create new deployment** and upload the folder again.

As an alternative, drag the folder onto https://app.netlify.com/drop.

### Custom domain
1. Buy a domain:
   - `.com.tr` from a Turkish registrar (İsimtescil, Natro, Turhost)
   - `.com` from one of those registrars or from Cloudflare Registrar
2. In the Cloudflare Pages project, open **Custom domains** and follow the steps.

## Privacy / KVKK
The site has no forms, no analytics and no cookies, and YouTube videos use `youtube-nocookie.com`. The language choice is stored only in the visitor's browser (localStorage).

If you add analytics later, you'll need a cookie consent banner and a KVKK notice (aydınlatma metni).

## SEO (Google)

- `sitemap.xml` and `robots.txt` are in the root folder and are published with the site.
- After big content changes, update the `<lastmod>` date in `sitemap.xml`.
- The title, description and keywords are in two places: the `<head>` of `index.html` and `meta` in `content.js`. Keep them the same.
- The business info for Google (the `application/ld+json` block in `index.html`) has its own copy of the phone number and address. When the phone number changes in `content.js`, change it there too.
- Google ignores the `keywords` tag. What matters is the title, the description and the text on the page.

### After publishing
1. Add the site to **Google Search Console** (https://search.google.com/search-console), then submit `https://yukseksesmuzikstudyo.com/sitemap.xml` under **Sitemaps**.
2. Create a **Google Business Profile** (https://business.google.com) for the studio in Bornova. This matters most for local searches such as "Bornova piyano dersi", and it puts the studio on Google Maps.
3. Check the business info with the **Rich Results Test** (https://search.google.com/test/rich-results).
