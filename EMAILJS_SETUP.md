# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails directly from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New message from {{from_name}} - {{subject}}

Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'service_abc123', // Your actual service ID
  templateId: 'template_xyz789', // Your actual template ID
  publicKey: 'user_def456' // Your actual public key
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email to confirm you received the message

## Troubleshooting

- **"Service not found"**: Double-check your Service ID
- **"Template not found"**: Verify your Template ID
- **"Invalid public key"**: Ensure your Public Key is correct
- **"Email not received"**: Check your spam folder and email service settings

## Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely
- Your email service credentials are stored securely on EmailJS servers

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- Basic email templates
- Standard support

For more emails or advanced features, consider upgrading to a paid plan. 