# Y&T Sensory Website - Deployment Guide

## Quick Start Deployment

### Option 1: Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and provides the best experience for deploying Next.js apps.

1. **Sign up on Vercel** (if you don't have an account):
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Connect your repository**:
   - Import your GitHub repository in Vercel dashboard
   - Or, use the Vercel CLI:
     ```bash
     npm i -g vercel
     vercel
     ```

3. **Configure environment variables** (if any):
   - In Vercel dashboard, go to Settings > Environment Variables
   - No environment variables are currently required for this project

4. **Deploy**:
   - Push to main branch or click "Deploy" in Vercel dashboard
   - Your site will be live in seconds!

### Option 2: Deploy to Netlify

1. **Sign up on Netlify**: https://app.netlify.com/signup

2. **Connect repository**:
   - Authorize Netlify to access your GitHub
   - Select the repository

3. **Build settings**:
   - Build command: `pnpm build`
   - Publish directory: `.next`

4. **Deploy**:
   - Netlify automatically builds and deploys on git push

### Option 3: Self-Hosted (VPS/Server)

1. **Build the project**:
   ```bash
   pnpm install
   pnpm build
   ```

2. **Start the production server**:
   ```bash
   pnpm start
   ```

3. **Use a process manager** (PM2, systemd, etc.):
   ```bash
   npm install -g pm2
   pm2 start "pnpm start" --name "yt-sensory"
   ```

4. **Set up reverse proxy** (Nginx example):
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
     }
   }
   ```

5. **Set up SSL** (Let's Encrypt):
   ```bash
   sudo apt install certbot
   certbot certonly --standalone -d yourdomain.com
   ```

## Pre-Deployment Checklist

- [ ] Update all company information and contact details
- [ ] Verify all images are properly optimized and loading
- [ ] Test responsive design on mobile devices
- [ ] Check all links are working correctly
- [ ] Test contact form functionality
- [ ] Update SEO metadata in `app/layout.tsx`
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test in Chrome, Firefox, Safari, and Edge
- [ ] Verify page performance (Lighthouse)
- [ ] Set up SSL certificate

## Performance Optimization

### Before Deployment

1. **Enable Image Optimization**:
   - Already configured in Next.js
   - Images are automatically optimized

2. **Enable Compression**:
   - Set in `next.config.mjs`

3. **Minimize Bundle**:
   ```bash
   pnpm build --analyze
   ```

### Monitoring & Analytics

1. **Add Google Analytics**:
   ```bash
   npm install @react-google-analytics/core
   ```

2. **Add Monitoring**:
   - Vercel Analytics (free with Vercel)
   - Sentry (error tracking)
   - LogRocket (session replay)

## Environment Variables

Current project doesn't require environment variables, but if you add them:

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
SECRET_KEY=your-secret-key
```

## Domain Configuration

### Add Custom Domain

**On Vercel**:
1. Settings > Domains
2. Add your domain
3. Add DNS records as shown
4. SSL certificate auto-generates

**On Netlify**:
1. Domain settings
2. Add custom domain
3. Update DNS records
4. SSL certificate auto-generates

### DNS Records to Add

```
Type: A
Name: @
Value: (provided by your host)

Type: CNAME
Name: www
Value: (provided by your host)
```

## Post-Deployment Verification

After deployment, verify:

1. **Website loads correctly**: Visit your domain
2. **Images display**: Check all images load properly
3. **Animations work**: Scroll through and verify animations
4. **Forms work**: Test contact form submission
5. **Mobile responsive**: Test on mobile devices
6. **Performance**: Run Lighthouse audit
7. **SEO**: Verify meta tags in page source

## Continuous Deployment (CD)

### Automatic Deployments

**Vercel**: Automatically deploys on every git push to main

**Netlify**: Automatically deploys on every git push to main

**Manual**: Use CLI:
```bash
vercel --prod
# or
netlify deploy --prod
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

### Images Not Loading
- Verify images are in `public/images/` directory
- Check image paths in components
- Ensure image formats are supported (JPG, PNG, WebP)

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Del)
- Rebuild: `pnpm build`
- Verify Tailwind config is correct

### Form Not Submitting
- Check browser console for errors
- Verify form action endpoint
- Test in different browser

## Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Configure CORS if needed
- [ ] Validate form inputs
- [ ] Sanitize user input
- [ ] Set up rate limiting
- [ ] Regular security audits

## Backup & Disaster Recovery

1. **Regular backups**:
   - Use git for version control
   - Keep multiple branches
   - Tag releases: `git tag v1.0.0`

2. **Rollback procedure**:
   ```bash
   git revert <commit-hash>
   git push
   # Vercel/Netlify auto-deploys
   ```

## Support & Maintenance

### Regular Tasks
- Monitor site performance
- Check analytics
- Update content regularly
- Keep dependencies updated:
  ```bash
  pnpm update
  ```

### Dependency Updates
```bash
# Check for updates
pnpm outdated

# Update packages
pnpm upgrade

# Update Next.js specifically
pnpm update next
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Deployment Support**: For issues, contact Vercel or Netlify support, or refer to the main README.md
