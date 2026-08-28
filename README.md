# Nazmul Alam - Developer Portfolio

A modern, responsive portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, positioning Nazmul Alam as a Computer Science student and full-stack developer with a backend engineering focus.

---

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm (or your preferred package manager - swap commands accordingly)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-reloads as you edit files.

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

Runs the optimized production build locally at [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

---

## Project Structure

```
app/
├── layout.tsx          # Root layout: theme provider, navbar, footer, SEO defaults
├── page.tsx            # Home page
├── globals.css         # Design tokens (colors, fonts) and base styles
├── about/page.tsx
├── skills/page.tsx
├── projects/page.tsx
├── journey/page.tsx
└── contact/page.tsx

components/
├── navbar/             # Sticky nav with active-route highlighting + mobile menu
├── hero/               # Hero section + animated architecture SVG diagram
├── about/              # About preview (home) and full About page content
├── focus/              # "What I Focus On" 4-card grid
├── skills/             # Skills page: category cards
├── projects/           # Featured project card, smaller project cards, page section
├── journey/            # Development journey timeline
├── contact/            # Contact form + contact info
├── footer/
├── icons.tsx           # Custom GitHub / LinkedIn icon SVGs
├── ThemeProvider.tsx   # Dark/light theme context (next-themes)
├── ThemeToggle.tsx
└── ui/                 # Shared primitives: Button, Badge, Container, SectionHeading

data/
├── personal.ts   # Name, bio copy, contact links, resume path, profile image path
├── projects.ts   # Featured project (Scentora) + other projects
├── skills.ts     # Skill categories, focus areas, currently-learning tags
├── journey.ts    # Timeline milestones
└── nav.ts        # Navigation links

public/
├── images/    # Put your real profile photo here (profile.jpg)
├── projects/  # Put project screenshots here
└── resume/    # Put your resume PDF here
```

All page content is pulled from the `data/` files. Components never hardcode copy, so you can update most of the site without touching component code.

---

## Customization Guide

### 1. Personal info, bio, and contact links

Edit **`data/personal.ts`**:

- `name`, `email`, `github`, `linkedin` - replace the `YOUR_*` placeholders
- `resumePath` - path to your resume PDF
- `profileImage` - path to your photo
- `heroCopy` - hero headline/subtext and highlighted technologies
- `aboutCopy` - About page paragraphs and quick-fact cards
- `dsaAchievement` - DSA/Phitron achievement card copy
- `contactCopy` - Contact page headline and subtext

### 2. Projects

Edit **`data/projects.ts`**:

- `featuredProject` - Scentora's tech stack (`techLayers`), implemented vs. planned features (`features`, each with `status: "done" | "planned"`), and links
- `otherProjects` - array of smaller projects; replace `ADD_PROJECT_NAME`, `ADD_PROJECT_DESCRIPTION`, and `ADD_PROJECT_FEATURE` placeholders as real projects are ready
- Set `githubUrl` / `liveUrl` per project; `liveUrl: null` renders as "In Development" instead of a broken link

Only mark a feature `"done"` once it's actually implemented. Everything else should stay `"planned"` so it renders as "Coming Soon."

### 3. Profile photo

1. Add your photo to `public/images/profile.jpg` or update the path in `data/personal.ts`
2. Open `components/about/AboutFull.tsx` and replace the placeholder `<div>` block with:

```tsx
<img
  src={personal.profileImage}
  alt={`Portrait of ${personal.name}`}
  className="aspect-square w-full max-w-xs rounded-xl border border-border-strong object-cover"
/>
```

### 4. Resume

Add your resume PDF to `public/resume/Nazmul-Alam-Resume.pdf` or update `resumePath` in `data/personal.ts`. The "Download Resume" button on the About page will then work automatically.

### 5. Skills

Edit **`data/skills.ts`**:

- `skillCategories` - add/remove technologies per category
- `focusAreas` - the 4 "What I Focus On" cards
- `currentlyLearning` - tags shown on the About page

### 6. Development Journey

Edit **`data/journey.ts`** - replace `"YYYY"` placeholders with real dates as you confirm them, and adjust milestone titles/descriptions.

### 7. Contact form

The contact form (`components/contact/ContactForm.tsx`) now sends messages through the `/api/contact` route. That endpoint uses SMTP via `nodemailer`, validates input server-side, rejects obvious spam, and applies a lightweight per-IP rate limit.

### 8. Environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL` to your deployed site URL
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` for your mail server
- `SMTP_FROM_EMAIL` to the sender address used in outgoing mail
- `CONTACT_TO_EMAIL` to the inbox that should receive contact messages

If you're using Gmail, create an app password and use Gmail's SMTP settings instead of your normal login password.

### 9. Theme colors

The full color system lives in `app/globals.css` as CSS custom properties (`--background`, `--accent`, etc.), with separate values for dark (`:root`) and light (`:root.light`) mode. Change the `--accent` / `--accent-strong` values to adjust the teal accent color site-wide.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Theme:** next-themes (dark/light mode)
- **Icons:** lucide-react + two custom brand icons (GitHub, LinkedIn)

## Notes

- Fonts use system font stacks (no external Google Fonts fetch) for reliability in any build environment.
- Every "Coming Soon," `YOUR_*`, and `ADD_*` placeholder in the data files is intentional - replace them as real information becomes available. Nothing has been fabricated (no fake stats, testimonials, GPAs, or employment history).
