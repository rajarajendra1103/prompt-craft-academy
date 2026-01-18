export const promptTemplates = [
    {
        id: 'p1',
        title: 'React Component Generator',
        category: 'Web Development',
        tags: ['React', 'Frontend', 'Tailwind'],
        usageCount: 1240,
        content: 'Act as a Senior React Developer. Create a functional React component named [Name]. It should accept props [Props]. Use Tailwind CSS for styling. Handle the [Event] event to trigger [Action]. Ensure efficient re-rendering and proper TypeScript typing.'
    },
    {
        id: 'p2',
        title: 'Python API Endpoint',
        category: 'Backend',
        tags: ['Python', 'FastAPI', 'API'],
        usageCount: 890,
        content: 'Write a FastAPI endpoint for [Feature]. It should accept [Input Data] via a POST request. Validate the input using Pydantic models. Return a JSON response with [Output Data]. Include basic error handling for 400 and 500 errors.'
    },
    {
        id: 'p3',
        title: 'SQL Query Optimizer',
        category: 'Database',
        tags: ['SQL', 'Performance', 'Database'],
        usageCount: 2100,
        content: 'Analyze the following SQL query: [Insert Query]. The goal is to select [Data] from tables [Tables]. Explain why it might be slow on large datasets. Provide an optimized version using [Indices/Joins/CTEs] to improve execution time.'
    },
    {
        id: 'p4',
        title: 'Midjourney Photorealism',
        category: 'Image Gen',
        tags: ['Midjourney', 'Art', 'Photography'],
        usageCount: 5600,
        content: '/imagine prompt: A hyper-realistic portrait of [Subject], shot on 35mm film, Kodak Portra 400, f/1.8 aperture, natural lighting, golden hour, bokeh background, detailed skin texture, 8k resolution --ar 16:9 --v 6.0'
    },
    {
        id: 'p5',
        title: 'Unit Test Suite Writer',
        category: 'Testing',
        tags: ['Jest', 'TDD', 'Quality'],
        usageCount: 450,
        content: 'Write a comprehensive Jest unit test suite for the function [Function Name] described below. Cover edge cases including [Case 1], [Case 2], and invalid inputs. Mock any external dependencies like [Dependency].\n\nFunction: [Insert Function Code]'
    },
    {
        id: 'p6',
        title: 'Technical Documentation',
        category: 'Writing',
        tags: ['Docs', 'Markdown', 'Technical'],
        usageCount: 1020,
        content: 'Write technical documentation for the [System/Module] named "[Name]". Include the following sections: Overview, Installation, Configuration Options, and a "Getting Started" example code snippet. Use professional, clear language suitable for developers.'
    },
    {
        id: 'p7',
        title: 'Code Refactoring Assistant',
        category: 'Coding',
        tags: ['Refactoring', 'Clean Code', 'Best Practices'],
        usageCount: 310,
        content: 'Review the following code block. It is currently hard to read and maintain. Refactor it to apply "Clean Code" principles, specifically [Principle, e.g., DRY or SOLID]. Explain your changes.\n\nCode:\n[Insert Code]'
    },
    {
        id: 'p9',
        title: 'Regex Generator',
        category: 'Coding',
        tags: ['Regex', 'Validation', 'Utils'],
        usageCount: 650,
        content: 'Create a Regular Expression (Regex) to match [Pattern Description]. It should validate strings that [Condition 1] and [Condition 2], but reject [Invalid Case]. Explain how each part of the regex works.'
    },
    {
        id: 'p10',
        title: 'Git Commit Message',
        category: 'DevOps',
        tags: ['Git', 'Version Control', 'Workflow'],
        usageCount: 1450,
        content: 'Generate a semantic git commit message for the following changes: [Insert Changes/Diff]. Follow the Conventional Commits specification (Feat, Fix, Chore, Refactor, etc.). Keep the summary under 50 characters and provide a bulleted description.'
    },
    {
        id: 'p11',
        title: 'Dockerfile Creator',
        category: 'DevOps',
        tags: ['Docker', 'Containers', 'Infrastructure'],
        usageCount: 890,
        content: 'Create a production-ready Multistage Dockerfile for a [Language/Framework] application. Ensure it uses a lightweight base image (e.g., Alpine), handles dependency installation, sets up a non-root user for security, and exposes port [Port].'
    },
    {
        id: 'p12',
        title: 'CSS Animation Generator',
        category: 'Frontend',
        tags: ['CSS', 'Animation', 'Design'],
        usageCount: 670,
        content: 'Write the CSS keyframes and class for an animation named "[Name]" that does the following: [Description of motion, e.g., bounces, fades in, and slides up]. The animation should last [Duration] and use an ease-in-out curve.'
    },
    {
        id: 'p13',
        title: 'TypeScript Interface',
        category: 'TypeScript',
        tags: ['TypeScript', 'Types', 'JSON'],
        usageCount: 920,
        content: 'Convert the following JSON object into a reusable TypeScript interface or type definition. Properly type nested objects and arrays. Use "readonly" for ID fields if applicable.\n\nJSON:\n[Insert JSON]'
    },
    {
        id: 'p14',
        title: 'Algorithm Explainer',
        category: 'Computer Science',
        tags: ['Algorithms', 'Learning', 'Logic'],
        usageCount: 540,
        content: 'Explain the [Algorithm Name] algorithm to a junior developer. Use a real-world analogy to describe how it works. Then, provide a clean implementation in [Language] with line-by-line comments.'
    },
    {
        id: 'p15',
        title: 'Cybersecurity Bug Hunter',
        category: 'Security',
        tags: ['Security', 'Vulnerabilities', 'Audit'],
        usageCount: 300,
        content: 'Analyze the following code snippet for potential security vulnerabilities (e.g., XSS, SQL Injection, buffer overflows). Explain the risk and provide a secure patch.\n\nCode:\n[Insert Code]'
    },
    {
        id: 'p16',
        title: 'CI/CD Pipeline Config',
        category: 'DevOps',
        tags: ['GitHub Actions', 'CI/CD', 'Automation'],
        usageCount: 780,
        content: 'Write a GitHub Actions workflow file (.yml) to automatically: 1. Run unit tests on push to "main". 2. Build the Docker image. 3. Push the image to Docker Hub. Include secrets management for credentials.'
    },
    {
        id: 'p17',
        title: 'Tailwind Class Generator',
        category: 'Frontend',
        tags: ['Tailwind', 'CSS', 'Styling'],
        usageCount: 1100,
        content: 'Convert the following raw CSS styles into standard Tailwind CSS utility classes. Avoid arbitrary values ([]) if a default utility exists.\n\nCSS:\n[Insert CSS]'
    },
    {
        id: 'p18',
        title: 'Redux Slice Generator',
        category: 'State Management',
        tags: ['Redux', 'React', 'State'],
        usageCount: 430,
        content: 'Create a Redux Toolkit "slice" for managing [State Domain, e.g., Auth]. Include properties for [Props]. defined standard async thunks for [Action 1] and [Action 2] with pending/fulfilled/rejected cases.'
    },
    {
        id: 'p19',
        title: 'GraphQL Schema Creator',
        category: 'Backend',
        tags: ['GraphQL', 'API', 'Schema'],
        usageCount: 360,
        content: 'Design a GraphQL schema type definition for a [Entity, e.g., Blog System]. Include types for [Type A], [Type B]. Define queries for fetching list/detail and mutations for create/update/delete operations.'
    },
    {
        id: 'p20',
        title: 'Pandas Data Analysis',
        category: 'Data Science',
        tags: ['Python', 'Pandas', 'Data'],
        usageCount: 550,
        content: 'Write a Python Pandas script to analyze a CSV file containing [Data Description]. 1. Load the data. 2. Clean missing values. 3. Group by [Column] and calculate the mean of [Column]. 4. Export the result to a new JSON file.'
    },
    {
        id: 'p21',
        title: 'Shell Script Utility',
        category: 'DevOps',
        tags: ['Bash', 'Scripting', 'Linux'],
        usageCount: 420,
        content: 'Write a safe and robust Bash script to [Task, e.g., backup directory]. Check if the directory exists before proceeding. Add error handling and user feedback (echo statements). Use variables for configuration.'
    },
    {
        id: 'p22',
        title: 'Flutter Widget Builder',
        category: 'Mobile',
        tags: ['Flutter', 'Dart', 'Mobile'],
        usageCount: 290,
        content: 'Create a stateless Flutter widget named [Name]. It should display [Content] styled with [Style]. Ensure it is responsive and uses the standard Material Design or Cupertino theme context.'
    },
    {
        id: 'p23',
        title: 'Color Palette Generator',
        category: 'Design',
        tags: ['UI', 'Colors', 'Accessibility'],
        usageCount: 880,
        content: 'Generate a cohesive 5-color palette based on the primary color [Hex Code]. Include hex codes for: Primary, Secondary, Accent, Neutral (bg), and Text. Ensure the text color passes WCAG AA contrast standards against the background.'
    },
    {
        id: 'p24',
        title: 'User Story Writer',
        category: 'Product',
        tags: ['Agile', 'Scrum', 'Management'],
        usageCount: 710,
        content: 'Write an Agile User Story for the feature "[Feature Name]". Format: "As a [Role], I want to [Action], so that [Benefit]." Include 3-5 clear Acceptance Criteria using "Given-When-Then" format.'
    },
    {
        id: 'p25',
        title: 'Mongo Aggregation CLI',
        category: 'Database',
        tags: ['MongoDB', 'NoSQL', 'Query'],
        usageCount: 340,
        content: 'Construct a MongoDB Aggregation Pipeline to [Goal]. Stages: 1. Match documents where [Condition]. 2. Lookup related data from collection [Other Col]. 3. Unwind the array. 4. Project only fields [Field A, Field B].'
    },
    {
        id: 'p26',
        title: 'Chrome Extension V3',
        category: 'Web Development',
        tags: ['Extension', 'Chrome', 'Manifest'],
        usageCount: 400,
        content: 'Generate the `manifest.json` (V3) and a background service worker script for a Chrome Extension that [Functionality Description]. Ensure correct permissions are requested for [Permissions].'
    },
    {
        id: 'p27',
        title: 'Design Pattern Implementer',
        category: 'Architecture',
        tags: ['Design Patterns', 'OOP', 'Quality'],
        usageCount: 490,
        content: 'Implement the [Design Pattern, e.g., Singleton] pattern in [Language]. Explain the problem it solves and provides a thread-safe example implementation. Discuss one pro and one con of using this pattern.'
    },
    {
        id: 'p28',
        title: 'Kubernetes Deployment',
        category: 'DevOps',
        tags: ['K8s', 'Kubernetes', 'YAML'],
        usageCount: 620,
        content: 'Write a Kubernetes Deployment YAML for a service named [Name]. Replicas: 3. Image: [Image]. Container Port: [Port]. Include a Liveness Probe that checks the /health endpoint every 10 seconds.'
    },
    {
        id: 'p29',
        title: 'Landing Page Copy',
        category: 'Writing',
        tags: ['Copywriting', 'Web', 'Content'],
        usageCount: 950,
        content: 'Write the content for a landing page for a SaaS product that helps [Problem]. Sections needed: 1. Hero Headline & Subheader (Punchy). 2. Key Benefits (Bullet points). 3. Social Proof/Testimonial placeholder. Tone: Professional but exciting.'
    }
];
