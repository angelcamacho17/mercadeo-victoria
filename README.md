# Curso Marketing Landing Page

A modern, high-end Angular 19 landing page for a marketing executive consultant selling an online course. Features a clean, minimalist design optimized for conversions.

## Features

- **Modern Angular 19** with standalone components
- **Responsive Design** - Works perfectly on all devices
- **High-End UI** - Minimalist and clean design
- **Optimized Performance** - Fast loading and smooth animations
- **Firebase Hosting Ready** - Pre-configured for easy deployment
- **SEO Friendly** - Structured for search engines

## Sections

1. **Header** - Sticky navigation with VSL video placeholder
2. **Hero Section** - Main headline with image placeholder
3. **Primary CTA** - Call-to-action with pricing and trust badges
4. **Steps Section** - 3 cards showing steps to $10K/month
5. **Secondary CTA** - Additional conversion point
6. **Testimonials** - 6 customer testimonials with ratings
7. **Final CTA** - Last conversion opportunity
8. **Footer** - Brand info and links

## Prerequisites

- Node.js (v20.10.0 or higher recommended)
- npm (v10.2.3 or higher)
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project

## Installation

```bash
# Navigate to the project directory
cd curso-marketing-landing

# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm start

# The app will be available at http://localhost:4200
```

## Configuration

### 1. Add Your Video Sales Letter (VSL)

Open `src/app/app.component.ts` and uncomment line 133-134, then add your video URL:

```typescript
constructor(private sanitizer: DomSanitizer) {
  // Add your video URL here (YouTube, Vimeo, etc.)
  this.setVideoUrl('https://www.youtube.com/embed/YOUR_VIDEO_ID');
}
```

### 2. Add Hero Image

Place your hero image at:
```
public/assets/hero-image.png
```

### 3. Add Testimonial Images (Optional)

Add testimonial images as:
```
public/assets/testimonial-1.png
public/assets/testimonial-2.png
... (up to testimonial-6.png)
```

If images are not provided, the app will show professional placeholder avatars with initials.

### 4. Configure Purchase Button

In `src/app/app.component.ts`, update the `purchaseCourse()` method:

```typescript
purchaseCourse(): void {
  window.location.href = 'YOUR_CHECKOUT_URL';
}
```

### 5. Customize Content

Edit the following in `src/app/app.component.ts`:
- Steps content
- Testimonials
- Pricing
- Brand name (default: "Social Mastery")

Update text in `src/app/app.component.html`:
- Headlines
- Descriptions
- Call-to-action text

## Firebase Deployment

### 1. Login to Firebase

```bash
firebase login
```

### 2. Create a Firebase Project

Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.

### 3. Initialize Firebase (if not already done)

```bash
firebase init hosting
```

Select your Firebase project and use these settings:
- Public directory: `dist/curso-marketing-landing/browser`
- Configure as single-page app: Yes
- Set up automatic builds: No

### 4. Update Firebase Project ID

Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

### 5. Build and Deploy

```bash
# Build and deploy in one command
npm run deploy

# Or separately:
npm run build:prod
firebase deploy
```

### 6. View Your Site

After deployment, Firebase will provide you with a URL like:
```
https://your-project-id.web.app
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production
- `npm run deploy` - Build and deploy to Firebase
- `npm run firebase:serve` - Test production build locally
- `npm test` - Run unit tests

## Customization Guide

### Colors

Edit variables in `src/app/app.component.scss`:

```scss
$primary-color: #000000;      // Main color
$accent-color: #2563eb;       // Buttons and accents
$text-primary: #0f172a;       // Main text
$text-secondary: #475569;     // Secondary text
```

### Typography

Update font families in the same file:

```scss
$font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
$font-display: 'Inter', -apple-system, ...;
```

### Section Order

Rearrange sections in `src/app/app.component.html` by moving the `<section>` blocks.

## Performance Optimization

The app is already optimized with:
- ✅ Production build minification
- ✅ CSS optimization
- ✅ Lazy loading ready
- ✅ Cache headers configured
- ✅ Efficient animations
- ✅ Responsive images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build:prod
```

### Firebase Deploy Issues

```bash
# Check if logged in
firebase login

# Check project
firebase projects:list

# Use specific project
firebase use your-project-id
```

### Video Not Showing

Make sure your video URL is in embed format:
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

## Project Structure

```
curso-marketing-landing/
├── src/
│   ├── app/
│   │   ├── app.component.html      # Main template
│   │   ├── app.component.scss      # Component styles
│   │   ├── app.component.ts        # Component logic
│   │   └── app.config.ts          # App configuration
│   ├── styles.scss                 # Global styles
│   └── index.html                  # HTML entry point
├── public/
│   └── assets/                     # Images go here
├── firebase.json                   # Firebase config
├── .firebaserc                    # Firebase project
└── angular.json                    # Angular config
```

## Support

For Angular issues: [Angular Documentation](https://angular.dev)
For Firebase issues: [Firebase Documentation](https://firebase.google.com/docs)

## License

Private - All rights reserved

## Next Steps

1. ✅ Add your VSL video URL
2. ✅ Add hero image and testimonial images
3. ✅ Update checkout URL in purchase button
4. ✅ Customize content and testimonials
5. ✅ Update Firebase project ID
6. ✅ Deploy to Firebase
7. ✅ Test on all devices
8. ✅ Connect custom domain (optional)

---

Built with ❤️ using Angular 19 and Firebase
# mercadeo-victoria
