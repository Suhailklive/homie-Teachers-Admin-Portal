# Setup and Deployment Guide

## 📋 Table of Contents

1. [Development Setup](#development-setup)
2. [Environment Configuration](#environment-configuration)
3. [Building for Production](#building-for-production)
4. [Deployment Options](#deployment-options)
5. [Server Configuration](#server-configuration)
6. [Monitoring & Maintenance](#monitoring--maintenance)
7. [Troubleshooting](#troubleshooting)

## 🛠️ Development Setup

### Prerequisites

Before setting up the Teachers Portal, ensure you have the following installed:

#### **Required Software**

**Node.js** (Version 20.19.0 or higher)
```bash
# Check your Node.js version
node --version

# If not installed, download from https://nodejs.org/
# Recommended: Use Node Version Manager (nvm)
nvm install 20.19.0
nvm use 20.19.0
```

**npm** (Version 8.0.0 or higher)
```bash
# Check npm version
npm --version

# Update npm if needed
npm install -g npm@latest
```

**Git** (Latest version)
```bash
# Check Git version
git --version

# Download from https://git-scm.com/ if not installed
```

#### **Recommended Tools**

- **VS Code**: Code editor with React extensions
- **Chrome DevTools**: For debugging and performance testing
- **Postman**: For API testing (when backend is integrated)

### Initial Setup

#### **1. Clone the Repository**

```bash
# Clone from GitHub
git clone https://github.com/Suhailklive/Teachers-Portal.git

# Navigate to project directory
cd Teachers-Portal/teachers-portal

# Verify you're in the correct directory
pwd  # Should show path ending with /teachers-portal
```

#### **2. Install Dependencies**

```bash
# Install all project dependencies
npm install

# This will install:
# - React 19.1.1
# - React Router DOM 7.8.2
# - Lucide React (icons)
# - Vite 7.1.4 (build tool)
# - ESLint (code linting)
```

#### **3. Start Development Server**

```bash
# Start the development server
npm run dev

# Server will start on http://localhost:5174
# The application will automatically reload when you make changes
```

#### **4. Verify Installation**

1. Open your browser to `http://localhost:5174`
2. You should see the Teachers Portal login/dashboard
3. Check browser console for any errors
4. Navigate through different pages to ensure everything loads

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Install new dependencies
npm install <package-name>

# Install development dependencies
npm install --save-dev <package-name>
```

## ⚙️ Environment Configuration

### Environment Variables

Create environment files for different deployment stages:

#### **Development Environment (.env.development)**

```env
# Application Configuration
VITE_APP_TITLE=Teachers Portal - Development
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=development

# API Configuration (when backend is ready)
VITE_API_BASE_URL=http://localhost:3001
VITE_API_TIMEOUT=10000

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
VITE_ENABLE_MOCK_DATA=true

# Development Settings
VITE_HOT_RELOAD=true
VITE_SOURCE_MAPS=true
```

#### **Production Environment (.env.production)**

```env
# Application Configuration
VITE_APP_TITLE=Teachers Portal
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=production

# API Configuration
VITE_API_BASE_URL=https://api.teachersportal.com
VITE_API_TIMEOUT=8000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
VITE_ENABLE_MOCK_DATA=false

# Production Settings
VITE_HOT_RELOAD=false
VITE_SOURCE_MAPS=false
```

#### **Staging Environment (.env.staging)**

```env
# Application Configuration
VITE_APP_TITLE=Teachers Portal - Staging
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=staging

# API Configuration
VITE_API_BASE_URL=https://staging-api.teachersportal.com
VITE_API_TIMEOUT=10000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=true
VITE_ENABLE_MOCK_DATA=false

# Staging Settings
VITE_HOT_RELOAD=false
VITE_SOURCE_MAPS=true
```

### Vite Configuration

The project uses Vite for fast development and optimized builds. The configuration is in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Additional configuration will be added here as needed
  
  // Build optimization
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 5174,
    host: true,
    open: true
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  }
})
```

## 🏗️ Building for Production

### Build Process

#### **1. Prepare for Build**

```bash
# Ensure all dependencies are installed
npm install

# Run linting to check for issues
npm run lint

# Fix any linting errors
npm run lint --fix
```

#### **2. Create Production Build**

```bash
# Build the application
npm run build

# Output will be in the 'dist' directory
# Files will be minified and optimized
```

#### **3. Test Production Build Locally**

```bash
# Serve the production build locally
npm run preview

# Open http://localhost:4173 to test
# Verify all features work correctly
```

### Build Output Structure

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # Main JavaScript bundle
│   ├── index-[hash].css    # Compiled CSS
│   └── vendor-[hash].js    # Third-party libraries
├── vite.svg                # Favicon
└── ...                     # Other static assets
```

### Build Optimization Features

**Automatic Optimizations:**
- **Code Splitting**: Separate bundles for vendor libraries
- **Tree Shaking**: Removes unused code
- **Minification**: Compresses JavaScript and CSS
- **Asset Hashing**: Enables long-term caching
- **Gzip Compression**: Reduces file sizes

**Bundle Analysis:**
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.js and rebuild to see bundle composition
```

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)

#### **Vercel Deployment**

**Quick Deploy:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Configuration (vercel.json):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### **Netlify Deployment**

**Manual Deploy:**
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure redirects for SPA routing

**Configuration (_redirects file in public/):**
```
/*    /index.html   200
```

**Configuration (netlify.toml):**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### **GitHub Pages**

**Setup:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Option 2: Traditional Web Hosting

#### **Upload to Web Server**

1. **Build the project**: `npm run build`
2. **Upload dist/ contents** to your web server's public directory
3. **Configure server** for SPA routing (see server configuration section)

#### **FTP/SFTP Deployment**

```bash
# Using rsync for deployment
rsync -avz --delete dist/ user@yourserver.com:/var/www/teachersportal/

# Using SCP
scp -r dist/* user@yourserver.com:/var/www/teachersportal/
```

### Option 3: Container Deployment

#### **Docker Configuration**

**Dockerfile:**
```dockerfile
# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Compose (docker-compose.yml):**
```yaml
version: '3.8'
services:
  teachers-portal:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

**Build and Deploy:**
```bash
# Build Docker image
docker build -t teachers-portal .

# Run container
docker run -p 80:80 teachers-portal

# Or use Docker Compose
docker-compose up -d
```

## 🔧 Server Configuration

### Single Page Application (SPA) Routing

Since the Teachers Portal is an SPA, you need to configure your server to serve `index.html` for all routes.

#### **Apache (.htaccess)**

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

#### **Nginx**

```nginx
server {
    listen 80;
    server_name teachersportal.com;
    root /var/www/teachersportal;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

#### **IIS (web.config)**

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

### Security Considerations

#### **HTTPS Configuration**

Always use HTTPS in production:

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name teachersportal.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS configuration
server {
    listen 443 ssl http2;
    server_name teachersportal.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # SSL security settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
    
    # ... rest of configuration
}
```

#### **Security Headers**

```nginx
# Security headers
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## 📊 Monitoring & Maintenance

### Performance Monitoring

#### **Lighthouse Audits**

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit on deployed site
lighthouse https://your-teachers-portal.com --output html --output-path ./lighthouse-report.html

# Check for:
# - Performance > 90
# - Accessibility > 95
# - Best Practices > 90
# - SEO > 95
```

#### **Bundle Size Monitoring**

```bash
# Analyze bundle size
npm run build

# Check dist/ folder sizes
ls -la dist/assets/

# Monitor for bundle size increases over time
```

### Log Monitoring

#### **Server Logs**

Monitor server logs for:
- 404 errors (routing issues)
- 500 errors (server problems)
- High traffic patterns
- Unusual access patterns

#### **Application Logs**

```javascript
// Add to your app for production logging
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
    // Send to monitoring service
  });
}
```

### Regular Maintenance Tasks

#### **Weekly Tasks**
- [ ] Check server uptime and performance
- [ ] Review application logs for errors
- [ ] Monitor user feedback and support requests
- [ ] Verify backup systems are working

#### **Monthly Tasks**
- [ ] Update dependencies for security patches
- [ ] Review and update documentation
- [ ] Analyze usage statistics
- [ ] Performance audit with Lighthouse

#### **Quarterly Tasks**
- [ ] Major dependency updates
- [ ] Security audit
- [ ] Browser compatibility testing
- [ ] Backup system testing

### Update Process

#### **Dependency Updates**

```bash
# Check for outdated packages
npm outdated

# Update non-breaking changes
npm update

# Update major versions carefully
npm install package@latest

# Always test after updates
npm run build
npm run preview
```

#### **Application Updates**

1. **Development**: Make changes in development environment
2. **Testing**: Thoroughly test all features
3. **Staging**: Deploy to staging environment for final testing
4. **Production**: Deploy to production during low-traffic periods
5. **Monitor**: Watch for issues after deployment

## 🔍 Troubleshooting

### Common Deployment Issues

#### **Build Failures**

**Issue**: `npm run build` fails
**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 20.19.0+
```

#### **Routing Issues**

**Issue**: 404 errors on page refresh
**Solutions**:
- Configure server for SPA routing (see server configuration)
- Verify all routes are defined in React Router
- Check for case sensitivity in URLs

#### **Performance Issues**

**Issue**: Slow loading times
**Solutions**:
- Enable gzip compression on server
- Implement CDN for static assets
- Check bundle sizes and optimize if needed
- Verify server resources (CPU, memory)

#### **Security Issues**

**Issue**: Security warnings in browser
**Solutions**:
- Implement HTTPS
- Add security headers
- Update dependencies for security patches
- Review and update Content Security Policy

### Production Debugging

#### **Error Monitoring**

```javascript
// Add to main.jsx for production error tracking
if (import.meta.env.PROD) {
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // Report to monitoring service
  });
}
```

#### **Performance Debugging**

1. **Browser DevTools**: Use Performance tab to identify bottlenecks
2. **Network Tab**: Check for slow-loading resources
3. **Lighthouse**: Regular performance audits
4. **Server Monitoring**: Monitor server response times

### Support Channels

**Technical Issues**:
- Check this documentation first
- Review GitHub issues
- Contact development team

**Server Issues**:
- Check server logs
- Contact hosting provider
- Review server monitoring dashboards

**User Issues**:
- Check user guide documentation
- Review browser compatibility
- Test with different devices/browsers

---

*This setup and deployment guide covers the technical aspects of getting the Teachers Portal running in various environments. For user-facing features and functionality, refer to the User Guide.*# Setup and Deployment Guide

## 📋 Table of Contents

1. [Development Setup](#development-setup)
2. [Environment Configuration](#environment-configuration)
3. [Building for Production](#building-for-production)
4. [Deployment Options](#deployment-options)
5. [Server Configuration](#server-configuration)
6. [Monitoring & Maintenance](#monitoring--maintenance)
7. [Troubleshooting](#troubleshooting)

## 🛠️ Development Setup

### Prerequisites

Before setting up the Teachers Portal, ensure you have the following installed:

#### **Required Software**

**Node.js** (Version 20.19.0 or higher)
```bash
# Check your Node.js version
node --version

# If not installed, download from https://nodejs.org/
# Recommended: Use Node Version Manager (nvm)
nvm install 20.19.0
nvm use 20.19.0
```

**npm** (Version 8.0.0 or higher)
```bash
# Check npm version
npm --version

# Update npm if needed
npm install -g npm@latest
```

**Git** (Latest version)
```bash
# Check Git version
git --version

# Download from https://git-scm.com/ if not installed
```

#### **Recommended Tools**

- **VS Code**: Code editor with React extensions
- **Chrome DevTools**: For debugging and performance testing
- **Postman**: For API testing (when backend is integrated)

### Initial Setup

#### **1. Clone the Repository**

```bash
# Clone from GitHub
git clone https://github.com/Suhailklive/Teachers-Portal.git

# Navigate to project directory
cd Teachers-Portal/teachers-portal

# Verify you're in the correct directory
pwd  # Should show path ending with /teachers-portal
```

#### **2. Install Dependencies**

```bash
# Install all project dependencies
npm install

# This will install:
# - React 19.1.1
# - React Router DOM 7.8.2
# - Lucide React (icons)
# - Vite 7.1.4 (build tool)
# - ESLint (code linting)
```

#### **3. Start Development Server**

```bash
# Start the development server
npm run dev

# Server will start on http://localhost:5174
# The application will automatically reload when you make changes
```

#### **4. Verify Installation**

1. Open your browser to `http://localhost:5174`
2. You should see the Teachers Portal login/dashboard
3. Check browser console for any errors
4. Navigate through different pages to ensure everything loads

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Install new dependencies
npm install <package-name>

# Install development dependencies
npm install --save-dev <package-name>
```

## ⚙️ Environment Configuration

### Environment Variables

Create environment files for different deployment stages:

#### **Development Environment (.env.development)**

```env
# Application Configuration
VITE_APP_TITLE=Teachers Portal - Development
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=development

# API Configuration (when backend is ready)
VITE_API_BASE_URL=http://localhost:3001
VITE_API_TIMEOUT=10000

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
VITE_ENABLE_MOCK_DATA=true

# Development Settings
VITE_HOT_RELOAD=true
VITE_SOURCE_MAPS=true
```

#### **Production Environment (.env.production)**

```env
# Application Configuration
VITE_APP_TITLE=Teachers Portal
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=production

# API Configuration
VITE_API_BASE_URL=https://api.teachersportal.com
VITE_API_TIMEOUT=8000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
VITE_ENABLE_MOCK_DATA=false

# Production Settings
VITE_HOT_RELOAD=false
VITE_SOURCE_MAPS=false
```

#### **Staging Environment (.env.staging)**

```env
# Application Configuration
VITE_APP_TITLE=Teachers Portal - Staging
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=staging

# API Configuration
VITE_API_BASE_URL=https://staging-api.teachersportal.com
VITE_API_TIMEOUT=10000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=true
VITE_ENABLE_MOCK_DATA=false

# Staging Settings
VITE_HOT_RELOAD=false
VITE_SOURCE_MAPS=true
```

### Vite Configuration

The project uses Vite for fast development and optimized builds. The configuration is in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Additional configuration will be added here as needed
  
  // Build optimization
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 5174,
    host: true,
    open: true
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  }
})
```

## 🏗️ Building for Production

### Build Process

#### **1. Prepare for Build**

```bash
# Ensure all dependencies are installed
npm install

# Run linting to check for issues
npm run lint

# Fix any linting errors
npm run lint --fix
```

#### **2. Create Production Build**

```bash
# Build the application
npm run build

# Output will be in the 'dist' directory
# Files will be minified and optimized
```

#### **3. Test Production Build Locally**

```bash
# Serve the production build locally
npm run preview

# Open http://localhost:4173 to test
# Verify all features work correctly
```

### Build Output Structure

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # Main JavaScript bundle
│   ├── index-[hash].css    # Compiled CSS
│   └── vendor-[hash].js    # Third-party libraries
├── vite.svg                # Favicon
└── ...                     # Other static assets
```

### Build Optimization Features

**Automatic Optimizations:**
- **Code Splitting**: Separate bundles for vendor libraries
- **Tree Shaking**: Removes unused code
- **Minification**: Compresses JavaScript and CSS
- **Asset Hashing**: Enables long-term caching
- **Gzip Compression**: Reduces file sizes

**Bundle Analysis:**
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.js and rebuild to see bundle composition
```

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)

#### **Vercel Deployment**

**Quick Deploy:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Configuration (vercel.json):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### **Netlify Deployment**

**Manual Deploy:**
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure redirects for SPA routing

**Configuration (_redirects file in public/):**
```
/*    /index.html   200
```

**Configuration (netlify.toml):**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### **GitHub Pages**

**Setup:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Option 2: Traditional Web Hosting

#### **Upload to Web Server**

1. **Build the project**: `npm run build`
2. **Upload dist/ contents** to your web server's public directory
3. **Configure server** for SPA routing (see server configuration section)

#### **FTP/SFTP Deployment**

```bash
# Using rsync for deployment
rsync -avz --delete dist/ user@yourserver.com:/var/www/teachersportal/

# Using SCP
scp -r dist/* user@yourserver.com:/var/www/teachersportal/
```

### Option 3: Container Deployment

#### **Docker Configuration**

**Dockerfile:**
```dockerfile
# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Compose (docker-compose.yml):**
```yaml
version: '3.8'
services:
  teachers-portal:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

**Build and Deploy:**
```bash
# Build Docker image
docker build -t teachers-portal .

# Run container
docker run -p 80:80 teachers-portal

# Or use Docker Compose
docker-compose up -d
```

## 🔧 Server Configuration

### Single Page Application (SPA) Routing

Since the Teachers Portal is an SPA, you need to configure your server to serve `index.html` for all routes.

#### **Apache (.htaccess)**

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

#### **Nginx**

```nginx
server {
    listen 80;
    server_name teachersportal.com;
    root /var/www/teachersportal;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

#### **IIS (web.config)**

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

### Security Considerations

#### **HTTPS Configuration**

Always use HTTPS in production:

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name teachersportal.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS configuration
server {
    listen 443 ssl http2;
    server_name teachersportal.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # SSL security settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
    
    # ... rest of configuration
}
```

#### **Security Headers**

```nginx
# Security headers
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## 📊 Monitoring & Maintenance

### Performance Monitoring

#### **Lighthouse Audits**

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit on deployed site
lighthouse https://your-teachers-portal.com --output html --output-path ./lighthouse-report.html

# Check for:
# - Performance > 90
# - Accessibility > 95
# - Best Practices > 90
# - SEO > 95
```

#### **Bundle Size Monitoring**

```bash
# Analyze bundle size
npm run build

# Check dist/ folder sizes
ls -la dist/assets/

# Monitor for bundle size increases over time
```

### Log Monitoring

#### **Server Logs**

Monitor server logs for:
- 404 errors (routing issues)
- 500 errors (server problems)
- High traffic patterns
- Unusual access patterns

#### **Application Logs**

```javascript
// Add to your app for production logging
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
    // Send to monitoring service
  });
}
```

### Regular Maintenance Tasks

#### **Weekly Tasks**
- [ ] Check server uptime and performance
- [ ] Review application logs for errors
- [ ] Monitor user feedback and support requests
- [ ] Verify backup systems are working

#### **Monthly Tasks**
- [ ] Update dependencies for security patches
- [ ] Review and update documentation
- [ ] Analyze usage statistics
- [ ] Performance audit with Lighthouse

#### **Quarterly Tasks**
- [ ] Major dependency updates
- [ ] Security audit
- [ ] Browser compatibility testing
- [ ] Backup system testing

### Update Process

#### **Dependency Updates**

```bash
# Check for outdated packages
npm outdated

# Update non-breaking changes
npm update

# Update major versions carefully
npm install package@latest

# Always test after updates
npm run build
npm run preview
```

#### **Application Updates**

1. **Development**: Make changes in development environment
2. **Testing**: Thoroughly test all features
3. **Staging**: Deploy to staging environment for final testing
4. **Production**: Deploy to production during low-traffic periods
5. **Monitor**: Watch for issues after deployment

## 🔍 Troubleshooting

### Common Deployment Issues

#### **Build Failures**

**Issue**: `npm run build` fails
**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 20.19.0+
```

#### **Routing Issues**

**Issue**: 404 errors on page refresh
**Solutions**:
- Configure server for SPA routing (see server configuration)
- Verify all routes are defined in React Router
- Check for case sensitivity in URLs

#### **Performance Issues**

**Issue**: Slow loading times
**Solutions**:
- Enable gzip compression on server
- Implement CDN for static assets
- Check bundle sizes and optimize if needed
- Verify server resources (CPU, memory)

#### **Security Issues**

**Issue**: Security warnings in browser
**Solutions**:
- Implement HTTPS
- Add security headers
- Update dependencies for security patches
- Review and update Content Security Policy

### Production Debugging

#### **Error Monitoring**

```javascript
// Add to main.jsx for production error tracking
if (import.meta.env.PROD) {
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // Report to monitoring service
  });
}
```

#### **Performance Debugging**

1. **Browser DevTools**: Use Performance tab to identify bottlenecks
2. **Network Tab**: Check for slow-loading resources
3. **Lighthouse**: Regular performance audits
4. **Server Monitoring**: Monitor server response times

### Support Channels

**Technical Issues**:
- Check this documentation first
- Review GitHub issues
- Contact development team

**Server Issues**:
- Check server logs
- Contact hosting provider
- Review server monitoring dashboards

**User Issues**:
- Check user guide documentation
- Review browser compatibility
- Test with different devices/browsers

---

*This setup and deployment guide covers the technical aspects of getting the Teachers Portal running in various environments. For user-facing features and functionality, refer to the User Guide.*