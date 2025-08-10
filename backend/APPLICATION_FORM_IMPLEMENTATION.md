# Application Form Backend Implementation

## Overview
This document describes the backend implementation for the Business Training Application Form, following the same pattern as the existing contact form in `Home.jsx`.

## Architecture

The application form follows the same modular architecture as the contact form:

```
backend/src/
├── controller/
│   └── application.controller.js          # Handles form submission logic
├── middleware/
│   └── validation.middleware.js           # Contains applicationValidation rules
├── routes/
│   └── main.route.js                      # Updated with /application route
├── subjects/
│   └── sender/
│       └── application.welcome.subject.js # Email subject for applicant
└── templates/
    ├── sender/
    │   └── application.sender.template.js # Confirmation email to applicant
    └── reciever/
        └── application.reciever.template.js # Notification email to admin
```

## Components

### 1. Validation Middleware (`validation.middleware.js`)
- **File**: `backend/src/middleware/validation.middleware.js`
- **Function**: `applicationValidation`
- **Purpose**: Validates all form fields with comprehensive rules:
  - Personal information (name, email, phone, address, DOB)
  - Program details (type, start date, delivery mode)
  - Employment status and Centrelink information
  - Business information (idea, experience, industry)
  - Required declarations and consent

### 2. Application Controller (`application.controller.js`)
- **File**: `backend/src/controller/application.controller.js`
- **Purpose**: Handles the `/application` POST endpoint
- **Functionality**:
  - Extracts form data from request body
  - Sends confirmation email to applicant
  - Sends detailed notification email to admin
  - Returns success/error responses

### 3. Email Subject (`application.welcome.subject.js`)
- **File**: `backend/src/subjects/sender/application.welcome.subject.js`
- **Purpose**: Creates email configuration for applicant confirmation
- **Subject**: `Application Received - {ProgramType}`

### 4. Sender Template (`application.sender.template.js`)
- **File**: `backend/src/templates/sender/application.sender.template.js`
- **Purpose**: Professional confirmation email sent to applicant
- **Features**:
  - Personalized greeting with applicant name
  - Program-specific information
  - Next steps and timeline
  - Contact information
  - Reference number for tracking

### 5. Receiver Template (`application.reciever.template.js`)
- **File**: `backend/src/templates/reciever/application.reciever.template.js`
- **Purpose**: Detailed notification email sent to admin
- **Features**:
  - Complete application summary
  - All form data organized in tables
  - Business idea and experience details
  - Declaration status
  - Priority indicators
  - Action required section

### 6. Route Configuration (`main.route.js`)
- **File**: `backend/src/routes/main.route.js`
- **Route**: `POST /application`
- **Middleware**: Uses `withDefaultMiddleware` with `applicationValidation`

## Frontend Integration

### Updated Files
- **File**: `frontend/src/view/Forms/applicationForm.jsx`
- **Changes**:
  - Added `axiosInstance` import
  - Updated `handleSubmit` to use async/await
  - Added backend API call to `/application` endpoint
  - Implemented error handling for validation errors
  - Added loading state with spinner
  - Form reset on successful submission

### API Endpoint
- **URL**: `POST /application`
- **Content-Type**: `application/json`
- **Response**: 
  ```json
  {
    "message": "Application submitted successfully",
    "success": true
  }
  ```

## Email Flow

### 1. Applicant Confirmation Email
- **Recipient**: Applicant's email address
- **Subject**: `Application Received - {ProgramType}`
- **Content**: Professional confirmation with next steps

### 2. Admin Notification Email
- **Recipient**: `SMTP_USER` (admin email)
- **Subject**: `New Business Training Application - {ProgramType}`
- **Content**: Complete application details for review

## Validation Rules

### Required Fields
- First Name, Last Name, Email, Phone, Address
- Date of Birth (age 15-100)
- Program Type, Delivery Mode
- Employment Status, Centrelink Customer Status
- Business Idea Description, Industry Type
- All declarations (eligibility, accuracy, privacy)

### Optional Fields
- Suburb, Postcode, State
- Preferred Start Date
- Centrelink Number (if Centrelink customer)
- Business Experience, Business Stage
- Previous Training, Special Requirements
- How did you hear about us

### Validation Features
- Email format validation
- Phone number format (Australian)
- Date format validation
- Age range validation (15-100 years)
- Character limits for text fields
- Enum validation for dropdown fields
- Boolean validation for checkboxes

## Error Handling

### Frontend
- Form validation with error messages
- Backend validation error display
- Loading states during submission
- Success/error alerts

### Backend
- Input sanitization
- Comprehensive validation
- Email sending error handling
- Detailed error responses

## Security Features

- Input sanitization to prevent XSS
- Email validation and normalization
- Phone number format validation
- Age verification
- Required field validation
- Boolean validation for declarations

## Testing

To test the implementation:

1. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

3. **Fill out the application form** at `/ApplicationForm`

4. **Submit the form** and verify:
   - Success message appears
   - Form resets
   - Confirmation email sent to applicant
   - Notification email sent to admin
   - Console logs show successful submission

## Environment Variables Required

Ensure these environment variables are set in the backend:
- `SENDER_MAIL`: Email address for sending emails
- `SMTP_USER`: Admin email for receiving notifications
- `SMTP_PASS`: Email password
- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port

## Comparison with Contact Form

The application form follows the exact same pattern as the contact form:

| Component | Contact Form | Application Form |
|-----------|-------------|------------------|
| Route | `/contact` | `/application` |
| Controller | `question.controller.js` | `application.controller.js` |
| Validation | `contactValidation` | `applicationValidation` |
| Sender Subject | `sender.welcome.subject.js` | `application.welcome.subject.js` |
| Sender Template | `question.sender.template.js` | `application.sender.template.js` |
| Receiver Template | `question.reciever.template.js` | `application.reciever.template.js` |

This ensures consistency and maintainability across the application.
