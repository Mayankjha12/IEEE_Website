# Vercel Deployment Guide for IEEE NSUT Website

## Project Status ✅

The IEEE NSUT website is now fully prepared for deployment on Vercel. All errors have been resolved and the project builds successfully without warnings.

## What Was Fixed

1. **Removed Unused Import**: Removed the unused `joinNowLink` import from `HeroBanner.tsx` to eliminate ESLint warnings.

2. **Added Deployment Configuration Files**:
   - `vercel.json` - Explicit Vercel build configuration
   - `.vercelignore` - Specifies files to exclude from deployment
   - `.npmrc` - Optimizes npm package installation

3. **Verified Build**: Successfully tested production build with Next.js 15.4.10

## Project Details

- **Framework**: Next.js 15.4.10
- **Runtime**: Node.js (default)
- **Package Manager**: npm
- **Deployment**: Static generation with dynamic routes
- **Build Output**: `.next` directory

## Deployment Steps

### Option 1: Deploy from Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select the GitHub repository: `Mayankjha12/IEEE_Website`
4. Leave default settings (auto-detected Next.js configuration)
5. Click "Deploy"

### Option 2: Deploy Using Vercel CLI
```bash
npm install -g vercel
cd IEEE_Website
vercel
```

### Option 3: Deploy from GitHub with Auto-Deploy
1. Connect your GitHub repository to Vercel
2. Enable automatic deployments on push to main branch
3. Vercel will automatically build and deploy on every push

## Build Configuration

The project uses:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Framework**: Next.js

## Environment Variables

Currently, the project does not require any environment variables for basic functionality. If you add third-party integrations (API calls, databases, etc.), you can set environment variables in Vercel Dashboard → Project Settings → Environment Variables.

## Routes Available

- `/` - Homepage (main landing page)
- `/team` - Team page

## Performance Metrics

- Total Build Size: ~196 kB (First Load JS)
- Static Pages: 6
- Build Time: ~7-8 seconds

## Troubleshooting

### Build Fails on Vercel
- Check that all dependencies are correctly listed in `package.json`
- Verify no environment variables are missing
- Review build logs in Vercel Dashboard for specific errors

### Routes Not Found (404)
- Ensure all imported components exist
- Check file paths use absolute imports with `@/` alias (configured in `tsconfig.json`)
- Verify page files are in the correct `app/` directory structure

### Performance Issues
- Images are optimized using Next.js `Image` component
- Framer Motion animations are configured for smooth performance
- Consider enabling Vercel Edge Functions for faster response times

## Next Steps

1. Deploy the project to Vercel
2. Configure custom domain (if applicable)
3. Set up analytics and monitoring
4. Enable automatic SSL/TLS certificates
5. Configure production environment variables (if needed)

## Support

- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
- Deployment Status: Check Vercel Dashboard for deployment logs and metrics

---

**Last Updated**: July 6, 2026
**Status**: ✅ Ready for Production Deployment
