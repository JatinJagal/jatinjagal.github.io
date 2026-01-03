# Portfolio - React Application

A modern, responsive portfolio website built with React showcasing Jatin Jagal's work as a Flutter Developer.

## Features

- **Modern React Architecture**: Built with React 18.2.0
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Interactive Components**: Hover effects and animations
- **Project Showcase**: Display of published apps on Google Play Store
- **Experience Section**: Professional experience and skills

## Technologies Used

- React 18.2.0
- React DOM
- Font Awesome Icons
- CSS3 with custom animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

Create a production build:
```bash
npm run build
```

The optimized build will be in the `build` folder.

## Project Structure

```
portfolio-react/
├── public/
│   ├── images/          # Static images
│   └── index.html       # HTML template
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js           # Main App component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Components

- **Navbar**: Navigation menu with smooth scrolling
- **Hero**: Hero section with introduction and email subscription
- **About**: About section with profile information
- **Services**: Services offered section
- **Projects**: Showcase of published mobile applications
- **Experience**: Professional experience and skills
- **Contact**: Contact section with CTA
- **Footer**: Footer with social media links

## Customization

To customize the portfolio:

1. Update personal information in respective component files
2. Add/modify projects in `src/components/Projects.js`
3. Update experience in `src/components/Experience.js`
4. Modify styles in `src/index.css`
5. Replace images in `public/images/` folder

## License

Copyright © 2025 Jagal Jatin
