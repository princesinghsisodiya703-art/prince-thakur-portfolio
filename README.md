# Prince Thakur Portfolio

A production-focused AI and full stack developer portfolio built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

## Highlights

- Futuristic premium design with glassmorphism, motion, and responsive layouts
- Accurate hero statistics and freelance availability indicator
- Nexora case-study project structure with live demo and GitHub links
- Verified certification cards with PDF view/download support
- Services section with book-service preselection into the contact form
- Production-safe contact API with validation, honeypot, rate limiting, Resend delivery, and structured error logging
- SEO metadata, sitemap, robots file, generated Open Graph/Twitter images, app icons, and JSON-LD structured data
- Accessibility improvements for focus states, contrast, keyboard navigation, and reduced motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup

Copy `.env.example` to `.env.local` and configure Resend delivery:

```bash
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=your_email@example.com
CONTACT_FROM_EMAIL="Portfolio Inquiry <onboarding@resend.dev>"
```

`CONTACT_FROM_EMAIL` must be a sender allowed by your Resend account. Use a verified domain sender in production.

To verify delivery locally after configuring `.env.local`, start the app and submit the contact form with a valid name, email, service, and project description. The delivered email should use the subject `🚀 New Portfolio Inquiry | [Service]` and include name, email, phone, service, budget, deadline, project details, and submission time.

## Project Structure

- `app/` - App Router pages, metadata routes, API routes, SEO image routes
- `components/sections/` - Portfolio sections and inquiry form
- `components/ui/` - Reusable UI primitives
- `components/effects/` - Visual effects and motion layers
- `lib/data.ts` - Portfolio content, projects, services, skills, and certifications
- `public/certificates/` - Certificate PDF assets
- `public/profile/` - Profile image assets

## Verification

```bash
npm run lint
npm run build
```

## Deployment Checklist

- Configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`
- Confirm `siteConfig.url` in `lib/data.ts` matches the production domain
- Confirm resume and certificate PDFs open in production
- Confirm Nexora live demo and GitHub links work
- Run `npm run lint`
- Run `npm run build`
- Deploy to Vercel
