# 🎄💝 New Year Memories Website

A beautiful, interactive React website with romantic Christmas and New Year theme featuring animated gift boxes and memory cards.

## ✨ Features

- **Welcome Page**: Beautiful animated entrance with name inputs
- **Double-click Gift Box**: Magical opening animation with particles
- **Memory Cards**: Flip cards with images and personalized text
- **Responsive Design**: Works beautifully on all devices
- **Romantic Theme**: Christmas and New Year themed with hearts, snowflakes, and sparkles
- **Smooth Animations**: Powered by Framer Motion

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Navigate to the project folder
```bash
cd memories-website
```

### Step 2: Install dependencies
```bash
npm install
```

This will install all required packages:
- React & React DOM
- React Router DOM (for navigation)
- Framer Motion (for animations)
- Vite (build tool)

### Step 3: Run the development server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📁 Project Structure

```
memories-website/
├── public/
│   └── images/          # Place your memory images here
├── src/
│   ├── components/
│   │   ├── GiftBox.jsx        # Animated gift box component
│   │   ├── GiftBox.css
│   │   ├── MemoryCard.jsx     # Flip card component
│   │   └── MemoryCard.css
│   ├── pages/
│   │   ├── WelcomePage.jsx    # First page with name inputs
│   │   ├── WelcomePage.css
│   │   ├── SurprisePage.jsx   # Main page with gift and cards
│   │   └── SurprisePage.css
│   ├── App.jsx          # Main app component with routing
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🖼️ Adding Your Images and Text

### Step 1: Add Images
Place your memory images in the `public/images/` folder with names:
- memory1.jpg
- memory2.jpg
- memory3.jpg
- memory4.jpg
- memory5.jpg
- memory6.jpg

You can add as many images as you want!

### Step 2: Update Card Text
Edit the `memoryCards` array in `src/pages/SurprisePage.jsx`:

```javascript
const memoryCards = [
  { id: 1, image: '/images/memory1.jpg', text: 'Your custom text here 💕' },
  { id: 2, image: '/images/memory2.jpg', text: 'Another sweet memory 😄' },
  // Add more cards...
];
```

## 🎨 Customization

### Change Names Validation
By default, any names are accepted. To add custom validation, edit the `handleSubmit` function in `src/pages/WelcomePage.jsx`.

### Modify Colors
The romantic Christmas/New Year theme uses:
- Deep purple/blue gradients for backgrounds
- Pink/red gradients for cards
- Gold ribbons on gift box
- White snow and sparkle effects

You can customize colors in the respective CSS files.

### Adjust Animations
All animations use Framer Motion. Modify animation parameters in the component files:
- Duration
- Delay
- Spring stiffness
- Easing functions

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: 3 cards per row
- **Tablet**: 2 cards per row  
- **Mobile**: 1 card per row

## 🎁 How It Works

1. Users enter their names on the welcome page
2. After submission, they're redirected to the surprise page
3. An emoji and message greet them
4. Double-clicking the gift box triggers a magical opening animation
5. Memory cards appear in a grid layout
6. Clicking a card flips it to show the text
7. Click again to return to normal size

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build:
```bash
npm run preview
```

## 📦 Dependencies

- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **react-router-dom**: ^6.22.0
- **framer-motion**: ^11.0.3
- **vite**: ^6.0.3

## 💝 Enjoy Your Memories!

This website is perfect for:
- Romantic New Year surprises
- Christmas gifts
- Anniversary celebrations
- Birthday memories
- Any special occasion!

---

Made with ❤️ and lots of ✨
