# Cya Inn Hotel & Restaurant — Homepage

A React + Vite homepage for Cya Inn Hotel & Restaurant, Sikar, Rajasthan.

## 1. Add your images

Put these exact filenames inside `public/images/` (the folder already exists, just drop files in):

```
logo.png
favicon.png
hero.jpg
about.jpg
room-1.jpg
room-2.jpg
room-3.jpg
restaurant.jpg
food.jpg
gallery-1.jpg
gallery-2.jpg
gallery-3.jpg
gallery-4.jpg
gallery-5.jpg
gallery-6.jpg
testimonial-1.jpg
testimonial-2.jpg
testimonial-3.jpg
```

Until you add these, the page will show broken image icons in those spots — that's expected and fixes itself once the files are in place.

## 2. Edit your content (no code needed)

- `src/config/hotel.js` — all text: hero title, about text, room names, facility names, testimonials
- `src/config/contact.js` — phone, WhatsApp number, email, address
- `src/config/socialLinks.js` — Facebook / Instagram / YouTube links
- `src/data/images.js` — image file paths (only touch this if you rename a file)

## 3. Run it locally

Open Command Prompt inside this folder (if the folder path has spaces, wrap it in quotes), then:

```
npm install
npm run dev
```

This opens the site at `http://localhost:5173`.

## 4. Build for deployment (GitHub Pages)

```
npm run build
```

This creates a `dist` folder — that is the only folder you upload to GitHub Pages. Do not upload the `src` folder or any raw source files; only `dist` is the built, servable site.

`vite.config.js` is already set to `base: "./"`, so the built site works whether it's hosted at the root of a domain or inside a subfolder (like `username.github.io/repo-name/`) — no path editing needed before deploying.
