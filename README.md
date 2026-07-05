# THE USKI PSYCHIC CLIMATE INDEX

A modern, premium digital archive and interactive case registry frontend for the USKI API. Designed with a **“psychic climate” visual style**: atmospheric, editorial, slightly eerie, high-contrast, cinematic, and polished.

This site is built entirely as a responsive Single Page Application (SPA) using **React**, **Vite**, and **Tailwind CSS v4**, and is designed to feel like a serious, high-end digital dossier archive.

---

## 🎨 Creative Identity & Design Philosophy

- **The Collectible Paradigm**: Every case profile is rendered as a FIFA-style collectible card. Cards carry unique visual classes (Gold Elite, Crimson, or Obsidian Silver) based on the subject's **Psycho Killer Score (PKS)**.
- **Holographic Gloss Effects**: Hovering over cards triggers interactive scale transformations and gliding holographic light leaks (`card-shine`) with custom radial glows.
- **Atmospheric "Psychic" Vignette & Grain**: Subtle film-grain textures and a custom dark vignette frame the screen to reinforce a serious, serious archive mood.
- **Strict Ethical Boundaries**: In compliance with respectful historical research guidelines, this application **strictly omits victim statistics** and collects **zero user tracking telemetry**.

---

## 🚀 Core Features & Navigation Rails

1. **Archive Index (Home)**: Cinematic landing page with project introduction, high-fidelity stats dashboards (Total Cases, Avg Rating, Verified Sources), and featured high-PKS collectibles.
2. **Case Registry (Explore)**: Complete responsive grid of cases. Supports real-time text searches and multi-faceted filter selectors (by Name, Origin Country, Case Status, and Minimum PKS slider).
3. **Classified Dossier (Case Detail)**: An elegant split-column, immersive reader displaying chronological timelines, apprehension protocol details, motives, methodologies, judicial conviction decrees, and an advanced **Psychometric Character Breakdown** slider set (Brutality, Evasion, Notoriety, and Cognitive Pathology).
4. **Mission Protocol (About Us)**: Methodological explanations of the research, standardizing comparative variables, and historical objectives.
5. **Ethics & Data Charter**: Explicit explanations regarding the use of verifiable public records, user anonymity guarantees, and memory respect policies.

---

## 🗃️ USKI API Endpoints Consumed

The frontend connects securely to these standard endpoints:
- `GET /killers` - List of case profiles.
- `GET /killers/{killer_id}` - Complete profile parameters.
- `GET /killers/{killer_id}/score` - Psycho Killer Score and category breakdown metrics.

### Fields Displayed
- `id`, `name`, `image_url`, `murder_count_actual`, `psycho_killer_score`, `country`, `status`, `method`, `sentence_details`, `motive`, `additional_info`, `birth_year`, `birth_location`, `years_active_from`, `years_active_to`, `active_in_provinces`, `known_as`, `caught_by`.
- *Note: `victim_stats` is completely omitted in the UI code.*

---

## ⚙️ Setup & Local Installation

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### 1. Clone the repository and navigate to the project root:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory (based on `.env.example`):
```env
VITE_API_BASE_URL="https://your-uski-api-endpoint.com"
```
*Note: If `VITE_API_BASE_URL` is omitted or blank, the application automatically activates a local, high-fidelity archive replica dataset so you can preview the app beautifully in offline sandbox environments.*

### 3. Start the Local Server
```bash
npm run dev
```
The application will open on port `3000` (external proxy target).

### 4. Build the Production Output
```bash
npm run build
```
This compiles optimized static assets into the `dist/` directory.

---

## ☁️ Vercel Deployment Guidance

Deploying this app to Vercel is completely free and takes less than 2 minutes.

### Method A: Deploy via Vercel CLI
1. Install the CLI: `npm i -g vercel`
2. Run: `vercel` (and follow the simple prompts)
3. Set your custom `VITE_API_BASE_URL` variable in the Vercel Dashboard if needed.

### Method B: GitHub Integration (Recommended)
1. Push this project to a private or public GitHub repository.
2. Go to the [Vercel Dashboard](https://vercel.com) and click **Add New > Project**.
3. Import your GitHub repository.
4. Keep the Framework Preset as **Vite**.
5. *(Optional)* Add environment variable `VITE_API_BASE_URL` in the deployment settings.
6. Click **Deploy**. Vercel will build and host your app for free.

### Why `vercel.json` is Included:
We have packaged a `/vercel.json` configuration in this repository. It registers a rewrite rule that maps all URL paths (`/explore`, `/about`, `/case/...`) back to `index.html`. This ensures that refreshing the browser on a subpage will **never** return a Vercel 404 error.
