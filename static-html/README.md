# Maison Atelier - Static HTML Version

This is a complete static HTML conversion of the Maison Atelier luxury interiors website. All pages retain the original design, styling, and interactive functionality from the React/Next.js version.

## Project Structure

```
static-html/
├── index.html              # Landing page with links to all sections
├── css/
│   └── styles.css         # Complete compiled CSS stylesheet
├── js/
│   └── main.js            # Interactive functionality (menus, drawers, etc.)
└── pages/
    ├── index.html         # Home page
    ├── about.html         # About page
    ├── shop.html          # Products catalog
    ├── services.html      # Services page
    ├── projects.html      # Featured projects
    ├── inspiration.html   # Design inspiration
    ├── blog.html          # Blog/Journal
    ├── trade.html         # Trade program
    └── contact.html       # Contact form
```

## Features Retained

✅ **Responsive Design** - Mobile, tablet, and desktop layouts  
✅ **Premium Styling** - Gold (#dea92f), ink (#111111), and cream (#f8f6f2) palette  
✅ **Typography** - Playfair Display for headings, Inter for body text  
✅ **Components** - Navigation, hero, cards, forms, footer all fully styled  
✅ **Interactions** - Mobile menu toggle, drawers (cart/wishlist), smooth scrolling  
✅ **Animations** - CSS-based hover states, transitions, and keyframe animations  
✅ **Navigation** - Mega-menu with product categories  
✅ **Forms** - Newsletter signup and contact form layouts  

## What Changed from React Version

- **Removed** - Framer Motion animations, GSAP scroll effects
- **Removed** - React-specific state management and hooks
- **Removed** - Next.js dynamic routing
- **Added** - Pure HTML structure with semantic elements
- **Added** - Vanilla JavaScript for interactive features
- **Maintained** - All visual design and CSS styling
- **Maintained** - Page hierarchy and content organization

## Getting Started

### Opening Locally

1. Extract this folder to your desired location
2. Open `static-html/index.html` in your web browser
3. Click on "Go to Home Page" or navigate directly to `pages/index.html`

### Using with a Local Server (Optional)

For best results with some browsers, serve files through a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000/static-html/`

## CSS Classes & Utilities

The stylesheet includes comprehensive utility classes:

- **Layout**: `section-wrapper`, `grid`, `flex`, `grid-cols-*`, `gap-*`
- **Typography**: `text-white`, `text-stone-*`, `text-gold`
- **Spacing**: `py-20`, `py-16`, `py-12`, `mt-*`
- **Colors**: Gold (`--brand-gold`), ink, paper, stone variables
- **Components**: Buttons (`.btn-primary`, `.btn-secondary`), cards, forms
- **Responsive**: Mobile-first breakpoints at 640px, 768px, 1024px

## Customization

### Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
  --brand-gold: #dea92f;
  --surface: #111111;
  --text-primary: #f8f6f2;
  /* ... */
}
```

### Typography

Change fonts in `css/styles.css`:

```css
body {
  font-family: 'Inter', system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, serif;
}
```

### Content

Edit HTML files in `pages/` directory to update:
- Text content
- Product information
- Images (update `src` attributes)
- Links and navigation

## Browser Support

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Hosting

These static files can be hosted on:

- **GitHub Pages** - Free static hosting
- **Netlify** - Free with automatic deployments
- **Vercel** - Free static hosting
- **AWS S3 + CloudFront** - Scalable CDN
- **Any web server** - Apache, Nginx, IIS, etc.

### Quick Netlify Deployment

1. Zip the `static-html` folder
2. Drag and drop into Netlify
3. Your site will be live instantly

## Performance Notes

- **Lightweight** - No JavaScript frameworks, pure vanilla JS
- **Fast Loading** - Single CSS file, minimal JavaScript
- **SEO-Friendly** - Semantic HTML structure
- **Accessibility** - ARIA labels and semantic elements

## Interactive Features

### Mobile Menu
- Click hamburger icon to toggle navigation
- Closes automatically when clicking a link
- Includes mega-menu for Shop category

### Drawers
- Click cart or wishlist icons to open drawers
- Click X or overlay to close
- Smooth slide-in animation

### Forms
- Newsletter signup form (ready for backend integration)
- Contact form with all fields
- Add backend processing as needed

## Next Steps

### To Add Backend Functionality

1. **Newsletter** - Connect to email service (Mailchimp, SendGrid, etc.)
2. **Contact Form** - Add form processing (Formspree, custom server, etc.)
3. **Shopping Cart** - Implement with localStorage or backend
4. **Search** - Add product filtering/search functionality

### To Add More Animations

Add CSS animations to `css/styles.css`:

```css
@keyframes customAnimation {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

Then apply: `animation: customAnimation 0.6s ease-out;`

## Support for Original Project

This static version is an alternative to the React/Next.js version. The original project remains unchanged and can still be developed using:

```bash
npm install
npm run dev
```

## License

Same as the original Maison Atelier project.

---

**Version**: 1.0  
**Last Updated**: 2026  
**Format**: Static HTML with CSS & Vanilla JavaScript
