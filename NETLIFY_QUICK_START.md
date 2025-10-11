# ⚡ Netlify Quick Start - Deploy in 5 Minutes!

## 🚀 Option 1: One-Command Deploy (Easiest!)

```bash
cd "/Users/sameh.jarour/GWC-Ecommerce /gwc-logistics"
./deploy-netlify.sh
```

That's it! The script will:
1. ✅ Install Netlify CLI (if needed)
2. ✅ Login to Netlify
3. ✅ Build your project
4. ✅ Deploy to production or preview

---

## 🌐 Option 2: Manual Deploy (3 Steps)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login
```bash
netlify login
```

### Step 3: Build & Deploy
```bash
cd "/Users/sameh.jarour/GWC-Ecommerce /gwc-logistics"
npm run build
netlify deploy --prod
```

---

## 📦 What's Included

✅ **Configuration Files:**
- `netlify.toml` - Build settings
- `.nvmrc` - Node v20
- `_redirects` - SPA routing
- `deploy-netlify.sh` - Auto-deploy script

✅ **Ready for:**
- Continuous deployment
- Custom domains
- HTTPS/SSL (automatic)
- Global CDN
- Serverless functions

---

## 🔐 Don't Forget Environment Variables!

After deploying, add these in Netlify dashboard:

```
Site Settings → Environment Variables → Add Variable
```

**Required:**
- `DATABASE_URL` - Your database connection
- `SESSION_SECRET` - Random secret key
- `NODE_ENV` = `production`

---

## 📚 Full Guide

See `NETLIFY_DEPLOYMENT_GUIDE.md` for:
- Detailed setup instructions
- Troubleshooting tips
- Custom domain setup
- Environment variable management
- Continuous deployment setup

---

## 🎉 You're Ready!

Your GWC Logistics site is packaged and ready for Netlify!

**Choose your method above and deploy in minutes!** 🚀

