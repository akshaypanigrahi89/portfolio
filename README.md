# Akshay Panigrahi — AI Engineer Portfolio

A modern, premium AI Engineer portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Shadcn/UI. Features futuristic glassmorphism design, smooth scroll animations, and enterprise-grade aesthetics optimized for recruiters and founders.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **UI Components:** Shadcn/UI (Radix, CVA)
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel

## Features

- Glassmorphism + subtle gradients
- Particle network background with mouse interaction
- Smooth scroll animations and section reveals
- Animated hero section with stats
- Responsive sticky navbar with mobile menu
- Premium project cards with hover effects
- Animated vertical experience timeline
- Contact form with social links
- SEO optimized with OpenGraph support
- Dark mode by default
- Fully responsive design

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production

```bash
npm start
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── globals.css  # Global styles & theme
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── loading.tsx  # Loading state
│   ├── components/      # React components
│   │   ├── ui/          # Shadcn/UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── GridBackground.tsx
│   │   └── AnimatedSection.tsx
│   └── lib/
│       └── utils.ts     # Utility functions (cn)
├── .env.local           # Environment variables
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://akshaypanigrahi.vercel.app
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/akshaypanigrahi
NEXT_PUBLIC_GITHUB_URL=https://github.com/akshaypanigrahi
NEXT_PUBLIC_EMAIL=akshaypanigrahi7@gmail.com
```

## Deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel deploy --prod
```

### Manual Deploy

1. Push to GitHub
2. Import repo in Vercel
3. Set environment variables
4. Deploy

## Author

**Akshay Panigrahi** — AI Engineer

- Email: akshaypanigrahi7@gmail.com
- LinkedIn: [akshaypanigrahi](https://linkedin.com/in/akshaypanigrahi)
- GitHub: [akshaypanigrahi](https://github.com/akshaypanigrahi)
