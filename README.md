# DGuard Landing Pages

A collection of standalone landing pages for DGuard's digital security services, extracted from the main DGuard application.

## Pages Included

- **Home Page** (`/`) - Main landing page with comprehensive overview of all DGuard services
- **Payment Protection** (`/payment-protection`) - Dedicated page for payment fraud protection features
- **Identity Protection** (`/identity-protection`) - Dedicated page for identity theft protection services
- **Phishing Protection** (`/phishing-protection`) - Dedicated page for phishing detection and prevention

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Smooth animations with Framer Motion
- 📱 Mobile-first responsive layout
- 🎯 SEO-optimized landing pages
- 🚀 Fast loading with Vite
- 🔧 TypeScript for type safety

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "DGuard Landing Pages"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Header.tsx    # Navigation header
│   └── Footer.tsx    # Site footer
├── pages/            # Landing page components
│   ├── HomePage.tsx
│   ├── PaymentProtectionPage.tsx
│   ├── IdentityProtectionPage.tsx
│   └── PhishingProtectionPage.tsx
├── lib/              # Utility functions
└── App.tsx           # Main app component with routing
```

## Customization

### Styling
The project uses Tailwind CSS with a custom design system. Colors and styling can be modified in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - CSS variables and base styles

### Content
Each landing page is a separate component in the `src/pages/` directory. Content can be modified directly in these files.

### Images
All images are stored in the `public/` directory and can be replaced or updated as needed.

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3**: Upload the `dist` folder contents to an S3 bucket

## License

This project is part of the DGuard digital security platform.

## Support

For questions or support, please contact the DGuard development team.