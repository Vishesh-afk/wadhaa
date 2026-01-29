# GSAP Implementation Guide

## Overview
This document outlines the GSAP (GreenSock Animation Platform) implementation in your Wadha Landing Page. GSAP provides professional-grade animations that significantly enhance the user experience.

## Installed Packages
- **gsap**: ^3.14.2 - Core GSAP library
- **@gsap/react**: ^2.1.1 - React-specific GSAP hooks

## Key Features Implemented

### 1. **Navbar Animations**
- **Entrance Animation**: Navbar slides down from top with fade-in effect
- **Staggered Nav Items**: Menu items and button animate in sequence
- **Smooth Transitions**: Professional easing functions for natural movement

```javascript
// Navbar slides in from top
gsap.from(navRef.current, {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
});
```

### 2. **Hero Section Animations**
- **Text Reveal**: Badge, heading, and description animate in with stagger
- **Animated Background Blobs**: Floating gradient blobs with continuous motion
- **3D Carousel**: Smooth GSAP-powered transitions between carousel items
- **Dynamic Card Scaling**: Cards smoothly scale and fade based on position

```javascript
// Animated background blobs
gsap.to('.blob-1', {
    x: 100,
    y: -50,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});
```

### 3. **Features Section (ScrollTrigger)**
- **Scroll-Triggered Reveals**: Feature cards animate in when scrolled into view
- **Staggered Animation**: Cards appear one after another for visual interest
- **Interactive Icon Rotation**: Icons rotate 360° on hover with bounce effect

```javascript
gsap.from(features, {
    scrollTrigger: {
        trigger: featuresRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});
```

### 4. **Products Section (ScrollTrigger)**
- **Product Card Reveals**: Cards fade and slide up when visible
- **Hover Lift Effect**: GSAP-powered hover animations for smooth card lift
- **Staggered Entrance**: Products appear sequentially for better UX

```javascript
// Hover animation
card.addEventListener('mouseenter', () => {
    gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
    });
});
```

## Animation Patterns Used

### Easing Functions
- `power3.out` - Smooth deceleration for entrance animations
- `power2.out` - Quick, natural movement for interactions
- `power4.out` - Extra smooth for hero text
- `sine.inOut` - Organic, wave-like motion for background elements
- `back.out(1.7)` - Playful bounce effect for icons

### ScrollTrigger Configuration
```javascript
scrollTrigger: {
    trigger: element,
    start: 'top 80%',      // Animation starts when element is 80% from top
    end: 'bottom 20%',      // Ends when element is 20% from bottom
    toggleActions: 'play none none reverse'  // Play on enter, reverse on leave
}
```

## Performance Optimizations
1. **useGSAP Hook**: Automatic cleanup of animations
2. **Scoped Animations**: Animations are scoped to specific components
3. **Hardware Acceleration**: GSAP automatically uses GPU for transforms
4. **Efficient Selectors**: Using refs and query selectors for direct DOM access

## Best Practices Followed
- ✅ All animations use refs for direct DOM access
- ✅ Cleanup handled automatically by useGSAP
- ✅ Animations are non-blocking and performant
- ✅ Responsive design maintained with animations
- ✅ Accessibility preserved (animations don't interfere with navigation)

## How to Customize

### Adjust Animation Speed
```javascript
// Change duration (in seconds)
duration: 0.8  // Faster: 0.4, Slower: 1.2
```

### Modify Easing
```javascript
// Try different easing functions
ease: 'elastic.out(1, 0.3)'  // Bouncy
ease: 'expo.out'              // Dramatic
ease: 'circ.out'              // Circular
```

### Change Stagger Timing
```javascript
stagger: 0.2  // Time between each item (in seconds)
```

## Running the Project
```bash
npm install
npm run dev
```

## GSAP Resources
- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Easing Visualizer](https://greensock.com/ease-visualizer/)

## Future Enhancement Ideas
- Add page transition animations
- Implement parallax scrolling effects
- Add SVG path animations for logos
- Create animated data visualizations
- Add magnetic button effects
- Implement smooth scroll with ScrollSmoother

---

**Note**: All animations are optimized for performance and will automatically pause when elements are off-screen, thanks to GSAP's intelligent rendering engine.
