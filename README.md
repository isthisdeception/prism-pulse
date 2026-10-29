# PRISM PULSE — Cinematic Visual Atelier & Portfolio

A high-performance, dark-mode portfolio website engineered for cinematographers, photographers, and drone visual creators. Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

---

## ⚡ Tech Stack & Performance Architecture

- **Core**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with curated dark cinematic palette (`#090a0f`, `#12131a`, `#e5a95d` gold amber accents)
- **Icons**: Lucide React + custom inline SVGs for brand logos
- **Zero Eager Video Payload**: Initial bundle under 87 kB gzipped JS; videos load strictly on-demand in a modal
- **Accessible Interactions**: Full keyboard accessibility (`Escape`, arrow keys), focus traps, and 44px minimum touch targets

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js 18.x or 20.x+
- npm (or pnpm / yarn)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Code Quality & Linting
```bash
npm run lint
```
Uses ultra-fast `oxlint` for static analysis.

### 4. Production Build
```bash
npm run build
```
Typechecks with `tsc -b` and builds optimized static assets into the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
prism-pulse/
├── public/
│   ├── favicon.png          # High-resolution squircle favicon
│   ├── favicon.svg          # Vector favicon fallback
│   └── Prism-Pluse.png      # Original logo asset
├── src/
│   ├── assets/              # Local images (logo, portrait photo)
│   ├── components/
│   │   ├── Button.tsx       # Accessible button with primary/ghost/outline variants
│   │   ├── Container.tsx    # Responsive layout wrapper
│   │   ├── Header.tsx       # Fixed navigation with mobile menu drawer
│   │   ├── ImageLightbox.tsx# Modal viewer with keyboard controls
│   │   ├── SocialIcons.tsx  # Inline brand icons (Instagram, Facebook, YouTube)
│   │   ├── VideoModal.tsx   # On-demand video player modal
│   │   └── WhatsAppPopup.tsx# 7s delayed consultation popup with safe storage
│   ├── data/
│   │   ├── projects.ts      # Film & photo portfolio items & metadata
│   │   └── siteConfig.ts    # Centralized brand, bio, and contact config
│   ├── sections/
│   │   ├── About.tsx        # Creator bio & guiding principles
│   │   ├── Contact.tsx      # WhatsApp direct line & social channels
│   │   ├── FilmsShowcase.tsx# Master showreel & 16:9 film gallery
│   │   ├── Hero.tsx         # Cinematic hero with reel preview
│   │   ├── SelectedWorks.tsx# Categorized grid with lightbox
│   │   └── Services.tsx     # Editorial numbered discipline offerings
│   ├── App.tsx              # Root application layout
│   ├── index.css            # Tailwind CSS v4 design tokens & base rules
│   └── main.tsx             # React DOM entry point
├── index.html               # Open Graph, Twitter Cards & JSON-LD schema
└── package.json
```

---

## 🛠️ Content & Media Management

All copy, contact channels, and portfolio items are centralized in two files:

### 1. Brand & Contact Information (`src/data/siteConfig.ts`)
Edit `src/data/siteConfig.ts` to update:
- **WhatsApp Phone & URL**:
  ```ts
  whatsappNumber: '+8801313323612',
  whatsappUrl: 'https://wa.me/8801313323612?text=Hello%20Prism%20Pulse...',
  phoneDisplay: '+880 1313-323612',
  ```
- **Email & Location**:
  ```ts
  email: 'prismpulseofficial.1@gmail.com',
  locationDisplay: 'Available All Over Bangladesh · Based in Dhaka',
  ```
- **Social Profiles**:
  ```ts
  socials: {
    whatsapp: 'https://wa.me/8801313323612',
    instagram: 'https://www.instagram.com/prism__pulse',
    facebook: 'https://www.facebook.com/profile.php?id=61581682466136',
    youtube: 'https://youtube.com/@YOUR_CHANNEL',
  }
  ```
- **Portrait Photo**:
  Drop your portrait in `src/assets/` and update:
  ```ts
  import portraitImg from '../assets/your-photo.jpg'
  // inside siteConfig.brand:
  portraitImage: portraitImg,
  ```

### 2. Portfolio Items & Showreels (`src/data/projects.ts`)
Edit `src/data/projects.ts` to add or update projects:
- **Categories**: `'Photography' | 'Films' | 'Drone' | 'Commercial'`
- **Master Reel**: Update `SHOWREEL_PROJECT` with your primary highlight reel.
- **Images & Posters**: Replace image URLs with hosted Cloudinary / S3 / direct CDN URLs.
- **Video Embeds**: Add YouTube (`https://www.youtube-nocookie.com/embed/VIDEO_ID`) or Vimeo embed URLs.
  > **Note**: If a project has `TODO_REPLACE` in its `videoUrl`, the video modal automatically displays an elegant *"Private Screener in Production — Request via WhatsApp"* inquiry panel instead of breaking.

---

## 🌐 Deployment to Cloudflare Pages

This project is optimized for static hosting on **Cloudflare Pages** via GitHub integration:

1. Push your repository to **GitHub**.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the `prism-pulse` repository and configure the build settings:
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   - **Environment variables**: `NODE_VERSION` = `20`
4. Click **Save and Deploy**. Cloudflare Pages will build and deploy the site to a global edge network.

---

## 📋 Pre-Launch Verification Checklist

Before public launch, review and replace these remaining items:

- [ ] **YouTube Channel**: Replace `'https://youtube.com/@TODO_REPLACE_CHANNEL'` in `src/data/siteConfig.ts` with your real channel link (or remove if not using).
- [ ] **Production Domain in `index.html`**: Replace `https://TODO_REPLACE_DOMAIN.com` in:
  - Canonical link: `<link rel="canonical" href="..." />`
  - Open Graph URL: `<meta property="og:url" content="..." />`
  - JSON-LD Schema: `"url": "..."`
- [ ] **Real Portfolio Media**: Replace placeholder Unsplash links in `src/data/projects.ts` with your high-bitrate photographs and video embed links.

---

## 📄 License
Private & Proprietary © Prism Pulse. All rights reserved.
