# 📦 How to Upload Your Portfolio to GitHub

## Step 1: Install Git (if not installed)

### Option A: Using winget (Recommended)
```powershell
winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
```

### Option B: Manual Installation
1. Download Git from: https://git-scm.com/download/win
2. Run the installer
3. **Important**: During installation, select "Add Git to PATH"
4. Restart your terminal/PowerShell after installation

### Verify Installation
```powershell
git --version
```

---

## Step 2: Configure Git (First Time Only)

Set your name and email:
```powershell
git config --global user.name "ragini kumari"
git config --global user.email "YOUR_EMAIL_HERE"
```

---

## Step 3: Initialize Git Repository

Navigate to your project folder:
```powershell
cd E:\Rave-Future\Rave-Future
```

Initialize Git:
```powershell
git init
```

---

## Step 4: Add All Files

Add all files to Git:
```powershell
git add .
```

Check what will be committed:
```powershell
git status
```

---

## Step 5: Create First Commit

```powershell
git commit -m "Initial commit: Portfolio website with personal details"
```

---

## Step 6: Create GitHub Repository

1. Go to https://github.com
2. Sign in (or create account if needed)
3. Click the **"+"** icon in top right → **"New repository"**
4. Repository name: `portfolio` (or any name you like)
5. Description: "My personal portfolio website"
6. Choose **Public** or **Private**
7. **DO NOT** check "Initialize with README" (we already have code)
8. Click **"Create repository"**

---

## Step 7: Connect Local Repo to GitHub

After creating the repo, GitHub will show you commands. Use these:

```powershell
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename main branch (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

You'll be asked for your GitHub username and password (or Personal Access Token).

---

## Step 8: If You Need a Personal Access Token

If GitHub asks for a token instead of password:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: "Portfolio Upload"
4. Select scopes: Check **"repo"** (full control)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 9: Verify Upload

1. Go to your GitHub repository page
2. You should see all your files there!

---

## 🚀 Optional: Deploy to GitHub Pages (Free Hosting)

To make your portfolio live on the web:

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **"GitHub Actions"**
4. Create a workflow file (or use Vercel/Netlify for easier deployment)

### Or Use Vercel (Easier):

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your GitHub repository
5. Build settings:
   - Framework Preset: **Vite**
   - Root Directory: `Rave-Future`
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
6. Click **"Deploy"**

---

## 📝 Quick Command Reference

```powershell
# Navigate to project
cd E:\Rave-Future\Rave-Future

# Initialize (first time only)
git init

# Add files
git add .

# Commit
git commit -m "Your commit message"

# Connect to GitHub (first time only)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Updated portfolio"
git push
```

---

## ⚠️ Important Notes

1. **Don't commit sensitive data**: Make sure `.env` files, API keys, etc. are in `.gitignore`
2. **Update contact info**: Remember to replace `YOUR_EMAIL_HERE`, `YOUR_USERNAME`, etc. in `user.json` before pushing
3. **Node modules**: Already in `.gitignore` - good!

---

## 🆘 Troubleshooting

### "Git is not recognized"
- Restart terminal after installing Git
- Or manually add Git to PATH

### "Authentication failed"
- Use Personal Access Token instead of password
- Make sure token has "repo" scope

### "Repository not found"
- Check your GitHub username is correct
- Make sure repo exists on GitHub

---

Good luck! 🎉


