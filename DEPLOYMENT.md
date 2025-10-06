# 🚀 Deployment Guide - Csetényi Gépészet
## Deployment to mhosting.hu

### Pre-Deployment ✅

- [x] All security fixes applied
- [x] Build successful without errors
- [x] Source maps disabled in production
- [x] Security headers configured (.htaccess)
- [x] PWA manifest updated with branding
- [x] Sitemap and robots.txt configured
- [x] .gitignore updated

### Build for Production

1. **Create Production Build**
   ```bash
   npm run build
   ```

   This creates an optimized production build in the `dist` folder.

2. **Verify Build**
   - Check `dist` folder contains all files
   - `.htaccess` file should be in `dist` folder
   - All assets optimized (images, CSS, JS)

### Deploy to mhosting.hu

#### Option 1: FTP Upload (Manual)

1. **Connect via FTP**
   - Host: ftp.csetenyigergo.hu (or as provided by mhosting.hu)
   - Username: Your mhosting.hu username
   - Password: Your mhosting.hu password
   - Port: 21 (or 22 for SFTP)

2. **Upload Files**
   - Navigate to your `public_html` or `www` directory
   - Upload **all contents** of the `dist` folder (not the folder itself)
   - Ensure `.htaccess` file is uploaded (it might be hidden)
   - Keep folder structure intact:
     ```
     public_html/
     ├── .htaccess
     ├── index.html
     ├── manifest.webmanifest
     ├── robots.txt
     ├── sitemap.xml
     ├── assets/
     ├── images/
     └── sw.js
     ```

3. **Set File Permissions**
   - Files: 644 (rw-r--r--)
   - Folders: 755 (rwxr-xr-x)
   - .htaccess: 644

#### Option 2: File Manager (cPanel/DirectAdmin)

1. **Login to mhosting.hu Control Panel**
   - Go to your hosting control panel
   - Find "File Manager" or "Fájlkezelő"

2. **Upload via ZIP**
   - Compress the `dist` folder contents to `dist.zip`
   - Upload `dist.zip` to `public_html`
   - Extract the ZIP file
   - Delete the ZIP file after extraction

3. **Verify .htaccess**
   - Ensure `.htaccess` is present
   - Enable "Show hidden files" if needed

#### Option 3: Git Deployment (if supported)

If mhosting.hu supports Git deployment:
```bash
git add .
git commit -m "Production deployment"
git push origin master
```

Then configure Git deployment in your hosting panel.

### Post-Deployment Verification

1. **Check Website**
   - Visit: https://csetenyigergo.hu
   - Test HTTPS (should auto-redirect from HTTP)
   - Test all pages (Home, Services, Gallery, Contact)

2. **Test Functionality**
   - [x] Page navigation works
   - [x] Dark mode toggle works
   - [x] Contact form rate limiting works
   - [x] Images load correctly
   - [x] PWA installs on mobile
   - [x] Service worker caches correctly

3. **Test Security Headers**
   Visit: https://securityheaders.com/?q=https://csetenyigergo.hu
   
   **Expected Grade: A or A+** 🏆

4. **Test Performance**
   Visit: https://pagespeed.web.dev/analysis?url=https://csetenyigergo.hu
   
   **Expected Scores:**
   - Performance: 95+
   - Accessibility: 95+
   - Best Practices: 100
   - SEO: 95+

### SSL Certificate (HTTPS)

mhosting.hu typically provides free SSL certificates:

1. **Enable SSL in Control Panel**
   - Look for "SSL/TLS" or "Let's Encrypt" option
   - Enable free SSL certificate for your domain
   - Wait 5-15 minutes for activation

2. **Verify HTTPS**
   - Visit https://csetenyigergo.hu
   - Check for padlock icon in browser
   - .htaccess will auto-redirect HTTP → HTTPS

### Troubleshooting

**Issue: .htaccess not working**
- Ensure Apache mod_rewrite is enabled (contact mhosting.hu support)
- Check file permissions (should be 644)
- Verify .htaccess is in the root directory

**Issue: 404 errors on refresh**
- .htaccess should handle SPA routing
- Check RewriteEngine is On
- Contact mhosting.hu if mod_rewrite is disabled

**Issue: Images not loading**
- Check file permissions (644 for files, 755 for folders)
- Verify paths are correct (case-sensitive on Linux servers)
- Check `.htaccess` allows access to `/images/` folder

**Issue: CSS/JS not loading**
- Clear browser cache
- Check `/assets/` folder uploaded correctly
- Verify MIME types in server configuration

### Monitor After Launch

1. **Google Search Console**
   - Add property: https://search.google.com/search-console
   - Verify ownership via HTML file or DNS
   - Submit sitemap: https://csetenyigergo.hu/sitemap.xml

2. **Check Indexing**
   - Search: `site:csetenyigergo.hu` on Google
   - Wait 24-48 hours for initial indexing

3. **Monitor Performance**
   - Use Google Analytics (if implemented)
   - Check server logs in mhosting.hu panel
   - Monitor uptime with UptimeRobot (free)

### Update Process (Future Updates)

When you need to update the website:

1. Make changes locally
2. Run `npm run build`
3. Upload only changed files via FTP
4. Or upload entire `dist` folder contents

**Important:** Never edit files directly on the server!

---

## Emergency Contacts

If you encounter issues:
1. Check Netlify deploy logs
2. Review browser console for errors
3. Test in incognito mode
4. Clear service worker cache if needed

---

**You're all set! 🎉**
