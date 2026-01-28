# 🎓 Honoured Educational Consult

> Your trusted partner for study abroad consultations

## 🚀 Recent Major Upgrades (January 2026)

This project has been significantly enhanced with professional features:

### ✨ New Features
- ✅ **Professional Admin Dashboard** - Track clients, manage newsletters, monitor engagement
- ✅ **Client Contact Tracking** - Email/Phone/WhatsApp integration with status tracking
- ✅ **Newsletter System** - Create, publish, and distribute newsletters
- ✅ **Email Functionality** - Automatic confirmations and notifications
- ✅ **Subscriber Management** - Build and manage your email list
- ✅ **Modern UI/UX** - Gradient designs, smooth animations, mobile responsive

## 📚 Documentation

**Start Here:**
1. 📖 [QUICK_START.md](./QUICK_START.md) - Get started in 5 minutes
2. ⚠️ [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md) - **REQUIRED**: Fix email functionality
3. ✅ [CHECKLIST.md](./CHECKLIST.md) - Pre-launch checklist

**Learn More:**
- [NEW_FEATURES_DOCUMENTATION.md](./NEW_FEATURES_DOCUMENTATION.md) - Complete feature guide
- [ADMIN_DASHBOARD_GUIDE.md](./ADMIN_DASHBOARD_GUIDE.md) - Visual dashboard guide
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - What was built

## ⚠️ Critical: Email Setup Required

**Your email functionality won't work until you configure it!**

Follow [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md) to:
1. Get a Gmail App Password
2. Update `backend/.env` with your password
3. Restart the backend server

## 🏃‍♂️ Quick Start

```bash
# 1. Start Backend
cd backend
npm install
npm run dev

# 2. Start Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

Then configure email following [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md)

## 🌟 Key Features

### For Admins
- 📊 **Dashboard Statistics** - Total clients, pending contacts, subscribers
- 👥 **Client Management** - Track and contact clients easily
- 📰 **Newsletter Creation** - Write and publish newsletters
- 📧 **Email Distribution** - Send to all subscribers with one click
- 📱 **Contact Methods** - Email, phone, and WhatsApp integration
- 📈 **Analytics** - Track user searches and engagement

### For Visitors
- 📰 **Newsletter Page** - Subscribe and read newsletters
- 💼 **Book Consultations** - Get automatic email confirmations
- 🔍 **Search Courses** - Find programs and universities
- 📱 **Mobile Friendly** - Works on all devices

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, TypeScript, MongoDB, Nodemailer
- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **UI Components**: Shadcn UI, Framer Motion
- **Authentication**: JWT

## 📁 Project Structure

```
honouredconsult/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── models/         # MongoDB models (Newsletter, Subscriber, etc.)
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # Email service, etc.
│   │   └── middleware/     # Authentication
│   └── .env               # ⚠️ CONFIGURE THIS!
├── frontend/               # React application
│   ├── src/
│   │   ├── pages/         # Newsletter page, etc.
│   │   └── components/    # UI components
├── EMAIL_SETUP_GUIDE.md   # ⚠️ START HERE for email
├── QUICK_START.md         # Quick setup guide
└── CHECKLIST.md           # Pre-launch checklist
```

## 🎯 What You Need to Do

1. **Configure Email** (CRITICAL)
   - Follow [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md)
   - Get Gmail App Password
   - Update `backend/.env`

2. **Test Everything**
   - Book a consultation
   - Create a newsletter
   - Send to subscribers
   - Test contact tracking

3. **Launch**
   - Follow [CHECKLIST.md](./CHECKLIST.md)
   - Deploy to production
   - Start using!

## 🎓 Usage Examples

### Create a Newsletter
1. Login to admin dashboard
2. Click "News" tab
3. Click "Create Newsletter"
4. Write your content
5. Publish and send to subscribers

### Track Client Contacts
1. Go to "Clients" tab
2. See pending clients (orange badge)
3. Click "Email Client" to contact
4. Status updates to contacted (green badge)

### Manage Subscribers
1. Go to "Subscribers" tab
2. View all subscribers
3. Track growth over time

## 🔧 Development

```bash
# Backend development
cd backend
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build

# Frontend development
cd frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🌐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/honoured-consult
JWT_SECRET=your-secret-key
ADMIN_EMAIL=info@honouredconsult.com
ADMIN_PASSWORD=your-admin-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@honouredconsult.com
SMTP_PASSWORD=your-gmail-app-password  # ⚠️ CONFIGURE THIS!
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📞 Support

Having issues?
1. Check [QUICK_START.md](./QUICK_START.md)
2. Review [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md) for email issues
3. Check backend logs for errors
4. Verify environment variables are set

## 📝 License

See LICENSE file for details.

## 🙏 Credits

Built with modern technologies and best practices for Honoured Educational Consult.

---

**Remember**: The most important step is configuring email. Everything else is ready to use!

Start with: [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md) ⚠️
