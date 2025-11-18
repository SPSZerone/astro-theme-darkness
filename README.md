# 🌌 Darkness - Astro Dark Theme

A heavily modified dark theme based on Astro's official blog template, themed around **darkness**. This experimental project uses Three.js, rich CSS animations, and Astro's latest features to deliver an overwhelming motion-filled experience.

![Darkness Theme](https://img.shields.io/badge/Astro-4.0-purple)
![Three.js](https://img.shields.io/badge/Three.js-0.160-blue)

## ✨ Features

### 🎨 Design
- **Dark Theme**: Beautiful color palette based on darkness (purple, pink, blue)
- **Gradients**: Dynamically shifting background gradients
- **Custom Cursor**: Unique cursor design that follows the mouse

### 🌌 Three.js Effects
- **5000 Particles**: A glowing particle system in 3D space
- **Rotating Torus**: Geometric patterns created by multiple wireframe torus shapes
- **Mouse-Following Camera**: 3D camera that responds to cursor movement

### 🎭 Animations
- **Glitch Effects**: Cyberpunk text animations
- **Float Animations**: All elements float softly
- **Hover Effects**: Rich hover animations on interactive elements
- **View Transitions**: Smooth animations during page transitions
- **Particle Burst**: Particle effects on button clicks

### ⚡ Performance
- **Astro**: Fast performance through static site generation
- **Optimized**: Lightweight and efficient animation implementation

## 🚀 Usage

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

### Customization

You can easily customize the theme by changing CSS variables in `src/styles/global.css`:

```css
:root {
  --color-bg-dark: #0a0a0f;
  --color-bg-darker: #050508;
  --color-bg-card: #151520;
  --color-accent-purple: #a855f7;
  --color-accent-pink: #ec4899;
  --color-accent-blue: #3b82f6;
  --color-text: #e4e4e7;
  --color-text-dim: #a1a1aa;
}
```

## 📁 Project Structure

```
/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── ThreeBackground.astro   # Three.js background
│   │   ├── Hero.astro              # Hero section
│   │   ├── Card.astro              # Card component
│   │   ├── Features.astro          # Features section
│   │   └── Navigation.astro        # Navigation bar
│   ├── layouts/         # Layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Pages
│   │   ├── index.astro
│   │   └── about.astro
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **CSS Animations** - Rich animations
- **View Transitions API** - Smooth page transitions
- **TypeScript** - Type-safe development

## 🎯 Implemented Effects

1. **Particle System**: 5000 3D particles using Three.js
2. **Glitch Animation**: Cyberpunk text effects
3. **Float Animation**: Soft motion using CSS keyframes
4. **Glow Effects**: Glowing effects on cards and buttons
5. **Custom Cursor**: Mouse tracking and hover expansion
6. **Dynamic Gradients**: Rotating and moving background gradients
7. **View Transitions**: Smooth animations between pages
8. **Particle Burst**: Particle emission on click

## 🌟 Future Extensions

- [ ] Scroll trigger animations
- [ ] WebGL shader effects
- [ ] Music visualizer
- [ ] Parallax scrolling
- [ ] Interactive 3D objects

## 📝 License

MIT

## 🤝 Contributing

Pull requests are welcome! Bug reports and feature requests are also appreciated.

---

**Darkness** - An experimental project exploring the possibilities of the web shining through the abyss
