# New Orleans Group Travel Guide

A Jekyll site designed to capture organic search traffic for New Orleans group travel queries and funnel visitors to Castleday Retreats.

## Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it something like `nola-group-travel` or your chosen domain name
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README (we have files already)

### Step 2: Push This Code

```bash
cd /Users/samuelworth/Documents/Castleday-Marketing/Satellite-Site/jekyll-site

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch, **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Step 4: Add Custom Domain (Optional)

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In GitHub repo: Settings → Pages → Custom domain → Enter your domain
3. At your domain registrar, add these DNS records:

**For apex domain (example.com):**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For www subdomain:**
```
CNAME   www   YOUR_USERNAME.github.io
```

4. Wait 24-48 hours for DNS propagation
5. Check "Enforce HTTPS" in GitHub Pages settings

---

## Site Structure

```
jekyll-site/
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── home.html        # Homepage layout
│   └── guide.html       # Guide pages layout
├── _includes/           # Reusable components
│   ├── header.html
│   └── footer.html
├── _guides/             # Guide content (auto-generates /guides/*)
│   ├── bachelorette-party.md
│   └── corporate-retreat.md
├── _neighborhoods/      # Neighborhood guides
│   └── bywater.md
├── assets/css/          # Stylesheets
│   └── style.css
├── index.md             # Homepage
├── where-to-stay.md     # Key conversion page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

---

## Local Development (Optional)

If you want to preview changes locally before pushing:

### Install Ruby & Jekyll

**Mac:**
```bash
brew install ruby
gem install bundler jekyll
```

### Run Locally

```bash
cd jekyll-site
bundle install
bundle exec jekyll serve
```

Site will be at: `http://localhost:4000`

---

## Adding New Content

### Add a New Guide

Create a file in `_guides/` with this format:

```markdown
---
title: "Your Guide Title"
description: "SEO meta description"
category: "Category Name"
card_title: "Short Title"
card_description: "Brief description for homepage card"
date: 2026-01-14
---

Your content here in Markdown...
```

### Add a New Neighborhood

Same format, but in `_neighborhoods/` folder.

---

## Customization

### Change Colors

Edit `assets/css/style.css` - look for the `:root` section:

```css
:root {
  --color-primary: #1a365d;    /* Main brand color */
  --color-accent: #c53030;     /* Accent/highlight */
  ...
}
```

### Change Domain

Edit `_config.yml`:

```yaml
url: "https://your-domain.com"
```

### Add Google Analytics

Edit `_layouts/default.html`, uncomment and add your GA ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

---

## SEO Checklist

After deploying:

- [ ] Submit sitemap to Google Search Console (`your-domain.com/sitemap.xml`)
- [ ] Verify site in Google Search Console
- [ ] Check mobile responsiveness
- [ ] Test page speed (PageSpeed Insights)
- [ ] Verify all Castleday links work

---

## Content Roadmap

Future articles to add:

- [ ] Family Reunion Planning Guide
- [ ] Wedding Weekend Guide
- [ ] Mardi Gras Group Guide
- [ ] Jazz Fest Group Guide
- [ ] Restaurant Guide for Large Groups
- [ ] French Quarter Neighborhood Guide
- [ ] Marigny Neighborhood Guide

---

## Questions?

This site funnels to [castledayretreats.com](https://castledayretreats.com)
