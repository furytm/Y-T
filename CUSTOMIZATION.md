# Y&T Sensory Website - Customization Guide

Complete guide to customize every aspect of your Y&T Sensory website.

## Quick Customizations

### Update Company Name & Branding

1. **Navigation & Logo** - `components/header.tsx`:
   ```tsx
   <span className="font-serif text-lg md:text-xl font-bold">
     Your Brand Name  // Change "Sensory" to your brand
   </span>
   ```

2. **Page Title & Description** - `app/layout.tsx`:
   ```tsx
   export const metadata: Metadata = {
     title: 'Your Brand - Premium Services',
     description: 'Your company description here',
   }
   ```

3. **Footer Links** - `components/footer.tsx`:
   Update `footerLinks` object with your actual links and social media

### Update Colors (Branding)

Edit `app/globals.css` root variables:

```css
:root {
  /* Change primary color from cyan */
  --primary: 190 84% 48%;      /* HSL format */
  
  /* Change secondary color from purple */
  --secondary: 268 76% 52%;    
  
  /* Change accent color */
  --accent: 190 84% 48%;
  
  /* Adjust background and text colors */
  --background: 0 0% 98%;
  --foreground: 200 10% 15%;
}
```

**Color Format**: HSL (Hue Saturation Lightness)
- Hue: 0-360°
- Saturation: 0-100%
- Lightness: 0-100%

**Popular Hues**:
- Red: 0
- Orange: 30
- Yellow: 60
- Green: 120
- Cyan: 190
- Blue: 210
- Purple: 270
- Pink: 330

### Update Content Sections

#### Hero Section - `components/hero.tsx`

```tsx
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold">
  <span className="block">Your Main Headline</span>
  <span className="block">
    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Your Sub Headline
    </span>
  </span>
</h1>

<p className="text-lg md:text-xl text-foreground/70">
  Your description text here...
</p>
```

#### Services Section - `components/services.tsx`

Update the `services` array:

```tsx
const services = [
  {
    id: 1,
    title: 'Your Service Name',
    description: 'Service description here',
    icon: Eye,  // Change to different lucide icon
    image: '/images/your-image.jpg',
    color: 'from-primary',
  },
  // Add more services...
]
```

**Available Icons** from lucide-react:
- Eye, Ear, Hand, Heart, Zap, Lightbulb, Users, Rocket, Star, Shield, Layers, etc.

#### About Section - `components/about.tsx`

```tsx
<h2 className="font-serif text-4xl font-bold">
  Your Company Story
</h2>

<p className="text-lg text-foreground/70">
  Your company description and mission statement...
</p>

const highlights = [
  'Your Highlight 1',
  'Your Highlight 2',
  'Your Highlight 3',
  'Your Highlight 4',
]
```

#### Process Section - `components/process.tsx`

Update the `steps` array:

```tsx
const steps = [
  {
    number: '01',
    title: 'Your Step Name',
    description: 'Step description',
    icon: Lightbulb,
    color: 'bg-primary',
  },
  // Add more steps...
]
```

#### Portfolio Section - `components/portfolio.tsx`

Update the `projects` array:

```tsx
const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    image: '/images/your-image.jpg',
    description: 'Project description',
  },
  // Add more projects...
]
```

#### Contact Form - `components/cta.tsx`

Update form fields:

```tsx
<input
  type="text"
  id="field_name"
  placeholder="Your placeholder"
  // ... 
/>
```

