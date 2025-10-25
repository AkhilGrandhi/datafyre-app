# Deployment Guide - Render

This guide will walk you through deploying your Data Fyre React application to Render.

## Prerequisites

- A [Render account](https://render.com/) (free tier available)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js and npm installed locally

## Step 1: Prepare Your Application

### 1.1 Verify Build Command

Make sure your `package.json` has the correct build script. Open `package.json` and verify:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 1.2 Test Build Locally

Run the build command locally to ensure it works:

```bash
cd data-fyre-frontend
npm install
npm run build
```

This should create a `dist` folder with your production-ready files.

### 1.3 Add `.gitignore` (if not already present)

Ensure your `.gitignore` includes:

```
node_modules/
dist/
.env
.env.local
```

## Step 2: Push Your Code to Git

If you haven't already, push your code to GitHub (or GitLab/Bitbucket):

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

## Step 3: Deploy on Render

### 3.1 Create a New Web Service

1. Log in to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** button
3. Select **"Static Site"**

### 3.2 Connect Your Repository

1. Click **"Connect a repository"**
2. Authorize Render to access your Git provider
3. Select your repository from the list

### 3.3 Configure Build Settings

Fill in the following settings:

| Setting | Value |
|---------|-------|
| **Name** | `datafyre-app` (or your preferred name) |
| **Branch** | `main` (or your default branch) |
| **Root Directory** | `data-fyre-frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### 3.4 Environment Variables (Optional)

If you have any environment variables (API keys, etc.):

1. Click **"Advanced"**
2. Add environment variables in the format `VITE_VARIABLE_NAME=value`
   - Note: Vite requires env variables to be prefixed with `VITE_`

### 3.5 Deploy

1. Click **"Create Static Site"**
2. Render will start building and deploying your app
3. Wait for the deployment to complete (usually 2-5 minutes)

## Step 4: Access Your Deployed App

Once deployment is complete:

1. Render will provide a URL like: `https://datafyre-app.onrender.com`
2. Click the URL to view your live application
3. You can customize this URL in the Settings

## Step 5: Custom Domain (Optional)

To use your own domain:

1. Go to your Static Site dashboard
2. Click **"Settings"**
3. Scroll to **"Custom Domains"**
4. Click **"Add Custom Domain"**
5. Enter your domain name
6. Follow the DNS configuration instructions provided by Render

Typical DNS settings:
- For `www.yourdomain.com`: Add a CNAME record pointing to your Render URL
- For `yourdomain.com`: Add A records as provided by Render

## Automatic Deployments

Render automatically deploys your app when you push to your connected branch:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. Render will automatically detect the changes and redeploy

## Troubleshooting

### Build Fails

**Issue**: Build command fails

**Solution**:
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Test `npm run build` locally first

### 404 Errors on Page Refresh

**Issue**: React Router routes return 404 when refreshing

**Solution**: Add a `_redirects` file in your `public` folder:

```bash
# Create the file
touch data-fyre-frontend/public/_redirects
```

Add this content:
```
/*    /index.html   200
```

Then commit and push:
```bash
git add data-fyre-frontend/public/_redirects
git commit -m "Add redirects for SPA routing"
git push origin main
```

### Video Not Playing

**Issue**: Background video doesn't play

**Solution**:
- Ensure video file is in the repository
- Check file size (keep under 10MB if possible)
- Consider hosting large videos on a CDN

### Environment Variables Not Working

**Issue**: `import.meta.env.VITE_*` variables are undefined

**Solution**:
- Ensure variable names are prefixed with `VITE_`
- Re-add them in Render dashboard under Settings → Environment
- Trigger a manual redeploy

## Performance Tips

### 1. Optimize Assets

Before deploying:
- Compress images using tools like TinyPNG
- Optimize video files (consider using WebM format as fallback)
- Keep video files small or use external hosting

### 2. Enable Compression

Render automatically handles Gzip compression for static sites.

### 3. Use a CDN (Optional)

For better global performance:
1. Upload static assets (videos, images) to Cloudinary, AWS S3, or similar
2. Update your code to reference CDN URLs
3. This keeps your repository lean and improves load times

## Monitoring Your Site

1. **Render Dashboard**: Check deployment status, build logs, and performance
2. **Analytics**: Add Google Analytics or similar to track visitors
3. **Uptime Monitoring**: Consider using services like UptimeRobot

## Cost

- **Free Tier**: Includes:
  - Unlimited static sites
  - Automatic SSL certificates
  - Continuous deployment
  - 100 GB bandwidth/month

- **Paid Tier** ($7/month per site):
  - More bandwidth
  - Custom domains without limits
  - Priority support

## Additional Resources

- [Render Documentation](https://render.com/docs/static-sites)
- [Vite Production Build Guide](https://vitejs.dev/guide/build.html)
- [React Router Deployment](https://reactrouter.com/en/main/guides/deployment)

## Support

If you encounter issues:
1. Check [Render Community Forum](https://community.render.com/)
2. Review build logs in Render dashboard
3. Contact Render support (support@render.com)

---

**Last Updated**: October 2025

