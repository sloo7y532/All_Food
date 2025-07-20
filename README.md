# All Food Project 🍽️

A modern, responsive food website built with Bootstrap, featuring a clean design and smooth user experience for food lovers and restaurant businesses.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and modern interface with smooth animations
- **Multiple Pages**:
  - Home page with hero section and featured content
  - About page with restaurant information
  - Menu page showcasing food items
  - Blog section with articles and details
  - Contact page with contact information
  - Order page for food ordering
- **Interactive Elements**: Smooth scrolling, hover effects, and loading animations
- **Image Gallery**: Beautiful food photography and Instagram feed integration
- **Professional Styling**: Custom SCSS with Bootstrap framework

## 🛠️ Technologies Used

- **Frontend Framework**: Bootstrap
- **Languages**: HTML5, CSS3, JavaScript
- **Preprocessor**: SCSS/Sass
- **Build Tools**: Node.js, npm
- **Image Formats**: WebP, AVIF, JPG, PNG for optimized loading

## 📁 Project Structure

```
All_Food_Project/
├── assets/                 # Images and media files
│   ├── hero-image.jpg      # Main hero image
│   ├── logo.png.webp       # Site logo
│   ├── about.png.webp      # About section images
│   ├── instagram*.png.webp # Instagram feed images
│   └── ...                 # Other food images
├── css/                    # Compiled CSS files
│   ├── main.min.css        # Minified main stylesheet
│   └── main.min.css.map    # Source map
├── scss/                   # SCSS source files
│   └── main.scss           # Main SCSS file
├── styles/                 # Additional stylesheets
│   ├── home_Style.css      # Home page styles
│   └── contact_Style.css   # Contact page styles
├── pages/                  # HTML pages
│   ├── about.html          # About page
│   ├── menu.html           # Menu page
│   ├── contact.html        # Contact page
│   ├── order.html          # Order page
│   └── blog/               # Blog section
│       ├── blog.html       # Blog listing
│       ├── blogDetails.html # Blog post details
│       └── element.html    # Blog elements
├── index.html              # Main homepage
├── main.js                 # Main JavaScript file
├── Scroll_Loder.js         # Scroll loading functionality
├── package.json            # npm dependencies
└── package-lock.json       # npm lock file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd All_Food_Project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Development**
   - Open `index.html` in your browser to view the homepage
   - For SCSS compilation, you may need to set up a build process or use a live server

### Running the Project

1. **Using Live Server** (Recommended)

   - Install a live server extension in your code editor
   - Right-click on `index.html` and select "Open with Live Server"

2. **Using Python HTTP Server**

   ```bash
   # Python 3
   python -m http.server 8000

   # Then open http://localhost:8000 in your browser
   ```

3. **Using Node.js HTTP Server**
   ```bash
   npx http-server
   ```

## 📱 Pages Overview

- **Home (`index.html`)**: Landing page with hero section, featured content, and call-to-actions
- **About (`pages/about.html`)**: Restaurant story, chef information, and company values
- **Menu (`pages/menu.html`)**: Food menu with categories and pricing
- **Blog (`pages/blog/`)**: Food-related articles and blog posts
- **Contact (`pages/contact.html`)**: Contact information and contact form
- **Order (`pages/order.html`)**: Food ordering system

## 🎨 Customization

### Styling

- Main styles are compiled from `scss/main.scss`
- Additional page-specific styles in the `styles/` directory
- Modify SCSS variables for color schemes and typography

### Images

- Replace images in the `assets/` directory
- Ensure proper image optimization for web performance
- WebP format is used for better compression

### Content

- Update HTML content in respective page files
- Modify JavaScript functionality in `main.js`

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any questions or suggestions, please feel free contct me (saleh_Alodeab@hotmail.com)

---

**Enjoy exploring the delicious world of food! 🍕🍔🍰**
