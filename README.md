# DevDepth — Technical Blog

A minimal, dark-themed technical blog built with plain HTML & CSS.  
No build tools, no dependencies, no JavaScript frameworks — just files you can edit and push.

---

## 📁 Structure

```
tech-blog/
├── index.html              ← Homepage (edit to add/feature posts)
├── archive.html            ← Full post listing
├── about.html              ← About page
│
├── posts/
│   └── getting-started.html   ← Example post
│
├── templates/
│   └── new-post.html          ← Copy this when writing a new post
│
└── assets/
    ├── css/main.css           ← All styles
    ├── js/main.js             ← Copy button + reading progress
    ├── images/                ← Drop .png / .jpg / .gif files here
    └── videos/                ← Drop .mp4 files here
```

---

## 🚀 Deploy to GitHub Pages

1. **Create a GitHub repo** (e.g. `yourusername.github.io` for a root site, or any name for a project site)
2. **Push this folder's contents** to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Your blog will be live at `https://yourusername.github.io` (or `.../repo-name`)

---

## ✍️ Writing a New Post

1. Copy `templates/new-post.html` into the `posts/` folder:
   ```
   cp templates/new-post.html posts/my-new-article.html
   ```
2. Edit the file: update the `<title>`, tag, heading, date, and body text.
3. Add the post to `index.html` (paste a new `<article class="post-card">` block).
4. Add it to `archive.html` (add a `<li class="archive-item">` entry).
5. Push to GitHub — done.

---

## 🖼️ Adding Images

Place image files in `assets/images/` and reference them in a post like:

```html
<div class="media-block">
  <img src="../assets/images/your-image.png" alt="Alt text" />
  <p class="media-caption">Fig 1. — Caption here.</p>
</div>
```

Supported formats: `.png`, `.jpg`, `.gif`, `.webp`, `.svg`

---

## 🎬 Adding Videos

**Self-hosted (MP4)** — put the file in `assets/videos/`:

```html
<div class="media-block">
  <video controls preload="metadata">
    <source src="../assets/videos/your-video.mp4" type="video/mp4" />
  </video>
  <p class="media-caption">Caption here.</p>
</div>
```

**YouTube / Vimeo embed:**

```html
<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video title"
    allowfullscreen
  ></iframe>
</div>
```

---

## 💻 Code Blocks

Wrap code in `<pre><code>...</code></pre>`. A **Copy** button appears automatically.

```html
<pre><code>const example = "hello world";
console.log(example);
</code></pre>
```

Inline code uses backtick-style: `<code>inline</code>`

---

## 🎨 Customisation

All design tokens (colors, fonts, spacing) live at the top of `assets/css/main.css`:

```css
:root {
  --bg:      #0d0f14;      /* page background */
  --accent:  #5afa8e;      /* terminal green — change to your colour */
  --text:    #e2e6f0;      /* body text */
  /* ... */
}
```

To rename the blog, search-replace `DevDepth` across the HTML files.
