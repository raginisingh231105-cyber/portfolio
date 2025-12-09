# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to [vercel.com](https://vercel.com)** and sign in with your GitHub account

2. **Click "Add New Project"**

3. **Import your GitHub repository:**
   - Select `raginisingh231105-cyber/portfolio`
   - Vercel will auto-detect the settings

4. **Configure Project Settings:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (or leave default)
   - **Build Command:** `npm run build:client`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`

5. **Click "Deploy"**

6. **Your portfolio will be live in ~2 minutes!** 🎉

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts** and your site will be deployed!

---

## Deploy to Netlify (Alternative)

1. **Go to [netlify.com](https://netlify.com)** and sign in with GitHub

2. **Click "Add new site" → "Import an existing project"**

3. **Select your repository:** `raginisingh231105-cyber/portfolio`

4. **Build settings:**
   - **Build command:** `npm run build:client`
   - **Publish directory:** `dist/public`

5. **Click "Deploy site"**

---

## Environment Variables

If you need to add environment variables later (for API keys, etc.):
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment Variables

---

## Custom Domain

After deployment, you can add a custom domain:
- **Vercel:** Project Settings → Domains
- **Netlify:** Site Settings → Domain Management

---

## Continuous Deployment

Both platforms automatically deploy when you push to GitHub! 🚀

Just push your changes:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Your site will automatically update!

