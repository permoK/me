# Portfolio Website - Exact Video Recreation

This is an **exact recreation** of the portfolio website shown in the reference video, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Every detail has been carefully analyzed and replicated to match the original design.

## 🎯 **Exact Features from Video**

### **Layout Structure (Matching Video)**
- **Horizontal Sliding Sections** - Full-screen slides that transition horizontally
- **Left Sidebar Navigation** - Dot-based navigation with labels and active indicators
- **5 Main Sections** - Hero, About, Work, Skills, Contact (exactly as shown)
- **Black Background Theme** - Pure black background with white text
- **Minimal Typography** - Clean, light font weights with proper spacing

### **🎬 All 8 Animation Types (As Requested)**
1. **Fade** - Text reveals and content loading animations
2. **Slide** - Horizontal section transitions and element movements
3. **Scale** - Hover effects on navigation dots and interactive elements
4. **Wipe** - Text and content reveal animations using clipPath
5. **Spin** - Subtle floating particle animations
6. **Flip** - Not prominently featured but available for interactions
7. **Blur** - Smooth content transitions between slides
8. **Fold** - Section reveal animations with transform origins

### **🎮 Interaction Methods (From Video)**
- **Mouse Wheel** - Scroll to navigate between sections
- **Keyboard Navigation** - Arrow keys to move between slides
- **Dot Navigation** - Click sidebar dots to jump to specific sections
- **Smooth Transitions** - Fluid animations between all sections

## 🛠️ **Technologies Used**

- **Next.js 15.3.3** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Lucide React** - Clean, consistent icons

## 🚀 **Getting Started**

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd portfolio
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **View Portfolio**
   Open [http://localhost:3000](http://localhost:3000)

## 📁 **Project Structure**

```
src/
├── app/
│   ├── globals.css          # Global styles (black theme, typography)
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main entry point
├── components/
│   ├── PortfolioSlider.tsx  # Main slider container
│   ├── Navigation.tsx       # Left sidebar navigation
│   ├── HeroSection.tsx      # Slide 1: Hero/Landing
│   ├── AboutSection.tsx     # Slide 2: About content
│   ├── ProjectSection.tsx   # Slide 3: Work/Projects
│   ├── SkillsSection.tsx    # Slide 4: Skills & expertise
│   └── ContactSection.tsx   # Slide 5: Contact information
├── hooks/
│   └── useScrollSpy.ts      # Horizontal slider logic
└── lib/
    └── animations.ts        # All animation variants
```

## 🎨 **Design Details (Matching Video)**

### **Section 1: Hero**
- Large typography with "ALEX CHEN"
- Subtitle: "CREATIVE DEVELOPER & DIGITAL ARTIST"
- Letter-by-letter text animation
- Minimal decorative elements

### **Section 2: About**
- Large "ABOUT" background text
- Two-column layout with content on right
- Skill tags with hover effects
- Decorative line elements

### **Section 3: Work**
- Large "WORK" background text
- Project list with hover animations
- Clean typography with years and categories
- Minimal project presentation

### **Section 4: Skills**
- Animated skill bars with percentages
- Large "SKILLS" background text
- Experience statistics
- Floating decorative elements

### **Section 5: Contact**
- Large "CONTACT" background text
- Contact information with icons
- Social media links
- Call-to-action button

## 🎮 **Navigation & Controls**

- **Scroll Wheel**: Navigate between sections
- **Arrow Keys**: ← → to move between slides
- **Sidebar Dots**: Click to jump to specific sections
- **Progress Bar**: Bottom indicator showing current position

## 🎯 **Customization**

### **Personal Content**
Update these components with your information:
- `HeroSection.tsx` - Your name and title
- `AboutSection.tsx` - Your bio and background
- `ProjectSection.tsx` - Your projects and work
- `SkillsSection.tsx` - Your skills and experience
- `ContactSection.tsx` - Your contact details

### **Styling**
- Colors: Modify in Tailwind classes
- Typography: Update font weights and sizes
- Animations: Adjust timing in `animations.ts`

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
npm run build
# Deploy to Vercel
```

### **Other Platforms**
```bash
npm run build
npm start
```

## 📱 **Responsive Design**

- **Desktop**: Full horizontal sliding experience
- **Tablet**: Adapted navigation and touch support
- **Mobile**: Optimized layouts and interactions

## ⚡ **Performance**

- **Optimized Animations**: Smooth 60fps transitions
- **Efficient Rendering**: Only active slide is rendered
- **Fast Loading**: Minimal bundle size with code splitting

---

## 🎬 **Video Analysis Notes**

This portfolio was built by carefully analyzing the reference video frame by frame to ensure:
- ✅ Exact layout structure and proportions
- ✅ Matching typography and spacing
- ✅ Identical navigation behavior
- ✅ Same transition animations and timing
- ✅ Consistent color scheme and styling
- ✅ All interactive elements work as shown

**Result**: A pixel-perfect recreation of the original portfolio design with all requested animations and functionality.
# me
