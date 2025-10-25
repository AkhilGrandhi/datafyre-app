# Data Fyre Pvt. Ltd. - Frontend (Vite + React)

A modern, responsive React.js website for Data Fyre Pvt. Ltd., an IT company specializing in innovative products and services. Built with **Vite** for blazing-fast development experience.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **PostCSS** - CSS transformations

## ✨ Features

- ⚡ **Lightning Fast** - Vite's instant HMR (Hot Module Replacement)
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- 🎨 **Modern UI** - Clean design with smooth animations
- 🧭 **SPA Routing** - Seamless page transitions
- 🎯 **SEO Friendly** - Proper meta tags and semantic HTML
- 🌈 **Custom Gradients** - Beautiful color schemes

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Responsive navigation
│   ├── Footer.jsx          # Footer with links
│   ├── Hero.jsx            # Hero section
│   ├── Products.jsx        # Products showcase
│   ├── Services.jsx        # Services section
│   ├── Blogs.jsx           # Blog articles
│   ├── AboutUs.jsx         # About section
│   └── ContactUs.jsx       # Contact form
├── pages/
│   ├── Home.jsx            # Home page
│   ├── ProductsPage.jsx    # Products page
│   ├── ServicesPage.jsx    # Services page
│   ├── BlogsPage.jsx       # Blogs page
│   ├── AboutUsPage.jsx     # About page
│   └── ContactUsPage.jsx   # Contact page
├── App.jsx                 # Main app with routing
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  dark: '#1e293b',
  light: '#f8fafc',
}
```

### Modify Content
- **Products**: Edit `src/components/Products.jsx` and `src/pages/ProductsPage.jsx`
- **Services**: Edit `src/components/Services.jsx` and `src/pages/ServicesPage.jsx`
- **Blogs**: Edit `src/components/Blogs.jsx` and `src/pages/BlogsPage.jsx`
- **About**: Edit `src/components/AboutUs.jsx`
- **Contact**: Edit `src/components/ContactUs.jsx`

## 📱 Pages

- **Home** (`/`) - Hero, Products, Services, Blogs
- **Products** (`/products`) - Detailed product information
- **Services** (`/services`) - Complete service offerings
- **Blogs** (`/blogs`) - Articles with category filtering
- **About Us** (`/about`) - Company info and team
- **Contact** (`/contact`) - Contact form and info

## 🔧 Configuration

### Vite Config
The Vite configuration is in `vite.config.js`. Default settings work great, but you can customize:
- Build options
- Server settings
- Plugin configurations

### Tailwind Config
Tailwind is configured in `tailwind.config.js` with:
- Custom colors
- Extended animations
- Custom utilities

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Next Steps

1. ✅ Replace dummy content with real data
2. ✅ Add real images (replace emoji placeholders)
3. ✅ Configure contact form backend
4. ✅ Add analytics (Google Analytics, etc.)
5. ✅ Set up CI/CD pipeline
6. ✅ Configure domain and hosting

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your server
```

## 🐛 Known Issues

- None currently! 🎉

## 📄 License

This project is private and proprietary to Data Fyre Pvt. Ltd.

---

**Built with ❤️ using Vite + React + Tailwind CSS**

For questions or support, contact: info@datafyre.com
