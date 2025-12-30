# LENS Photography Portfolio

A modern, minimalist photography portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a sleek gallery with modal viewing.

## Features

- **Home Page**: Hero section with call-to-actions and featured work showcase
- **About Page**: Professional bio, stats, skills, and photography philosophy
- **Gallery**: Responsive grid with category filtering and smooth zoom modal
- **Contact Form**: Validated form with micro-interactions and Netlify Forms integration
- **Modern Design**: Stripe-inspired minimalist aesthetic with smooth animations
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Fast**: Built with Vite for lightning-fast development and optimized builds

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd claude-portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

### Netlify

This project is configured for Netlify deployment with:
- `netlify.toml` for build configuration
- `_redirects` file for SPA routing
- Netlify Forms support for contact form

#### Deploy Steps:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings
4. Your site will be live!

Alternatively, use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Manual Deployment

Build the project and deploy the `dist` folder to any static hosting service:
- Vercel
- GitHub Pages (with proper routing configuration)
- Cloudflare Pages
- AWS S3 + CloudFront

## Customization

### Update Content

- **Gallery Images**: Edit `src/data/gallery.ts`
- **Navigation Links**: Edit `src/data/navigation.ts`
- **Social Links**: Edit `src/data/navigation.ts`
- **About Content**: Edit `src/pages/About.tsx`
- **Contact Info**: Edit `src/pages/Contact.tsx`

### Styling

- **Colors**: Edit `tailwind.config.js` theme colors
- **Typography**: Update fonts in `tailwind.config.js`
- **Components**: Modify component files in `src/components/`
- **Global Styles**: Edit `src/index.css`

### SEO

- **Meta Tags**: Edit `index.html`
- **Site Title**: Update in `index.html`
- **Descriptions**: Update in `index.html` and page components

## Features Breakdown

### Gallery Modal
- Click any image to view full-size
- Keyboard navigation (arrows, ESC)
- Smooth scale animation from thumbnail position
- Image counter and navigation buttons

### Contact Form
- Real-time validation
- Micro-interactions on focus
- Netlify Forms integration (no backend needed)
- Success/error states with animations

### Responsive Navigation
- Mobile hamburger menu with smooth animation
- Active page indicator
- Search functionality
- Social media links

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ImageModal.tsx
├── pages/           # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── layouts/         # Layout wrappers
│   └── Layout.tsx
├── types/           # TypeScript type definitions
│   └── index.ts
├── data/            # Mock data and constants
│   ├── gallery.ts
│   └── navigation.ts
├── App.tsx          # Main app component with routing
└── main.tsx         # App entry point
```

## Performance Optimizations

- Lazy loading images with responsive sizes
- Code splitting with React Router
- Optimized animations with Framer Motion
- Minimal bundle size with tree-shaking
- CSS purging in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contact

For questions or inquiries, visit the contact page or reach out at hello@lens.photography
