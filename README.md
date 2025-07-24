# 🚀 Lakshya Singh - Portfolio Website

> A premium, modern portfolio website showcasing cutting-edge UI/UX design, advanced animations, and interactive elements.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## ✨ Features

### 🎨 **Premium Design System**

- **Glassmorphism Effects**: Modern glass-like UI components with backdrop blur
- **Custom Color Palette**: Gradient-based theme with blue, purple, and cyan accents
- **Typography**: Premium fonts (Inter, JetBrains Mono, Geist) with responsive scaling
- **Dark Theme**: Carefully crafted dark mode with perfect contrast ratios

### 🌟 **Advanced Animations**

- **Smooth Transitions**: 60fps animations with easing functions
- **Micro-interactions**: Hover effects, scale transforms, and glow effects
- **Typing Animation**: Dynamic typewriter effect for tagline
- **Infinite Carousels**: Dual-direction tech stack showcase
- **Floating Elements**: Animated background particles and geometric shapes

### 📱 **Responsive & Accessible**

- **Mobile-First Design**: Optimized for all screen sizes
- **Keyboard Navigation**: Full accessibility support
- **Screen Reader Compatible**: ARIA labels and semantic HTML
- **Fast Loading**: Optimized images and code splitting

### 🚀 **Interactive Sections**

#### **Hero Section**

- Animated name with gradient text effect
- Typing animation for tagline
- Social media links with hover effects
- Call-to-action buttons with smooth scrolling

#### **About Section**

- Personal description and location
- Animated statistics cards
- Education timeline with progress indicators
- Leadership experience showcase

#### **Skills Section**

- Interactive category filtering
- Progress bars with animated skill levels
- Tech stack carousel with brand icons
- Dual-row infinite scroll animation

#### **Projects Section**

- Glass-morphism project cards
- Hover overlays with action buttons
- Technology tag system
- Featured project highlighting
- Direct links to GitHub repositories

#### **Experience Section**

- Vertical timeline design
- Expandable experience cards
- Technology tags for each role
- Current position highlighting
- Resume download functionality

#### **Contact Section**

- Interactive contact form with validation
- Real-time form states (loading, success)
- Multiple contact methods
- Social media integration
- Quick response indicators

## 🛠️ Technology Stack

### **Frontend Framework**

- **Next.js 14+** - App Router for modern React development
- **TypeScript** - Type-safe development with strict mode
- **React 18** - Latest React features and hooks

### **Styling & UI**

- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Advanced animations and glassmorphism effects
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Technology brand icons

### **Development Tools**

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **TypeScript** - Static type checking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Lakshya977/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── globals.css        # Global styles and animations
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main portfolio page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   └── TechIcon.tsx   # Technology icon component
│   │   ├── layout/            # Layout components
│   │   │   ├── Navigation.tsx # Floating navigation bar
│   │   │   └── BackgroundElements.tsx # Animated backgrounds
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       └── ContactSection.tsx
│   ├── lib/
│   │   ├── data.ts           # Portfolio content and data
│   │   ├── utils.ts          # Utility functions
│   │   └── icons.ts          # Technology icon mapping
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design Features

### **Glassmorphism Components**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### **Custom Animations**

- Fade-in-up animations with staggered delays
- Smooth scale and rotation transforms
- Gradient color shifts and pulse effects
- Particle floating animations

### **Color System**

- **Primary Blue**: `#0066ff`
- **Primary Purple**: `#8b5cf6`
- **Primary Cyan**: `#06b6d4`
- **Background Layers**: Multiple dark tones for depth

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🔧 Configuration

### **Customizing Content**

Update portfolio content in `src/lib/data.ts`:

- Personal information
- Work experience
- Projects and skills
- Education and leadership

### **Styling Customization**

Modify design system in `tailwind.config.ts`:

- Color palette
- Typography scales
- Animation timings
- Spacing system

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
npm install -g vercel
vercel --prod
```

### **Netlify**

```bash
npm run build
# Upload dist folder to Netlify
```

### **Other Platforms**

The project supports any platform that can host Next.js applications.

## ⚡ Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Next.js automatic optimization

## 🔒 SEO & Metadata

- **Dynamic Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Structured Data**: JSON-LD schema for better search indexing
- **Sitemap**: Auto-generated sitemap for search engines
- **Robots.txt**: Proper search engine directives

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👤 Author

**Lakshya Singh**

- 🌐 Portfolio: [LakshyaSingh](https://lakshyasingh-portfolio-4tpb.vercel.app/)
- 💼 LinkedIn: [LakshyaSingh](https://www.linkedin.com/in/lakshya-singh-b7b325287/)
- 🐙 GitHub: [Lakshya977](https://github.com/Lakshya977)
- 📧 Email: Lakshya8998@gmail.com

## 🙏 Acknowledgments

- **Design Inspiration**: Modern glassmorphism and premium UI trends
- **Icons**: Lucide React and Simple Icons
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Animations**: Framer Motion concepts adapted to CSS

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕ by [Lakshya Singh](https://github.com/Lakshya977)

</div>
