# Email Setup Guide for Honoured Consult

## Important: Email Configuration Required

Your consultation booking email functionality is currently **NOT WORKING** because the email password in the `.env` file is a placeholder. Follow these steps to fix it:

## Step-by-Step Gmail App Password Setup

### 1. Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google," click **2-Step Verification**
4. Follow the prompts to enable 2-Step Verification

### 2. Create an App Password
1. After enabling 2-Step Verification, go back to **Security**
2. Under "Signing in to Google," click **App passwords**
3. You may need to sign in again
4. In the "Select app" dropdown, choose **Mail**
5. In the "Select device" dropdown, choose **Other (Custom name)**
6. Type "Honoured Consult Backend" and click **Generate**
7. Google will display a 16-character password
8. **Copy this password immediately** (you won't be able to see it again)

### 3. Update Your .env File
1. Open `/workspaces/honouredconsult/backend/.env`
2. Find the line: `SMTP_PASSWORD=your-email-password`
3. Replace `your-email-password` with the 16-character App Password you just copied
4. The line should look like: `SMTP_PASSWORD=abcd efgh ijkl mnop` (with or without spaces)
5. Save the file

### 4. Restart Your Backend Server
```bash
cd /workspaces/honouredconsult/backend
npm run dev
```

### 5. Test the Email Functionality
- When the server starts, you should see: `✓ Email server is ready to take our messages`
- If you see an error, double-check your App Password
- Try submitting a consultation request from your website to test

## Alternative: Using a Different Email Provider

If you don't want to use Gmail, you can configure other SMTP providers:

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

## Troubleshooting

### Error: "Invalid login: 535-5.7.8 Username and Password not accepted"
- Your App Password is incorrect
- Make sure you created an App Password (not your regular Gmail password)
- Try generating a new App Password

### Error: "Connection timeout"
- Check your SMTP_HOST and SMTP_PORT settings
- Make sure port 587 is not blocked by your firewall

### Email sends but doesn't arrive
- Check your spam folder
- Verify the SMTP_USER email is correct
- Make sure the sender email matches your SMTP_USER

## Features Implemented

### 1. Email Confirmation
When users book a consultation, they receive an automatic confirmation email with:
- Confirmation of their booking
- Your contact information
- Expected response time (24 hours)

### 2. Admin Notification
You receive an email notification whenever someone books a consultation, containing:
- Client's name and email
- Link to view full details in admin dashboard

### 3. Newsletter Emails
When you publish and send a newsletter from the admin dashboard:
- All active subscribers receive the newsletter via email
- Professional HTML email template
- Unsubscribe information included

## Security Best Practices

1. **Never commit your .env file to Git** - It's already in .gitignore
2. **Use App Passwords** - Never use your main Gmail password
3. **Rotate passwords regularly** - Generate new App Passwords every few months
4. **Monitor failed login attempts** - Check Google Security settings regularly

## Support

If you continue to have issues:
1. Check the backend console logs for detailed error messages
2. Verify your email credentials work by testing in another email client
3. Contact Google support if you can't generate an App Password

## Current Status

✅ Email service configured with proper error handling
✅ Transporter debug mode enabled for development
✅ TLS certificate validation disabled for testing
✅ Email templates created for confirmations
✅ Newsletter email functionality added

❌ **SMTP_PASSWORD needs to be updated with real credentials**

Once you update the password, the email functionality will work perfectly!
