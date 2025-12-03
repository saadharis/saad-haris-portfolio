# Deployment Instructions

## Quick Start (Local Development)

To run the portfolio locally:

```bash
npm run dev
```

Visit http://localhost:3000 to view your portfolio.

## Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `saad-haris-portfolio` (or your preferred name)
   - Make it Public or Private (Public recommended for portfolio)
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. **Push your local code to GitHub:**

```bash
cd "C:\Claude projects\Vibe Coding Projects\saad-haris-portfolio"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/saad-haris-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Deploy to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard (Recommended)

1. **Login to Cloudflare:**
   - Go to https://dash.cloudflare.com/
   - Login or create a free account

2. **Create a new Pages project:**
   - Click "Workers & Pages" in the sidebar
   - Click "Create application" → "Pages" → "Connect to Git"
   - Connect your GitHub account
   - Select your `saad-haris-portfolio` repository

3. **Configure build settings:**
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Root directory: `/` (leave as default)

4. **Environment variables (if needed):**
   - No environment variables required for this basic setup

5. **Deploy:**
   - Click "Save and Deploy"
   - Wait for the build to complete (2-3 minutes)
   - You'll get a URL like: `https://saad-haris-portfolio.pages.dev`

### Option 2: Via Wrangler CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npx wrangler pages deploy .next --project-name=saad-haris-portfolio
```

## Add Custom Domain

1. **In Cloudflare Pages Dashboard:**
   - Go to your Pages project
   - Click "Custom domains" tab
   - Click "Set up a custom domain"

2. **Add your domain:**
   - Enter your domain (e.g., `saadharis.com`)
   - Follow instructions to update DNS records
   - Wait for DNS propagation (can take 5-60 minutes)

3. **SSL Certificate:**
   - Cloudflare automatically provisions SSL certificate
   - Your site will be accessible via HTTPS

## Continuous Deployment

Once connected to GitHub:
- Any push to `main` branch automatically triggers a new deployment
- Pull requests create preview deployments
- Rollback to any previous deployment with one click

## Environment Variables (Future)

If you need to add environment variables later:

1. Go to Cloudflare Pages → Your Project → Settings → Environment variables
2. Add variables for production/preview environments
3. Redeploy for changes to take effect

## Build Optimization

The portfolio is already optimized for production:
- Static generation for maximum performance
- Automatic code splitting
- Image optimization (if you add images later)
- CSS minification and purging

## Monitoring

After deployment:
- Check Analytics in Cloudflare Pages dashboard
- Monitor Web Analytics (enable in Cloudflare dashboard)
- Set up alerts for deployment failures

## Troubleshooting

**Build fails:**
- Check build logs in Cloudflare Pages
- Verify all dependencies are in package.json
- Test build locally: `npm run build`

**Styles not loading:**
- Clear browser cache
- Verify Tailwind CSS imports in globals.css
- Check PostCSS configuration

**404 on routes:**
- Next.js static export handles this automatically
- Cloudflare Pages supports Next.js routing out of the box

## Next Steps

After deployment:
1. Test all sections and links
2. Check mobile responsiveness
3. Test on different browsers
4. Share your portfolio URL on LinkedIn
5. Add Google Analytics (optional)
6. Set up contact form backend (optional)

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js Docs: https://nextjs.org/docs
- Deployment Issues: Check Cloudflare Pages build logs
