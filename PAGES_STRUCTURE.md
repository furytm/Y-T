# Y&T Sensory - Website Structure

## Pages Created

### 1. **Home Page** (`/`)
- Hero section with animated elements
- Services showcase (4 main services)
- About preview
- Call-to-action section
- Fully responsive design with animations

### 2. **Services Page** (`/services`)
- Comprehensive service listings:
  - Brand Development & Strategy
  - Sensory Experience Design
  - Interior & Space Design
  - Design Consulting
- Each service features:
  - Dedicated icon
  - Detailed description
  - List of features/deliverables
  - "Enquire About This Service" CTA
  - Alternating layout for visual interest

### 3. **Projects Page** (`/projects`)
- **Sensory Room Case Study** (The Foreshore School)
  - Full project overview with hero image
  - Challenge and solution sections
  - Comprehensive design details including:
    - Interactive surfaces (LEGO walls, padded walls, tactile boards, foam pit, gel floors)
    - Visual elements (colorful floors, murals, mirrors)
    - Lighting strategy with multiple mood settings
    - Space features and layout details
  - Impact and results section
  - Key deliverables summary
  - Project metadata (type, timeline, budget, client info)

### 4. **About Page** (`/about`)
- "Who We Are" section with company overview
- Mission & Vision statements
- Core approach pillars:
  - Human-Centred Design
  - Evidence-Based Solutions
  - Sustainable Materials
  - Global Compliance
- Six core values:
  - Excellence
  - Innovation
  - Integrity
  - Collaboration
  - Inclusivity
  - Impact

### 5. **Consultation Page** (`/consultation`)
- Consultation booking form with fields:
  - Full Name
  - Organisation/Company
  - Email Address
  - Phone Number
  - Project Type dropdown
  - Detailed Message
- Contact information sidebar:
  - Phone numbers
  - Email addresses
  - Physical address
  - Response time information
- WhatsApp integration link

### 6. **Contact Page** (`/contact`)
- Comprehensive contact form:
  - Name, Email, Subject, Message
- Contact information cards:
  - Phone
  - Email (multiple contacts)
  - Physical address
  - WhatsApp button
- Map placeholder for location
- CTA to book consultation

## Navigation Structure

The header now includes:
- **Logo** - Y&T Sensory branding with gradient
- **Desktop Navigation** (hidden on mobile):
  - Services
  - Projects
  - About
  - Consultation
  - Contact
- **CTA Button** - "Book Consultation"
- **Mobile Menu** - Responsive hamburger menu

## Design Features

- **Animations**: Fade-in, slide-in effects with staggered delays
- **Color System**: Cyan-to-purple gradient palette
- **Typography**: Serif for headings, modern sans-serif for body
- **Responsive**: Mobile-first design with perfect scaling
- **Interactive Forms**: All forms include validation and user feedback

## Asset Management

- Logo image: `/public/logo.svg` (Y&T Sensory branding)
- Hero images in `/public/images/` directory:
  - hero-sensory.jpg
  - sensory-touch.jpg
  - sound-waves.jpg
  - visual-harmony.jpg
  - brand-connection.jpg
  - consultation.jpg
  - experience-design.jpg
  - sensory-abstract.jpg

## Next Steps

1. Update contact form handlers to connect to email service (SendGrid, Nodemailer, etc.)
2. Add WhatsApp integration for direct messaging
3. Implement booking system for consultations
4. Add analytics tracking
5. Deploy to production (Vercel recommended)

## Key Updates from Original

- ✓ Removed Process component from homepage
- ✓ Removed Portfolio component from homepage
- ✓ Updated header with proper page navigation links
- ✓ Created Services page (standalone)
- ✓ Created Projects page with Sensory Room case study
- ✓ Created About page with mission, vision, and values
- ✓ Created Consultation page with booking form
- ✓ Created Contact page with contact form
- ✓ Logo integrated throughout
- ✓ All pages fully animated and responsive
