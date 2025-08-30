# BusinessPlex Final Project

A full-stack web application with React frontend and Node.js backend for BusinessPlex services.

## Project Structure

```
BusinessPlex_Final/
├── backend/          # Node.js backend server
├── frontend/         # React frontend application
└── README.md         # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git**

## Backend Setup

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (for email services)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Database Configuration (if applicable)
DATABASE_URL=your-database-connection-string

# JWT Secret (for authentication)
JWT_SECRET=your-jwt-secret-key
```

### 4. Start the Backend Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The backend server will start on `http://localhost:5000` (or the port specified in your .env file).

## Frontend Setup

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure API Endpoint
Update the API base URL in `src/api/api.js` to match your backend server:

```javascript
const API_BASE_URL = 'http://localhost:5000'; // Update this to match your backend
```

### 4. Start the Frontend Development Server
```bash
npm run dev
```

The frontend application will start on `http://localhost:5173` (or the next available port).

## API Endpoints

The backend provides the following main endpoints:

- **Application Form**: `/api/application`
- **Enrolment**: `/api/enrolment`
- **Newsletter**: `/api/newsletter`
- **Questions**: `/api/question`

## Development Workflow

1. **Start Backend First**: Always start the backend server before the frontend
2. **Check CORS**: Ensure CORS is properly configured in the backend for frontend communication
3. **Environment Variables**: Make sure all required environment variables are set
4. **Database**: If using a database, ensure it's running and accessible

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Change the PORT in your .env file
   - Or kill the process using the port: `npx kill-port 5000`

2. **CORS Errors**
   - Check that the backend CORS configuration includes your frontend URL
   - Verify the API base URL in the frontend matches the backend

3. **Email Service Issues**
   - Ensure email credentials are correct in .env
   - For Gmail, use App Passwords instead of regular passwords

4. **Module Not Found Errors**
   - Run `npm install` in both backend and frontend directories
   - Clear node_modules and reinstall if necessary

### Getting Help

- Check the backend logs for detailed error messages
- Review the backend documentation in `backend/README.md`
- Check the environment setup guide in `backend/ENVIRONMENT_SETUP.md`

## Production Deployment

For production deployment:

1. **Backend**: Set `NODE_ENV=production` in your environment variables
2. **Frontend**: Build the production version with `npm run build`
3. **Environment**: Ensure all production environment variables are configured
4. **Security**: Review security settings and CORS configuration

## Contributing

1. Create a feature branch from main
2. Make your changes
3. Test both frontend and backend functionality
4. Submit a pull request

## Support

For additional support or questions, refer to:
- Backend documentation in the `backend/` directory
- Environment setup guide: `backend/ENVIRONMENT_SETUP.md`
- Application form implementation: `backend/APPLICATION_FORM_IMPLEMENTATION.md`
- Email validation implementation: `EMAIL_VALIDATION_IMPLEMENTATION.md`
