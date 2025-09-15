# Khadar Chittor - Portfolio Website

A modern, high-performance portfolio website built with React, Node.js, and MongoDB. Features a neural network animated background, responsive design, and a full-stack contact system.

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

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Set environment variables for production

### Backend (Railway/Heroku/DigitalOcean)
1. Set up MongoDB Atlas or your preferred database
2. Configure environment variables
3. Deploy the server code
4. Update frontend API URLs to point to your backend

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-mongodb-atlas-uri
EMAIL_USER=your-production-email
EMAIL_PASS=your-production-password
```

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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: cmkadhar3@gmail.com
- **LinkedIn**: [khadarc](https://www.linkedin.com/in/khadarc/)
- **GitHub**: [Cmk31311](https://github.com/Cmk31311)

---

Built with ❤️ by Khadar Chittor
