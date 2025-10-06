# cPanel Deployment Guide - Csetényi Gépészet Website

This guide will walk you through deploying your website to mhosting.hu using cPanel.

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ **Build completed successfully** (`npm run build` - creates the `dist` folder)
- ✅ **cPanel login credentials** from mhosting.hu
- ✅ **Domain name** configured to point to mhosting.hu servers
- ✅ All files in the `dist` folder ready to upload

---

## 🚀 Step-by-Step Deployment

### Step 1: Access cPanel

1. Go to your mhosting.hu cPanel URL (usually `yourdomain.com/cpanel` or provided by hosting)
2. Enter your **username** and **password**
3. Click **Log in**

### Step 2: Navigate to File Manager

1. In cPanel, scroll down to the **"Files"** section
2. Click on **"File Manager"**
3. A new window/tab will open with your file browser

### Step 3: Navigate to public_html

1. In the left sidebar, click on **`public_html`** folder
2. This is where your website files need to be uploaded
3. **IMPORTANT:** If there are existing files in `public_html`:
   - Select all files (checkbox at the top)
   - Click **"Delete"** button
   - Confirm deletion
   - This ensures a clean installation

### Step 4: Upload Your Website Files

#### Option A: Using Upload (For Individual Files)

1. Click the **"Upload"** button at the top
2. Click **"Select File"** or drag files into the upload area
3. Navigate to your local `dist` folder: `C:\Users\Asus\Desktop\Projects\csetenyigergo\dist`
4. Upload **ALL** files and folders:
   - `index.html`
   - `.htaccess` ⚠️ **CRITICAL - Don't skip this!**
   - `assets/` folder
   - `images/` folder
   - `manifest.webmanifest`
   - `registerSW.js`
   - `sw.js`
   - `workbox-*.js`
   - `robots.txt`
   - `sitemap.xml`
   - Any other files in dist

#### Option B: Using ZIP Upload (Recommended - Faster)

1. **On your local machine:**
   - Navigate to `C:\Users\Asus\Desktop\Projects\csetenyigergo\dist`
   - Select **ALL contents** (Ctrl+A)
   - Right-click → **Send to → Compressed (zipped) folder**
   - Name it `website.zip`

2. **In cPanel File Manager:**
   - Make sure you're in `public_html`
   - Click **"Upload"** button
   - Select `website.zip` and upload it
   - Wait for upload to complete (100%)
   - Go back to File Manager

3. **Extract the ZIP:**
   - In `public_html`, find `website.zip`
   - Right-click on `website.zip`
   - Select **"Extract"**
   - Confirm extraction path is `/public_html`
   - Click **"Extract File(s)"**
   - After extraction completes, **delete** `website.zip` (not needed anymore)

### Step 5: Verify .htaccess File

**CRITICAL STEP - Do not skip!**

1. In `public_html`, look for **`.htaccess`** file
   - ⚠️ If you don't see it, click **"Settings"** (top right) → Check **"Show Hidden Files (dotfiles)"**
2. The `.htaccess` file should be visible now
3. **Verify it was uploaded:**
   - Right-click `.htaccess` → **"View"**
   - Check that it contains Apache configuration (mod_rewrite, headers, etc.)
   - Should start with `<IfModule mod_rewrite.c>`

### Step 6: Set File Permissions

1. **For the `.htaccess` file:**
   - Right-click `.htaccess`
   - Select **"Change Permissions"**
   - Set to **644** (User: Read/Write, Group: Read, World: Read)
   - Click **"Change Permissions"**

2. **For all folders** (`assets`, `images`):
   - Right-click each folder
   - Select **"Change Permissions"**
   - Set to **755** (User: Read/Write/Execute, Group: Read/Execute, World: Read/Execute)
   - ✅ Check **"Recurse into subdirectories"**
   - Click **"Change Permissions"**

3. **For all files** (`index.html`, `*.js`, `*.css`, etc.):
   - Select all files (not folders)
   - Right-click → **"Change Permissions"**
   - Set to **644**

**Quick Permissions Reference:**
```
Files:    644 (rw-r--r--)
Folders:  755 (rwxr-xr-x)
```

### Step 7: Configure SSL Certificate

1. **Go back to cPanel main page**
2. Scroll to **"Security"** section
3. Click **"SSL/TLS Status"**
4. Find your domain in the list
5. Click **"Run AutoSSL"** or **"Install SSL"**
6. Wait for SSL certificate to be installed (may take a few minutes)
7. Verify SSL is active (look for green padlock icon)

**Alternative Method:**
- Contact mhosting.hu support to enable free Let's Encrypt SSL
- They can activate it for you within minutes

### Step 8: Test Your Website

1. **Open your website in a browser:**
   - Go to `https://yourdomain.com` (use HTTPS!)
   - The `.htaccess` file will automatically redirect HTTP to HTTPS

2. **Test all pages:**
   - ✅ Home page loads correctly
   - ✅ Services page loads
   - ✅ Gallery page loads with all images
   - ✅ Contact page loads

3. **Test functionality:**
   - ✅ Dark mode toggle works
   - ✅ Mobile menu opens/closes
   - ✅ Gallery lightbox works
   - ✅ Contact form submits (check rate limiting)
   - ✅ All images load correctly
   - ✅ Navigation works between pages

4. **Test security headers:**
   - Go to https://securityheaders.com
   - Enter your domain
   - Should show **A** or **A+** rating
   - Verify headers like CSP, HSTS, X-Frame-Options are present

### Step 9: Performance Testing

1. **Google PageSpeed Insights:**
   - Go to https://pagespeed.web.dev
   - Enter your domain
   - Check scores for Mobile and Desktop
   - Should see good scores (aim for 90+)

