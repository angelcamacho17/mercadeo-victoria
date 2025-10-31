# Quick Deployment Guide

## Before You Deploy

### 1. Update Firebase Project ID
Edit `.firebaserc`:
```json
{
  "projects": {
    "default": "YOUR-FIREBASE-PROJECT-ID"
  }
}
```

### 2. Add Your VSL Video
Edit `src/app/app.component.ts` (line 133):
```typescript
constructor(private sanitizer: DomSanitizer) {
  this.setVideoUrl('https://www.youtube.com/embed/YOUR_VIDEO_ID');
}
```

### 3. Add Images
Place your images in the `public/assets/` directory:
- `hero-image.png` - Main hero section image
- `testimonial-1.png` through `testimonial-6.png` - Testimonial photos (optional)

### 4. Configure Checkout URL
Edit `src/app/app.component.ts` (line 150):
```typescript
purchaseCourse(): void {
  window.location.href = 'YOUR_CHECKOUT_URL_HERE';
}
```

## Deploy to Firebase

### First Time Setup
```bash
# Login to Firebase
firebase login

# List your projects to find your project ID
firebase projects:list
```

### Deploy
```bash
# Navigate to project folder
cd curso-marketing-landing

# Build and deploy
npm run deploy
```

## Local Testing

### Development Server
```bash
npm start
```
Visit: http://localhost:4200

### Production Build Test
```bash
npm run firebase:serve
```
Visit: http://localhost:5000

## Post-Deployment

1. Test the live site on multiple devices
2. Verify all images load correctly
3. Test the VSL video plays properly
4. Click all CTA buttons to verify checkout URL
5. Test on mobile devices

## Custom Domain (Optional)

1. Go to Firebase Console
2. Select your project
3. Go to Hosting
4. Click "Add custom domain"
5. Follow the instructions to add DNS records

## Troubleshooting

### "Project not found" error
```bash
firebase use YOUR-PROJECT-ID
```

### Images not showing
- Ensure images are in `public/assets/`
- Rebuild: `npm run build:prod`
- Redeploy: `firebase deploy`

### Video not loading
- Use embed URLs (not watch URLs)
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Development
npm start

# Build for production
npm run build:prod

# Deploy
npm run deploy

# Firebase login
firebase login

# List Firebase projects
firebase projects:list

# Use specific project
firebase use PROJECT-ID

# View deployment history
firebase hosting:sites:list
```

## Support

- Angular Docs: https://angular.dev
- Firebase Docs: https://firebase.google.com/docs/hosting
- Project README: See README.md for detailed info
