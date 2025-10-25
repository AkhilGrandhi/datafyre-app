# Video Background Troubleshooting Guide

If the background video is not showing after deployment to Render, follow these troubleshooting steps.

## Quick Fix Steps

### 1. Verify Video is in Repository

Check if the video file is committed:

```bash
git ls-files | grep bg_animation
```

Expected output: `data-fyre-frontend/src/assets/bg_animation.mp4`

If not found, add and commit it:

```bash
git add data-fyre-frontend/src/assets/bg_animation.mp4
git commit -m "Add background video"
git push origin main
```

### 2. Updated Vite Configuration

The `vite.config.js` has been updated to properly handle video files. Make sure you commit these changes:

```bash
git add data-fyre-frontend/vite.config.js
git commit -m "Update Vite config for video assets"
git push origin main
```

### 3. Test Build Locally

Before deploying, test the build locally:

```bash
cd data-fyre-frontend
npm run build
npm run preview
```

Open the preview URL (usually http://localhost:4173) and check if the video shows.

### 4. Check Dist Folder

After building, verify the video is in the dist folder:

```bash
# Windows PowerShell
Get-ChildItem -Path dist\assets -Filter *.mp4 -Recurse

# Or check the entire dist folder
tree dist /F
```

You should see a file like `bg_animation-[hash].mp4` in the `dist/assets/` folder.

### 5. Trigger Render Redeploy

After pushing the updated `vite.config.js`:

1. Go to your Render dashboard
2. Select your static site
3. Click **"Manual Deploy"** → **"Deploy latest commit"**
4. Wait for the build to complete

## Common Issues & Solutions

### Issue 1: Video File Too Large

**Symptoms**: Build succeeds but video doesn't load in production

**Solution**: 
- Compress your video file (aim for under 5MB)
- Use online tools like [HandBrake](https://handbrake.fr/) or [CloudConvert](https://cloudconvert.com/)
- Consider hosting large videos on a CDN

### Issue 2: Browser Console Errors

**Check Browser Console**:
1. Open your deployed site
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Look for errors related to video loading

**Common Errors**:

- **404 Error**: Video file not found
  - Solution: Rebuild and redeploy with updated vite.config.js
  
- **MIME Type Error**: Incorrect content type
  - Solution: Usually handled automatically by Render
  
- **CORS Error**: Cross-origin resource sharing issue
  - Solution: Not applicable for Render static sites

### Issue 3: Video Path Issues

**Check the Hero Component Import**:

```javascript
import bgVideo from '../assets/bg_animation.mp4';
```

The path should be relative and use Vite's import system (not a public URL).

### Issue 4: Autoplay Blocked by Browser

**Symptoms**: Video element is present but not playing

**Solution**: Video already has correct attributes:
```javascript
<video
  autoPlay
  loop
  muted      // Required for autoplay
  playsInline // Required for mobile
>
```

Browsers only allow autoplay for muted videos.

### Issue 5: Build Output Missing Video

**If video is not in dist folder after build**:

1. Clear node_modules and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

2. Check if video is actually imported in your component (it is in Hero.jsx)

3. Ensure video is not in .gitignore:
```bash
# Check .gitignore
cat .gitignore | grep mp4
```

If found, remove that line and commit.

## Verify Deployment Checklist

- [ ] Video file exists in repository: `src/assets/bg_animation.mp4`
- [ ] Video is imported in Hero.jsx: `import bgVideo from '../assets/bg_animation.mp4'`
- [ ] Updated vite.config.js is committed and pushed
- [ ] Local build works: `npm run build && npm run preview`
- [ ] Video file appears in `dist/assets/` after build
- [ ] Latest changes are pushed to GitHub
- [ ] Render has been redeployed with latest commit
- [ ] Checked browser console for errors

## Alternative Solution: Use Public Folder

If the import method doesn't work, you can use the public folder approach:

### Step 1: Move Video to Public

```bash
# Move video to public folder
mv src/assets/bg_animation.mp4 public/bg_animation.mp4
```

### Step 2: Update Hero Component

Change the import in `src/components/Hero.jsx`:

```javascript
// Remove this line
// import bgVideo from '../assets/bg_animation.mp4';

// Update video source
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover blur-lg"
>
  <source src="/bg_animation.mp4" type="video/mp4" />
</video>
```

### Step 3: Commit and Deploy

```bash
git add public/bg_animation.mp4 src/components/Hero.jsx
git rm src/assets/bg_animation.mp4
git commit -m "Move video to public folder"
git push origin main
```

Files in the `public/` folder are copied as-is to the root of dist.

## Testing in Production

After deployment, check:

1. **Network Tab**:
   - Open DevTools → Network tab
   - Reload page
   - Look for the video file request
   - Check if it returns 200 (success) or 404 (not found)

2. **Video Element**:
   - Right-click on the video area
   - Select "Inspect Element"
   - Check if `<video>` element is present
   - Check the `src` attribute value

3. **Video URL**:
   - Copy the video src URL from the video element
   - Paste it in a new browser tab
   - See if the video downloads/plays

## Contact Support

If none of these solutions work:

1. Check Render build logs for any warnings about assets
2. Post in [Render Community Forum](https://community.render.com/)
3. Include:
   - Build logs
   - Browser console errors
   - Network tab screenshot
   - Link to your repository (if public)

---

**Note**: After updating vite.config.js, always:
1. Test locally first: `npm run build && npm run preview`
2. Commit and push changes
3. Wait for Render to automatically redeploy (or trigger manual deploy)

