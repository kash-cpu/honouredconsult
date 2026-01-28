# ✅ Pre-Launch Checklist - Honoured Consult

## 🚨 CRITICAL - Must Do Before Going Live

### 1. ⚠️ Configure Email (BLOCKING)
- [ ] Read `EMAIL_SETUP_GUIDE.md`
- [ ] Get Gmail App Password from Google Account
- [ ] Update `backend/.env` with App Password
- [ ] Start backend server
- [ ] Verify email connection: Look for `✓ Email server is ready`
- [ ] Test by booking a consultation
- [ ] Verify confirmation email received
- [ ] Verify admin notification received

**Until this is done, NO emails will be sent!**

---

## 📋 Backend Configuration

### Environment Variables (.env)
- [ ] `MONGODB_URI` - Points to production MongoDB
- [ ] `JWT_SECRET` - Strong, unique secret key
- [ ] `ADMIN_EMAIL` - Your admin email
- [ ] `ADMIN_PASSWORD` - Strong admin password
- [ ] `SMTP_HOST` - Email server (gmail: smtp.gmail.com)
- [ ] `SMTP_PORT` - Email port (587)
- [ ] `SMTP_USER` - Your email address
- [ ] `SMTP_PASSWORD` - Gmail App Password (16 characters)
- [ ] `FRONTEND_URL` - Production frontend URL
- [ ] `NODE_ENV` - Set to "production"

### Database
- [ ] MongoDB is running
- [ ] Database connection string is correct
- [ ] Database user has proper permissions
- [ ] Collections will be auto-created on first use

### Server
- [ ] Backend builds successfully: `npm run build`
- [ ] No TypeScript errors
- [ ] All dependencies installed: `npm install`
- [ ] Port 5000 is available (or change PORT in .env)

---

## 🎨 Frontend Configuration