Modify the `handleSubmit` function:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Add your form submission logic
  // e.g., send to email service, database, webhook
  if (formRef.current) {
    formRef.current.reset()
  }
}
```

## Advanced Customizations

### Change Fonts

1. **In `app/layout.tsx`**:
   ```tsx
   import { YourFont1, YourFont2 } from 'next/font/google'
   
   const yourFont1 = YourFont1({
     subsets: ['latin'],
     variable: '--font-syne',
     weight: ['400', '500', '600', '700']
   })
   
   const yourFont2 = YourFont2({
     subsets: ['latin'],
     variable: '--font-serif',
     weight: ['400']
   })
   ```

2. **In `tailwind.config.ts`**:
   ```ts
   fontFamily: {
     sans: ['var(--font-syne)'],
     serif: ['var(--font-serif)'],
   }
   ```

**Popular Font Pairings**:
- Inter (sans) + Merriweather (serif)
- Poppins (sans) + Playfair Display (serif)
- Montserrat (sans) + Lora (serif)
- Raleway (sans) + Crimson Text (serif)

### Replace Images

1. **Generate new images**:
   - Use DALL-E, Midjourney, or Stable Diffusion
   - Place in `public/images/`

2. **Update image paths** in components:
   ```tsx
   <Image
     src="/images/your-new-image.jpg"
     alt="Description"
     // ...
   />
   ```

3. **Optimize images**:
   ```bash
   # Install sharp for optimization
   npm install sharp
   ```

### Add New Sections

1. **Create new component** in `components/`:
   ```tsx
   'use client'
   
   export default function NewSection() {
     return (
       <section className="py-20 md:py-32">
         {/* Your content */}
       </section>
     )
   }
   ```

2. **Import in `app/page.tsx`**:
   ```tsx
   import NewSection from '@/components/new-section'
   
   export default function Page() {
     return (
       <>
         {/* ... other sections ... */}
         <NewSection />
         {/* ... */}
       </>
     )
   }
   ```

### Add Form Functionality

#### Email Integration (Resend)

```bash
npm install resend
```

Update `components/cta.tsx`:

```tsx
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget as HTMLFormElement)
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'your-email@example.com',
    subject: 'New Contact Form Submission',
    html: `<p>${formData.get('name')} - ${formData.get('email')}</p>`,
  })
}
```

#### Webhook Integration (Make.com, Zapier)

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  const formData = new FormData(e.currentTarget as HTMLFormElement)
  
  const response = await fetch('YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
  
  if (response.ok) {
    // Show success message
  }
}
```

### Add Dark Mode

1. **Install next-themes**:
   ```bash
   npm install next-themes
   ```

2. **Wrap app with provider** in `app/layout.tsx`:
   ```tsx
   import { ThemeProvider } from 'next-themes'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           <ThemeProvider attribute="class" defaultTheme="light">
             {children}
           </ThemeProvider>
         </body>
       </html>
     )
   }
   ```

3. **Add theme toggle** in `components/header.tsx`:
   ```tsx
   import { useTheme } from 'next-themes'
   import { Moon, Sun } from 'lucide-react'
   
   const { theme, setTheme } = useTheme()
   ```

### Add Analytics

#### Google Analytics

```bash
npm install @vercel/analytics @vercel/web-vitals
```

Update `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

#### Umami Analytics

```tsx
<script 
  async 
  src="https://cloud.umami.is/script.js" 
  data-website-id="YOUR_WEBSITE_ID"
></script>
```

### Add Authentication

```bash
npm install next-auth
```

Set up NextAuth for member areas, protected content, etc.

### Add Database

```bash
npm install prisma
npx prisma init
```

Perfect for storing testimonials, blog posts, portfolio items, etc.

## Animation Customizations

### Adjust Animation Speed

In `app/globals.css`:

```css
.animate-in {
  animation: fade-in 0.6s ease-out forwards;  /* Change 0.6s */
}

.slide-in-from-left {
  animation: slide-in-from-left 0.6s ease-out forwards;  /* Change duration */
}
```

### Add Custom Animations

```css
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.bounce-in {
  animation: bounce-in 0.6s ease-out forwards;
}
```

### Disable Animations

Add to any element:

```tsx
className="prefers-reduced-motion:animate-none"
```

## SEO Optimizations

### Meta Tags

Update `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Company - Service Description',
  description: 'Meta description for search engines',
  keywords: 'keyword1, keyword2, keyword3',
  openGraph: {
    title: 'Your Company',
    description: 'Open graph description',
    image: '/og-image.jpg',
  },
}
```

### Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://yourdomain.com/#services</loc>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
```

### robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## Performance Tips

1. **Image Optimization**:
   - Use WebP format
   - Compress images before upload
   - Use appropriate sizes

2. **Code Splitting**:
   - Use dynamic imports for large components
   - Lazy load below-fold content

3. **Caching**:
   - Set appropriate cache headers
   - Use Next.js Image optimization

4. **Monitoring**:
   - Run Lighthouse audits
   - Monitor Core Web Vitals
   - Track performance metrics

## Common Questions

**Q: How do I add a blog?**
A: Create an `app/blog` folder and use a CMS like Contentful or Sanity.

**Q: How do I add e-commerce?**
A: Integrate Shopify, Stripe, or Snipcart.

**Q: How do I add a contact form backend?**
A: Use Resend, SendGrid, or AWS SES for emails.

**Q: How do I add user accounts?**
A: Use NextAuth, Auth0, or Firebase Authentication.

---

For more help, check the main README.md or visit the Next.js documentation.
