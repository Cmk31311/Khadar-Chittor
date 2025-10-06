# Khadar Chittor - Portfolio Website

A modern, high-performance portfolio website built with React, Node.js, and MongoDB. Features a neural network animated background, responsive design, and a full-stack contact system.

🌐 **Live Website**: https://khadar-chittor.vercel.app/

## 🚀 Features

- **Modern React Architecture**: Built with React 18, Vite, and modern ES6+ features
- **Neural Network Animations**: Custom canvas-based animated background
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Full-Stack Contact System**: Node.js backend with MongoDB and email notifications
- **Security**: Rate limiting, input validation, and security headers
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

### Frontend
- React 18 with Hooks
- Vite (Build tool)
- Tailwind CSS
- React Router
- Custom CSS animations

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (Email service)
- Helmet (Security)
- Express Rate Limit

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd khadar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database
   MONGODB_URI=mongodb://localhost:27017/portfolio

   # Email Configuration (Optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Security
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

4. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

## 🚀 Development

### Start Development Server
```bash
npm run start
```
This will start both the frontend (Vite) and backend (Express) servers concurrently.

### Start Individual Services
```bash
# Frontend only
npm run dev

# Backend only
npm run serve
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
khadar-portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.jsx
│   │   ├── NeuralBackground.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── styles/             # CSS and styling
│   │   └── index.css
│   ├── App.jsx             # Main App component
│   └── main.jsx            # React entry point
├── server/
│   ├── routes/              # API routes
│   │   └── contact.js
│   ├── models/              # Database models
│   │   ├── Contact.js
│   │   └── database.js
│   └── index.js             # Server entry point
├── public/                  # Static assets
├── vercel.json             # Vercel deployment configuration
├── .vercelignore           # Vercel ignore file
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors and Themes
The website uses a neural network-inspired color scheme. You can customize colors in:
- `tailwind.config.js` - Tailwind color extensions
- `src/styles/index.css` - Custom CSS variables and gradients

### Content
Update the content in the respective page components:
- `src/pages/Home.jsx` - Hero section
- `src/pages/About.jsx` - About information
- `src/pages/Experience.jsx` - Work experience
- `src/pages/Projects.jsx` - Project portfolio
- `src/pages/Skills.jsx` - Skills and technologies
- `src/pages/Contact.jsx` - Contact information

### Animations
The neural background animation can be customized in:
- `src/components/NeuralBackground.jsx` - Canvas animation logic
- `src/styles/index.css` - CSS animations and keyframes

## 🔧 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact message
- `GET /api/contact` - Get all messages (admin)
- `PUT /api/contact/:id` - Update message status (admin)

### Health Check
- `GET /api/health` - Server health status

## 🚀 Deployment

This project is deployed on **Vercel** with full-stack support (frontend + backend).

### Deploy to Vercel

#### Option 1: Vercel CLI (Recommended)
1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

#### Option 2: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Import your repository
4. Vercel will auto-detect the configuration

### Environment Variables Setup

Add these environment variables in Vercel Dashboard → Settings → Environment Variables:

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
JWT_SECRET=your-generated-secret-key
```

### Getting Environment Variables

1. **MongoDB Atlas**: 
   - Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Create a free cluster
   - Get connection string

2. **Gmail App Password**:
   - Enable 2FA on Gmail
   - Generate app password at [myaccount.google.com](https://myaccount.google.com) → Security → App passwords

3. **JWT Secret**:
   - Generate with: `openssl rand -base64 32`

## 🔒 Security Features

- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Sanitizes all user inputs
- **CORS Configuration**: Restricts cross-origin requests
- **Security Headers**: Helmet.js for security headers
- **Environment Variables**: Sensitive data protection

## 📱 Performance Features

- **Lazy Loading**: Components loaded on demand
- **Code Splitting**: Optimized bundle sizes
- **Image Optimization**: Responsive images
- **Caching**: Browser and server-side caching
- **Compression**: Gzip compression for assets


## 📞 Contact

- **Email**: cmkadhar3@gmail.com
- **LinkedIn**: [khadarc](https://www.linkedin.com/in/khadarc/)
- **GitHub**: [Cmk31311](https://github.com/Cmk31311)

---

Built with ❤️ by Khadar Chittor
