import { Globe } from 'lucide-react';

export const webDevelopment = {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Master HTML, CSS, JS, and React via AI Prompting',
    icon: Globe,
    modules: [
        {
            id: 'web-m1',
            title: 'Module 1: Idea → Prompts (Planning)',
            lessons: [
                {
                    id: 'web-m1-01',
                    title: '01: Introduction to Prompt Engineering',
                    objectives: ['Define prompt engineering in the context of coding', 'Understand the difference between zero-shot and few-shot prompting', 'Learn the core structure of a technical prompt'],
                    summary: 'Prompt engineering is the art of communicating with AI models to get precise, executable outputs. In web development, this means moving beyond "make a website" to specific, technical instructions.',
                    theory: "Large Language Models (LLMs) operate as sophisticated completion engines, predicting the next likely word. To steer them towards high-quality code, use the CICO framework: clearly define the Context (role), Instruction (task), Constraints (limitations like 'no frameworks'), and Output Format (e.g., 'markdown code block').",
                    task: {
                        description: 'Refine a vague request into a CICO-structured prompt.',
                        before: 'How do I make a website?',
                        after: 'Act as a Senior Frontend Developer (Context). Create a step-by-step technical roadmap for building a personal portfolio website (Instruction). Use standard HTML/CSS, avoid frameworks for now, and focus on semantic structure (Constraint). Output the response as a markdown checklist (Output Format).'
                    },
                    keywords: [
                        { term: 'CICO Framework', definition: 'Context, Instruction, Constraint, Output - the 4 pillars of a good prompt.' },
                        { term: 'Zero-shot', definition: 'Asking the AI to do something without providing examples.' }
                    ],
                    resources: [],
                    instructorNotes: 'Emphasize that the AI has read the entire internet but needs you to filter that knowledge.'
                },
                {
                    id: 'web-m1-02',
                    title: '02: Anatomy of an Effective Prompt',
                    objectives: ['Identify key components of a prompt', 'Analyze why prompts fail', 'Master the use of delimiters'],
                    summary: 'A prompt is like a function call. If you pass bad arguments, you get a bad return value. We dissect the anatomy of the perfect prompt.',
                    theory: "Structuring your prompt is as important as the content. Use clear delimiters like '###' or '---' to separate instructions from code snippets. Be explicitly specific about technology versions (e.g., 'Use TailwindCSS v3.4' instead of just 'CSS') to avoid outdated syntax. Ambiguity leads to hallucinations.",
                    task: {
                        description: 'Rewrite a prompt to fix ambiguity.',
                        before: 'Write code for a button.',
                        after: 'Create a React Functional Component for a "Submit" button. It should accept "isLoading" and "onClick" props. Style it using TailwindCSS with a blue-500 background and white text. Include a loading spinner icon when isLoading is true.'
                    },
                    keywords: [
                        { term: 'Delimiters', definition: 'Symbols like ###, """, or --- used to separate parts of a prompt.' }
                    ],
                    resources: [],
                    instructorNotes: 'Show how changing one word (e.g., "modern" vs "brutalist") completely changes the output.'
                },
                {
                    id: 'web-m1-04',
                    title: '04: Converting a Website Idea into a Clear Goal',
                    objectives: ['Formalize abstract ideas', 'Define success metrics for a site', 'Create a project mission statement'],
                    summary: 'Before writing code, you must define what you are building. AI can help clarify your vision.',
                    theory: "Often, you don't know exactly what you want until you're asked. Use the 'Reverse Interview' technique: instruct the AI to act as a Product Manager and interview *you*. By answering its clarifying questions about features and audience, you force the AI to build a comprehensive context for itself.",
                    task: {
                        description: 'Use the "Reverse Interview" technique.',
                        before: 'I want a blog.',
                        after: 'I want to build a tech blog for junior developers. Act as a Product Manager. Ask me 5 questions to clarify the features, target audience, and unique value proposition of this project. Do not generate the plan yet, just ask the questions.'
                    },
                    keywords: [
                        { term: 'Reverse Formatting', definition: 'Asking the AI to ask YOU questions.' }
                    ],
                    resources: [],
                    instructorNotes: 'This is a powerful technique for clients who don\'t know what they want.'
                },
                {
                    id: 'web-m1-05',
                    title: '05: Website Type Identification',
                    objectives: ['Classify websites by functionality', 'Understand technical implications of site types', 'Choose the right tech stack based on type'],
                    summary: 'Is it a static site, a dashboard, or a game? The prompt for each requires different technical context.',
                    theory: "Different types of websites trigger different 'mental models' in the AI's training data. For an E-commerce site, your prompts should emphasize 'Security' and 'Database Transactions'. Conversely, for a Creative Portfolio, you should prime the AI to focus on 'Animations', 'Visual Hierarchy', and 'Responsive Layouts'.",
                    task: {
                        description: 'Define the technical scope for an E-commerce site.',
                        before: 'Plan an online store.',
                        after: 'Plan the technical architecture for a small E-commerce site selling digital art. It requires: User Authentication (Auth0), a Database for products (PostgreSQL), Payment Processing (Stripe), and a shopping cart state (Redux). Suggest a folder structure.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'web-m1-06',
                    title: '06: Generating Feature Lists',
                    objectives: ['Brainstorm comprehensive features', 'Prioritize MVP features', 'Identify hidden requirements'],
                    summary: 'Use AI to expand your basic idea into a full feature list, then prioritize.',
                    theory: "Turn the AI into a brainstorming partner to flesh out your application. Ask it to generate a comprehensive feature list and then prioritize them using the MoSCoW method (Must-have, Should-have, Could-have, Won't-have). This ensures you build the critical 'MVP' features first.",
                    task: {
                        description: 'Generate and prioritize features.',
                        before: 'List features for a todo app.',
                        after: 'List 20 potential features for a productivity Todo App for remote teams. Then, categorize them into "MVP" (Day 1 release) and "V2" (Later release). prioritize real-time collaboration for the MVP.'
                    },
                    keywords: [
                        { term: 'MoSCoW Method', definition: 'Must have, Should have, Could have, Won\'t have.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'web-m1-07',
                    title: '07: Creating User Personas',
                    objectives: ['Define user demographics', 'Simulate user journeys', 'Empathize with user pain points'],
                    summary: 'Who are you building for? AI can generate detailed personas to help test your logic later.',
                    theory: "User Personas aren't just for marketers; they are powerful testing tools. By asking the AI to 'Act as a Non-Technical Senior', you can simulate how a specific user would navigate your site. This helps identify UI/UX friction points that a developer might overlook.",
                    task: {
                        description: 'Generate a User Persona for a fitness app.',
                        before: 'Who uses a fitness app?',
                        after: 'Create 3 detailed user personas for a "Gamified Fitness Tracker" app. Include their Name, Age, Main Motivation (e.g., weight loss, muscle gain), Technical Proficiency, and a "Frustration" they have with current market solutions.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'web-m1-08',
                    title: '08: Website Sitemap & Page Structure',
                    objectives: ['Visualize site navigation', 'Define hierarchy', 'Plan URL structures'],
                    summary: 'Turning feature lists into concrete pages and navigation flows.',
                    theory: "Before writing code, visualize the structure of your website with a Sitemap. Prompt the AI to generate a 'Tree Structure' or a nested markdown list representing the hierarchy of pages (Home -> About -> Team). This blueprint prevents navigation errors and ensures all content is reachable.",
                    task: {
                        description: 'Generate a sitemap for a restaurant.',
                        before: 'Make a menu for a restaurant site.',
                        after: 'Create a hierarchical sitemap for a luxury Italian restaurant website. Include: Home, Menu (nested with Lunch/Dinner/Wine), Reservations (with booking form), About Us, and Contact. Output as a Markdown indented list.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'web-m1-09',
                    title: '09: Writing Functional Requirements',
                    objectives: ['Translate features to requirements', 'Write "The user shall..." statements', 'Define edge cases'],
                    summary: 'Moving from "What it looks like" to "How it works".',
                    theory: "Translate visual features into strict text-based logic with Functional Requirements. Phrases like 'The user shall...' are clearer to an AI than 'Make it look nice'. Specify the Input (Click Button), Process (Validate Form), and Output (Redirect to Dashboard) to get accurate code.",
                    task: {
                        description: 'Define the "Login" requirement.',
                        before: 'How does login work?',
                        after: 'Write detailed functional requirements for a "Forgot Password" flow. Include steps for: 1. User enters email, 2. System validates format, 3. System checks database, 4. System sends magic link (or error message). Include security timeout constraints.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'web-m1-10',
                    title: '10: Content Strategy & Prompts',
                    objectives: ['Generate placeholder content', 'Define tone of voice', 'Plan SEO headlines'],
                    summary: 'Design needs content. Use AI to generate realistic copy instead of Lorem Ipsum.',
                    theory: "Design with real content, not 'Lorem Ipsum', to reveal layout flaws early. 'Lorem Ipsum' is uniform, but real data is messy. Prompt the AI to generate 'Realistic, variable-length content'—long names, empty states, and weird characters—to ensure your UI can handle the real world.",
                    task: {
                        description: 'Generate hero section copy.',
                        before: 'Write text for a travel site.',
                        after: 'Write 3 variations of a Hero Section headline and subheadline for an "Adventure Travel Agency". Tone: Exciting, Urgent, Bold. Variation 1: Short & Punchy. Variation 2: Emotional & Story-driven. Variation 3: Focus on Discounts.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'web-m1-11',
                    title: '11: Breaking Website into Tasks',
                    objectives: ['Create a development roadmap', 'Estimate time per task', 'Identify dependencies'],
                    summary: 'How to eat the elephant. Breaking the project into unblockable tickets.',
                    theory: "Overwhelmed by a big project? Ask the AI to act as a Project Manager. Feed it your features list and sitemap, then request a 'Kanban Board' breakdown. It will split the work into small, 'unblockable' tickets (e.g., 'Setup React Repo', 'Create Navbar Component') that make progress manageable.",
                    task: {
                        description: 'Create a Trello board structure.',
                        before: 'What do I do first?',
                        after: 'Based on the Restaurant Website sitemap we created, break the development process into small, actionable tasks. Organize them into columns: "Setup", "Frontend Components", "Backend APIs", "Content Population", "Testing".'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'web-m1-12',
                    title: '12: SEO Requirements & Keywords',
                    objectives: ['Identify primary keywords', 'Structure HTML for SEO', 'Generate meta tags'],
                    summary: 'Building traffic into the DNA of the site structure.',
                    theory: "SEO should be baked into your site's DNA, not added later. Prompt for 'Semantic HTML' (using `<article>` not `<div>`) and 'Meta Descriptions' from the start. Ask the AI to identify standard 'Keywords' for your niche to ensure your site structure is intelligible to search engines.",
                    task: {
                        description: 'Generate SEO meta tags.',
                        before: 'Do SEO for my blog post.',
                        after: 'Generate the SEO Title Tag (max 60 chars) and Meta Description (max 160 chars) for a blog post titled "10 Tips for React Performance". Target keywords: React UseMemo, Web Vitals, Frontend Optimization.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'web-m2',
            title: 'Module 2: Frontend Prompts (UI Coding)',
            lessons: [
                {
                    id: 'WP-FE-01',
                    title: 'Generating HTML Structure',
                    objectives: ['Write Semantic HTML5', 'Understand ARIA roles via prompts', 'Create clean DOM trees'],
                    summary: 'The skeleton of the web. Getting the AI to output valid, accessible HTML.',
                    theory: "Without specific instructions, AI often generates 'div soup'—code clutter that harms accessibility. You must explicitly constrain the AI to use Semantic HTML5 tags. Demanding tags like `<article>`, `<nav>`, and `<header>` ensures your code is accessible to screen readers and friendlier to SEO.",
                    task: {
                        description: 'Generate a semantic blog post layout',
                        before: 'Code a blog post page.',
                        after: 'Create the HTML5 structure for a single blog post. Use <article> for the main content, <header> for the title/meta, <aside> for the sidebar, and <footer> for author bio. Do not use CSS classes yet, just pure structural HTML.'
                    },
                    keywords: [{ term: 'Semantic HTML', definition: 'Tags that convey meaning (e.g., <nav>) rather than just presentation (e.g., <div>).' }],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-FE-02',
                    title: 'CSS Styling with Tailwind / Bootstrap',
                    objectives: ['Prompt for utility classes', 'Manage color tokens', 'Handle responsive prefixes'],
                    summary: 'Applying styles quickly using frameworks.',
                    theory: "Tailwind CSS is a powerful utility framework, but AI can use outdated classes. Always specify the version (e.g., 'Use Tailwind v3.4') to get the latest features. Adding constraints like 'Use only the Slate color scale' ensures the generated design remains consistent with your brand.",
                    task: {
                        description: 'Style a card component.',
                        before: 'Style this card with Tailwind.',
                        after: 'Style the following HTML card using TailwindCSS. Give it a soft shadow (shadow-lg), rounded corners (rounded-xl), and a white background. On hover, translate it up slightly (-translate-y-1). Use padding-6.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-FE-03',
                    title: 'Responsive Design Prompts',
                    objectives: ['Mobile-first workflow', 'Media query generation', 'Grid vs Flex prompts'],
                    summary: 'Ensuring your site looks good on all devices.',
                    theory: "Adopt a 'Mobile First' workflow when prompting for layouts. Instruct the AI to write the base styles for small screens first, and then use breakpoints (like `md:` and `lg:` in Tailwind) to enhance the design for larger displays. This prevents 'desktop-only' sites that break on phones.",
                    task: {
                        description: 'Make a navigation bar responsive.',
                        before: 'Make this menu responsive.',
                        after: 'Modify this CSS Grid layout to be a single column on mobile (grid-cols-1) and three columns on desktop (lg:grid-cols-3) using Tailwind classes.'
                    },
                    keywords: [], resources: [], instructorNotes: ''
                },
                {
                    id: 'WP-FE-04',
                    title: 'React / Vue Component Generation',
                    objectives: ['Build reusable UI blocks with props', 'Manage local state (useState)', 'Define strict TypeScript interfaces'],
                    summary: 'Building the lego blocks of your app. Components need explicit data contracts.',
                    theory: "Building robust components requires clear definitions of 'Props' (inputs) and 'State' (internal memory). Explicitly tell the AI about the data contract: 'Input is a User Object, Output is a Profile Card'. This encourages the creation of 'Pure Components' that are easier to test and reuse.",
                    task: {
                        description: 'Create a reusable Profile Card.',
                        before: 'Make a React card.',
                        after: 'Create a functional React component called "ProfileCard". It accepts props: "avatarUrl" (string), "username" (string), "bio" (string), and "onFollow" (function). Use TypeScript interfaces. Handle the case where "avatarUrl" is missing by showing a default initial placeholder.'
                    },
                    keywords: [
                        { term: 'Props', definition: 'ReadOnly inputs passed from a parent component to a child component.' },
                        { term: 'State', definition: 'Data managed within the component that can change over time.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-FE-05',
                    title: 'Navigation Bar & Footer Design',
                    objectives: ['Create responsive layouts with Flexbox', 'Implement mobile hamburger menus', 'Manage active link states'],
                    summary: 'The compass of your site. Navbars are surprisingly complex due to mobile responsiveness.',
                    theory: "Navigation bars are deceptive; their mobile responsiveness adds significant complexity. You must explicitly prompt for the 'Hamburger Menu' pattern: hiding the menu on desktop and revealing a toggle button on mobile. Don't forget to request 'Smooth Transitions' for the menu open/close animation.",
                    task: {
                        description: 'Create a responsive Navbar with framer-motion.',
                        before: 'Code a navbar.',
                        after: 'Create a React Navbar component. Branding on the left, links on the right. On mobile (max-width: 768px), hide links and show a Hamburger icon. Clicking the icon toggles a dropdown menu. Use `framer-motion` to animate the menu sliding down from the top.'
                    },
                    keywords: [
                        { term: 'Hamburger Menu', definition: 'The three-line icon used to toggle a navigation menu on mobile devices.' },
                        { term: 'Sticky Positioning', definition: 'CSS property that fixes an element to the top of the viewport when scrolling.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-FE-06',
                    title: 'Form Creation & Validation',
                    objectives: ['Handle controlled components', 'Implement client-side validation (Regex)', 'Manage form submission states'],
                    summary: 'The main way users talk to your app. If a form is broken, you lose customers.',
                    theory: "User input is the most common source of errors. Implement 'Client-Side Validation' to catch mistakes instantly. Prompt for 'Controlled Components' in React so the state tracks every keystroke, and use Regex patterns to validate fields like emails before the user even clicks submit.",
                    task: {
                        description: 'Create a robust Signup Form.',
                        before: 'Make a form.',
                        after: 'Create a "SignupForm" component with React Hook Form. Fields: Email, Password, Confirm Password. Rules: Email must be valid regex. Passwords must match. Password strength indicator (Red/Yellow/Green). Disable submit button until form is valid.'
                    },
                    keywords: [
                        { term: 'Controlled Component', definition: 'A form element whose value is controlled by React state.' },
                        { term: 'Regex', definition: 'Regular Expression - a sequence of characters that specifies a search pattern (used for validation).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-FE-07',
                    title: 'Animations & Scroll Effects',
                    objectives: ['Add specific micro-interactions', 'Use libraries like Framer Motion', 'Avoid layout thrashing'],
                    summary: 'Motion adds polish. A static site feels dead.',
                    theory: "Great animation is subtle and purposeful, enhancing the UX without distracting the user. Prompt for 'Subtle CSS transitions' on hover states. For complex movement, request 'Framer Motion' code. Crucially, remind the AI to animate only 'Transform' and 'Opacity' properties to maintain high performance (60fps).",
                    task: {
                        description: 'Animate a Hero section on load.',
                        before: 'Add animations.',
                        after: 'Using Framer Motion, wrap the "HeroSection" text elements. The H1 should fade in and slide up (y: 20 -> 0) with a delay of 0.2s. The CTA button should scale up slightly (scale: 1.05) on hover using the `whileHover` prop.'
                    },
                    keywords: [
                        { term: 'Layout Thrashing', definition: 'Forcing the browser to recalculate layout multiple times, causing stuttering.' },
                        { term: 'Micro-interaction', definition: 'Small animation (like a like button heart pop) that provides feedback.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-FE-08',
                    title: 'Accessibility in Frontend',
                    objectives: ['Audit sites for WCAG compliance', 'Implement ARIA labels correctly', 'Design high-contrast themes'],
                    summary: 'The web is for everyone. Building exclusively for mouse-users is discriminatory.',
                    theory: "Web accessibility (a11y) ensures your site is usable by everyone. It starts with valid Semantic HTML. Prompt the AI to 'Audit color contrast' to help visually impaired users, and ensure 'Keyboard Focus States' are visible so users can navigate without a mouse. It's often defined by law.",
                    task: {
                        description: 'Audit a color palette and form.',
                        before: 'Fix colors.',
                        after: 'Review this color palette (Text: #999, Bg: #fff) for WCAG AA compliance. It likely fails. Suggest a darker grey (#4b5563) that passes. also, add the correct `aria-label` to a button that only contains an icon (e.g., an "X" close button).'
                    },
                    keywords: [
                        { term: 'WCAG', definition: 'Web Content Accessibility Guidelines.' },
                        { term: 'ARIA', definition: 'Accessible Rich Internet Applications - a set of attributes that define ways to make web content more accessible.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-FE-09',
                    title: 'Performance Optimization',
                    objectives: ['Implement lazy loading for routes/images', 'Virtualize large lists', 'Memoize expensive calculations'],
                    summary: 'Performance = User Retention. If it loads in >3s, they leave.',
                    theory: "Performance drives user retention. The browser's main thread can get easily blocked by heavy tasks. Prompt the AI to implement 'Lazy Loading' for images and 'Virtualization' for long lists, which renders only the visible items. Use 'React.memo' to prevent components from re-rendering unnecessarily.",
                    task: {
                        description: 'Optimize a heavy list component.',
                        before: 'Make this faster.',
                        after: 'This "ProductList" component renders 5000 DOM nodes and lags on scroll. Refactor it to use `react-window` to only render the items currently in the viewport. Also wrap individual `ProductCard` items in `React.memo`.'
                    },
                    keywords: [
                        { term: 'Lazy Loading', definition: 'Deferring loading of non-critical resources (like images below the fold) until they are needed.' },
                        { term: 'Virtualization', definition: 'Rendering only the visible portion of a massive list to keep the DOM light.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'web-m3',
            title: 'Module 3: UI / UX Prompts',
            lessons: [
                {
                    id: 'WP-UX-01',
                    title: 'Website Wireframe Creation',
                    objectives: ['Translate mental models into text descriptions', 'Use AI to generate ASCII or SVG wireframes', 'Establish layout hierarchy before pixels'],
                    summary: 'Wireframing is the blueprint phase. Using AI, we can describe a layout in text and have it validated or visualized before opening a design tool.',
                    theory: "Before opening a design tool, use text to structure your layout. Prompt the AI for a hierarchical representation—like a nested list or ASCII art—of your interface. This forces the model to organize information logically, creating a solid UX foundation before you get distracted by pixels and colors.",
                    task: {
                        description: 'Generate a text-based wireframe for a Pet Adoption site.',
                        before: 'Draw a homepage.',
                        after: 'Create a text-based hierarchical wireframe for a "Pet Adoption" homepage. Sections should include: 1. Header (Logo, Nav), 2. Hero (Emotional image + Search Bar), 3. Filter Sidebar (Species, Age), 4. Results Grid (Cards), 5. Footer. Describe the visual priority of each element.'
                    },
                    keywords: [
                        { term: 'Low-Fidelity', definition: 'A design that focuses on structure and flow rather than visual details (colors, images).' },
                        { term: 'Information Architecture', definition: 'The structural design of shared information environments; organizing how content is arranged.' }
                    ],
                    resources: [],
                    instructorNotes: 'Encourage students to not skip this step. "Thinking in text" is faster than moving pixels.'
                },
                {
                    id: 'WP-UX-02',
                    title: 'Design System for Websites',
                    objectives: ['Define consistent design tokens', 'Create scalable typography scales', 'Manage spacing systems via tokens'],
                    summary: 'A design system is the single source of truth. We use AI to generate the mathematical scales for spacing, type, and color that ensure consistency.',
                    theory: "A Design System is the single source of truth for your UI. Leverage the AI's mathematical capabilities to generate harmonic scales. Ask for a 'Modular Type Scale' (e.g., growing by 1.25x) and a '4px Grid' for spacing. Export these as JSON Tokens to ensure perfect consistency across your entire CSS.",
                    task: {
                        description: 'Generate a JSON Design System map.',
                        before: 'Pick fonts and colors.',
                        after: 'Create a JSON object representing a Design System. Include: 1. Color Palette (Primary, Secondary, Neutral, Semantic Success/Error). 2. Typography Scale (H1-H6, Body, Caption in rems). 3. Spacing Scale (xs=0.25rem, sm=0.5rem, etc.). Use the "Inter" font family.'
                    },
                    keywords: [
                        { term: 'Design Tokens', definition: 'The visual design atoms of the design system — specifically, they are named entities that store visual design attributes.' },
                        { term: 'Modular Scale', definition: 'A sequence of numbers that relate to one another in a meaningful way, used for sizing type.' }
                    ],
                    resources: [],
                    instructorNotes: 'explain that this JSON can be directly pasted into Tailwind config or CSS variables.'
                },
                {
                    id: 'WP-UX-03',
                    title: 'Color Palette & Typography',
                    objectives: ['Understand color psychology in prompts', 'Generate accessible color combos', 'Pair fonts effectively'],
                    summary: 'Colors evoke emotion. Typography ensures readability. We learn to prompt for specific "Vibes" that translate into hex codes.',
                    theory: "Use evocative adjectives to guide the AI's aesthetic choices. Words like 'Trustworthy' will yield blues for a bank, while 'Energetic' might produce orange for a startup. Prompt for 'High Contrast' combinations to ensure accessibility, and ask for specific font pairings (e.g., Serif Headers with Sans-Serif Body) to create professional typographic balance.",
                    task: {
                        description: 'Generate a brand palette for a Fintech Bank.',
                        before: 'Colors for a bank.',
                        after: 'Generate a professional color palette for a "Modern Fintech Bank". The Core Values are: Security, Innovation, and Simplicity. Provide 5 Hex codes: Primary (Brand), Secondary (Action), Dark Neutral (Text), Light Neutral (Background), and Semantic Danger (Error).'
                    },
                    keywords: [
                        { term: 'Color Theory', definition: 'The science and art of using color. It explains how humans perceive color and the visual effects of how colors mix, match or contrast.' },
                        { term: 'Type Pairing', definition: 'Combining two or more typefaces that work well together.' }
                    ],
                    resources: [],
                    instructorNotes: 'Show tools like Coolors.co to validate AI outputs.'
                },
                {
                    id: 'WP-UX-04',
                    title: 'Figma Layout Prompting',
                    objectives: ['Translate visual ideas to spatial descriptions', 'Structure component hierarchies', 'Prepare descriptions for "Text-to-Design" tools'],
                    summary: 'Even without AI design tools, describing a layout spatially helps you write the CSS code later.',
                    theory: "To get accurate CSS from AI, describe your design using 'Box Model' logic. articulating the layout spatially—'A container with a row of three items, spaced evenly'—helps the model map your words directly to Flexbox or Grid properties. Avoid vague terms like 'make it pop' in favor of structural descriptions.",
                    task: {
                        description: 'Describe a "Blog Card" component spatially.',
                        before: 'Code this design.',
                        after: 'Describe a "Blog Card" component for a grid layout. Container: White bg, rounded corners, shadow. Content: 1. Image (Top, 16:9 aspect). 2. Body (Padding 16px) containing Title (Bold), Excerpt (Gray), and a "Read More" link (Bottom Right). Generate the HTML/CSS structure.'
                    },
                    keywords: [
                        { term: 'Box Model', definition: 'The fundamental structure of the web: Content, Padding, Border, Margin.' },
                        { term: 'Atomic Design', definition: 'Methodology for creating design systems: Atoms, Molecules, Organisms, Templates, Pages.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-UX-05',
                    title: 'Hero Section Design',
                    objectives: ['Design for conversion (CRO)', 'Structure compelling Value Propositions', 'Balance visual weight'],
                    summary: 'The "Hero" is the first thing a user sees. It must pass the "5-second test": What is this site and why do I care?',
                    theory: "The Hero section is your digital elevator pitch; it has seconds to convert. A high-converting Hero contains three non-negotiables: a clear Value Proposition (H1), supporting Subtext, and a bold Call to Action (Button). Prompt the AI to arrange these in a 'Z-Pattern' or 'Split Screen' layout to naturally guide the user's eye to the button.",
                    task: {
                        description: 'Design a high-converting SaaS Hero section.',
                        before: 'Make a hero section.',
                        after: 'Design a Hero Section for a Project Management SaaS. Layout: Split screen (Copy Left, UI Screenshot Right). H1: "Manage Projects without the Chaos". Subtext: "The all-in-one workspace for agile teams." CTA Button: "Start Free Trial" (High contrast Orange). Social Proof: "Trusted by 500+ teams" below button.'
                    },
                    keywords: [
                        { term: 'Above the Fold', definition: 'The definition of the screen that is visible without scrolling.' },
                        { term: 'CTA (Call to Action)', definition: 'A prompt on a website that tells the user to take some specified action (e.g., "Buy Now").' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-UX-06',
                    title: 'Conversion-Optimized Layouts',
                    objectives: ['Understand reading patterns (F and Z)', 'Design Pricing Tables for upselling', 'Use whitespace to guide attention'],
                    summary: 'Good design directs the user. We use standard patterns to make browsing intuitive and drive sales.',
                    theory: "Users scan websites rather than reading them, so visual hierarchy is key. In pricing tables, utilize the 'Anchoring Effect' by placing a high-priced plan next to your target middle tier. Prompt the AI to visually 'Highlight' the preferred option—using size, color, or badges—to steer users towards the conversion you want.",
                    task: {
                        description: 'Design a psychological Pricing Table.',
                        before: 'Make pricing cards.',
                        after: 'Design a Pricing Section with 3 tiers: Basic, Pro, Enterprise. Highlight the "Pro" tier as the "Most Popular" choice: Make it slightly larger (scale 1.05), give it a distinct border/shadow, and use a primary color button. The other buttons should be outlined.'
                    },
                    keywords: [
                        { term: 'Visual Hierarchy', definition: 'The arrangement or presentation of elements in a way that implies importance.' },
                        { term: 'Anchoring Effect', definition: 'A cognitive bias where an individual depends too heavily on an initial piece of information (the "anchor") to make subsequent judgments.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-UX-07',
                    title: 'Accessibility & UX Testing',
                    objectives: ['Audit designs for color blindness', 'Ensure screen reader compatibility flow', 'Design focus states for keyboard users'],
                    summary: 'The web is for everyone. AI can simulate how users with different abilities experience your site.',
                    theory: "Accessibility is not optional. Use AI to audit your designs against WCAG AA standards, particularly for color contrast ratios which are pure math to a model. Ensure you prompt for visible 'Focus States' on all interactive elements, guaranteeing that keyboard-only users can navigate your site just as effectively as mouse users.",
                    task: {
                        description: 'Audit a color scheme for accessibility.',
                        before: 'Is this accessible?',
                        after: 'I am using Red (#ff0000) for error messages and Green (#00ff00) for success on a white background. Act as an Accessibility Auditor. Check if this combination is safe for Red-Green color blindness. If not, suggest accessible alternatives or additional icons to convey meaning.'
                    },
                    keywords: [
                        { term: 'WCAG', definition: 'Web Content Accessibility Guidelines - the international standard for web accessibility.' },
                        { term: 'Focus State', definition: 'The visual indicator that shows which element is currently selected by the keyboard.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-UX-08',
                    title: 'UX Copywriting for Web',
                    objectives: ['Write "Microcopy" that guides users', 'Create human-centric error messages', 'Optimize button labels for action'],
                    summary: 'Words are part of the design. "Click Here" is bad UX. " Get Your Free Report" is good UX.',
                    theory: "Microcopy—the tiny text on buttons and forms—makes or breaks the user experience. Replace generic labels like 'Submit' with descriptive actions like 'Create Account'. Instruct the AI to write human-centric error messages that tell the user *how* to fix the problem, rather than just throwing a cryptic error code.",
                    task: {
                        description: 'Rewrite generic empty states.',
                        before: 'Write text for empty inbox.',
                        after: 'Rewrite the empty state message for a Messages Inbox. Instead of "No messages found", write 3 variations that are friendly and encourage action. Variation 1: Playful. Variation 2: Professional. Variation 3:  concise.'
                    },
                    keywords: [
                        { term: 'Microcopy', definition: 'Small snippets of text on apps and websites that help users do things (labels, errors, loading text).' },
                        { term: 'Empty State', definition: 'What the user sees when there is no data to display.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-UX-09',
                    title: 'Usability Audit using AI',
                    objectives: ['Simulate user flows to find friction', 'Identify cognitive load issues', 'Review navigation logic'],
                    summary: 'You can\'t always afford user testing. AI can "roleplay" a user trying to complete a task.',
                    theory: "Cognitive Load refers to the mental effort required to use your interface; less is always better. Ask the AI to simulate a specific user task, like 'Checkout', and count the clicks. If a simple action takes five steps, it's too complex. Use this audit to identify and remove friction points.",
                    task: {
                        description: 'Audit a checkout flow for friction.',
                        before: 'Check my checkout.',
                        after: 'Analyze this checkout flow steps: 1. Cart 2. Register Account (Mandatory) 3. Shipping Address 4. Billing Address 5. Payment 6. Confirmation. Identify potential drop-off points. specifically, argue for/against the "Mandatory Registration" step.'
                    },
                    keywords: [
                        { term: 'Friction', definition: 'Anything that prevents a user from accomplishing a goal effortlessly.' },
                        { term: 'Cognitive Load', definition: 'The amount of working memory resources used.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'web-m4',
            title: 'Module 4: Backend Prompts',
            lessons: [
                {
                    id: 'WP-BE-01',
                    title: 'Website Backend Architecture',
                    objectives: ['Differentiate between Monolith, Microservices, and Serverless', 'Select the right architecture based on scale and team size', 'Prompt AI for architectural trade-off analysis'],
                    summary: 'The backend is the brain. Choosing the right structure is critical. We use AI to compare architectures for specific use cases.',
                    theory: "There is no 'best' backend architecture, only the right tool for the job. Use AI as a 'Senior Architect' to evaluate trade-offs. Ask it to compare a Static Site (SSG) for potential cost savings versus a Dynamic Node.js server for flexibility, helping you make informed decisions based on your specific traffic and feature needs.",
                    task: {
                        description: 'Architect a scalable blog platform.',
                        before: 'What backend should I use?',
                        after: 'I am building a technical blog with an expected traffic of 10k users/month. I need: fast read times, a CMS for writers, and low maintenance costs. Compare: 1. Next.js (SSR) + Vercel. 2. WordPress (Monolith). 3. Gatsby (Static) + Contentful. Recommend the best fit.'
                    },
                    keywords: [
                        { term: 'Key Trade-off', definition: 'The act of losing one quality or aspect of something in return for gaining another quality or aspect (e.g., Speed vs. Consistency).' },
                        { term: 'Serverless', definition: 'A cloud-native development model that allows developers to build and run applications without having to manage servers.' }
                    ],
                    resources: [],
                    instructorNotes: 'Emphasize that "boring" technology is often better for beginners.'
                },
                {
                    id: 'WP-BE-02',
                    title: 'API Design for Forms & Auth',
                    objectives: ['Design RESTful and strict API contracts', 'Understand HTTP verbs (GET, POST, PUT, DELETE)', 'Define standard response structures'],
                    summary: 'APIs are how the frontend talks to the backend. Clear contracts prevent bugs.',
                    theory: "Great APIs follow strict conventions. Adhere to REST principles by using nouns for URLs (e.g., `/users`) rather than verbs. Prompt the AI to design 'Standardized JSON Responses' that always return a Status Code (like 200 or 404) and a consistent wrapper, ensuring mistakes are caught by the client code gracefully.",
                    task: {
                        description: 'Design a User Login API contract.',
                        before: 'Make login endpoint.',
                        after: 'Design a RESTful API specification for "User Login". Endpoint: /api/v1/auth/login. Method: POST. Request Body: { email, password }. Response (200): { token, user: { id, name } }. Response (401): { error: "Invalid credentials" }.'
                    },
                    keywords: [
                        { term: 'REST', definition: 'An architectural style for designing networked applications.' },
                        { term: 'Status Codes', definition: 'Standard response codes (200, 404, 500) that indicate the result of the API call.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-BE-03',
                    title: 'Authentication Systems',
                    objectives: ['Implement secure authentication (JWT vs Session)', 'Understand OAuth and Social Login flows', 'Secure routes with middleware'],
                    summary: 'Security is paramount. Never write your own crypto. We prompt for standard, battle-tested libraries.',
                    theory: "Security is hard; don't reinvent the wheel. Understand that JWTs offer scalable, stateless authentication, while Sessions provide tighter security control. Prompt the AI to implement battle-tested libraries like 'NextAuth' or 'Passport.js' to handle complex OAuth flows (like 'Login with Google') securely and correctly.",
                    task: {
                        description: 'Configure NextAuth.js for Google Login.',
                        before: 'Add login to Nextjs.',
                        after: 'Provide the configuration code for NextAuth.js (v4) in a Next.js 13 app directory project. Set up the GoogleProvider. Explain where to put the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables. detailed the "callbacks" function to add the user ID to the session.'
                    },
                    keywords: [
                        { term: 'JWT', definition: 'JSON Web Token - a compact, URL-safe means of representing claims to be transferred between two parties.' },
                        { term: 'OAuth', definition: 'An open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-BE-04',
                    title: 'CMS Backend Design',
                    objectives: ['Model content relationships (Headless CMS)', 'Define content schemas for flexibility', 'Integrate CMS APIs with frontend'],
                    summary: 'For content-heavy sites, a Headless CMS (Strapi, Sanity) is better than hardcoding text.',
                    theory: "A Headless CMS separates your content from your code, but it requires structure. Use AI to draft your 'Content Model'—defining Types like 'Article', 'Author', and their relationships—before you open the CMS. This ensures your data schema is flexible enough to handle future requirements without breaking the frontend.",
                    task: {
                        description: 'Define Strapi Content Types for a Magazine.',
                        before: 'Setup Strapi.',
                        after: 'I need to model a "Magazine" in Strapi. Create the schema for two Content Types: 1. "Article" (Title, Rich Text Body, Cover Image, relation to Author). 2. "Author" (Name, Bio, Headshot). Explain the relationship type (One-to-Many).'
                    },
                    keywords: [
                        { term: 'Headless CMS', definition: 'A backend-only content management system (CMS) built from the ground up as a content repository that makes content accessible via a RESTful API.' },
                        { term: 'Relation', definition: 'How data entities connect (e.g., An Article *belongs to* an Author).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-BE-05',
                    title: 'Connecting Frontend to Backend',
                    objectives: ['Handle asynchronous data fetching', 'Manage loading and error states', 'Create reusable data hooks'],
                    summary: 'The bridge. Using `fetch` or `axios` to get data and display it.',
                    theory: "Fetching data is asynchronous and unpredictable. Your UI must gracefully handle three states: Loading (spinners), Success (data), and Error (messages). Prompt for modern patterns like 'Stale-while-revalidate' (using tools like React Query) to show cached data instantly while fetching fresh content in the background.",
                    task: {
                        description: 'Create a robust custom useFetch hook.',
                        before: 'Get data from API.',
                        after: 'Write a custom React Hook named `useFetch(url)`. It should return an object: { data, loading, error, refetch }. It must use the native `fetch` API, handle non-200 errors by throwing, and use `useEffect` to trigger on mount.'
                    },
                    keywords: [
                        { term: 'Asynchronous', definition: 'Code that runs independently of the main program flow (e.g., waiting for a server response).' },
                        { term: 'Hook', definition: 'A special function in React that lets you "hook into" React features.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-BE-06',
                    title: 'Contact Form & Email Integration',
                    objectives: ['Send transactional emails securely', 'Use serverless functions for backend logic', 'Protect forms from spam'],
                    summary: 'Forms need a server to send email. Serverless functions are the easiest way to do this without a full backend.',
                    theory: "Browsers cannot securely send emails directly; you need a backend. Use a 'Serverless Function' as a secure middleman to hide your API keys. Prompt the AI to write a Node.js function that accepts form data, validates it, and then dispatches the email via a provider like Resend or SendGrid.",
                    task: {
                        description: 'Create a Serverless Function for email.',
                        before: 'Send email code.',
                        after: 'Write a Vercel Serverless Function (Node.js) to handle a contact form submission. It should: 1. Accept POST requests. 2. Validate the email and message body. 3. Use the "Resend" SDK to send the email to "admin@mysite.com". 4. Return a success JSON.'
                    },
                    keywords: [
                        { term: 'Transactional Email', definition: 'Automated emails sent in response to user actions (password reset, receipt, welcome).' },
                        { term: 'Serverless Function', definition: 'A single-purpose function that runs in the cloud and scales automatically.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-BE-07',
                    title: 'Payment Gateway Prompting',
                    objectives: ['Integrate Stripe Checkout flows', 'Handle webhooks for payment confirmation', 'Manage secure environment variables'],
                    summary: 'Taking payments requires strict security. We use Stripe\'s hosted pages to avoid touching credit card data.',
                    theory: "Payment integration requires a strict handshake to be secure. The Frontend requests a session, the Backend gets a secure URL from Stripe, and the User is redirected. Crucially, prompt the AI to write a 'Webhook Handler' to listen for Stripe's background confirmation, ensuring you only grant access after the money is actually received.",
                    task: {
                        description: 'Create a Stripe Checkout Session endpoint.',
                        before: 'Add payments.',
                        after: 'Write a Node.js Express route capable of creating a Stripe Checkout Session. It should accept an array of `items` (priceId, quantity). It must return the `url` for the frontend to redirect to. Include `success_url` and `cancel_url`.'
                    },
                    keywords: [
                        { term: 'Webhook', definition: 'A way for an app to provide other applications with real-time information (e.g., Stripe telling your server "Payment Success").' },
                        { term: 'Checkout Session', definition: 'A temporary object representing a customer\'s attempt to pay.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-BE-08',
                    title: 'Security & Input Validation',
                    objectives: ['Sanitize all user inputs', 'Prevent SQL Injection and XSS', 'Use schema validation libraries (Zod)'],
                    summary: 'Never trust user input. Hackers use input fields to attack your database.',
                    theory: "Never trust user input; it's the primary vector for attacks. Differentiate between 'Validation' (checking format) and 'Sanitization' (cleaning malicious code). Prompt the AI to create rigid 'Zod Schemas' that strictly enforce data shapes, rejecting anything that looks like an SQL Injection or XSS attack before it touches your database.",
                    task: {
                        description: 'Create a Zod schema for registration.',
                        before: 'Check input.',
                        after: 'Create a Zod validation schema for a User Registration form. Requirements: 1. Username (min 3 chars, alphanumeric). 2. Email (valid email format). 3. Password (min 10 chars, at least 1 number and 1 special symbol). 4. Age (number, min 18).'
                    },
                    keywords: [
                        { term: 'SQL Injection', definition: 'A code injection technique where an attacker executes malicious SQL statements.' },
                        { term: 'XSS (Cross-Site Scripting)', definition: 'Vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-BE-09',
                    title: 'Backend Testing Prompts',
                    objectives: ['Write integration tests for APIs', 'Mock external services (databases, payment gateways)', 'Ensure API reliability'],
                    summary: 'Tests ensure your code still works after you change it. Integration tests check the whole API route.',
                    theory: "Testing prevents regression (breaking things that used to work). Use standard tools like Jest and Supertest to write 'Integration Tests' for your API. Prompt the AI to simulate various requests—both valid and invalid—and 'Assert' that the response status and body match your expectations exactly.",
                    task: {
                        description: 'Write an integration test for a Health Check endpoint.',
                        before: 'Write test.',
                        after: 'Write a Jest + Supertest test file for the `GET /health` endpoint. Test Case 1: It should return 200 OK. Test Case 2: It should return a JSON object containing `{ status: "ok", uptime: number }`.'
                    },
                    keywords: [
                        { term: 'Integration Test', definition: 'A level of software testing where individual units are combined and tested as a group.' },
                        { term: 'Mocking', definition: 'Creating a fake version of an external system (like a database) to test code in isolation.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'web-m5',
            title: 'Module 5: DB Design & Prompts',
            lessons: [
                {
                    id: 'WP-DB-01',
                    title: 'Identifying Data Entities',
                    objectives: ['Analyze requirements to extract data entities', 'Understand Entity-Relationship (ER) modeling', 'Define attributes and primary keys'],
                    summary: 'Database design starts with words. We extract "Nouns" from user stories to create our Tables.',
                    theory: "Database design starts with linguistics. Analyze user stories to extract 'Nouns' as Entities (Tables) and 'Verbs' as Relationships. AI excels at this; feed it a project description and ask it to output an 'Entity-Relationship (ER) Diagram' to visualize how your data connects before you write any SQL.",
                    task: {
                        description: 'Extract entities for a Library App.',
                        before: 'Make database.',
                        after: 'Analyze this app idea: "A library app where Users can borrow Books. Books have Authors and fit into Genres." List the necessary Database Tables. For each table, list 3 core attributes (columns). Identify the relationships (e.g., Book -> Author). Output as a text-based ER diagram.'
                    },
                    keywords: [
                        { term: 'Entity', definition: 'A thing or object in the real world that is distinguishable from other objects (e.g., a person, a car).' },
                        { term: 'Attribute', definition: 'A property or characteristic of an entity (e.g., color, size).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-02',
                    title: 'SQL Schema for Websites',
                    objectives: ['Write valid SQL DDL statements', 'Choose appropriate data types (UUID vs Integer)', 'Enforce constraints (NOT NULL, UNIQUE)'],
                    summary: 'Turning entities into code. We use SQL to define the rigid structure of our data.',
                    theory: "A robust database schema enforces data integrity. Use 'UUIDs' instead of simple integers for IDs to improve security and scalability. Prompt the AI to include 'Foreign Key Constraints' to prevent orphaned records and ensure every table has 'Timestamps' (created_at, updated_at) so you can track data evolution.",
                    task: {
                        description: 'Generate PostgreSQL CREATE TABLE for Users.',
                        before: 'SQL for users.',
                        after: 'Write the PostgreSQL `CREATE TABLE` statement for a "users" table. It needs: 1. `id` (UUID, primary key, default gen_random_uuid()). 2. `email` (TEXT, unique, not null). 3. `password_hash` (TEXT, not null). 4. `created_at` (TIMESTAMPTZ, default NOW()).'
                    },
                    keywords: [
                        { term: 'DDL', definition: 'Data Definition Language (CREATE, ALTER, DROP).' },
                        { term: 'UUID', definition: 'Universally Unique Identifier - a 128-bit label used for information in computer systems.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-03',
                    title: 'CMS Database Design',
                    objectives: ['Design flexible content schemas', 'Understand Polymorphic Relationships', 'Model "Many-to-Many" tagging systems'],
                    summary: 'Complex relationships. How to tag everything with "Tech" without creating 50 columns.',
                    theory: "Complex data often requires 'Many-to-Many' relationships (e.g., an article has many tags, a tag has many articles). This requires a 'Join Table' to link them. For even more flexibility, ask the AI to design 'Polymorphic Relationships', allowing a single 'Comment' table to link to Posts, Videos, or Images seamlessly.",
                    task: {
                        description: 'Design a Schema for a Tagging System.',
                        before: 'Table for tags.',
                        after: 'I need to add "Tags" to my blog. A Tag can be applied to both "Articles" and "VideoTutorials". Design the SQL schema. Do I need a join table? If so, what columns should it have to link a single "tags" table to multiple content types?'
                    },
                    keywords: [
                        { term: 'Join Table', definition: 'A table that links two other tables together in a many-to-many relationship.' },
                        { term: 'Polymorphism', definition: 'The ability of an object to take on many forms (e.g., a Comment can belong to a Post or a Photo).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-04',
                    title: 'NoSQL for Blogs',
                    objectives: ['Understand Document-based storage (MongoDB)', 'Decide between Embedding vs Referencing data', 'Design schemas for high-read applications'],
                    summary: 'SQL isn\'t the only way. NoSQL (JSON storage) is great for unstructured data like blog posts.',
                    theory: "NoSQL databases like MongoDB allow for flexible, document-based storage. Unlike SQL's rigid joins, NoSQL encourages 'Embedding' related data: prompt the AI to design a schema where Comments are stored *inside* the Blog Post document. This 'Denormalization' speeds up read operations by retrieving everything in a single query.",
                    task: {
                        description: 'Design a Mongoose Schema for a Blog Post.',
                        before: 'Mongo schema.',
                        after: 'Create a Mongoose (MongoDB) schema for a "BlogPost". It should have: Title, Slug, Body. Embed an array of "Comments" directly in the document structure. Explain why embedding comments is better for read performance than storing them in a separate collection.'
                    },
                    keywords: [
                        { term: 'Document Store', definition: 'A type of database that stores data as semi-structured documents (like JSON).' },
                        { term: 'Embedding', definition: 'Nesting data structures inside a single document.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-05',
                    title: 'User Data Storage & Privacy',
                    objectives: ['Implement PII best practices (GDPR)', 'Hash passwords correctly (Bcrypt/Argon2)', 'Understand encryption at rest'],
                    summary: 'Protecting users. If you leak passwords, your career is over.',
                    theory: "User trust is fragile; never store passwords in plain text. Always 'Hash' them with a unique 'Salt' to make them unreadable, even to you. Prompt the AI to implement libraries like 'Bcrypt' or 'Argon2' to handle this securely, and ask for best practices on isolating PII (Personally Identifiable Information) to comply with privacy laws.",
                    task: {
                        description: 'Secure password storage implementation.',
                        before: 'How to save password?',
                        after: 'I am creating a user signup route. Complete this Node.js snippet using `bcryptjs`. Show how to 1. Generate a salt (10 rounds). 2. Hash the password. 3. Save only the hash to the DB. Explain why we never save the raw password.'
                    },
                    keywords: [
                        { term: 'Hashing', definition: 'Turning data into a fixed-length string of characters that cannot be reversed.' },
                        { term: 'Salt', definition: 'Random data added to a password before hashing to protect against dictionary attacks.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-06',
                    title: 'Query Optimization',
                    objectives: ['Identify slow queries (N+1 problem)', 'Add indexes to speed up lookups', 'Analyze query execution plans'],
                    summary: 'Making it fast. An app with 1 user is fast. An app with 1M users needs Indexes.',
                    theory: "Speed is a feature. Without 'Indexes', a database must scan every row to find a result, which is slow at scale. Treat an Index like a book's Table of Contents. Prompt the AI to identify which columns (like 'email' or 'username') will be searched frequently and write the SQL to add indices to them.",
                    task: {
                        description: 'Optimize a slow user search.',
                        before: 'Make query fast.',
                        after: 'My SQL query `SELECT * FROM users WHERE email = ?` is becoming slow as we hit 100k users. Write the SQL command to add an INDEX to the email column. Explain how a B-Tree index improves search speed.'
                    },
                    keywords: [
                        { term: 'Index', definition: 'A data structure that improves the speed of data retrieval operations on a database table.' },
                        { term: 'Full Table Scan', definition: 'When the database reads every single row to find a match (very slow).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-07',
                    title: 'Migrations & Versioning',
                    objectives: ['Manage database schema changes over time', 'Write Up (Do) and Down (Undo) migration scripts', 'Automate schema updates in CI/CD'],
                    summary: 'Databases evolve. You can\'t just drop a table in production. Migrations track changes safely.',
                    theory: "Databases must evolve with your code. Use 'Migrations'—version-controlled scripts—to manage schema changes safely. Prompt the AI to write both the 'Up' script (to apply changes like adding a column) and the 'Down' script (to rollback changes), ensuring you can recover quickly if a deployment goes wrong.",
                    task: {
                        description: 'Create a migration to add a phone number.',
                        before: 'Add column.',
                        after: 'Write a Knex.js migration file. In the `up` function, add a "phone_number" column to the "users" table. In the `down` function, remove that column. Ensure it is nullable initially to prevent errors with existing rows.'
                    },
                    keywords: [
                        { term: 'Migration', definition: 'A version control system for your database schema.' },
                        { term: 'Rollback', definition: 'Reverting a database to a previous state.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-08',
                    title: 'Analytics Data Storage',
                    objectives: ['Model time-series data', 'Differentiate between OLTP (App DB) and OLAP (Analytics DB)', 'Design lightweight event tracking'],
                    summary: 'Tracking what users do. Don\'t put analytics in your main user database.',
                    theory: "Analytics require a different approach than user data. Because analytics are 'Write-Heavy' and 'Append-Only' (you never edit a past pageview), the schema must be lightweight. Prompt for a design optimized for high-volume insertion, potentially partitioning data by date, to ensure your main application database doesn't get bogged down.",
                    task: {
                        description: 'Design a Pageview tracking schema.',
                        before: 'Track views.',
                        after: 'Design a simple SQL table for "PageViews". Columns: id, user_id (nullable), url_path, user_agent, ip_address (anonymized), timestamp. Discuss why we might want to partition this table by date for performance.'
                    },
                    keywords: [
                        { term: 'Time-Series', definition: 'Data that is indexed by time (e.g., stock prices, logs, page views).' },
                        { term: 'OLAP', definition: 'Online Analytical Processing - designed for complex queries and analysis.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DB-09',
                    title: 'Backup & Recovery Prompts',
                    objectives: ['Automate database backups', 'Restore data from "Point-in-Time" snapshots', 'Write disaster recovery scripts'],
                    summary: 'The safety net. When (not if) things break, you need a backup.',
                    theory: "Disaster recovery is your safety net. Don't rely on hope; automate your backups. Prompt the AI to write a shell script using standard tools like `pg_dump` to snapshot your database. Combine this with a 'Cron Job' to upload these snapshots to off-site storage (like AWS S3) every single night.",
                    task: {
                        description: 'Create an automated backup script.',
                        before: 'Backup script.',
                        after: 'Write a Bash script to backup a Postgres database. Steps: 1. Run `pg_dump` with the connection string. 2. Pipe the output to `gzip`. 3. Name the file `backup-YYYY-MM-DD.sql.gz`. 4. Use AWS CLI to upload it to an S3 bucket named "my-db-backups".'
                    },
                    keywords: [
                        { term: 'Cron Job', definition: 'A time-based job scheduler in Unix-like computer operating systems.' },
                        { term: 'Point-in-Time Recovery', definition: 'Restoring a database to the state it was in at a specific second in the past.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'web-m6',
            title: 'Module 6: Deployment & Tooling',
            lessons: [
                {
                    id: 'WP-DP-01',
                    title: 'Preparing for Deployment',
                    objectives: ['Differentiate between Build Time and Runtime', 'Configure build scripts (Vite/Webpack)', 'Minify and bundle assets for performance'],
                    summary: 'Getting the code out of localhost. We learn how to package the app for the real world.',
                    theory: "Your code lives in two worlds: Development and Production. Locally, a 'Dev Server' enables magic like Hot Reloading, but browsers can't read raw React or TypeScript files. The `build` command is the bridge: it compiles and minimizes your complex code into optimized, vanilla HTML/CSS/JS that any browser can render efficiently.",
                    task: {
                        description: 'Analyze the build output.',
                        before: 'Build app.',
                        after: 'Explain the difference between `npm run dev` and `npm run build` in a Vite React app. What happens to my image assets? Why are the filenames hashed (e.g., index.e43a.js)?'
                    },
                    keywords: [
                        { term: 'Minification', definition: 'The process of removing unnecessary characters (whitespace, comments) from source code to reduce size.' },
                        { term: 'Bundling', definition: 'Combining multiple files into a single file to reduce the number of HTTP requests.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-02',
                    title: 'Generating Dockerfile',
                    objectives: ['Containerize applications for consistency', 'Write multi-stage Docker builds', 'Minimize image size'],
                    summary: 'shipping the machine, not just the code. Docker ensures it works on your server exactly like it does on your laptop.',
                    theory: "Docker eliminates 'it works on my machine' issues by packaging your app as a container. Think of a Dockerfile as a recipe: Start with a Base Image (like Node.js), copy your files, and install dependencies. Prompt for 'Multi-Stage Builds' to discard heavy development tools in the final image, keeping your production container tiny and secure.",
                    task: {
                        description: 'Create an optimized Dockerfile.',
                        before: 'Make dockerfile.',
                        after: 'Create a Multi-Stage Dockerfile for a Node.js Express app. Stage 1 (Builder): Install devDependencies and run `npm run build`. Stage 2 (Runner): Copy only the `dist` folder and `package.json`. Use `node:18-alpine` for the smallest footprint.'
                    },
                    keywords: [
                        { term: 'Container', definition: 'A standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.' },
                        { term: 'Image', definition: 'A read-only template with instructions for creating a Docker container.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-03',
                    title: 'CI/CD for Websites',
                    objectives: ['Automate testing and linting pipelines', 'Understand Continuous Integration vs Delivery', 'Write YAML workflows for GitHub Actions'],
                    summary: 'Robots doing the work. CI ensures you never break the build on main.',
                    theory: "Automate your quality control with CI/CD. Continuous Integration (CI) automatically runs tests on every commit, ensuring nothing breaks. Continuous Deployment (CD) publishes passing code to production instantly. Prompt the AI to generate a 'GitHub Actions Workflow' YAML file to handle this pipeline, letting robots do the heavy lifting.",
                    task: {
                        description: 'Create a GitHub Actions Workflow.',
                        before: 'Auto test.',
                        after: 'Create a GitHub Actions workflow file (`.github/workflows/ci.yml`). Triggers: Push to "main" or Pull Request. Steps: 1. Checkout code. 2. Install Node 18. 3. Cache npm modules. 4. Run `npm install`. 5. Run `npm test`. 6. Run `npm run lint`.'
                    },
                    keywords: [
                        { term: 'Pipeline', definition: 'A set of automated processes that allow developers to compile, build, and deploy code.' },
                        { term: 'YAML', definition: 'A human-readable data serialization standard.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-04',
                    title: 'Deploying to Vercel / Netlify',
                    objectives: ['Deploy static sites via Git integration', 'Configure rewrites and redirects', 'Manage serverless function boundaries'],
                    summary: 'The modern way to host (Jamstack). Connect your repo and go live in seconds.',
                    theory: "Modern hosting platforms like Vercel and Netlify are 'Git-aware'. They detect every push, automatically build your site, and distribute it to a global Content Delivery Network (CDN) for speed. Use a `vercel.json` configuration file to define advanced routing rules, like redirecting API calls to serverless functions while serving static files elsewhere.",
                    task: {
                        description: 'Configure Vercel Rewrites.',
                        before: 'Deploy Vercel.',
                        after: 'I have a React frontend and a Python backend in the `/api` folder. Write a `vercel.json` file to route all requests starting with `/api/*` to the Python serverless function, while serving index.html for everything else (SPA fallback).'
                    },
                    keywords: [
                        { term: 'CDN (Content Delivery Network)', definition: 'A geographically distributed group of servers which work together to provide fast delivery of Internet content.' },
                        { term: 'Edge Network', definition: 'Servers that are physically close to the user.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-05',
                    title: 'Hosting with Custom Domains',
                    objectives: ['Manage DNS records (A, CNAME, TXT)', 'Understand propagation and TTL', 'Point domains to hosting providers'],
                    summary: 'Your address on the web. DNS is the phonebook of the internet.',
                    theory: "DNS is the phonebook of the internet. An 'A Record' maps your domain to a server's IP address, while a 'CNAME' aliases one name to another (like pointing `www` to your Vercel app). Use 'TXT Records' to prove domain ownership to services. Ask the AI to list exactly which records to add to your registrar to avoid downtime.",
                    task: {
                        description: 'Point a GoDaddy domain to Vercel.',
                        before: 'Add domain.',
                        after: 'I bought `example.com` on GoDaddy. I want `www.example.com` to point to my Vercel project. Explain which DNS records to add. 1. What should the CNAME record for "www" cover? 2. How do I handle the bare domain (example.com)?'
                    },
                    keywords: [
                        { term: 'DNS', definition: 'Domain Name System.' },
                        { term: 'Propagation', definition: 'The time it takes for DNS changes to update across the internet (can take up to 48 hours).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-06',
                    title: 'Environment Variables',
                    objectives: ['Securely manage secrets (API Keys)', 'Differentiate between Build/Runtime vars', 'Use `.env` files correctly'],
                    summary: 'Keeping secrets secret. Never hardcode API keys.',
                    theory: "Secrets management is critical. Environment variables prefixed with `NEXT_PUBLIC_` or `VITE_` are exposed to the browser, so never put private keys there. Keep sensitive data like `DB_PASSWORD` strictly on the server side. Always add your `.env` file to `.gitignore` to prevent accidentally publishing your secrets to the world.",
                    task: {
                        description: 'Access ENV vars in React and Node.',
                        before: 'Hide keys.',
                        after: 'I have two keys: `STRIPE_PUBLIC_KEY` (safe for browser) and `STRIPE_SECRET_KEY` (server only). Show how to name them in a `.env` file for a Vite app, and how to access them in the code. Explain why `import.meta.env.STRIPE_SECRET_KEY` might be undefined.'
                    },
                    keywords: [
                        { term: 'Environment Variable', definition: 'A dynamic-named value that can affect the way running processes will behave on a computer.' },
                        { term: '.gitignore', definition: 'A text file that tells Git which files or folders to ignore in a project.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-07',
                    title: 'SSL & Security Setup',
                    objectives: ['Understand HTTPS and TLS handshakes', 'Obtain free certificates via Let\'s Encrypt', 'Force HTTPS redirects'],
                    summary: 'The green padlock. Encrypting data between user and server.',
                    theory: "Security is non-negotiable. HTTP sends data in plain text, making passwords vulnerable. HTTPS encrypts this traffic. While platform-as-a-service hosts handle this automatically, if you manage your own VPS, you must prompt the AI to set up 'Certbot' to obtain and auto-renew free Let's Encrypt SSL certificates.",
                    task: {
                        description: 'Configure Nginx for HTTPS.',
                        before: 'Secure site.',
                        after: 'I am hosting on an Ubuntu VPS with Nginx. Write the configuration block to listen on port 80 and return a 301 Redirect to the HTTPS version (port 443).'
                    },
                    keywords: [
                        { term: 'SSL/TLS', definition: 'Secure Sockets Layer / Transport Layer Security - cryptographic protocols designed to provide communications security over a computer network.' },
                        { term: 'Certbot', definition: 'A free, open-source software tool for automatically using Let\'s Encrypt certificates.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-08',
                    title: 'Website Monitoring & Logs',
                    objectives: ['Implement error tracking (Sentry)', 'Analyze server access logs', 'Set up uptime alerts'],
                    summary: 'Knowing when it breaks before users call you. Visibility into the black box.',
                    theory: "You can't fix what you can't see. In production, `console.log` is useless. Integrate observability tools like Sentry to capture 'Stack Traces', user actions, and device info when errors occur. Prompt the AI to wrap your app in an 'Error Boundary', ensuring that if one component crashes, it doesn't take down the entire website.",
                    task: {
                        description: 'Initialize Sentry in React.',
                        before: 'Track bugs.',
                        after: 'Generate the code to initialize Sentry in a React app. Where should I put the `Sentry.init` call? How can I wrap my main `App` component with an `ErrorBoundary` that reports to Sentry?'
                    },
                    keywords: [
                        { term: 'Observability', definition: 'A measure of how well internal states of a system can be inferred from knowledge of its external outputs.' },
                        { term: 'Stack Trace', definition: 'A report of the active stack frames at a certain point in time during the execution of a program.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-DP-09',
                    title: 'Scaling & Performance Tuning',
                    objectives: ['Configure caching headers (Cache-Control)', 'Use CDNs for static assets', 'Load balance traffic'],
                    summary: 'Handling success. What happens when 100k people visit at once?',
                    theory: "Scalability is about avoiding work. The fastest request is the one served from a 'Cache'. Configure 'Cache-Control' headers to tell browsers to store static assets (images, CSS) for a year. Leverage 'Edge Caching' to serve content from servers physically closer to your users, drastically reducing load times and server strain.",
                    task: {
                        description: 'Configure Cache-Control headers.',
                        before: 'Make faster.',
                        after: 'Write the Nginx configuration to set aggressive caching (1 year) for static assets like images/css/js, but NO caching (no-cache) for `index.html`. Explain why index.html must never be cached effectively.'
                    },
                    keywords: [
                        { term: 'Cache-Control', definition: 'An HTTP header used to specify browser caching policies in both client requests and server responses.' },
                        { term: 'Load Balancer', definition: 'A device that acts as a reverse proxy and distributes network or application traffic across a number of servers.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'web-m7',
            title: 'Module 7: Assets & Creative Prompts',
            lessons: [
                {
                    id: 'WP-AS-01',
                    title: 'Website Logo Design Prompts',
                    objectives: ['Generate vector-style logos with AI', 'Understand branding constraints', 'Refine designs with style descriptors'],
                    summary: 'Your logo is your signature. AI can generate professional-grade concepts in seconds.',
                    theory: "AI image generators are powerful but struggle with text. Focus your logo prompts on 'Symbols' and 'Mascots' rather than company names. Request 'Vector-style', 'Flat Design', and 'Minimalist' aesthetics to create clean, scalable marks that can be easily traced into SVG format for professional use.",
                    task: {
                        description: 'Generate a Coffee Shop logo.',
                        before: 'Make logo.',
                        after: 'Create a logo prompt for Midjourney: "A minimalist vector logo for a modern coffee shop named \'Bean & Leaf\'. The icon should merge a coffee bean and a green leaf seamlessly. Black and Green on a white background. Bauhaus style. No text."'
                    },
                    keywords: [
                        { term: 'Vector', definition: 'Graphics defined by math (paths) instead of pixels, allowing for infinite scaling.' },
                        { term: 'Positive/Negative Space', definition: 'The space occupied by the subject vs the background.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-02',
                    title: 'Hero Image Generation',
                    objectives: ['Create high-impact visuals', 'Control aspect ratio (16:9)', 'Maintain consistent color palettes'],
                    summary: 'The main attraction. Getting AI to fill that big empty space at the top of your site.',
                    theory: "The Hero Image sets the mood. Always specify the 'Aspect Ratio' (e.g., `--ar 16:9`) to fit modern screens. Maintain strict style consistency; a 'Cyberpunk' site demands neon, not watercolor. Use 'Image-to-Image' prompting—feeding the AI a reference photo—to guide the composition and color palette precisely.",
                    task: {
                        description: 'Generate a SaaS Dashboard illustration.',
                        before: 'Header image.',
                        after: 'Prompt for DALL-E 3: "A futuristic 3D isometric illustration of a data analytics process. Glowing nodes connecting in a cloud network. Purple and Cyan neon color palette. Dark background to match a dark mode website. Wide aspect ratio 16:9."'
                    },
                    keywords: [
                        { term: 'Aspect Ratio', definition: 'The proportional relationship between an image\'s width and its height.' },
                        { term: 'Isometric', definition: 'A method for visually representing three-dimensional objects in two dimensions.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-03',
                    title: 'Icon Set Creation',
                    objectives: ['Generate cohesive icon families', 'Convert raster to vector', 'Use consistent stroke widths'],
                    summary: 'Icons are the language of UI. They must all look like siblings.',
                    theory: "Consistency is king in iconography. Instead of generating icons one by one, prompt for a 'Sheet' of UI icons (e.g., 'A grid of 12 minimalist icons...'). This ensures they all share the same stroke width and visual style. You can then slice and vectorize them individually for your application.",
                    task: {
                        description: 'Generate a Nav Bar icon set.',
                        before: 'Make icons.',
                        after: 'Design a set of 4 UI icons: Home, Settings, User Profile, Search. Style: Thin line art, 2px stroke width, rounded caps, dark grey color. White background. Arrange them in a grid on a single sheet.'
                    },
                    keywords: [
                        { term: 'Iconography', definition: 'The visual images and symbols used in a work of art or a study.' },
                        { term: 'SVG', definition: 'Scalable Vector Graphics.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-04',
                    title: 'Background Patterns & Textures',
                    objectives: ['Create seamless tiling backgrounds', 'Add subtle texture to flat designs', 'Generate SVG patterns via code'],
                    summary: 'White backgrounds are boring. AI can generate subtle noise or geometric patterns.',
                    theory: "Backgrounds shouldn't distract. Prompt for 'Seamless Patterns' that tile perfectly, allowing you to cover infinite areas with a small image file. Alternatively, ask the AI to generate 'CSS Radial Gradients' or 'SVG Patterns'. These are resolution-independent and extremely lightweight compared to traditional image files.",
                    task: {
                        description: 'Generate a CSS texture.',
                        before: 'Background image.',
                        after: 'Generate the CSS code (using `radial-gradient`) to create a "Polka Dot" pattern. The dots should be light grey (#eee) on a white background, spaced 20px apart.'
                    },
                    keywords: [
                        { term: 'Tiling', definition: 'Repeating a small image pattern to fill a larger area.' },
                        { term: 'Noise', definition: 'Visual texture resembling grain, often used to prevent color banding.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-05',
                    title: 'Illustrations for Sections',
                    objectives: ['Tell a brand story through art', 'Humanize abstract concepts', 'Match illustration style to brand voice'],
                    summary: 'Adding character to your content. Breaking up the wall of text.',
                    theory: "Illustrations humanize your brand. Define a specific 'Art Direction' in your prompt—like 'Corporate Memphis' for a tech vibe or 'Hand-Drawn Pencil' for warmth. Explicitly stating the 'Medium' and 'Color Palette' ensures the AI generates artwork that feels like it belongs to your specific design system.",
                    task: {
                        description: 'Generate an "Empty State" illustration.',
                        before: 'Draw empty box.',
                        after: 'Illustration of a cute, friendly robot looking confused into an empty cardboard box. Style: "Corporate Flat Art", simplified shapes. Colors: Blue (#3b82f6) and Yellow (#eab308). White background.'
                    },
                    keywords: [
                        { term: 'Corporate Memphis', definition: 'A flat, geometric art style widely used in big tech.' },
                        { term: 'Spot Illustration', definition: 'Small, standalone illustrations used to highlight key points.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-06',
                    title: 'Social Media Preview Images',
                    objectives: ['Design Open Graph (OG) images', 'Optimize text overlay for readability', 'Increase click-through rates'],
                    summary: 'What people see when your link is shared on Twitter/LinkedIn.',
                    theory: "Social Media Preview (Open Graph) images are tiny billboards for your content. They must be bold and legible even at small sizes. Prompt the AI to generate 'High Contrast' backgrounds with 'Negative Space' specifically reserved for text overlay, ensuring your titles are readable when shared on platforms like Twitter or LinkedIn.",
                    task: {
                        description: 'Design a Social Card.',
                        before: 'Social image.',
                        after: 'Create a prompt for an Open Graph image background. "Abstract tech waves, dark mode, high contrast." Then, describe where to place the text "10 Tips for React Performance" so it is legible (e.g., "Left aligned negative space").'
                    },
                    keywords: [
                        { term: 'Open Graph (OG)', definition: 'A protocol that allows any webpage to become a rich object in a social graph (controlling title, image, description).' },
                        { term: 'CTR', definition: 'Click-Through Rate.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-07',
                    title: 'Favicon & App Icon Generation',
                    objectives: ['Design legible micro-icons', 'Understand icon constraints (squares)', 'Test scalability'],
                    summary: 'The little icon in the browser tab. Tiny but mighty.',
                    theory: "The Favicon is the smallest brand asset you'll create. At 16x16 pixels, detail is the enemy. Prompt for 'Ultra-Simplified' shapes or 'Single Letters'. Prioritize high contrast and distinct silhouettes so the icon remains recognizable even when lost among dozens of other open browser tabs.",
                    task: {
                        description: 'Design an App Icon.',
                        before: 'Icon.',
                        after: 'Design an App Icon for a fitness app. A bold, stylized lightning bolt centered. Gradient background from Orange to Pink. Rounded square shape. Glossy glassmorphism finish. iOS 16 style.'
                    },
                    keywords: [
                        { term: 'Favicon', definition: 'Short for "Favorite Icon".' },
                        { term: 'Touch Icon', definition: 'The icon used when a user adds your site to their mobile home screen.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-08',
                    title: 'Image Optimization for Web',
                    objectives: ['Convert images to next-gen formats (WebP/AVIF)', 'Use CLI tools for batch processing', 'Balance quality vs size'],
                    summary: 'Site speed is SEO. Huge images measure seconds, not milliseconds.',
                    theory: "Image file size directly impacts SEO and bounce rates. Modern formats like WebP and AVIF offer superior compression over JPEG. Use AI to write 'Shell Scripts' (using tools like `imagemin` or `ffmpeg`) to batch-convert and compress your entire asset library automatically, ensuring fast load times without manual work.",
                    task: {
                        description: 'Script image conversion.',
                        before: 'Compress image.',
                        after: 'I have a folder of PNGs. Write a Bash script that uses `cwebp` to convert all of them to WebP format with quality 80. The output files should have the same name but .webp extension.'
                    },
                    keywords: [
                        { term: 'Lossy', definition: 'Compression where some data is lost (smaller size, lower quality).' },
                        { term: 'Lossless', definition: 'Compression where no data is lost (larger size, perfect quality).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'WP-AS-09',
                    title: 'Copyright & Licensing Awareness',
                    objectives: ['Understand AI copyright laws', 'Identify Public Domain vs CC0', 'Use assets ethically'],
                    summary: 'Can I sell this? Avoiding lawsuits.',
                    theory: "Navigating AI copyright is complex. Generally, raw AI output cannot be copyrighted in the US. However, using it for commercial client work is standard practice. To stay ethical and safe, avoid prompting for the 'Style of [Living Artist]'. Instead, use descriptive terms like 'Impressionist' or 'Cyberpunk' to define the look.",
                    task: {
                        description: 'Check legal usage.',
                        before: 'Can I use this?',
                        after: 'Explain the current legal stance (US Copyright Office) on registering copyright for an image generated wholly by Midjourney. Can I claim I own it? What if I Photoshop it significantly afterwards?'
                    },
                    keywords: [
                        { term: 'Public Domain', definition: 'Creative materials that are not protected by intellectual property laws.' },
                        { term: 'Fair Use', definition: 'Doctrine that permits limited use of copyrighted material without acquiring permission.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'web-m8',
            title: 'Module 8: AI Development Tools',
            lessons: [
                {
                    id: 'tool-01',
                    title: 'Lovable - AI Web App Builder',
                    objectives: ['Master text-to-app generation workflows', 'Understand visual component editing', 'Deploy full-stack apps directly from chat'],
                    summary: 'Lovable represents the new wave of "text-to-software" platforms. It allows you to build complete, full-stack web applications by simply describing them, with a focus on high-quality UI/UX defaults and ease of deployment.',
                    theory: 'Lovable uses fine-tuned LLMs specialized in React, Supabase, and Tailwind CSS. Unlike general chat assistants, it understands the entire project context and can generate multiple file changes in a single turn, abstracting the complex build pipeline away from the user.',
                    task: {
                        description: 'Create a comprehensive dashboard request.',
                        before: 'Make a CRM dashboard.',
                        after: 'Build a modern CRM Dashboard application. Tech Stack: React, Tailwind, Supabase. Features: 1. Sidebar navigation (Dashboard, Contacts, Deals). 2. Key Metrics row (Total Revenue, Active Users). 3. A data table using Tanstack Table for recent leads. 4. Use a glassmorphism design style with a dark mode toggle.'
                    },
                    keywords: [
                        { term: 'No-Code/Low-Code', definition: 'Building software with minimal or no handwritten code, relying on GUIs or AI.' },
                        { term: 'Supabase Integration', definition: 'Connecting frontend apps to a backend-as-a-service for instant database functionality.' }
                    ],
                    resources: [],
                    instructorNotes: 'Highlight how Lovable handles the "blank canvas" problem better than standard IDEs.'
                },
                {
                    id: 'tool-02',
                    title: 'Bolt.new - Instant Full-Stack Apps',
                    objectives: ['Utilize browser-based development environments', 'Scaffold complex frameworks instantly', 'Debug full-stack applications in the browser'],
                    summary: 'Bolt.new brings the entire development environment into the browser. It allows you to run Node.js servers, install npm packages, and edit code without setting up a local environment.',
                    theory: 'Powered by StackBlitz WebContainers, Bolt execues Node.js directly in the browser (WASM). This means zero latency for server start-up and complete security as code runs locally in your tab, not on a remote VM.',
                    task: {
                        description: 'Scaffold a Remix application with specific libraries.',
                        before: 'Start a project.',
                        after: 'Scaffold a new Full-Stack project using Remix Run and Tailwind CSS. Install "framer-motion" for animations and "lucide-react" for icons. Create a landing page hero section that animates on load. Ensure the folder structure follows Remix best practices.'
                    },
                    keywords: [
                        { term: 'WebContainers', definition: 'A browser-based runtime that creates a secure Node.js environment inside a web page.' },
                        { term: 'Scaffolding', definition: 'Ideally generating the initial directory structure and config files for a project.' }
                    ],
                    resources: [],
                    instructorNotes: 'Compare Bolt to local VS Code - it is great for quick prototypes and sharing reproductions.'
                },
                {
                    id: 'tool-03',
                    title: 'Cursor - AI Code Editor',
                    objectives: ['Navigate codebases using Natural Language', 'Master the Cmd+K inline edit workflow', 'Use "Codebase Context" for accurate refactoring'],
                    summary: 'Cursor is a fork of VS Code with AI baked into the core. It indexes your entire codebase, allowing the AI to understand dependencies, definitions, and project structure when answering questions.',
                    theory: 'RAG (Retrieval-Augmented Generation) is key here. When you chat with Cursor, it doesn\'t just guess; it searches your local files (using embeddings) to find relevant code snippets and inserts them into the context window before answering.',
                    task: {
                        description: 'Refactor a legacy component.',
                        before: 'Fix this file.',
                        after: 'Select the "CustomerProfile.tsx" file. Prompt: "Refactor this Class-based component into a Functional Component using React Hooks. Use `useQuery` for data fetching instead of `componentDidMount`. Add proper TypeScript interfaces for the Props and State."'
                    },
                    keywords: [
                        { term: 'Context Window', definition: 'The amount of text/code an AI can "see" and process at one time.' },
                        { term: 'Embeddings', definition: 'Vector representations of code that allow the AI to find semantically similar files.' }
                    ],
                    resources: [],
                    instructorNotes: 'Cursor is the industry standard for professional AI-assisted coding. Emphasize the "Tab" autocomplete.'
                },
                {
                    id: 'tool-04',
                    title: 'Emergent AI & Agentic Workflows',
                    objectives: ['Define Agentic AI workflows', 'Delegate multi-step research tasks', 'Understand the loop of Plan-Execute-Observe'],
                    summary: 'Agents are AI systems that can use tools. Instead of just writing text, they can browse the web, run terminal commands, and create files to achieve a high-level goal.',
                    theory: 'The "ReAct" (Reasoning + Acting) pattern drives agents. The Model 1. Reasons about the goal. 2. Acts (calls a tool). 3. Observes the result. 4. Loops until finished. This allows for complex, autonomous problem solving.',
                    task: {
                        description: 'Delegate a competitive analysis task.',
                        before: 'Research competitors.',
                        after: 'Act as a Market Research Agent. Goal: Analyze the top 3 competitors for a "ToDo List SaaS". ONE: Search for their pricing pages. TWO: Summarize their free vs pro tiers. THREE: Output the comparison as a Markdown table in a file named "competitor-analysis.md".'
                    },
                    keywords: [
                        { term: 'Agent', definition: 'An AI system equipped with tools (web search, file I/O) to perform actions.' },
                        { term: 'Autonomous Loop', definition: 'The cycle of self-correction and multi-step execution an agent performs.' }
                    ],
                    resources: [],
                    instructorNotes: 'Showcase how agents can do work "while you sleep" vs chat which is synchronous.'
                },
                {
                    id: 'tool-05',
                    title: 'Replit AI & Windsurf',
                    objectives: ['Collaborate in real-time with AI', 'Understand context-aware debugging', 'Utilize cloud-native deployments'],
                    summary: 'Cloud IDEs like Replit and Windsurf (Codeium) focus on "Flow". They integrate the AI deeply into the editor and the runtime, allowing for features like "Fix compile error" by reading the terminal output.',
                    theory: 'These tools have deep integration with the language server protocol (LSP). They "know" when your code has a syntax error before you run it and can proactively suggest fixes based on the compiler output.',
                    task: {
                        description: 'Debug a runtime error.',
                        before: 'Fix error.',
                        after: 'My Next.js app is crashing with "Hydration failed". Use the "Explain Selection" tool on the error trace. Identify which HTML tag structure is causing the mismatch between server and client render.'
                    },
                    keywords: [
                        { term: 'Hydration Error', definition: 'A common React issue where server-rendered HTML doesn\'t match client-side JavaScript.' },
                        { term: 'LSP', definition: 'Language Server Protocol - how editors understand code structure (auto-complete, definitions).' }
                    ],
                    resources: [],
                    instructorNotes: 'Good for beginners as environment setup is zero.'
                },
                {
                    id: 'tool-06',
                    title: 'ChatGPT - Conversational Logic & Reasoning',
                    objectives: ['Use AI for architectural decision making', 'Debug complex logic puzzles', 'Generate documentation and copy'],
                    summary: 'While not an IDE, ChatGPT (GPT-4o) remains the smartest generalist reasoning engine. It excels at high-level planning, complex logic debugging, and explaining concepts.',
                    theory: 'Chain-of-Thought (CoT) prompting is most effective here. Asking the model to "Think step by step" dramatically improves its ability to solve algorithmic problems compared to autocomplete models.',
                    task: {
                        description: 'Debug a complex infinite loop.',
                        before: 'Why code broken?',
                        after: 'This `while` loop is causing a browser crash. Trace the execution state variables (index, length, currentItem) for the first 3 iterations. Explain logically why the exit condition is never met.'
                    },
                    keywords: [
                        { term: 'Chain-of-Thought', definition: 'Prompting the model to verbalize its thinking steps before giving a final answer.' },
                        { term: 'Hallucination', definition: 'When an AI confidently asserts false information.' }
                    ],
                    resources: [],
                    instructorNotes: 'Use ChatGPT for the "Why" and "What", use Cursor for the "How".'
                },
                {
                    id: 'tool-07',
                    title: 'Gemini AI & Multimodal Development',
                    objectives: ['Convert wireframes to code', 'Analyze UI screenshots for design consistency', 'Process large documentation files (Long Context)'],
                    summary: 'Gemini shines with its massive context window and native multimodal (vision) capabilities. It can "see" a design and write the code for it, or read an entire documentation library.',
                    theory: 'Multimodality means the model is trained on images and text simultaneously. This allows it to understand spatial relationships, colors, and layout hierarchy better than models that just use OCR.',
                    task: {
                        description: 'Convert a dashboard screenshot to Tailwind code.',
                        before: 'Code this image.',
                        after: 'Analyze this uploaded screenshot of an Analytics Dashboard. Identify the 4 main chart types used. Generate the React/Tailwind code to replicate the layout grid exactly. Use placeholder images for the charts.'
                    },
                    keywords: [
                        { term: 'Multimodal', definition: 'AI capable of processing multiple types of input (Text, Images, Video, Audio).' },
                        { term: 'Context Window', definition: 'Gemini 1.5 Pro has a 2M token context window, allowing it to read entire books.' }
                    ],
                    resources: [],
                    instructorNotes: 'Great for "Design-to-Code" workflows.'
                },
                {
                    id: 'tool-08',
                    title: 'Grok AI - Real-time Trend Analysis',
                    objectives: ['Research latest libraries and frameworks', 'Gauge developer sentiment', 'Find solutions to brand new errors'],
                    summary: 'Grok has access to real-time data from the X platform. This makes it invaluable for finding solutions to bugs in libraries released *yesterday* or researching the absolute latest trends.',
                    theory: 'Most LLMs have a "Knowledge Cutoff". Grok retrieves live social data, allowing it to answer "What is the community saying about the new React 19 release?" where other models might not know it exists.',
                    task: {
                        description: 'Research sentiment on a new framework.',
                        before: 'Is Bun good?',
                        after: 'Search for recent developer discussions (last 30 days) regarding "Bun vs Node.js performance". Summarize the consensus on stability and production-readiness based on real user tweets/posts.'
                    },
                    keywords: [
                        { term: 'Knowledge Cutoff', definition: 'The date past which an AI model has no training data.' },
                        { term: 'Real-time Retrieval', definition: 'Fetching live data from the web/social media to augment the answer.' }
                    ],
                    resources: [],
                    instructorNotes: 'Use this for "News" and "Trends", not deep coding theory.'
                },
                {
                    id: 'tool-09',
                    title: 'The AI Developer Workflow',
                    objectives: ['Orchestrate multiple AI tools', 'Define a personalized development stack', 'Minimize context switching'],
                    summary: 'No single tool does it all. The efficiency comes from chaining them together: Planning (ChatGPT), Coding (Cursor), Debugging (Windsurf), and Deploying (Vercel).',
                    theory: 'Tool specialization is the future. Instead of one giant AI, we use specialized models for specialized tasks. Understanding the strengths (and costs) of each is a key engineering skill.',
                    task: {
                        description: 'Create a "Standard Operating Procedure" for your projects.',
                        before: 'How to use tools?',
                        after: 'Define a step-by-step workflow for a new project. 1. Ideation (Tool & Prompt). 2. Architecture (Tool & Prompt). 3. Implementation (Tool & Method). 4. User Testing (Tool & Method). Write this as a guide for a junior dev.'
                    },
                    keywords: [
                        { term: 'Tech Stack', definition: 'The combination of technologies and tools used to build an application.' },
                        { term: 'Context Switching', definition: 'The cost of mental energy lost when moving between different tasks or tools.' }
                    ],
                    resources: [],
                    instructorNotes: 'The final lesson should be about synthesis. Creating their own "Iron Man Suit" of tools.'
                }
            ]
        }
    ]
};
