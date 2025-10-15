# Clamp Typography

A WordPress plugin that provides precise control over fluid typography for heading blocks using CSS clamp() functions.

![WordPress](https://img.shields.io/badge/WordPress-6.7+-blue.svg)
![PHP](https://img.shields.io/badge/PHP-7.4+-purple.svg)
![License](https://img.shields.io/badge/License-GPL--2.0+-green.svg)

## 🎯 Overview

When `styles.typography.fluid` is enabled within `theme.json`, wordpress uses `wp_get_typography_font_size_value` to automatically calculate a min and max value for heading blocks. For example, a custom font size such as `96px` turns into `clamp(48.588px, 3.037rem + ((1vw - 3.2px) * 3.436), 96px)`. This is great, however in some curcumstances a more precise min and max value is required.

Clamp Typography enhances WordPress heading blocks with a minimum and maximum field under the custom font size field, allowing you to have precise control over the clamp output on the core/heading blocks.

![Clamp Typography UI Screenshot](assets/ui-screenshot.png)

## ✨ Features

- **🎛️ Intuitive Controls**: Simple min/max size inputs integrated directly into the WordPress block editor
- **🤖 Smart Defaults**: Automatically calculates reasonable min/max values based on your chosen font size
- **🎨 Theme Integration**: Works seamlessly with your theme's font size presets and custom font sizes
- **📱 Responsive Typography**: Creates fluid typography that scales smoothly between breakpoints
- **⚡ Performance Optimized**: Lightweight implementation

## 🚀 Installation

### From GitHub

1. Download the latest release from the [releases page](../../releases)
2. Upload the plugin folder to `/wp-content/plugins/`
3. Activate the plugin through the 'Plugins' menu in WordPress

### Development Setup

```bash
git clone https://github.com/yourusername/clamp-typography.git
cd clamp-typography
npm install
npm run build
```

## 📖 Usage

### Basic Usage

1. **Add a Heading Block** in the WordPress editor
2. **Set a Font Size** using either:
   - Theme font size presets (Small, Medium, Large, etc.)
   - Custom font size values (6vw, 1.2rem, etc.)
   - Use a responsive unit such as vw, vh, rem, em
3. **Configure Clamp Values** in the Typography panel:
   - **Min Size**: Smallest font size for mobile devices
   - **Max Size**: Largest font size for desktop screens
4. **Publish** and see your fluid typography in action!

### Smart Defaults

When you select a font size, the plugin automatically suggests:

- **Min Size**: 80% of your chosen font size
- **Max Size**: 120% of your chosen font size

You can customize these values to fit your design needs.

## 🎨 Examples

### Small Heading (Mobile-first)

```css
font-size: clamp(16px, 4vw, 24px);
```

### Large Display Heading

```css
font-size: clamp(28px, 6vw, 48px);
```

### Subtle Scaling

```css
font-size: clamp(18px, 2.5vw, 22px);
```

## 🛠️ Technical Details

### Requirements

- **WordPress**: 6.7 or higher
- **PHP**: 7.4 or higher
- **Browser Support**: All modern browsers supporting CSS clamp()

### Block Support

Currently supports:

- ✅ Heading blocks (H1-H6)
- 🔄 More blocks coming soon

## 📚 Resources

- [CSS clamp() Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Fluid Typography Best Practices](https://web.dev/responsive-web-design-basics/)

---

**Made with ❤️ for the WordPress community**
