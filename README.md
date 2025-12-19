# TDSC - Intelligent Growth Hub

A modern React-based marketing website for TDSC (The Data Science Company) featuring smooth animations, glassmorphism design, and the Foresight product showcase.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app runs on **http://localhost:8080** by default.

---

## 📍 Routing & Navigation Map

### Page Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Index.tsx` | Home/Landing page with multiple sections |
| `/foresight` | `Foresight.tsx` | Product page for "Foresight" automation tool |
| `*` | `NotFound.tsx` | 404 catch-all page |

### Home Page (`/`) - Section Breakdown

The home page uses **smooth scroll navigation**. Clicking nav links scrolls to section IDs:

| Section Name | ID | Component | What It Shows |
|--------------|-----|-----------|---------------|
| Hero | *(top)* | `HeroSection.tsx` | Main banner with CTA → scrolls to `#contact` |
| About | `#about` | `DifferentiatorSection.tsx` | 3 value props: Data Intelligence, Transparency, Excellence |
| Foresight | `#foresight` | `ForesightSection.tsx` | Product teaser → links to `/foresight` page |
| Services | `#services` | `ServicesSection.tsx` | Due Diligence, AI Assessment, AI Training |
| Publications | `#publications` | `PublicationsSection.tsx` | Blog/articles section |
| Contact | `#contact` | `Footer.tsx` | Contact form + company info |

### Foresight Page (`/foresight`) - Section Breakdown

| Section | Description | Backend Integration Needed? |
|---------|-------------|----------------------------|
| Hero | Product intro with "Start Free Trial" + "Schedule Demo" CTAs | ✅ Yes |
| Features Grid | 6 feature cards (static content) | ❌ No |
| SEO Calculator | `#seo-calculator` - User inputs URL + email, gets score | ✅ **Yes - Priority** |
| Pricing | 3 plans (Starter/Professional/Enterprise) with "Get Started" CTAs | ✅ Yes |
| FAQ | Accordion with 4 Q&As (currently static) | ❌ Optional |
| CTA | "Start Free Trial" button | ✅ Yes |

---

## 🔌 Backend Integration Points

### 1. Contact Form (Footer)

**Location:** `src/components/Footer.tsx` (Lines 40-66)

**Current State:** Form submission only logs to console.

```typescript
// CURRENT (placeholder):
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
};
```

**Required API:**
```
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "message": "string"
}

Response: 200 OK
{
  "success": true,
  "message": "Thank you for contacting us!"
}
```

---

### 2. SEO Calculator (Foresight Page)

**Location:** `src/components/SEOCalculator.tsx` (Lines 20-44)

**Current State:** Generates **random scores** after a fake 2.5s delay.

```typescript
// CURRENT (simulated):
await new Promise(resolve => setTimeout(resolve, 2500));
const scores = {
  overall: Math.floor(Math.random() * 30) + 55,
  technical: Math.floor(Math.random() * 40) + 50,
  content: Math.floor(Math.random() * 35) + 55,
  performance: Math.floor(Math.random() * 30) + 60,
};
```

**Required API:**
```
POST /api/seo/analyze
Content-Type: application/json

{
  "websiteUrl": "https://example.com",
  "email": "user@example.com"
}

Response: 200 OK
{
  "overall": 75,
  "technical": 68,
  "content": 82,
  "performance": 70
}
```

**Optional:** Send full report to email asynchronously.

---

### 3. Pricing CTAs (Foresight Page)

**Location:** `src/pages/Foresight.tsx` (Lines 153-156)

**Current State:** "Get Started" buttons do nothing.

**Suggested Flow:**
- Starter/Professional → Redirect to `/signup?plan=starter` or payment flow
- Enterprise → Open contact form or redirect to `/contact?plan=enterprise`

---

### 4. Trial & Demo CTAs

**Locations:** 
- `src/pages/Foresight.tsx` (Lines 77-84) - "Start Free Trial" + "Schedule Demo"
- `src/pages/Foresight.tsx` (Lines 205-208) - Bottom CTA

**Suggested APIs:**
```
POST /api/trial/start
POST /api/demo/schedule
```

---

## 📁 Project Structure

```
src/
├── App.tsx              # Main router setup
├── pages/
│   ├── Index.tsx        # Home page (assembles all sections)
│   ├── Foresight.tsx    # Product page
│   └── NotFound.tsx     # 404 page
├── components/
│   ├── Navbar.tsx       # Navigation (scroll-to-section logic)
│   ├── HeroSection.tsx  # Landing banner
│   ├── DifferentiatorSection.tsx  # "About" section
│   ├── ForesightSection.tsx       # Product teaser
│   ├── ServicesSection.tsx        # Services cards
│   ├── PublicationsSection.tsx    # Blog section
│   ├── Footer.tsx       # Contact form + footer
│   ├── SEOCalculator.tsx          # SEO analysis tool
│   ├── SocialSidebar.tsx          # Floating social links
│   ├── AnimatedSection.tsx        # Scroll animation wrapper
│   └── ui/              # shadcn/ui components (49 files)
├── hooks/
│   └── useParallax.ts   # Scroll effects
└── lib/
    └── utils.ts         # Utility functions
```

---

## 🎨 Design System

- **UI Library:** shadcn/ui (Radix + Tailwind)
- **Styling:** Tailwind CSS with custom design tokens
- **Animations:** CSS animations + scroll-based parallax
- **Theme:** Light mode with glassmorphism effects

### Key CSS Classes
- `glass-card` / `glass-card-strong` - Frosted glass effect
- `gradient-text` - Primary gradient text
- `animate-on-scroll` - Fade-in on scroll
- `bubble-float` / `bubble-rise` - Floating decorative elements

---

## 🔧 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.8.3 | Type Safety |
| Vite | 5.4.19 | Build Tool |
| React Router | 6.30.1 | Routing |
| Tailwind CSS | 3.4.17 | Styling |
| shadcn/ui | - | UI Components |
| TanStack Query | 5.83.0 | Data Fetching (ready to use) |
| Zod | 3.25.76 | Schema Validation |

---

## 📋 Backend Developer Checklist

### Minimum Viable Backend

- [ ] `POST /api/contact` - Contact form submission
- [ ] `POST /api/seo/analyze` - SEO score calculation

### Full Feature Set

- [ ] `POST /api/contact` - Contact form
- [ ] `POST /api/seo/analyze` - SEO calculator
- [ ] `POST /api/trial/start` - Free trial signup
- [ ] `POST /api/demo/schedule` - Demo scheduling
- [ ] `POST /api/newsletter/subscribe` - Newsletter (if added)
- [ ] User authentication (for trial/subscription)
- [ ] Stripe/payment integration (for pricing plans)

### Integration Notes

1. **CORS:** Enable for `localhost:8080` (dev) and your production domain
2. **Validation:** Frontend uses Zod - match schemas on backend
3. **State Management:** TanStack Query is pre-installed for API caching
4. **Error Handling:** Return consistent error format:
   ```json
   {
     "success": false,
     "error": "Error message here"
   }
   ```

---

## 📝 Notes for Developers

### Adding New Routes
Edit `src/App.tsx`:
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/foresight" element={<Foresight />} />
  <Route path="/your-new-route" element={<YourNewPage />} />
  {/* ADD ABOVE THE CATCH-ALL */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Adding New Nav Links
Edit `src/components/Navbar.tsx` (Line 38-43):
```tsx
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Your Link', href: '#your-section-id' },
  // ...
];
```

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes
3. Run `npm run lint` to check code quality
4. Commit and push
5. Create pull request

---

© 2025 TDSC. All rights reserved.