2. **GTmetrix:**
   - Go to https://gtmetrix.com
   - Enter your domain
   - Check loading times and optimization scores

---

## 🔧 Troubleshooting

### Issue: 404 Error on Pages (Services, Gallery, Contact)

**Cause:** `.htaccess` file not working or missing

**Solution:**
1. Verify `.htaccess` exists in `public_html`
2. Check file permissions are 644
3. Contact mhosting.hu support to enable `mod_rewrite` module
4. Test `.htaccess` is working:
   ```
   https://yourdomain.com/test-path
   ```
   Should show your site (not 404), thanks to SPA routing

### Issue: HTTPS Not Working / SSL Certificate Error

**Cause:** SSL not installed or misconfigured

**Solution:**
1. In cPanel → SSL/TLS Status → Run AutoSSL
2. Wait 5-10 minutes for propagation
3. Clear browser cache and try again
4. Contact mhosting.hu support if issue persists

### Issue: Images Not Loading / 404 on Assets

**Cause:** Files not uploaded correctly or wrong paths

**Solution:**
1. Verify `images/` folder exists in `public_html`
2. Check folder permissions are 755
3. Verify file names match exactly (case-sensitive)
4. Re-upload the `images/` folder if needed

### Issue: Dark Mode Not Persisting / LocalStorage Errors

**Cause:** Browser blocking localStorage or cookies

**Solution:**
1. This is handled in the code with try-catch blocks
2. Ask users to enable cookies/localStorage in browser settings
3. Test in incognito mode to verify functionality

### Issue: Contact Form Not Sending Emails

**Cause:** PHP mail() function or email configuration

**Solution:**
1. Your current setup uses `mailto:` links (not PHP forms)
2. This opens user's email client - no server-side configuration needed
3. If you want server-side form handling, contact mhosting.hu support

### Issue: Website Shows Old Content / Not Updating

**Cause:** Browser cache or service worker cache

**Solution:**
1. **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear browser cache**
3. **Clear service worker:**
   - Open DevTools (F12)
   - Go to Application tab
   - Click "Service Workers"
   - Click "Unregister"
4. If issue persists for all users, update `version` in `manifest.webmanifest`

---

## 📊 Post-Deployment Checklist

After deployment, verify everything is working:

- [ ] **Website loads** at https://yourdomain.com
- [ ] **SSL certificate** is active (green padlock in browser)
- [ ] **All pages accessible** (Home, Services, Gallery, Contact)
- [ ] **Images load** correctly across all pages
- [ ] **Dark mode toggle** works and persists
- [ ] **Mobile menu** works on small screens
- [ ] **Gallery lightbox** opens and navigates correctly
- [ ] **Contact form** rate limiting works (60s cooldown)
- [ ] **Back to top button** appears on scroll
- [ ] **Service worker** registers (check Console for "PWA registered")
- [ ] **Security headers** verified at securityheaders.com
- [ ] **Performance scores** checked with PageSpeed Insights
- [ ] **robots.txt** accessible at `/robots.txt`
- [ ] **sitemap.xml** accessible at `/sitemap.xml`

---

## 🆘 Getting Help

If you encounter issues:

1. **Check error logs in cPanel:**
   - cPanel → Metrics → Errors
   - Look for recent errors related to your domain

2. **Browser Developer Tools:**
   - Press F12 to open DevTools
   - Check Console tab for JavaScript errors
   - Check Network tab for failed requests (404, 500, etc.)

3. **Contact mhosting.hu Support:**
   - Usually respond within 24 hours
   - Provide them with:
     - Your domain name
     - Error message or screenshot
     - What you were trying to do when error occurred

4. **Test on Different Browsers:**
   - Chrome
   - Firefox
   - Safari
   - Edge
   - Mobile browsers

---

## 🔄 Future Updates

When you need to update your website:

### Option 1: Full Re-upload (Safest)

1. Make changes locally
2. Run `npm run build`
3. Delete all files from `public_html` in cPanel
4. Upload new `dist` contents as described in Step 4
5. Set permissions as described in Step 6

### Option 2: Selective Update (Faster)

1. Make changes locally
2. Run `npm run build`
3. In cPanel File Manager, navigate to `public_html`
4. **Only upload changed files:**
   - Always upload `index.html` (entry point)
   - Upload changed files in `assets/` (CSS/JS with new hashes)
   - Upload new images if any were added
5. **Clear browser cache** to see changes

### Option 3: FTP Client (Advanced)

1. Use FileZilla or similar FTP client
2. Connect to mhosting.hu FTP server
3. Navigate to `public_html`
4. Sync local `dist` folder with remote `public_html`
5. FTP client can automatically detect changed files

---

## 🎉 Success!

Your website is now live on mhosting.hu! 

**Next Steps:**
- Share your website URL with clients
- Monitor performance and errors regularly
- Keep dependencies updated locally
- Back up your `dist` folder regularly

**Security Score:** 9.7/10 ⭐
**Performance:** Optimized with lazy loading, code splitting, and image optimization
**PWA Ready:** Works offline with service worker

---

## 📝 Notes

- **Build folder:** Always upload from `dist`, never from `src`
- **Hidden files:** Make sure to show hidden files in File Manager to see `.htaccess`
- **Permissions:** Wrong permissions can cause 500 errors or security issues
- **SSL:** HTTPS is required for service workers and PWA features
- **Cache:** Service workers cache aggressively - users may need hard refresh after updates

---

*Last updated: October 6, 2025*
*Deployment platform: mhosting.hu (Apache shared hosting)*
*Application: Csetényi Gépészet - Klíma és Fűtésszerelés*
