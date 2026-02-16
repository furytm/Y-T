# Y&T Sensory - Premium Sensory Consultancy Website

A stunning, modern Next.js website for Y&T Sensory, featuring immersive sensory brand experiences and strategic consultancy services. Built with cutting-edge animations, premium design, and responsive layouts.

## Features

### 🎨 Visual Design
- **Premium Color System**: Sophisticated cyan-to-purple gradient palette
- **Typography**: Syne (modern sans-serif) and Instrument Serif for elegant headings
- **Responsive Design**: Mobile-first approach with smooth scaling
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation

### ✨ Animations & Interactions
- **Smooth Transitions**: Fade-in, slide-in, and scale animations
- **Parallax Effects**: Mouse-tracking parallax in the hero section
- **Scroll Animations**: Staggered reveals as sections come into view
- **Hover States**: Interactive elements with smooth state changes
- **Blob Animations**: Animated background gradient blobs

### 📱 Sections Included
1. **Header** - Sticky navigation with smooth scroll behavior
2. **Hero** - Eye-catching landing with parallax imagery and stats
3. **Services** - Four core service cards with image overlays
4. **About** - Company story with visual timeline
5. **Process** - 4-step journey visualization with interactive cards
6. **Portfolio** - Featured project showcase with hover effects
7. **CTA** - Contact form with validation
8. **Footer** - Comprehensive footer with links and social media

### 🖼️ Generated Images
- `hero-sensory.jpg` - Abstract sensory experience visualization
- `sensory-touch.jpg` - Luxury tactile textures
- `sound-waves.jpg` - Musical frequency visualization
- `visual-harmony.jpg` - Geometric harmony composition
- `brand-connection.jpg` - Human connection focus
- `consultation.jpg` - Professional consultancy environment
- `experience-design.jpg` - Modern brand space
- `sensory-abstract.jpg` - Ethereal sensory landscape

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 with custom animations
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Syne, Instrument Serif)
- **Animation Library**: Custom CSS animations + Tailwind utilities
- **Image Optimization**: Next.js Image component

## Installation

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   pnpm install
   ```
3. **Run development server**:
   ```bash
   pnpm dev
   ```
4. **Open browser**:
   Navigate to `http://localhost:3000`

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx           # Root layout with fonts
│   ├── globals.css          # Global styles & animations
│   └── page.tsx             # Main page
├── components/
│   ├── header.tsx           # Navigation
│   ├── hero.tsx             # Hero section with parallax
│   ├── services.tsx         # Services grid
│   ├── about.tsx            # About section
│   ├── process.tsx          # 4-step process
│   ├── portfolio.tsx        # Project showcase
│   ├── cta.tsx              # Contact form
│   └── footer.tsx           # Footer
├── public/
│   └── images/
│       ├── hero-sensory.jpg
│       ├── sensory-touch.jpg
│       ├── sound-waves.jpg
│       ├── visual-harmony.jpg
│       ├── brand-connection.jpg
│       ├── consultation.jpg
│       ├── experience-design.jpg
│       └── sensory-abstract.jpg
├── tailwind.config.ts       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies
```

## Key Design Features

### Color System
- **Primary**: Cyan (#30bada, 190° 84% 48%)
- **Secondary**: Purple (#6d4ebd, 268° 76% 52%)
- **Accent**: Cyan gradient accent
- **Background**: Off-white (#f7f7f7)
- **Foreground**: Dark blue-gray

### Custom Animations
- `fade-in` - Opacity transition
- `slide-in-from-left/right/bottom/top` - Directional slides
- `blob` - Floating blob animation
- Staggered animation delays (200ms-700ms)

### Interactive Elements
- Sticky header with scroll detection
- Mobile hamburger menu
- Service card hover overlays
- Process step interactive cards
- Portfolio image zoom on hover
- Form input focus states

## Customization

### Update Content
Edit the component files in `/components` to update:
- Navigation links in `header.tsx`
- Service descriptions in `services.tsx`
- Company story in `about.tsx`
- Process steps in `process.tsx`
- Portfolio projects in `portfolio.tsx`
- Footer links in `footer.tsx`

### Modify Colors
Update the CSS variables in `app/globals.css`:
```css
:root {
  --primary: 190 84% 48%;        /* Cyan */
  --secondary: 268 76% 52%;      /* Purple */
  /* ... other colors ... */
}
```

### Change Fonts
Modify the font imports in `app/layout.tsx` and update `tailwind.config.ts`:
```tsx
const syne = Syne({ /* ... */ })
const instrumentSerif = Instrument_Serif({ /* ... */ })
```

## Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Components load on-demand
- **CSS Animations**: GPU-accelerated transforms
- **Lazy Loading**: Intersection Observer for scroll animations
- **Fonts**: Self-hosted via Google Fonts import

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
pnpm build
pnpm start
```

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Client testimonials carousel
- [ ] Interactive sensory experience quiz
- [ ] Animated stats counter
- [ ] Video hero section
- [ ] Newsletter subscription
- [ ] Multi-language support

## License

All content is proprietary to Y&T Sensory. Modify and use as needed for your brand.

## Support

For questions or issues with the website, contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
