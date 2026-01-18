# PromptCraft Academy - Project Plan

## 1. Product Definition

**Site Name:** PromptCraft Academy

**Target Audience:**
- Web Developers (Frontend/Backend)
- Mobile App Developers (iOS/Android)
- Game Developers
- UI/UX Designers wanting to leverage AI
- Beginners wanting to enter tech via efficient AI prompting

**Learning Goals:**
- Master the art of structured prompting (Context, Instruction, Constraints, Output).
- Learn to build full-stack apps using AI tools (Gemini, ChatGPT, Claude).
- Bridge the gap between vague ideas and executable code.

**Core Modules:**
1. **Web Development**: HTML/CSS/JS, React, Node.js, Databases.
2. **App Development**: React Native, Flutter, Swift/Kotlin specifics.
3. **Game & Simulation**: Unity/C#, logic generation, asset creation prompts.

**Primary Features:**
- **No Login Required**: Instant access to all content.
- **Theme Picker**: 7 predefined aesthetic themes (Glacier, Harvest, Emerald, Amethyst, Rose, Sunset, Ocean).
- **Prompt Library**: Copy-pasteable, categorized prompts.
- **Interactive Lessons**: Theory -> Task -> Solution structure.
- **Responsive Design**: Mobile-first approach.

**Recommended Tech Stack:**
- **Frontend**: React (Vite) for performance and component architecture.
- **Styling**: Vanilla CSS with CSS Variables for dynamic theming.
- **Routing**: React Router v6.
- **State Management**: React Context API (for Theme and Course progress tracking in local storage).
- **Deployment**: Vercel or Netlify (Static Site).
- **Content**: Stored as structured JSON/TypeScript objects for easy maintenance without a database.

**Accessibility, Privacy, & SEO:**
- **Accessibility**: ARIA labels, semantic HTML5, high contrast modes (via themes).
- **Privacy**: No cookies, no data collection, LocalStorage for progress.
- **SEO**: Meta tags per lesson, semantic hierarchy (h1-h6), structured data for "Course".

**Timeline / MVP Scope:**
- **Week 1**: Project scaffold, Design System (Themes), Home Page, Routing.
- **Week 2**: Content populating. (MVP Done)

---

## 2. Sitemap & Pages

### **1. Home Page (`/`)**
- **Hero Section**: Value proposition ("From Idea to Code"), "Start Learning" CTA.
- **Feature Highlights**: Why Prompt Engineering?
- **Module Cards**: Quick links to Web, App, Game tracks.

### **2. Curriculum / Course Overview (`/courses`)**
- **Course List**: Card grid showing Course Title, Difficulty, Module count.
- **Progress**: Visual indicator.

### **3. Lesson View (`/course/:courseId/:lessonId`)**
- **Sidebar**: Navigation tree (Modules -> Lessons).
- **Main Content Area**:
  - **Theory Section**: Brief, simple explanation.
  - **Prompt Sandbox**: "Before" (Bad prompt) vs "After" (Structured Prompt) comparison.
  - **Interactive Task**: "Try it yourself" instructions.
  - **Instructor Notes**: Pro notes.

### **4. Prompt Library (`/library`)**
- **Search Bar**: Search prompts by keyword.
- **Card Layout**: Copy button, Prompt text, usage context.

### **5. Sandbox / Playground (`/sandbox`)**
- A text area to practice structuring prompts.

---

## 3. Design System & Themes

**Themes (CSS Variables)**:
- Glacier (Blue)
- Harvest (Orange)
- Emerald (Green)
- Amethyst (Purple)
- Rose (Pink)
- Sunset (Gradient)
- Ocean (Teal)
