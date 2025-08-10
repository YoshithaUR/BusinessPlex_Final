# Environment Variables Setup

To run the backend email functionality, you need to create a `.env` file in the backend directory with the following variables:

## Required Environment Variables

```env
# SMTP Configuration for Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Configuration
SENDER_MAIL=your-email@gmail.com

# Client Configuration
CLIENT_URL=http://localhost:5173

# Environment
NODE_ENV=development
```

## Email Flow Explanation

1. **Sender Email**: When someone submits the contact form, they receive a confirmation email
2. **Receiver Email**: The SMTP_USER receives an email with all the form details (firstName, lastName, email, age, contactNumber, message)

## SMTP Setup Instructions

### For Gmail:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use the generated password as `SMTP_PASS`

### For Other Email Providers:
- Update `SMTP_HOST` and `SMTP_PORT` according to your provider's settings
- Use your email credentials for `SMTP_USER` and `SMTP_PASS`

## Testing the Email Flow

1. Start the backend server: `npm run server`
2. Submit a contact form from the frontend
3. Check both:
   - The sender's email (confirmation email)
   - The SMTP_USER's email (form details notification)
