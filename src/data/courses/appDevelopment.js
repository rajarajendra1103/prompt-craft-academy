import { Book, Code, Smartphone, Database, Cloud, Palette, Cpu, Layers } from 'lucide-react';

export const appDevelopment = {
    id: 'app-dev',
    title: 'App Development',
    description: 'Build functionality for mobile apps',
    icon: Smartphone,
    modules: [
        {
            id: 'app-m1',
            title: 'Module 1: Idea → Prompts',
            lessons: [
                {
                    id: 'app-m1-01',
                    title: '01: Introduction to Prompt Engineering',
                    objectives: ['Define prompt engineering for mobile apps', 'Understand the CICO framework', 'Differentiate between casual and technical prompting'],
                    summary: 'Prompt engineering is the art of communicating with AI to get precise, executable code. For app development, this means structured instructions.',
                    theory: "AI models operate like advanced completion engines that require specific guidance to function correctly. The CICO framework (Context, Instruction, Constraint, Output) ensures you provide all necessary details. Context sets the role, Instruction defines the task, Constraint limits the scope, and Output specifies the format. Without this structure, the AI guesses your intent, often leading to generic or buggy code.",
                    task: {
                        description: 'Refine a basic app idea prompt.',
                        before: 'Help me build a fitness app.',
                        after: 'Act as a Senior Mobile Developer. Plan the architecture for a "Gamified Fitness App" using React Native. Constraints: Use TypeScript, Firebase for backend, and Tailwind for styling. Output a high-level technical roadmap.'
                    },
                    keywords: [
                        { term: 'CICO', definition: 'Context, Instruction, Constraint, Output - the framework for effective prompts.' },
                        { term: 'Zero-shot', definition: 'Prompting without providing examples.' }
                    ],
                    resources: [
                        { title: 'App Development Tutorial', url: 'https://www.youtube.com/results?search_query=App%20Development%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Start with the basics. If they cant prompt, they cant build.'
                },
                {
                    id: 'app-m1-02',
                    title: '02: Anatomy of an Effective Prompt',
                    objectives: ['Identify key prompt components', 'Use delimiters to separate context', 'Master technical specificity'],
                    summary: 'A prompt is like a function call. Structure matters. We dissect the perfect prompt for generating mobile components.',
                    theory: "Prompts function like code, requiring clear structure and separation of different sections to be effective. Use specific delimiters like '###' to clearly divide instructions from data or examples. You must also explicitly state software versions, such as 'React Native 0.72', to avoid compatibility issues. This clarity removes ambiguity and significantly reduces the chance of generation errors.",
                    task: {
                        description: 'Structure a component request.',
                        before: 'Code a login screen.',
                        after: 'Create a React Native Functional Component for a "Login Screen". ### Requirements: 1. Use React Hook Form. 2. Include "Email" and "Password" fields. 3. Style with `StyleSheet.create`. 4. Handle "onSubmit" with a console log.'
                    },
                    keywords: [
                        { term: 'Delimiters', definition: 'Characters like ### used to separate sections of a prompt.' }
                    ],
                    resources: [
                        { title: 'Anatomy of an Effective Prompt Tutorial', url: 'https://www.youtube.com/results?search_query=Anatomy%20of%20an%20Effective%20Prompt%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Show how one word changes the output.'
                },
                {
                    id: 'app-m1-03',
                    title: '03: Turning an App Idea into a User Need',
                    objectives: ['Define the core problem statement', 'Identify target audience', 'Refine abstract ideas into concrete goals'],
                    summary: 'Every great app starts with a clear problem. We use AI to drill down from "I want an app" to "I solve X for Y".',
                    theory: "Transforming a vague idea into a concrete product requires digging deep into the actual user problem. The '5 Whys' technique involves repeatedly asking 'Why' to uncover the root cause of an issue. AI can simulate this process, acting as a product mentor that challenges your assumptions. This iterative questioning helps sharpen your concept until it addresses a genuine user need.",
                    task: {
                        description: 'Refine a vague idea.',
                        before: 'I want a cooking app.',
                        after: 'Act as a Lead Product Manager. I have an idea for a "Cooking App for College Students". Ask me 5 clarifying questions to help me define the Core Value Proposition and Key Differentiators. Do not generate a plan yet.'
                    },
                    keywords: [
                        { term: 'Problem Statement', definition: 'A concise description of the issue that needs to be addressed.' }
                    ],
                    resources: [
                        { title: 'Turning an App Idea into a User Need Tutorial', url: 'https://www.youtube.com/results?search_query=Turning%20an%20App%20Idea%20into%20a%20User%20Need%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Encourage students to be specific.'
                },
                {
                    id: 'app-m1-04',
                    title: '04: Idea to Feature List',
                    objectives: ['Brainstorm comprehensive feature sets', 'Use MoSCoW prioritization', 'Identify MVP requirements'],
                    summary: 'Expanding the problem into a solution. We generate a full list of features and then ruthlessly cut them down to an MVP.',
                    theory: "Large Language Models excel at brainstorming comprehensive feature lists based on simple prompts. To manage this list, use the MoSCoW method to categorize items into Must-have, Should-have, and Could-have. This prioritization ensures you focus on essential features for launch. By defining these categories early, you prevent scope creep and keep the project manageable.",
                    task: {
                        description: 'Generate features for a Budget App.',
                        before: 'Features for finance app.',
                        after: 'List 20 potential features for a "Personal Budget App for Freelancers". Prioritize them using the MoSCoW method. Which 3 features are critical for the Day 1 launch (MVP)?'
                    },
                    keywords: [
                        { term: 'MVP', definition: 'Minimum Viable Product - the version of a new product with just enough features to satisfy early customers.' },
                        { term: 'Scope Creep', definition: 'Uncontrolled growth in a project’s scope.' }
                    ],
                    resources: [
                        { title: 'Idea to Feature List Tutorial', url: 'https://www.youtube.com/results?search_query=Idea%20to%20Feature%20List%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m1-05',
                    title: '05: Features to User Stories',
                    objectives: ['Translate features into user-centric language', 'Define acceptance criteria', 'Format for Agile development'],
                    summary: 'Developers build features; Users experience stories. We convert technical checklists into "As a user, I want..."',
                    theory: "User stories bridge the gap between technical features and user value by describing functionality from the user's perspective. They follow a standard template: 'As a [role], I want [action], so that [benefit]'. Pairing these with Acceptance Criteria defines exactly when a task is complete. This clarity ensures developers build features that actually solve user problems.",
                    task: {
                        description: 'Write a story for Dark Mode.',
                        before: 'Add dark mode.',
                        after: 'Write a User Story for "Dark Mode" in a reading app. Format: "As a [User]...". Include 3 Acceptance Criteria (e.g., "System remembers preference", "Switch happens instantly").'
                    },
                    keywords: [
                        { term: 'User Story', definition: 'An explanation of a software feature written from the perspective of the end user.' },
                        { term: 'Acceptance Criteria', definition: 'Conditions that a software product must satisfy to be accepted by a user.' }
                    ],
                    resources: [
                        { title: 'Features to User Stories Tutorial', url: 'https://www.youtube.com/results?search_query=Features%20to%20User%20Stories%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m1-06',
                    title: '06: Breaking Features into Tasks',
                    objectives: ['Decompose stories into technical tasks', 'Estimate complexity', 'Identify dependencies'],
                    summary: 'How to build it. Breaking a story down into "Create API", "Build UI", "Wire up state".',
                    theory: "Large features must be broken down into small, manageable coding tasks to be implemented effectively. AI can act as a Technical Lead, decomposing a complex user story into specific sub-tasks like 'Build UI' or 'Create API'. This granular approach makes estimation easier and allows for parallel development. It converts abstract requirements into a clear to-do list for developers.",
                    task: {
                        description: 'Break down a "Photo Upload" feature.',
                        before: 'How to do photo upload?',
                        after: 'Break down the feature "User Profile Photo Upload" into granular technical tasks for React Native + Firebase. Include tasks for: UI implementation, Camera permissions, Image compression, and Firebase Storage upload.'
                    },
                    keywords: [
                        { term: 'Decomposition', definition: 'Breaking strictly complex problems into smaller, easier-to-solve parts.' }
                    ],
                    resources: [
                        { title: 'Breaking Features into Tasks Tutorial', url: 'https://www.youtube.com/results?search_query=Breaking%20Features%20into%20Tasks%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m1-07',
                    title: '07: Writing Constraints & Scope',
                    objectives: ['Define what NOT to do', 'Set technical boundaries', 'Manage token limits by being concise'],
                    summary: 'Constraints are as important as instructions. Telling the AI "Use only standard libraries" saves hours of debugging.',
                    theory: "Constraints are critical boundaries that guide the AI to generate usable code within your specific project requirements. By explicitly stating what NOT to do, such as 'No external CSS libraries', you prevent the AI from hallucinating unnecessary dependencies. Clear constraints ensure the output matches your tech stack and coding standards. This saves time by reducing the need to refactor incompatible code.",
                    task: {
                        description: 'Constrain a map feature.',
                        before: 'Make a map view.',
                        after: 'Create a component for a Map View. Constraint: Do NOT use Google Maps API. Use `react-native-maps` with OpenStreetMap tiles. The map should be read-only (no user gestures allowed).'
                    },
                    keywords: [
                        { term: 'Constraints', definition: 'Restrictions or limitations on the project.' }
                    ],
                    resources: [
                        { title: 'Writing Constraints & Scope Tutorial', url: 'https://www.youtube.com/results?search_query=Writing%20Constraints%20%26%20Scope%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m1-08',
                    title: '08: Creating a PRD',
                    objectives: ['Generate a full Product Requirement Document', 'Synthesize all previous steps', 'Create a source of truth'],
                    summary: 'The PRD is the bible of the project. We use AI to compile our scattered thoughts into a professional document.',
                    theory: "A Product Requirement Document (PRD) serves as the central source of truth for the entire development team. It consolidates Objectives, Scope, User Stories, and Technical Constraints into one comprehensive file. Using AI to generate and maintain this document ensures consistency across all stages of development. A well-defined PRD keeps everyone aligned and minimizes misinterpretation of goals.",
                    task: {
                        description: 'Generate a PRD for a To-Do App.',
                        before: 'Write a doc for my app.',
                        after: 'Compile a Product Requirement Document (PRD) for a "Shared Grocery List App". Sections: 1. Executive Summary. 2. User Personas. 3. Core Features (Sync, Offline Mode). 4. Technical Stack (React Native, Supabase).'
                    },
                    keywords: [
                        { term: 'PRD', definition: 'Product Requirement Document - a document containing all the requirements to a certain product.' }
                    ],
                    resources: [
                        { title: 'Creating a PRD Tutorial', url: 'https://www.youtube.com/results?search_query=Creating%20a%20PRD%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m1-09',
                    title: '09: App Flow & Screen Mapping',
                    objectives: ['Visualize user navigation', 'Define screen hierarchy', 'Identify edge case states'],
                    summary: 'Mapping the journey. How does a user get from "Login" to "Checkout"?',
                    theory: "Mapping out the user journey reveals the logical flow of screens and identifies potential gaps in the experience. Visualizing paths like 'Login to Home to Checkout' helps spot missing states such as 'Empty Cart' or 'Error Loading'. You can ask AI to generate text-based flows or Mermaid.js charts to visualize these paths. This step ensures a smooth and complete navigation structure before coding begins.",
                    task: {
                        description: 'Map the flow for a Dating App.',
                        before: 'Flow for dating app.',
                        after: 'Create a text-based User Flow for a Dating App. Start: "Onboarding". End: "First Chat". Include steps for: Profile Creation, Photo Upload, Matching Algorithm, and Match Notification.'
                    },
                    keywords: [
                        { term: 'User Flow', definition: 'The path taken by a prototypical user on a website or app to complete a task.' }
                    ],
                    resources: [
                        { title: 'App Flow & Screen Mapping Tutorial', url: 'https://www.youtube.com/results?search_query=App%20Flow%20%26%20Screen%20Mapping%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m1-10',
                    title: '10: Estimating Time & Resources',
                    objectives: ['Estimate dev hours using AI', 'Calculate potential API costs', 'Plan resource allocation'],
                    summary: 'Is this a weekend project or a 6-month startup? AI can give rough estimates based on feature complexity.',
                    theory: "Estimating development time is notoriously difficult, but AI can provide a solid baseline by comparing features to industry standards. Techniques like 'T-shirt sizing' categorize tasks into Small, Medium, or Large complexity buckets. AI can analyze your feature list and suggest realistic timeframes for each item. This helps in planning resources and setting expectations for stakeholders.",
                    task: {
                        description: 'Estimate a Chat Feature.',
                        before: 'How long to build chat?',
                        after: 'Act as a Senior Project Manager. Estimate the development hours required to build a "Real-time Chat" feature with Read Receipts and Image Sharing. Break it down by Frontend, Backend, and Testing time.'
                    },
                    keywords: [
                        { term: 'T-Shirt Sizing', definition: 'A project estimation technique using abstract values (S, M, L) instead of hours.' }
                    ],
                    resources: [
                        { title: 'Estimating Time & Resources Tutorial', url: 'https://www.youtube.com/results?search_query=Estimating%20Time%20%26%20Resources%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m1-11',
                    title: '11: Validating Ideas',
                    objectives: ['Simulate market feedback', 'Identify potential competitors', 'Critique the value proposition'],
                    summary: 'Will anyone use this? AI can roleplay as a skeptical investor or a user.',
                    theory: "Validation is the process of testing your idea's viability before writing a single line of code to avoid waste. AI can simulate a skeptical investor or a potential user to critique your concept and highlight risks. It can perform a 'Gap Analysis' to see how your idea compares to existing competitors. This feedback loop allows you to pivot and refine your value proposition early.",
                    task: {
                        description: 'Critique a Social Network idea.',
                        before: 'Is my idea good?',
                        after: 'Act as a Venture Capitalist. Critique my idea for "Facebook for Dogs". Identify 3 major risks (Retention, Monetization, Competition) and ask 1 hard question for each.'
                    },
                    keywords: [
                        { term: 'Gap Analysis', definition: 'Comparing actual performance with potential or desired performance.' }
                    ],
                    resources: [
                        { title: 'Validating Ideas Tutorial', url: 'https://www.youtube.com/results?search_query=Validating%20Ideas%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        },
        {
            id: 'app-m2',
            title: 'Module 2: Frontend Prompts',
            lessons: [
                {
                    id: 'app-m2-01',
                    title: '01: Generating App Layouts',
                    objectives: ['Create responsive mobile layouts', 'Understand Flexbox in React Native', 'Draft screen skeletons'],
                    summary: 'Laying the foundation. We prompt for high-level structure before details.',
                    theory: "Mobile layout relies heavily on the Flexbox model to ensure content adapts to different screen sizes. When prompting, specify explicit 'Columns' and 'Rows' using flex-direction to control alignment. It is also critical to request 'Safe Area' handling to prevent UI elements from being hidden behind notches or home indicators on modern iOS and Android devices.",
                    task: {
                        description: 'Layout a Dashboard Screen.',
                        before: 'Code a dashboard.',
                        after: 'Create the Layout structure for a User Dashboard in React Native. It should have a Header, a ScrollView for content (Grid of 4 cards), and a Bottom Navigation Bar. Use `SafeAreaView`.'
                    },
                    keywords: [
                        { term: 'Flexbox', definition: 'A layout model that allows elements to align and distribute space within a container.' },
                        { term: 'SafeArea', definition: 'The portion of the screen not covered by global UI (notches, home indicator).' }
                    ],
                    resources: [
                        { title: 'Module 2: Frontend Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Module%202%3A%20Frontend%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-02',
                    title: '02: Creating Components',
                    objectives: ['Build reusable UI atoms', 'Implement props for customization', 'Ensure platform consistency'],
                    summary: 'Buttons, Cards, Inputs. Building the Lego blocks of the app.',
                    theory: "Components should be built as isolated, reusable building blocks to maintain a clean codebase. Prompt the AI to generate 'Pure Components' that rely solely on passed Props for their data and behavior. Explicitly specify your preferred styling library, such as 'styled-components' or 'Tailwind', to ensure the generated code fits your existing design system.",
                    task: {
                        description: 'Create a Custom Button.',
                        before: 'Make a button.',
                        after: 'Create a reusable "PrimaryButton" component in React Native. Props: `title` (string), `onPress` (func), `disabled` (bool). Style: Blue background, rounded corners, white text. Opacity 0.5 when disabled.'
                    },
                    keywords: [
                        { term: 'Component', definition: 'A modular, reusable piece of UI.' },
                        { term: 'Props', definition: 'Inputs passed to a component to configure it.' }
                    ],
                    resources: [
                        { title: 'Creating Components Tutorial', url: 'https://www.youtube.com/results?search_query=Creating%20Components%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-03',
                    title: '03: State Management Prompts',
                    objectives: ['Manage local vs global state', 'Handle complex form state', 'Implement User Auth flows'],
                    summary: 'Data makes the UI move. We use AI to scaffold Redux, Context, or simple `useState` logic.',
                    theory: "State represents the single source of truth for your application's dynamic data. When generating code, prompt for specific state management patterns like React's `useState` logic or Redux for global data. For complex interactions like forms, ask the AI to include validation logic that updates the state in real-time to provide immediate user feedback.",
                    task: {
                        description: 'Manage a Shopping Cart.',
                        before: 'Add cart state.',
                        after: 'Create a React Context named `CartContext`. It should expose: `items` (array), `addToCart(item)`, `removeFromCart(id)`, and `totalPrice`. Use `useReducer` to handle state updates.'
                    },
                    keywords: [
                        { term: 'State', definition: 'The memory of the application; data that changes over time.' },
                        { term: 'Context', definition: 'A way to pass data through the component tree without manually passing props.' }
                    ],
                    resources: [
                        { title: 'State Management Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=State%20Management%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-04',
                    title: '04: Responsive Design Prompts',
                    objectives: ['Support multiple screen sizes', 'Handle tablet vs phone layouts', 'Use percentage and flex dimensions'],
                    summary: 'One code, many devices. Ensuring the app looks good on iPhone SE and iPad Pro.',
                    theory: "Hardcoding pixel values breaks layouts on different devices, so always use flexible units or percentages. Prompt the AI to create 'Adaptive Layouts' that dynamically adjust based on the screen's dimensions using tools like `Dimensions.get`. This ensures your app looks professional on everything from small phones to large tablets without requiring separate codebases.",
                    task: {
                        description: 'Make a grid responsive.',
                        before: 'Fix grid size.',
                        after: 'Refactor this Grid View. On phones (< 768px), show 2 columns. On Tablets (>= 768px), show 4 columns. Use React Native `useWindowDimensions` hook to detect width.'
                    },
                    keywords: [
                        { term: 'Adaptive Design', definition: 'GUI design that adapts to different screen sizes.' },
                        { term: 'Breakpoints', definition: 'Pixel widths where the layout shifts (e.g., Mobile to Tablet).' }
                    ],
                    resources: [
                        { title: 'Responsive Design Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Responsive%20Design%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-05',
                    title: '05: Accessibility in Frontend',
                    objectives: ['Add screen reader support (TalkBack/VoiceOver)', 'Ensure minimum touch target sizes', 'Manage color contrast'],
                    summary: 'Inclusivity is quality. AI can audit code for accessibility labels and hitslops.',
                    theory: "Mobile accessibility ensures your app is usable by everyone, including those with visual or motor impairments. Prompt the AI to include `accessibilityLabel` and `accessibilityRole` props on all interactive elements. Additionally, enforce a minimum touch target size of 44x44 pixels to meet standard usability guidelines and make navigation easier for all users.",
                    task: {
                        description: 'Make an icon button accessible.',
                        before: 'Is this button accessible?',
                        after: 'Analyze this Icon Button component. Add the correct `accessibilityLabel` prop so a screen reader says "Close Modal". Add `hitSlop={{top: 10, bottom: 10...}}` to increase touch area.'
                    },
                    keywords: [
                        { term: 'TalkBack', definition: 'Google\'s screen reader for Android.' },
                        { term: 'HitSlop', definition: 'Extending the touchable area of a view without changing its visual size.' }
                    ],
                    resources: [
                        { title: 'Accessibility in Frontend Tutorial', url: 'https://www.youtube.com/results?search_query=Accessibility%20in%20Frontend%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-06',
                    title: '06: Animations & Micro-interactions',
                    objectives: ['Implement smooth UI transitions', 'Use Reanimated or Lottie', 'Provide visual feedback'],
                    summary: 'Delight the user. Animations make the app feel "Native".',
                    theory: "Fluid animations delight users but must be performant to avoid dropping frames (jank). Prompt the AI to use libraries like `react-native-reanimated` that run animations on the UI thread for smoothness. Keep transitions short, typically under 300ms, to ensure the app feels snappy and responsive rather than sluggish.",
                    task: {
                        description: 'Animate a Like heart.',
                        before: 'Add like animation.',
                        after: 'Create a "Like" button using `react-native-reanimated`. When clicked, the heart icon should scale up to 1.5, rotate slightly, and spring back to 1.0. Change color from Grey to Red.'
                    },
                    keywords: [
                        { term: 'Micro-interaction', definition: 'Subtle functional animation (e.g., toggle switch slided).' },
                        { term: 'Interpolation', definition: 'Mapping a value (0 to 1) to a style (0deg to 360deg).' }
                    ],
                    resources: [
                        { title: 'Animations & Micro-interactions Tutorial', url: 'https://www.youtube.com/results?search_query=Animations%20%26%20Micro-interactions%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-07',
                    title: '07: API Integration Prompts',
                    objectives: ['Fetch data from backends', 'Handle loading and error states', 'Display data in lists'],
                    summary: 'Connecting the plumbing. Getting real data into the UI.',
                    theory: "Fetching data involves more than just a network call; it requires managing the user interface state. Use the `useEffect` hook to trigger requests and explicitly handle Loading, Success, and Error states. Prompting for 'Clean Architecture' ensures that API logic is separated from UI code, making your application easier to maintain and test.",
                    task: {
                        description: 'Fetch and display user profile.',
                        before: 'Show user data.',
                        after: 'Write a `useEffect` hook to fetch user data from `https://api.example.com/me`. Store the result in `userData` state. While loading, show an `ActivityIndicator`. If error, show a text "Failed to load".'
                    },
                    keywords: [
                        { term: 'REST Client', definition: 'Tools/libraries (like Axios) to communicate with APIs.' },
                        { term: 'Promise', definition: 'An object representing the eventual completion or failure of an async operation.' }
                    ],
                    resources: [
                        { title: 'API Integration Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=API%20Integration%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-08',
                    title: '08: Frontend Testing Prompts',
                    objectives: ['Write Unit and Component tests', 'Mock API calls', 'Ensure regression safety'],
                    summary: 'Sleep better at night. Tests ensure your changes don\'t break existing features.',
                    theory: "Automated testing is your safety net against regressions when modifying code. Use Jest for testing logic and React Native Testing Library for component interactions. Prompt the AI to write tests that focus on 'User Behavior', such as clicking buttons or entering text, rather than testing internal implementation details that might change.",
                    task: {
                        description: 'Test a Login Form.',
                        before: 'Write test for login.',
                        after: 'Write a test using `@testing-library/react-native`. 1. Render Login Screen. 2. FireEvent changeText on email input. 3. FireEvent press on Submit. 4. Assert that the "onLogin" prop was called with the email.'
                    },
                    keywords: [
                        { term: 'Unit Test', definition: 'Testing a single function or component in isolation.' },
                        { term: 'Mock', definition: 'Simulated object that mimics the behavior of real objects in controlled ways.' }
                    ],
                    resources: [
                        { title: 'Frontend Testing Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Frontend%20Testing%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m2-09',
                    title: '09: Performance Optimization',
                    objectives: ['Reduce re-renders', 'Optimize FlatLists', 'Minimize bundle size'],
                    summary: '60 FPS or bust. Janky apps get uninstalled.',
                    theory: "Performance optimization is essential for retaining users, as laggy apps are quickly uninstalled. Common issues include heavy computations during render and excessive re-renders. Prompt the AI to use hooks like `useMemo` and `useCallback` to cache results, and leverage `FlatList` for efficiently rendering long lists of data.",
                    task: {
                        description: 'Optimize a scrolling list.',
                        before: 'List is slow.',
                        after: 'Optimize this `ScrollView` that contains 1000 items. Switch to `FlatList`. Add `getItemLayout` to skip measurement. Implement `windowSize` to reduce memory usage.'
                    },
                    keywords: [
                        { term: 'Tree Shaking', definition: 'Removing unused code from the final bundle.' },
                        { term: 'Memoization', definition: 'Caching the result of an expensive function call.' }
                    ],
                    resources: [
                        { title: 'Performance Optimization Tutorial', url: 'https://www.youtube.com/results?search_query=Performance%20Optimization%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        },
        {
            id: 'app-m3',
            title: 'Module 3: UI / UX Prompts',
            lessons: [
                {
                    id: 'app-m3-01',
                    title: '01: App Wireframes',
                    objectives: ['Visualize structure before code', 'Iterate on layout rapidly', 'Define spatial relationships'],
                    summary: 'Blueprint phase. Describing the screen structure in text or generating ASCII art.',
                    theory: "Wireframing is the blueprint phase where you define the structural layout without getting distracted by aesthetics. Focus on 'Low Fidelity' prompts that establish where elements sit on the screen and their size hierarchy. This allows you to iterate rapidly on the user experience before committing time to detailed visual design.",
                    task: {
                        description: 'Wireframe a Music Player.',
                        before: 'Draw music app.',
                        after: 'Create a text-based wireframe for a "Music Player" screen. Sections: Top (Album Art, huge), Middle (Song Title, Artist, Scrubber Bar), Bottom (Play/Pause controls, Shuffle, Repeat). Indicate relative sizes.'
                    },
                    keywords: [
                        { term: 'App Development', definition: 'The core subject of this lesson, focusing on app development.' }
                    ],
                    resources: [
                        { title: 'Module 3: UI / UX Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Module%203%3A%20UI%20%2F%20UX%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-02',
                    title: '02: Design System Creation',
                    objectives: ['Standardize colors and type', 'Create consistent spacing rules', 'Build a brand language'],
                    summary: 'Consistency is key. A design system ensures every button looks related.',
                    theory: "A robust design system ensures consistency and speeds up development by reusing standardized elements. Follow the Atomic Design methodology: start with Atoms like colors and fonts, build Molecules like buttons, and combine them into Organisms like cards. You can prompt the AI to 'Generate a JSON Design System' to instantly create a shared style guide for your team.",
                    task: {
                        description: 'Generate a Mobile Design System.',
                        before: 'Pick colors for app.',
                        after: 'Generate a Design System JSON for a "Wellness App". Palette: Calming Greens and Earth Tones. typography: "Open Sans". Spacing Scale: Base 8px (8, 16, 24, 32...).'
                    },
                    keywords: [
                        { term: 'Design System Creation', definition: 'The core subject of this lesson, focusing on design system creation.' }
                    ],
                    resources: [
                        { title: 'Design System Creation Tutorial', url: 'https://www.youtube.com/results?search_query=Design%20System%20Creation%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-03',
                    title: '03: Color & Typography',
                    objectives: ['Select accessible color pairs', 'Choose readable mobile fonts', 'Understand color psychology'],
                    summary: ' mood setting. Colors drive emotion; Type drives readability.',
                    theory: "Mobile screens are often viewed in varying light conditions, making high contrast essential for readability. Prompt for color palettes that are 'WCAG AA Compliant' to ensure text is legible for everyone. Also, request larger font sizes than typically used on the web, starting with a base of 16px, to accommodate smaller displays.",
                    task: {
                        description: 'Create a Dark Mode palette.',
                        before: 'Dark mode colors.',
                        after: 'Generate a Color Palette for a "Crypto Trading App" in Dark Mode. Background: Deep Slate (not pure black). Accents: Neon Green (Profit) and Red (Loss). Ensure text checks pass accessibility standards.'
                    },
                    keywords: [
                        { term: 'Color & Typography', definition: 'The core subject of this lesson, focusing on color & typography.' }
                    ],
                    resources: [
                        { title: 'Color & Typography Tutorial', url: 'https://www.youtube.com/results?search_query=Color%20%26%20Typography%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-04',
                    title: '04: Component Design',
                    objectives: ['Detail visual states of components', 'Design for touch input', 'Standardize UI patterns'],
                    summary: 'Designing the interactive elements. Buttons, inputs, and toggles.',
                    theory: "Interactive components are not static images; they must visually react to user input. Define clear styles for all states, including Idle, Pressed, Disabled, and Error. Prompting the AI for a 'Visual Description of all states' ensures that developers implement the necessary feedback loops that make an interface feel responsive and tactile.",
                    task: {
                        description: 'Design a Floating Action Button (FAB).',
                        before: 'Make a FAB.',
                        after: 'Describe the visual design of a "Add New" FAB for a notes app. Shape: Circle. Color: Primary Brand. Icon: Plus sign (White). Shadow: Elevation 6. OnPress: Ripple effect and scale down 0.95.'
                    },
                    keywords: [
                        { term: 'Component Design', definition: 'The core subject of this lesson, focusing on component design.' }
                    ],
                    resources: [
                        { title: 'Component Design Tutorial', url: 'https://www.youtube.com/results?search_query=Component%20Design%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-05',
                    title: '05: Figma Prompting',
                    objectives: ['Generate descriptions for design tools', 'Automate layer naming', 'Structure design files'],
                    summary: 'Talking to designers (or AI designers). Describing UI for tools like Figma or V0.',
                    theory: "Bridging the gap between design and code is easier when you speak the language of tools like Figma. Describe layouts using 'Auto Layout' terminology, such as 'A vertical stack with 16px padding'. These descriptions translate directly into CSS Flexbox properties, allowing AI to generate code that perfectly matches your design files.",
                    task: {
                        description: 'Describe a Profile Card for Figma.',
                        before: 'Profile card design.',
                        after: 'Describe a standard Profile Card for a Figma Component. Container: White, Radius 12px. Content: Horizontal Stack (Avatar 48px, Vertical Stack (Name Bold 16px, Role Gray 14px)). Right aligned: "Edit" Icon.'
                    },
                    keywords: [
                        { term: 'Figma Prompting', definition: 'The core subject of this lesson, focusing on figma prompting.' }
                    ],
                    resources: [
                        { title: 'Figma Prompting Tutorial', url: 'https://www.youtube.com/results?search_query=Figma%20Prompting%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-06',
                    title: '06: UX Copywriting',
                    objectives: ['Write concise mobile text', 'Craft helpful error messages', 'Guide users with tooltips'],
                    summary: 'Words are UI. Mobile screens have limited space, so brevity is queen.',
                    theory: "Text on mobile screens is a user interface element itself, often called 'Microcopy'. Due to limited space, brevity is key—replace wordy phrases like 'Click here to submit' with a simple 'Submit'. Ensure error messages are helpful, guiding the user to a solution (e.g., 'Check connection') rather than just stating the problem.",
                    task: {
                        description: 'Write onboarding slides.',
                        before: 'Intro text.',
                        after: 'Write copy for 3 Onboarding Slides for a "Meditation App". Slide 1: Focus on Sleep. Slide 2: Focus on Focus. Slide 3: Call to Action to Subscribe. Max 10 words per headline, 20 words per body.'
                    },
                    keywords: [
                        { term: 'UX Copywriting', definition: 'The core subject of this lesson, focusing on ux copywriting.' }
                    ],
                    resources: [
                        { title: 'UX Copywriting Tutorial', url: 'https://www.youtube.com/results?search_query=UX%20Copywriting%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-07',
                    title: '07: Accessibility & Contrast',
                    objectives: ['Audit designs for visual impairments', 'Check font scalability', 'Ensure color independence'],
                    summary: 'Designing for all. Ensuring the app is usable by people with low vision.',
                    theory: "Designing for accessibility means ensuring your app is usable by people with various visual impairments. Never rely on color alone to convey meaning (e.g., 'Press the Red button'); always pair color with icons or text labels. You can prompt the AI to 'Audit for Color Blindness' to identify and fix areas where poor contrast might exclude users.",
                    task: {
                        description: 'Audit a status indicator.',
                        before: 'Status colors.',
                        after: 'I have a status dot that is Green for Online and Red for Offline. How issues might a color-blind user have? Suggest a design change (e.g., shapes or icons) to make this accessible without relying on color.'
                    },
                    keywords: [
                        { term: 'Accessibility & Contrast', definition: 'The core subject of this lesson, focusing on accessibility & contrast.' }
                    ],
                    resources: [
                        { title: 'Accessibility & Contrast Tutorial', url: 'https://www.youtube.com/results?search_query=Accessibility%20%26%20Contrast%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-08',
                    title: '08: User Journey Mapping',
                    objectives: ['Map emotional highs and lows', 'Identify friction points', 'Optimize flow efficiency'],
                    summary: 'The path users take. Finding where they get stuck.',
                    theory: "User Journey Maps visualize the entire experience, tracking what a user does, thinks, and feels at each step. This holistic view helps identify friction points, such as a confusing signup process. AI can simulate a user's emotional response, helping you empathize with their frustration and optimize the flow to remove barriers.",
                    task: {
                        description: 'Map a First-Time User Experience (FTUE).',
                        before: 'User path.',
                        after: 'Create a User Journey Map for a user signing up for a "Banking App". Steps: Download -> Open -> Sign Up -> verify Identity -> Add Funds. Identify the "Friction" point (Identity Verification) and suggest a reassurance tooltip.'
                    },
                    keywords: [
                        { term: 'User Journey Mapping', definition: 'The core subject of this lesson, focusing on user journey mapping.' }
                    ],
                    resources: [
                        { title: 'User Journey Mapping Tutorial', url: 'https://www.youtube.com/results?search_query=User%20Journey%20Mapping%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m3-09',
                    title: '09: Usability Testing',
                    objectives: ['Simulate user testing', 'Create test scripts', 'Analyze potential confusion'],
                    summary: 'Testing before coding. Using AI to roleplay user confusion.',
                    theory: "Usability testing spots confusion before you write code. You can use AI to conduct a Heuristic Evaluation by asking it to roleplay as a non-technical or 'confused user'. This simulation reveals vague labels and hidden navigation issues, allowing you to fix logic gaps and improve the intuitiveness of your interface.",
                    task: {
                        description: 'Test navigation labels.',
                        before: 'Check menu.',
                        after: 'Act as a 60-year-old user not tech-savvy. I present you a menu with icons: "Gear", "Hamburger", "Magnifying Glass". What do you think each one does? Where would you click to find "Help"?'
                    },
                    keywords: [
                        { term: 'Usability Testing', definition: 'The core subject of this lesson, focusing on usability testing.' }
                    ],
                    resources: [
                        { title: 'Usability Testing Tutorial', url: 'https://www.youtube.com/results?search_query=Usability%20Testing%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        },
        {
            id: 'app-m4',
            title: 'Module 4: Backend Prompts',
            lessons: [
                {
                    id: 'app-m4-01',
                    title: '01: App Backend Architecture',
                    objectives: ['Choose between Firebase services and Custom Backend', 'Understand mobile-specific backend needs', 'Plan offline-first architectures'],
                    summary: 'The brain behind the screen. Mobile apps need synced data, push notifications, and offline support.',
                    theory: "Choosing the right backend architecture is pivotal for mobile success. Backend-as-a-Service (BaaS) platforms like Firebase provide out-of-the-box solutions for Authentication, Database, and Storage, significantly speeding up development. However, for complex business logic or legacy integration, a custom backend using Node.js or Go offers greater flexibility and control.",
                    task: {
                        description: 'Select a stack for a Chat App.',
                        before: 'Backend for chat.',
                        after: 'I am building a WhatsApp clone. Compare Firebase (Firestore + Cloud Functions) vs Custom Backend (Node.js + Socket.io + MongoDB). Focus on: Scalability, Dev Speed, and Real-time latency. Reccomend one for a solo dev.'
                    },
                    keywords: [
                        { term: 'Module 4: Backend Prompts', definition: 'The core subject of this lesson, focusing on module 4: backend prompts.' }
                    ],
                    resources: [
                        { title: 'Module 4: Backend Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Module%204%3A%20Backend%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-02',
                    title: '02: REST API Design',
                    objectives: ['Design clean API endpoints', 'Version APIs for mobile apps', 'Minimize payload size'],
                    summary: 'How the app talks to the server. Mobile data is expensive; keep it light.',
                    theory: "Effective REST API design relies on strict adherence to principles like resource-based URLs and standard HTTP methods. Essential for mobile apps is API versioning (e.g., /v1/), as you cannot force immediate user updates. Additionally, optimize payload sizes by sending only necessary fields, similar to GraphQL, to conserve user data and battery.",
                    task: {
                        description: 'Design a News Feed API.',
                        before: 'Get news api.',
                        after: 'Design a REST endpoint for `GET /feed`. Support pagination (page, limit). The response should be lightweight. Show the JSON structure. Include fields: id, title, summary, thumbnail_url (no full body text).'
                    },
                    keywords: [
                        { term: 'REST API Design', definition: 'The core subject of this lesson, focusing on rest api design.' }
                    ],
                    resources: [
                        { title: 'REST API Design Tutorial', url: 'https://www.youtube.com/results?search_query=REST%20API%20Design%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-03',
                    title: '03: Authentication & Authorization',
                    objectives: ['Implement Social Auth (Google/Apple)', 'Manage JWT and Refresh Tokens', 'Secure endpoints'],
                    summary: 'Who are you? Mobile auth often involves biometric (FaceID) and social logins.',
                    theory: "Secure authentication follows the OAuth 2.0 standard: the app retrieves an authorization code, exchanges it for an Access Token, and securely stores it. On mobile, you must use secure storage mechanisms like iOS Keychain or Android Keystore. Never store sensitive tokens in unencrypted `AsyncStorage`, as this leaves user accounts vulnerable to theft.",
                    task: {
                        description: 'Flow for Apple Sign-In.',
                        before: 'Apple login flow.',
                        after: 'Explain the sequence diagram for "Sign in with Apple" on iOS. 1. App requests credential. 2. Apple returns identityToken. 3. App sends token to YOUR backend. 4. Backend validates with Apple. 5. Backend issues Session Token.'
                    },
                    keywords: [
                        { term: 'Authentication & Authorization', definition: 'The core subject of this lesson, focusing on authentication & authorization.' }
                    ],
                    resources: [
                        { title: 'Authentication & Authorization Tutorial', url: 'https://www.youtube.com/results?search_query=Authentication%20%26%20Authorization%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-04',
                    title: '04: CRUD API Generation',
                    objectives: ['Generate Create, Read, Update, Delete logic', 'Handle input validation', 'Connect to DB'],
                    summary: 'The basic operations. Creating posts, reading profiles.',
                    theory: "Generating CRUD (Create, Read, Update, Delete) operations is a perfect task for AI. You can instruct the AI to build the entire stack, from the API Controller to the Service layer. Be specific: ask for a 'POST route that validates the request body using Zod before inserting data into a Postgres database' to ensure robust and secure code.",
                    task: {
                        description: 'Generate Express CRUD for "Notes".',
                        before: 'Notes api code.',
                        after: 'Write a Node.js Express Router for a "Notes" resource. Implement: GET / (list), POST / (create), DELETE /:id. Use an in-memory array for storage in this example. Return 404 if ID not found.'
                    },
                    keywords: [
                        { term: 'CRUD API Generation', definition: 'The core subject of this lesson, focusing on crud api generation.' }
                    ],
                    resources: [
                        { title: 'CRUD API Generation Tutorial', url: 'https://www.youtube.com/results?search_query=CRUD%20API%20Generation%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-05',
                    title: '05: Error Handling & Validation',
                    objectives: ['Standardize error responses', 'Validate inputs on server', 'Log errors for debugging'],
                    summary: 'When things go wrong. Your backend must tell the app *why* it failed.',
                    theory: "Proper error handling is crucial for both security and user experience. Never expose raw stack traces to the client, as they reveal sensitive backend details. Instead, return structured JSON errors like `{ error: 'Invalid Email', code: 102 }`. Utilize validation libraries such as Joi or Zod to catch bad inputs early and provide clear feedback.",
                    task: {
                        description: 'Format error responses.',
                        before: 'Handle errors.',
                        after: 'Create a global Error Handling Middleware for Express. If the error is a "ValidationError", return 400. If it\'s unknown, return 500 and log the stack trace. Ensure the JSON response format is consistent.'
                    },
                    keywords: [
                        { term: 'Error Handling & Validation', definition: 'The core subject of this lesson, focusing on error handling & validation.' }
                    ],
                    resources: [
                        { title: 'Error Handling & Validation Tutorial', url: 'https://www.youtube.com/results?search_query=Error%20Handling%20%26%20Validation%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-06',
                    title: '06: Connecting Frontend to Backend',
                    objectives: ['Integrate APIs into React Native', 'Manage environment variables', 'Handle network connectivity'],
                    summary: 'The handshake. using fetch/axios to consume your API.',
                    theory: "Connecting your frontend to the backend requires careful management of environment-specific configurations. Use environment variables to toggle your `API_URL` between Development, Staging, and Production. Furthermore, build your app to handle 'Network Unreachable' states gracefully, providing users with offline access or friendly retry mechanisms.",
                    task: {
                        description: 'Axios setup for React Native.',
                        before: 'Setup axios.',
                        after: 'Configure an Axios instance for React Native. Set the `baseURL` from `Config.API_URL`. Add an Interceptor to attach the "Authorization: Bearer <token>" header automatically from SecureStore.'
                    },
                    keywords: [
                        { term: 'Connecting Frontend to Backend', definition: 'The core subject of this lesson, focusing on connecting frontend to backend.' }
                    ],
                    resources: [
                        { title: 'Connecting Frontend to Backend Tutorial', url: 'https://www.youtube.com/results?search_query=Connecting%20Frontend%20to%20Backend%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-07',
                    title: '07: Third-Party API Integration',
                    objectives: ['Connect to external services (Stripe, Maps)', 'Handle API keys securely', 'Rate limiting'],
                    summary: 'Don\'t reinvent the wheel. Use Maps, Payments, and Weather APIs.',
                    theory: "Integrating third-party services like Stripe or Google Maps adds powerful features but requires understanding their specific APIs. You can use AI to summarize complex documentation, asking for things like 'The Stripe PaymentIntent flow'. Always remember to keep sensitive API keys on your backend server, never embedding them directly into the client-side app code.",
                    task: {
                        description: 'Integrate Weather API.',
                        before: 'Get weather.',
                        after: 'Wite a function to fetch weather data from OpenWeatherMap. Input: lat, long. Output: current temp in Celsius. Handle the case where the API key is invalid or quota is exceeded.'
                    },
                    keywords: [
                        { term: 'Third-Party API Integration', definition: 'The core subject of this lesson, focusing on third-party api integration.' }
                    ],
                    resources: [
                        { title: 'Third-Party API Integration Tutorial', url: 'https://www.youtube.com/results?search_query=Third-Party%20API%20Integration%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-08',
                    title: '08: Backend Testing',
                    objectives: ['Test API endpoints', 'Mock databases', 'Ensure security rules'],
                    summary: 'Trust but verify. Automated tests for your API.',
                    theory: "Backend reliability is ensured through a mix of Integration and Unit tests. Use tools like Supertest to verify that your actual API endpoints respond correctly to requests. Prompt the AI to write specific test cases, such as 'Write a test that asserts a 403 Forbidden response if a non-admin user attempts an admin-only action'.",
                    task: {
                        description: 'Test a Protected Route.',
                        before: 'Test admin route.',
                        after: 'Write a Jest test for `DELETE /users/:id`. Scenario 1: Request with no token -> Expect 401. Scenario 2: Request with normal user token -> Expect 403. Scenario 3: Admin token -> Expect 200.'
                    },
                    keywords: [
                        { term: 'Backend Testing', definition: 'The core subject of this lesson, focusing on backend testing.' }
                    ],
                    resources: [
                        { title: 'Backend Testing Tutorial', url: 'https://www.youtube.com/results?search_query=Backend%20Testing%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m4-09',
                    title: '09: Security Best Practices',
                    objectives: ['Prevent Injection attacks', 'Rate limit requests', 'Secure data in transit'],
                    summary: 'Defense in depth. Mobile APIs are public; protect them.',
                    theory: "Securing your API involves multiple layers of defense, starting with HTTPS encryption for all traffic. Implement Rate Limiting to protect against DDoS attacks and brute force attempts. Always sanitize user inputs to prevent SQL injection, and ask AI to 'Audit this code for security flaws' to catch potential vulnerabilities before deployment.",
                    task: {
                        description: 'Add Rate Limiting.',
                        before: 'Stop spam.',
                        after: 'Implement `express-rate-limit` on the Login route. Limit IPs to 5 requests per 15 minutes. Custom message: "Too many login attempts, please try again later".'
                    },
                    keywords: [
                        { term: 'Security Best Practices', definition: 'The core subject of this lesson, focusing on security best practices.' }
                    ],
                    resources: [
                        { title: 'Security Best Practices Tutorial', url: 'https://www.youtube.com/results?search_query=Security%20Best%20Practices%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        },
        {
            id: 'app-m5',
            title: 'Module 5: DB Design & Prompts',
            lessons: [
                {
                    id: 'app-m5-01',
                    title: '01: Identifying App Entities',
                    objectives: ['Extract data entities from features', 'Map relationships (1:1, 1:N, M:N)', 'Visualizing schema'],
                    summary: 'Data first. Defining what we are storing before we store it.',
                    theory: "Database design starts with identifying the core 'Entities' (Nouns) and their 'Relationships' (Verbs) from your feature list. For example, a 'User' (Entity) 'Writes' (Relationship) a 'Post' (Entity). AI is excellent at parsing your Product Requirement Document (PRD) to extract these connections and propose a robust data model.",
                    task: {
                        description: 'Design entities for a Ride Sharing App.',
                        before: 'Database for taxi app.',
                        after: 'Identify the core entities for a Ride Sharing app (like Uber). Entities should include User (Rider/Driver), Ride, Vehicle, and Payment. define the relationships (e.g., One User has many Rides).'
                    },
                    keywords: [
                        { term: 'Module 5: DB Design & Prompts', definition: 'The core subject of this lesson, focusing on module 5: db design & prompts.' }
                    ],
                    resources: [
                        { title: 'Module 5: DB Design & Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Module%205%3A%20DB%20Design%20%26%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-02',
                    title: '02: SQL Schema Generation',
                    objectives: ['Generate CREATE TABLE scripts', 'Define Primary and Foreign Keys', 'Ensure data integrity'],
                    summary: 'Structured data for structured apps. Using PostgreSQL/SQLite.',
                    theory: "Relational databases (SQL) offer safety and structure through rigid schemas. When designing, prompt for 'Normalized' tables (typically 3rd Normal Form) to minimize data redundancy. Explicitly define 'Foreign Keys' to enforce referential integrity, ensuring that relationships between data (like Users and their Orders) remain valid.",
                    task: {
                        description: 'Create a SQL schema for Chat.',
                        before: 'SQL for messages.',
                        after: 'Write SQL `CREATE TABLE` statements for a Chat System. Tables: `users`, `conversations`, `messages`. A Conversation has many Messages. A Message belongs to a User. Include constraints (NOT NULL).'
                    },
                    keywords: [
                        { term: 'SQL Schema Generation', definition: 'The core subject of this lesson, focusing on sql schema generation.' }
                    ],
                    resources: [
                        { title: 'SQL Schema Generation Tutorial', url: 'https://www.youtube.com/results?search_query=SQL%20Schema%20Generation%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-03',
                    title: '03: NoSQL Schema Design',
                    objectives: ['Design for Firestore/MongoDB', 'Understand Denormalization', 'Optimize for read limits'],
                    summary: 'Flexible data for fast apps. Firestore is the standard for mobile.',
                    theory: "NoSQL databases allow for flexible, document-based storage that mirrors your application's objects. A key strategy is 'Denormalization', such as embedding the 'Author Name' directly within a 'Post' document. This optimizes read performance by removing the need for costly joins, making it ideal for high-speed mobile feeds.",
                    task: {
                        description: 'Design Firestore paths.',
                        before: 'Firestore layout.',
                        after: 'Design a Firestore structure for a Social App. Collections: `users`, `posts`. Explain why we might store the `latest_comment` directly on the `post` document (duplication) instead of querying a subcollection every time.'
                    },
                    keywords: [
                        { term: 'NoSQL Schema Design', definition: 'The core subject of this lesson, focusing on nosql schema design.' }
                    ],
                    resources: [
                        { title: 'NoSQL Schema Design Tutorial', url: 'https://www.youtube.com/results?search_query=NoSQL%20Schema%20Design%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-04',
                    title: '04: Indexing & Performance',
                    objectives: ['Speed up queries', 'Understand Compound Indexes', 'Analyze query costs'],
                    summary: 'Fast data, happy users. Unindexed queries kill performance.',
                    theory: "Indexes are critical for maintaining database performance as your dataset grows; they act as shortcuts for finding data. Analyze your most frequent query patterns, such as 'filtering by City AND Price'. Prompt the AI to 'Identify necessary indexes' so you can create Compound Indexes that speed up these specific lookups.",
                    task: {
                        description: 'Index a Product Filter.',
                        before: 'Search is slow.',
                        after: 'I have a query `db.products.find({ category: "electronics", price: { $lt: 500 } })`. It is slow. What Index should I create in MongoDB to optimize this? Explain Compound Indexes.'
                    },
                    keywords: [
                        { term: 'Indexing & Performance', definition: 'The core subject of this lesson, focusing on indexing & performance.' }
                    ],
                    resources: [
                        { title: 'Indexing & Performance Tutorial', url: 'https://www.youtube.com/results?search_query=Indexing%20%26%20Performance%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-05',
                    title: '05: Migration Scripts',
                    objectives: ['Versioning database changes', 'Writing Up/Down scripts', 'Deploying safely'],
                    summary: 'Changing the engine while flying. Safely updating the DB.',
                    theory: "Database Migrations are version control for your schema, allowing you to safely evolve your database over time. Each migration consists of an 'Up' script to apply changes (like adding a column) and a 'Down' script to revert them. AI can instantly generate the boilerplate code for migration tools like Knex or TypeORM.",
                    task: {
                        description: 'Write a migration to add "Avatar".',
                        before: 'Add avatar to user.',
                        after: 'Write a SQL migration script to add an `avatar_url` column to the `users` table. Include the `UP` (ALTER TABLE ADD) and `DOWN` (ALTER TABLE DROP) logic.'
                    },
                    keywords: [
                        { term: 'Migration Scripts', definition: 'The core subject of this lesson, focusing on migration scripts.' }
                    ],
                    resources: [
                        { title: 'Migration Scripts Tutorial', url: 'https://www.youtube.com/results?search_query=Migration%20Scripts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-06',
                    title: '06: ORM Model Generation',
                    objectives: ['Define models in code (Prisma/TypeORM)', 'Handle relations in code', 'Type-safe database access'],
                    summary: 'Interacting with data via Code, not SQL.',
                    theory: "Object-Relational Mappers (ORMs) allow you to interact with your database using code (like `User.find()`) instead of raw SQL strings. This improves type safety and developer productivity. You can prompt the AI to generate complex 'Prisma Schemas' or 'TypeORM Entities' that perfectly map to your designed database structure.",
                    task: {
                        description: 'Generate Prisma Schema.',
                        before: 'Prisma file.',
                        after: 'Create a `schema.prisma` file for a "Task Manager". Models: User, Project, Task. Relations: User owns Projects, Project has many Tasks. Use UUIDs for IDs.'
                    },
                    keywords: [
                        { term: 'ORM Model Generation', definition: 'The core subject of this lesson, focusing on orm model generation.' }
                    ],
                    resources: [
                        { title: 'ORM Model Generation Tutorial', url: 'https://www.youtube.com/results?search_query=ORM%20Model%20Generation%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-07',
                    title: '07: Backup & Recovery Strategy',
                    objectives: ['Plan automated backups', 'Simulate data recovery', 'Understand Point-in-Time recovery'],
                    summary: 'Insurance for your data. Deleting the DB happens.',
                    theory: "A robust data strategy must include a Backup and Recovery plan to survive accidental deletions or corruption. Point-in-Time Recovery (PITR) is a powerful feature that lets you restore your database to a specific second in the past. Use AI to 'Draft a Backup Policy' that defines retention periods and recovery procedures for your team.",
                    task: {
                        description: 'Draft a disaster recovery plan.',
                        before: 'Backup plan.',
                        after: 'Draft a Backup & Recovery strategy for a commercial app. Include: Frequency of backups (Daily/Hourly), Retention policy (30 days), and the exact command to restore a Postgres dump.'
                    },
                    keywords: [
                        { term: 'Backup & Recovery Strategy', definition: 'The core subject of this lesson, focusing on backup & recovery strategy.' }
                    ],
                    resources: [
                        { title: 'Backup & Recovery Strategy Tutorial', url: 'https://www.youtube.com/results?search_query=Backup%20%26%20Recovery%20Strategy%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-08',
                    title: '08: Sample Queries & Optimization',
                    objectives: ['Write complex usage queries', 'Debug N+1 problems', 'Aggregate data'],
                    summary: 'Getting answers from your data.',
                    theory: "Writing complex SQL queries involving Window Functions or multi-table Aggregations can be error-prone. AI excels at constructing these difficult queries from natural language descriptions. It can also help you identify and fix performance killers like the 'N+1 Problem', where code inefficiently executes a query inside a loop.",
                    task: {
                        description: 'Write a complex Report Query.',
                        before: 'Count sales.',
                        after: 'Write a SQL query to find the "Top 5 Spenders" last month. Join `users` and `orders`. Sum the `total` column. Group by User ID. Order by descending sum.'
                    },
                    keywords: [
                        { term: 'Sample Queries & Optimization', definition: 'The core subject of this lesson, focusing on sample queries & optimization.' }
                    ],
                    resources: [
                        { title: 'Sample Queries & Optimization Tutorial', url: 'https://www.youtube.com/results?search_query=Sample%20Queries%20%26%20Optimization%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m5-09',
                    title: '09: Real-time Data & Caching',
                    objectives: ['Implement Redis caching', 'Use Firestore snapshots', 'Invalidate stale data'],
                    summary: 'Instant updates. No refresh button needed.',
                    theory: "Modern apps demand instant data; Real-time technology (WebSockets) pushes updates immediately, while Caching (Redis) stores frequent data in RAM for sub-millisecond access. Combining these guarantees a snappy experience. Prompt the AI for a 'Cache-Aside pattern implementation' to correctly manage the lifecycle of cached data.",
                    task: {
                        description: 'Cache an API response.',
                        before: 'Add redis.',
                        after: 'Write a Node.js function that checks Redis for `user_123`. If found, return it. If not, fetch from DB, save to Redis with 1 hour expiry (TTL), and return it.'
                    },
                    keywords: [
                        { term: 'Real-time Data & Caching', definition: 'The core subject of this lesson, focusing on real-time data & caching.' }
                    ],
                    resources: [
                        { title: 'Real-time Data & Caching Tutorial', url: 'https://www.youtube.com/results?search_query=Real-time%20Data%20%26%20Caching%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        },
        {
            id: 'app-m6',
            title: 'Module 6: Deployment & Tooling',
            lessons: [
                {
                    id: 'app-m6-01',
                    title: '01: Preparing App for Production',
                    objectives: ['Remove logs and debug code', 'Optimize assets', 'Set production flags'],
                    summary: 'Shipping time. Turning a dev build into a prod build.',
                    theory: "Preparing an app for production involves critical steps like code signing, minification, and obfuscation to ensure security and performance. It is easy to miss a step, so prompt the AI to 'Create a Pre-release Checklist'. This list should cover everything from updating version numbers to stripping out debug logs before submission.",
                    task: {
                        description: 'Generate a launch checklist.',
                        before: 'Checklist for launch.',
                        after: 'Create a robust "Go-Live Checklist" for a React Native Android app. Include: Update Version Number, Generate Signed APK, Remove console.logs, Test on real device.'
                    },
                    keywords: [
                        { term: 'Module 6: Deployment & Tooling', definition: 'The core subject of this lesson, focusing on module 6: deployment & tooling.' }
                    ],
                    resources: [
                        { title: 'Module 6: Deployment & Tooling Tutorial', url: 'https://www.youtube.com/results?search_query=Module%206%3A%20Deployment%20%26%20Tooling%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-02',
                    title: '02: Dockerfile Generation',
                    objectives: ['Containerize backend services', 'Write multi-stage builds', 'Minimize image size'],
                    summary: 'It works on my machine... and theirs. Docker ensures consistency.',
                    theory: "Docker containers package your application with its entire environment, eliminating 'it works on my machine' issues. Use Multi-stage builds to optimize your images: compile assets in a heavy build stage, then copy only the necessary files to a lightweight production image. Prompting for a 'Node.js Alpine image' ensures a minimal footprint.",
                    task: {
                        description: 'Write a Dockerfile for Node.',
                        before: 'Docker file.',
                        after: 'Write a `Dockerfile` for a Node.js Express app. Use a multi-stage build. 1. Build stage (Install devDependencies). 2. Production stage (Copy only `dist` and `node_modules`, use `node:alpine` base).'
                    },
                    keywords: [
                        { term: 'Dockerfile Generation', definition: 'The core subject of this lesson, focusing on dockerfile generation.' }
                    ],
                    resources: [
                        { title: 'Dockerfile Generation Tutorial', url: 'https://www.youtube.com/results?search_query=Dockerfile%20Generation%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-03',
                    title: '03: Docker Compose for Full Stack',
                    objectives: ['Orchestrate multiple containers', 'Network services locally', 'Manage volumes'],
                    summary: 'Running everything with one command.',
                    theory: "Docker Compose orchestrates multi-container applications, allowing you to run your App, Database, and Redis cache with a single command. It manages internal networking, so services can talk to each other. Prompt the AI to 'Link the Node service to the Postgres service' to generate the correct configuration for local development.",
                    task: {
                        description: 'Compose file for App + DB.',
                        before: 'Docker compose.',
                        after: 'Create a `docker-compose.yml` file. Services: 1. `api` (build from ./). 2. `db` (Postgres 14). 3. `redis`. Ensure the API waits for the DB to be ready.'
                    },
                    keywords: [
                        { term: 'Docker Compose for Full Stack', definition: 'The core subject of this lesson, focusing on docker compose for full stack.' }
                    ],
                    resources: [
                        { title: 'Docker Compose for Full Stack Tutorial', url: 'https://www.youtube.com/results?search_query=Docker%20Compose%20for%20Full%20Stack%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-04',
                    title: '04: CI/CD with GitHub Actions',
                    objectives: ['Automate testing and deployment', 'Define workflows (build, test, deploy)', 'Manage secrets in CI'],
                    summary: 'Robots do the work. Push code -> Tests pass -> App deploys.',
                    theory: "Continuous Integration (CI) and Continuous Deployment (CD) automate your release pipeline. CI runs tests on every commit, while CD deploys code to production if tests pass. GitHub Actions defines these workflows in YAML files. Prompt the AI to create a workflow with specific triggers, like 'on push to main', to automate your delivery process.",
                    task: {
                        description: 'CI workflow for Tests.',
                        before: 'Github action test.',
                        after: 'Create a `.github/workflows/test.yml`. Trigger: Push to any branch. Job: 1. Checkout code. 2. Install Node. 3. `npm install`. 4. `npm test`. Fail if tests fail.'
                    },
                    keywords: [
                        { term: 'CI/CD with GitHub Actions', definition: 'The core subject of this lesson, focusing on ci/cd with github actions.' }
                    ],
                    resources: [
                        { title: 'CI/CD with GitHub Actions Tutorial', url: 'https://www.youtube.com/results?search_query=CI%2FCD%20with%20GitHub%20Actions%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-05',
                    title: '05: Environment Variables',
                    objectives: ['Secure configuration management', 'Differentiate Dev/Staging/Prod', 'Use `.env` files correctly'],
                    summary: 'Secrets stay secret. Managing keys across environments.',
                    theory: "Environment variables manage configuration secrets like API keys and database passwords. Critically, you must NEVER commit `.env` files to version control, as this exposes secrets to the world. Use libraries like `dotenv` to load them safely, and ask AI to 'Audit my repo for committed secrets' to ensure you haven't accidentally leaked anything.",
                    task: {
                        description: 'Process env variables safely.',
                        before: 'Handle secrets.',
                        after: 'Write a helper file `config.js` that loads environment variables. It should throw an Error if critical variables (like DB_PASSWORD) are missing on startup.'
                    },
                    keywords: [
                        { term: 'Environment Variables', definition: 'The core subject of this lesson, focusing on environment variables.' }
                    ],
                    resources: [
                        { title: 'Environment Variables Tutorial', url: 'https://www.youtube.com/results?search_query=Environment%20Variables%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-06',
                    title: '06: Cloud Deployment',
                    objectives: ['Deploy to Vercel/AWS/Firebase', 'Configure DNS and SSL', 'Manage scaling'],
                    summary: 'Putting it on the internet.',
                    theory: "Choosing a cloud provider depends on your stack. Vercel entails excellent support for frontends, while Railway or Render are ideal for full-stack Node.js apps. AWS offers unmatched power but higher complexity. Prompt the AI to generate specific configuration files, such as `vercel.json`, to streamline deployment to your chosen platform.",
                    task: {
                        description: 'Deploy instructions for Render.',
                        before: 'Deploy to render.',
                        after: 'Provide a step-by-step guide to deploy a Node.js Docker container to Render.com. Include steps for: Connecting GitHub, Setting Environment Variables, and Adding a Health Check path.'
                    },
                    keywords: [
                        { term: 'Cloud Deployment', definition: 'The core subject of this lesson, focusing on cloud deployment.' }
                    ],
                    resources: [
                        { title: 'Cloud Deployment Tutorial', url: 'https://www.youtube.com/results?search_query=Cloud%20Deployment%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-07',
                    title: '07: Logging & Monitoring',
                    objectives: ['Implement structured logging', 'Set up error tracking (Sentry)', 'Monitor uptime'],
                    summary: 'Eyes on the system. Knowing when it breaks before users do.',
                    theory: "Effective monitoring relies on structured logging; outputting logs in JSON format allows tools to parse and query them easily. For crash reporting, integrate services like Sentry to capture real-time errors from user devices. Prompt the AI to 'Add Sentry to React Native' to generate the setup code and catch bugs before they affect more users.",
                    task: {
                        description: 'Setup Winston Logger.',
                        before: 'Add logs.',
                        after: 'Configure `winston` logger for Node.js. In Development: Log to Console with colors. In Production: Log to a file `error.log` in JSON format.'
                    },
                    keywords: [
                        { term: 'Logging & Monitoring', definition: 'The core subject of this lesson, focusing on logging & monitoring.' }
                    ],
                    resources: [
                        { title: 'Logging & Monitoring Tutorial', url: 'https://www.youtube.com/results?search_query=Logging%20%26%20Monitoring%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-08',
                    title: '08: Scaling & Load Handling',
                    objectives: ['Understand vertical vs horizontal scaling', 'Load balancing', 'Handling traffic spikes'],
                    summary: 'Success problems. Handling 100k users.',
                    theory: "Scaling handles increased traffic. Vertical scaling means adding more power (CPU/RAM) to a single server, while Horizontal scaling involves adding more servers. A Load Balancer sits in front to distribute incoming requests evenly. You can ask AI to explain 'Auto-scaling groups', which automatically add or remove servers based on demand.",
                    task: {
                        description: 'Architecture for High Traffic.',
                        before: 'Scale app.',
                        after: 'My API is crashing under load. Explain how I can introduce NGINX as a Load Balancer in front of 3 instances of my Node.js API to distribute the traffic.'
                    },
                    keywords: [
                        { term: 'Scaling & Load Handling', definition: 'The core subject of this lesson, focusing on scaling & load handling.' }
                    ],
                    resources: [
                        { title: 'Scaling & Load Handling Tutorial', url: 'https://www.youtube.com/results?search_query=Scaling%20%26%20Load%20Handling%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m6-09',
                    title: '09: Rollback Strategies',
                    objectives: ['Blue/Green deployments', 'Canary releases', 'Revert failed deploys'],
                    summary: 'The undo button. Recovering from bad code.',
                    theory: "Deployments can fail, so having a rollback strategy is essential. Blue/Green deployment runs the new version alongside the old one, switching traffic only when the new one is verified. Canary releases deploy changes to a small percentage of users first. Prompting the AI for these strategies helps you design a safer release process.",
                    task: {
                        description: 'Plan a Blue/Green deployment.',
                        before: 'Safe deploy.',
                        after: 'Explain the concept of Blue/Green deployment to a junior dev. Draw a text diagram showing the Router, Blue Environment (Active), and Green Environment (Staging).'
                    },
                    keywords: [
                        { term: 'Rollback Strategies', definition: 'The core subject of this lesson, focusing on rollback strategies.' }
                    ],
                    resources: [
                        { title: 'Rollback Strategies Tutorial', url: 'https://www.youtube.com/results?search_query=Rollback%20Strategies%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        },
        {
            id: 'app-m7',
            title: 'Module 7: Assets & Creative Prompts',
            lessons: [
                {
                    id: 'app-m7-01',
                    title: '01: App Logo Design',
                    objectives: ['Generate vector-ready logo concepts', 'Understand branding scalability', 'Prompt for minimalism'],
                    summary: 'The face of the app. Using AI (Midjourney/DALL-E) to iterate concepts.',
                    theory: "A great app logo must be scalable, legible at 16x16 pixels as a favicon and impressive on a billboard. When using AI image generators, prompt for styles like 'Vector', 'Minimalist', or 'Flat design'. This ensures the output is clean and versatile, avoiding cluttered details that disappear at small sizes.",
                    task: {
                        description: 'Generate Logo prompts.',
                        before: 'Logo for fitness.',
                        after: 'Write 3 prompts for an AI Image Generator for a "Fitness App" logo. Style: Minimalist, Abstract. Elements: Lightning Bolt and Heart. Colors: Neon Blue. Aspect Ratio: 1:1.'
                    },
                    keywords: [
                        { term: 'Module 7: Assets & Creative Prompts', definition: 'The core subject of this lesson, focusing on module 7: assets & creative prompts.' }
                    ],
                    resources: [
                        { title: 'Module 7: Assets & Creative Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Module%207%3A%20Assets%20%26%20Creative%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-02',
                    title: '02: Icon Set Generation',
                    objectives: ['Create consistent icon families', 'Generate SVGs', 'Match UI style'],
                    summary: 'Navigation needs icons. Consistency is key.',
                    theory: "Consistency is the hallway of professional UI design. Your icons should share the same line weight, corner radius, and visual style. Prompt the AI to generate a full 'Icon Sheet' rather than individual images, specifying attributes like 'Line Art' and 'Consistent Stroke' to ensure they look like a cohesive family.",
                    task: {
                        description: 'Prompt for Nav Icons.',
                        before: 'Icons for menu.',
                        after: 'Write a prompt to generate a sheet of 5 User Interface icons: Home, Search, Settings, Profile, Notification. Style: Rounded line art, 2px stroke weight, black on white.'
                    },
                    keywords: [
                        { term: 'Icon Set Generation', definition: 'The core subject of this lesson, focusing on icon set generation.' }
                    ],
                    resources: [
                        { title: 'Icon Set Generation Tutorial', url: 'https://www.youtube.com/results?search_query=Icon%20Set%20Generation%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-03',
                    title: '03: App Screenshots & Mockups',
                    objectives: ['Generate marketing assets', 'Place screens in device frames', 'Create App Store imagery'],
                    summary: 'Selling the app. Make it look professional.',
                    theory: "App mockups help stakeholders visualize the final product in a real-world context. Use AI to generate 'Photorealistic' images of hands holding phones or stylized 'Clay renders' for a modern look. Specify a 'Clean background' to make the device pop. High-quality mockups are essential for marketing materials and investor presentations.",
                    task: {
                        description: 'Generate a 3D Phone Mockup.',
                        before: 'Show app on phone.',
                        after: 'Write a prompt to generate a 3D render of a floating iPhone 14 Pro displaying a generic "Dashboard" screen. Background: Soft gradient purple. Lighting: Studio lighting.'
                    },
                    keywords: [
                        { term: 'App Screenshots & Mockups', definition: 'The core subject of this lesson, focusing on app screenshots & mockups.' }
                    ],
                    resources: [
                        { title: 'App Screenshots & Mockups Tutorial', url: 'https://www.youtube.com/results?search_query=App%20Screenshots%20%26%20Mockups%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-04',
                    title: '04: Hero Images & Marketing',
                    objectives: ['Create emotional header images', 'Design social media banners', 'Align with brand voice'],
                    summary: 'The first impression. Images that sell the "Why".',
                    theory: "Hero images for landing pages serve a dual purpose: setting the mood and supporting overlay text. When generating these, explicitly prompt for 'Copy Space' or 'Negative space on the right'. Using terms like 'Wide angle' helps create an open composition where your headline remains readable against the background.",
                    task: {
                        description: 'Generate a Landing Page Hero.',
                        before: 'Image for website.',
                        after: 'Write a prompt for a website hero image. Subject: Diverse team collaborating in a modern office with laptops. Mood: Energetic, Professional. Composition: Subject on left, empty space on right for text.'
                    },
                    keywords: [
                        { term: 'Hero Images & Marketing', definition: 'The core subject of this lesson, focusing on hero images & marketing.' }
                    ],
                    resources: [
                        { title: 'Hero Images & Marketing Tutorial', url: 'https://www.youtube.com/results?search_query=Hero%20Images%20%26%20Marketing%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-05',
                    title: '05: App UI Illustration',
                    objectives: ['Generate empty state illustrations', 'Create onboarding graphics', 'Maintain style consistency'],
                    summary: 'Friendly visuals. Making "No Data" look good.',
                    theory: "Illustrations inject personality into your app, especially for empty states or onboarding screens. A popular style is 'Corporate Memphis', characterized by flat colors and exaggerated proportions. Prompt the AI for 'Vector flat illustration' or specific art styles to generate assets that align with your brand's friendly and approachable voice.",
                    task: {
                        description: 'Empty State Illustration.',
                        before: 'Image for no results.',
                        after: 'Write a prompt for an empty state illustration. Concept: A detective looking at an empty box with a magnifying glass. Style: Flat Vector, pastel colors, clean lines. Meaning: "Search returned no results".'
                    },
                    keywords: [
                        { term: 'App UI Illustration', definition: 'The core subject of this lesson, focusing on app ui illustration.' }
                    ],
                    resources: [
                        { title: 'App UI Illustration Tutorial', url: 'https://www.youtube.com/results?search_query=App%20UI%20Illustration%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-06',
                    title: '06: Sound Effects & Music',
                    objectives: ['Generate UI sounds (clicks, pops)', 'Create background ambience', 'Understand audio licensing'],
                    summary: 'The hidden UX. The satisfying "Pop" of a notification.',
                    theory: "Sound design is an often-overlooked aspect of UX that provides subtle feedback for user actions. A satisfying 'click' or 'whoosh' confirms a task is complete. You can use AI music tools to generate 'Short UI SFX' that match your app's vibe, adding a layer of polish that makes the interface feel more responsive and alive.",
                    task: {
                        description: 'Prompt for Success Sound.',
                        before: 'Sound for win.',
                        after: 'Describe a sound effect for a "Task Complete" action. It should be: Short (<1s), Uplifting, digital chime, in the key of C Major.'
                    },
                    keywords: [
                        { term: 'Sound Effects & Music', definition: 'The core subject of this lesson, focusing on sound effects & music.' }
                    ],
                    resources: [
                        { title: 'Sound Effects & Music Tutorial', url: 'https://www.youtube.com/results?search_query=Sound%20Effects%20%26%20Music%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-07',
                    title: '07: Branding Guidelines',
                    objectives: ['Generate Brand Books', 'Define usage rules', 'Ensure visual consistency'],
                    summary: 'Rules of the road. How to use the logo and colors.',
                    theory: "Brand Guidelines are the rulebook that ensures your visual identity remains consistent across all platforms. They define valid logo usage, color codes, and typography. Prompt the AI to 'Write the usage rules for this logo', including details like minimum clear space and forbidden modifications, to professionalize your brand kit.",
                    task: {
                        description: 'Create Brand Voice guidelines.',
                        before: 'Brand rules.',
                        after: 'Draft a "Tone of Voice" guideline for a FinTech app. The voice should be: Trustworthy but Modern. Confident but not Arrogant. Give 3 examples of "Do this, Not that".'
                    },
                    keywords: [
                        { term: 'Branding Guidelines', definition: 'The core subject of this lesson, focusing on branding guidelines.' }
                    ],
                    resources: [
                        { title: 'Branding Guidelines Tutorial', url: 'https://www.youtube.com/results?search_query=Branding%20Guidelines%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-08',
                    title: '08: Assets for Production',
                    objectives: ['Export correct formats (SVG, WebP)', 'Generate multiple resolutions (@2x, @3x)', 'Optimize file size'],
                    summary: 'Technical delivery. Providing what the devs need.',
                    theory: "Delivering assets to developers requires understanding file formats and resolutions. Vectors (SVG) are best for icons, while Rasters (PNG/WebP) are for photos. Mobile apps specifically require assets at @2x and @3x scales for high-density Retina displays. AI can help you create a checklist of necessary exports to ensure crisp visuals on all devices.",
                    task: {
                        description: 'Asset export list.',
                        before: 'What images to save?',
                        after: 'List the required asset exports for an iOS App Icon. detailed all the required resolutions (e.g., 20px, 29px... 1024px) that need to be generated.'
                    },
                    keywords: [
                        { term: 'Assets for Production', definition: 'The core subject of this lesson, focusing on assets for production.' }
                    ],
                    resources: [
                        { title: 'Assets for Production Tutorial', url: 'https://www.youtube.com/results?search_query=Assets%20for%20Production%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m7-09',
                    title: '09: Copyright & Licensing',
                    objectives: ['Understand AI copyright issues', 'Check for commercial use rights', 'Navigate open source licenses'],
                    summary: 'Don\'t get sued. Who owns AI art?',
                    theory: "Navigating the legal landscape of AI-generated assets is crucial. Currently, most AI art cannot be copyrighted, meaning you don't own it exclusively. Be extremely cautious with prompts like 'In the style of Disney', as this can lead to Trademark Infringement. Always verify the commercial usage rights of the tools you use.",
                    task: {
                        description: 'Licensing quiz.',
                        before: 'Can I sell this?',
                        after: 'Explain the legal risk of using an AI-generated logo that looks exactly like the Nike Swoosh. What is "Trademark Infringement" vs "Copyright"?'
                    },
                    keywords: [
                        { term: 'Copyright & Licensing', definition: 'The core subject of this lesson, focusing on copyright & licensing.' }
                    ],
                    resources: [
                        { title: 'Copyright & Licensing Tutorial', url: 'https://www.youtube.com/results?search_query=Copyright%20%26%20Licensing%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        },
        {
            id: 'app-m8',
            title: 'Module 8: AI Tools & Usage',
            lessons: [
                {
                    id: 'app-m8-01',
                    title: '01: effective System Prompts',
                    objectives: ['Write custom instructions for chat', 'Persist personas', 'Set global rules'],
                    summary: 'Teaching the AI who to be. The "System Message" sets the stage.',
                    theory: "System Prompts are the hidden instructions that define an AI's behavior before the conversation begins. By setting a System Prompt like 'You are an expert React Native Developer', you create a persistent persona that guides all future responses. This ensures the AI maintains a consistent tone and technical focus throughout the interaction.",
                    task: {
                        description: 'Create a Coding Assistant Persona.',
                        before: 'Act as genius.',
                        after: 'Write a full System Prompt for a "Strict Code Reviewer" persona. Rules: 1. Only point out security flaws. 2. Be concise. 3. Ignore style issues. 4. Always suggest a fix code snippet.'
                    },
                    keywords: [
                        { term: 'Module 8: AI Tools & Usage', definition: 'The core subject of this lesson, focusing on module 8: ai tools & usage.' }
                    ],
                    resources: [
                        { title: 'Module 8: AI Tools & Usage Tutorial', url: 'https://www.youtube.com/results?search_query=Module%208%3A%20AI%20Tools%20%26%20Usage%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-02',
                    title: '02: Prompt Chaining',
                    objectives: ['Break complex tasks into steps', 'Feed output of A into B', 'Automate workflows'],
                    summary: 'Connecting the dots. One prompt\'s answer is the next prompt\'s question.',
                    theory: "Prompt Chaining breaks down complex tasks into a sequence of manageable steps, mirroring human reasoning. Instead of asking for a final product immediately, use a chain: Step 1 Generate an Idea, Step 2 Critique it, Step 3 Refine it. This iterative approach consistently yields higher quality results than a single, overloaded prompt.",
                    task: {
                        description: 'Design a Chain for Blog Writing.',
                        before: 'Write blog chain.',
                        after: 'Design a 3-step Prompt Chain to write a technical article. Prompt 1: Generate Outline. Prompt 2: Write Draft based on Outline. Prompt 3: Edit Draft for SEO and Tone.'
                    },
                    keywords: [
                        { term: 'Prompt Chaining', definition: 'The core subject of this lesson, focusing on prompt chaining.' }
                    ],
                    resources: [
                        { title: 'Prompt Chaining Tutorial', url: 'https://www.youtube.com/results?search_query=Prompt%20Chaining%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-03',
                    title: '03: Few-Shot Prompting',
                    objectives: ['Use examples to guide output', 'Improve accuracy with patterns', 'Teach custom formats'],
                    summary: 'See one, do one. Giving the AI examples of what you want.',
                    theory: "Few-Shot Prompting significantly improves AI accuracy by providing examples of the desired output. While 'Zero-shot' relies on general knowledge, giving just a few 'Input: X, Output: Y' examples teaches the AI your specific pattern. This technique is especially powerful for enforcing custom data formats or coding styles.",
                    task: {
                        description: 'Few-shot SQL generation.',
                        before: 'Write SQL from text.',
                        after: 'Construct a Few-Shot prompt to teach the AI a custom SQL dialect. Provide 3 examples of "Natural Language -> Custom SQL" pairs, then ask it to solve a 4th one.'
                    },
                    keywords: [
                        { term: 'Few-Shot Prompting', definition: 'The core subject of this lesson, focusing on few-shot prompting.' }
                    ],
                    resources: [
                        { title: 'Few-Shot Prompting Tutorial', url: 'https://www.youtube.com/results?search_query=Few-Shot%20Prompting%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-04',
                    title: '04: Debugging Bad Outputs',
                    objectives: ['Diagnose hallucinations', 'Refine ambiguous prompts', 'Iterate to success'],
                    summary: 'When AI lies. How to spot it and fix it.',
                    theory: "AI Hallucinations occur when the model confidently generates incorrect or non-existent information. You can combat this by asking follow-up questions like 'Are you sure?' or requesting source citations. Technical adjustments, such as reducing the model's 'temperature' setting, also help limit creativity and prioritize factual accuracy.",
                    task: {
                        description: 'Debug a non-existent library.',
                        before: 'Fix broken code.',
                        after: 'The AI suggested `import { MagicButton } from "react-native-magic"`, but that library does not exist. Write a follow-up prompt to correct the AI and ask for a standard solution using `TouchableOpacity`.'
                    },
                    keywords: [
                        { term: 'Debugging Bad Outputs', definition: 'The core subject of this lesson, focusing on debugging bad outputs.' }
                    ],
                    resources: [
                        { title: 'Debugging Bad Outputs Tutorial', url: 'https://www.youtube.com/results?search_query=Debugging%20Bad%20Outputs%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-05',
                    title: '05: RAG for Projects',
                    objectives: ['Understand Retrieval-Augmented Generation', 'Chat with your own docs', 'Add context to prompts'],
                    summary: 'Giving the AI a textbook. RAG lets AI search your data.',
                    theory: "Retrieval-Augmented Generation (RAG) overcomes the limitation that LLMs are trained on old data. It works by feeding current, relevant information into the AI's context. You can simulate this manually by pasting the latest documentation or API specs into the chat before asking a question, ensuring the answer is up-to-date.",
                    task: {
                        description: 'Manual RAG prompt.',
                        before: 'Use new api.',
                        after: 'I want to use a brand new library that came out yesterday. I will paste the "Getting Started" documentation below. Based ONLY on that text, write a "Hello World" component. [Paste Docs Hint].'
                    },
                    keywords: [
                        { term: 'RAG for Projects', definition: 'The core subject of this lesson, focusing on rag for projects.' }
                    ],
                    resources: [
                        { title: 'RAG for Projects Tutorial', url: 'https://www.youtube.com/results?search_query=RAG%20for%20Projects%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-06',
                    title: '06: Versioning Prompts',
                    objectives: ['Treat prompts as code', 'Track changes and improvements', 'A/B test prompts'],
                    summary: 'Science, not magic. Tracking which words work best.',
                    theory: "Prompts are effectively code and should be managed with the same rigor, including version control. As you refine your instructions, save versions like 'login-prompt-v1' and 'login-prompt-v2'. Maintaining a library of versioned prompts allows you to compare results over time and roll back effectiveness if a change degrades performance.",
                    task: {
                        description: 'Version control strategy.',
                        before: 'Save prompts.',
                        after: 'Create a simple JSON structure to store Prompt Versions. Fields: `id`, `version`, `prompt_text`, `model_used`, `success_rating`.'
                    },
                    keywords: [
                        { term: 'Versioning Prompts', definition: 'The core subject of this lesson, focusing on versioning prompts.' }
                    ],
                    resources: [
                        { title: 'Versioning Prompts Tutorial', url: 'https://www.youtube.com/results?search_query=Versioning%20Prompts%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-07',
                    title: '07: Evaluating AI Responses',
                    objectives: ['Critically assess code quality', 'Check for security flaws', 'Verify facts'],
                    summary: 'The human in the loop. You are the editor, not just the typist.',
                    theory: "AI-generated code often looks plausibly correct but can contain subtle bugs or security holes. It requires a human in the loop to critically evaluate the output. Always review the code for Security vulnerabilities (like unsanitized inputs), Performance bottlenecks (like inefficient loops), and logical errors before integrating it into your project.",
                    task: {
                        description: 'Review AI code.',
                        before: 'Check this code.',
                        after: 'The AI generated a regex for email validation: `/.+@.+\..+/`. Explain why this is insufficient/bad and write a critique prompt asking the AI to improve it to RFC standards.'
                    },
                    keywords: [
                        { term: 'Evaluating AI Responses', definition: 'The core subject of this lesson, focusing on evaluating ai responses.' }
                    ],
                    resources: [
                        { title: 'Evaluating AI Responses Tutorial', url: 'https://www.youtube.com/results?search_query=Evaluating%20AI%20Responses%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-08',
                    title: '08: Security & Ethics',
                    objectives: ['Avoid bias in AI', 'Prevent data leakage', 'Use AI responsibly'],
                    summary: 'With great power... Don\'t paste API keys into ChatGPT.',
                    theory: "Using AI responsibly requires vigilance regarding Data Privacy and Bias. Remember that information entered into public AI tools may be used for training, so never paste sensitive user data. Also, be aware that AI models can reflect the biases found in their training data; you must actively check for and correct these stereotypes.",
                    task: {
                        description: 'Privacy Audit.',
                        before: 'Is it safe?',
                        after: 'I need to debug a customer database error. Is it safe to paste the CSV export of my users into ChatGPT to ask for SQL queries? Explain the risks and the correct way to do it (Anonymization).'
                    },
                    keywords: [
                        { term: 'Security & Ethics', definition: 'The core subject of this lesson, focusing on security & ethics.' }
                    ],
                    resources: [
                        { title: 'Security & Ethics Tutorial', url: 'https://www.youtube.com/results?search_query=Security%20%26%20Ethics%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                },
                {
                    id: 'app-m8-09',
                    title: '09: Building AI Features',
                    objectives: ['Integrate OpenAI/Gemini APIs into Apps', 'Manage API costs', 'Design AI UX'],
                    summary: 'The meta-lesson. putting AI inside your app.',
                    theory: "Integrating AI features into your app involves more than just an API call; it requires a robust architecture. You typically need a backend proxy to securely hide your API Key from the client. Additionally, implementing 'Streaming' responses, where text appears character-by-character, is crucial for creating a responsive and engaging User Experience.",
                    task: {
                        description: 'Design a Chatbot UI.',
                        before: 'Make a bot.',
                        after: 'Design the architecture for a "Travel Assistant" feature in my app. Frontend: React Native Chat UI. Backend: Node.js Proxy calling OpenAI API. Explain how to handle the "Stream" of text so the user sees words appear in real-time.'
                    },
                    keywords: [
                        { term: 'Building AI Features', definition: 'The core subject of this lesson, focusing on building ai features.' }
                    ],
                    resources: [
                        { title: 'Building AI Features Tutorial', url: 'https://www.youtube.com/results?search_query=Building%20AI%20Features%20tutorial', type: 'video' }
                    ],
                    instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'
                }
            ]
        }
    ]
};