### Environment Variables (.env)
- [ ] `VITE_API_URL` - Backend API URL (e.g., https://api.yoursite.com/api)

### Build
- [ ] Frontend builds successfully: `npm run build`
- [ ] No build errors
- [ ] All dependencies installed: `npm install`
- [ ] Assets are optimized

### Routes
- [ ] `/` - Home page works
- [ ] `/newsletters` - Newsletter page works
- [ ] `/privacy` - Privacy page works
- [ ] `/terms` - Terms page works
- [ ] Navigation between pages works

---

## 🧪 Testing Checklist

### Email System
- [ ] Book a consultation → Client gets confirmation email
- [ ] Book a consultation → Admin gets notification email
- [ ] Create & send newsletter → Subscribers receive it
- [ ] Check spam folders if emails don't appear
- [ ] Verify email formatting looks good

### Admin Dashboard - Login
- [ ] Can access admin dashboard
- [ ] Login with admin credentials works
- [ ] Non-admin users see login prompt
- [ ] Logout works properly

### Admin Dashboard - Clients Tab
- [ ] Can view all consultations
- [ ] Statistics cards show correct numbers
- [ ] Pending clients show orange badge
- [ ] Contacted clients show green badge
- [ ] Client cards display all information
- [ ] Email button opens email client
- [ ] Call button opens phone dialer
- [ ] WhatsApp button opens WhatsApp
- [ ] Status updates when contacted
- [ ] Contact method is recorded
- [ ] Contact timestamp is saved

### Admin Dashboard - Newsletter Tab
- [ ] Can create new newsletter
- [ ] Can edit existing newsletter
- [ ] Can delete newsletter
- [ ] Can publish/unpublish newsletter
- [ ] Can send to subscribers
- [ ] Sent count is tracked
- [ ] Newsletter appears on public page when published

### Admin Dashboard - Subscribers Tab
- [ ] Can view all subscribers
- [ ] Active/inactive status shown
- [ ] Subscriber count matches statistics card
- [ ] Join date is displayed

### Admin Dashboard - Searches Tab
- [ ] User searches are logged
- [ ] Search details are displayed
- [ ] Timestamps are correct

### Public Newsletter Page
- [ ] Page loads at `/newsletters`
- [ ] Can subscribe with email
- [ ] Can optionally add name
- [ ] Success message shows after subscription
- [ ] Can view published newsletters
- [ ] Can expand newsletter to read full content
- [ ] Latest newsletters show first
- [ ] Page is mobile responsive

### Navigation
- [ ] Newsletter link in main nav works
- [ ] Newsletter link in mobile menu works
- [ ] Home link works
- [ ] All other nav links work

### Responsiveness
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Touch targets are 44x44px minimum
- [ ] Text is readable on all devices
- [ ] Images scale properly
- [ ] Buttons are accessible

---

## 🔐 Security Checklist

### Passwords & Secrets
- [ ] Admin password is strong (12+ characters)
- [ ] JWT_SECRET is random and strong
- [ ] SMTP_PASSWORD is an App Password (not regular password)
- [ ] .env file is in .gitignore
- [ ] Never commit .env to git

### Authentication
- [ ] Admin routes require authentication
- [ ] JWT tokens expire appropriately
- [ ] Logout clears tokens
- [ ] Protected routes redirect to login

### Data Protection
- [ ] Subscriber emails are validated
- [ ] SQL injection protected (using Mongoose)
- [ ] XSS protected (React escapes by default)
- [ ] CORS configured correctly

---

## 📊 Performance Checklist

### Backend
- [ ] API responses are fast (<500ms)
- [ ] Database queries are optimized
- [ ] Error handling is in place
- [ ] Logs are being written

### Frontend
- [ ] Page load time is acceptable
- [ ] Images are optimized
- [ ] Bundle size is reasonable
- [ ] No console errors
- [ ] No console warnings (except CSS warnings - those are fine)

---

## 📱 Mobile Testing Checklist

### Layout
- [ ] Admin dashboard adapts to small screens
- [ ] Newsletter page is mobile friendly
- [ ] Forms are easy to use on mobile
- [ ] Buttons are large enough to tap

### Functionality
- [ ] Can login on mobile
- [ ] Can navigate admin dashboard
- [ ] Can create newsletter on mobile
- [ ] Can subscribe on mobile
- [ ] Email/call/WhatsApp buttons work

---

## 🌐 Production Deployment Checklist

### DNS & Hosting
- [ ] Domain name configured
- [ ] DNS records point to server
- [ ] SSL certificate installed (HTTPS)
- [ ] Server has enough resources (RAM, CPU)

### Backend Deployment
- [ ] Backend code deployed to server
- [ ] Dependencies installed on server
- [ ] .env file created on server
- [ ] MongoDB accessible from server
- [ ] Server is running: `npm start`
- [ ] Process manager configured (PM2, systemd, etc.)
- [ ] Auto-restart on crash configured
- [ ] Logs are accessible

### Frontend Deployment
- [ ] Frontend built: `npm run build`
- [ ] dist/ folder deployed to hosting
- [ ] VITE_API_URL points to production backend
- [ ] Static files served correctly
- [ ] CDN configured (optional but recommended)

### Monitoring
- [ ] Server monitoring set up
- [ ] Error tracking configured
- [ ] Uptime monitoring enabled
- [ ] Backup system in place

---

## 📝 Content Checklist

### Before Launch
- [ ] Create welcome newsletter
- [ ] Write 2-3 sample newsletters
- [ ] Add your actual phone number to site
- [ ] Update footer with correct info
- [ ] Update privacy policy
- [ ] Update terms of service

---

## 🚀 Launch Day Checklist

### Final Tests
- [ ] Test full user flow: Subscribe → Receive newsletter
- [ ] Test full admin flow: Create → Publish → Send newsletter
- [ ] Test consultation booking end-to-end
- [ ] Verify all emails are being sent
- [ ] Check all pages load correctly
- [ ] Test on different browsers (Chrome, Safari, Firefox)

### Go Live
- [ ] Backend server running
- [ ] Frontend deployed
- [ ] Database accessible
- [ ] Emails sending successfully
- [ ] No critical errors in logs

### Post-Launch
- [ ] Monitor server logs for errors
- [ ] Check email delivery rates
- [ ] Monitor subscriber sign-ups
- [ ] Respond to test consultations
- [ ] Share newsletter page on social media

---

## 📞 Quick Reference

### Start Servers (Development)
```bash
# Backend
cd /workspaces/honouredconsult/backend
npm run dev

# Frontend
cd /workspaces/honouredconsult/frontend
npm run dev
```

### Build for Production
```bash
# Backend
cd /workspaces/honouredconsult/backend
npm run build
npm start

# Frontend
cd /workspaces/honouredconsult/frontend
npm run build
```

### Access Points
- Frontend: http://localhost:5173 (dev) or your domain (prod)
- Backend API: http://localhost:5000/api (dev) or your API domain (prod)
- Newsletter Page: /newsletters
- Admin Dashboard: Click user icon → Login

### Test Credentials
- Email: info@honouredconsult.com
- Password: Your ADMIN_PASSWORD from .env

---

## 🆘 Troubleshooting Quick Guide

### Email Not Sending
→ Check `EMAIL_SETUP_GUIDE.md`
→ Verify SMTP_PASSWORD is correct
→ Look for error in backend logs

### Admin Dashboard Not Loading
→ Check if logged in
→ Check browser console for errors
→ Verify backend is running

### Newsletter Not Appearing
→ Make sure it's published
→ Check `/newsletters` page
→ Clear browser cache

### Can't Login
→ Verify credentials in .env
→ Check JWT_SECRET is set
→ Check backend logs

---

## ✅ Ready to Launch?

Once all checkmarks are complete:

1. ✅ Email is configured and tested
2. ✅ All features tested and working
3. ✅ Mobile responsive verified
4. ✅ Security measures in place
5. ✅ Production environment configured
6. ✅ Monitoring set up
7. ✅ Content prepared

**You're ready to launch! 🚀**

---

## 📚 Documentation Reference

- `QUICK_START.md` - Quick start guide
- `EMAIL_SETUP_GUIDE.md` - Email configuration
- `NEW_FEATURES_DOCUMENTATION.md` - Feature documentation
- `ADMIN_DASHBOARD_GUIDE.md` - Dashboard visual guide
- `IMPLEMENTATION_SUMMARY.md` - What was built
- `CHECKLIST.md` - This file

---

**Good luck with your launch!** 🎉

*Remember: The most important step is configuring email. Everything else is ready!*
