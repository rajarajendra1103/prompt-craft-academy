import { Gamepad2, Ghost, Swords, Database, Cpu, Paintbrush, Box, Bot, Layers } from 'lucide-react';

export const gameDevelopment = {
    id: 'game-dev',
    title: 'Game & Simulation',
    description: 'Logic and assets for games',
    icon: Gamepad2,
    modules: [
        {
            id: 'game-m1',
            title: 'Module 1: Game Concept & Design',
            lessons: [
                {
                    id: 'GS-IP-01',
                    title: '01: Introduction to Game Prompting',
                    objectives: ['Define prompt engineering for games', 'Understand the limits of AI in game dev', 'Master the CICO framework for games'],
                    summary: 'Using AI to dream up worlds. The first step in the pipeline.',
                    theory: 'Game development is a complex art form combining code, art, sound, and design. AI acts as a powerful bridge, filling in gaps where your skills might be lacking. By defining a clear Context in your prompts, you effectively program the AI to think and output like an expert partner.',
                    task: {
                        description: 'Refine a game concept.',
                        before: 'Make a RPG game.',
                        after: 'Act as a Game Designer. Refine this concept: "A Sci-Fi RPG set on Mars". Define the core loop, the visual style (Low Poly), and the unique mechanic (Oxygen Management). Output a high-level pitch.'
                    },
                    keywords: [
                        { term: 'Core Loop', definition: 'The primary repeating activity in the game (e.g., Kill -> Loot -> Upgrade).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-02',
                    title: '02: Anatomy of an Effective Prompt',
                    objectives: ['Structure prompts for asset generation', 'Separate logic from flavor text', 'Use delimiters'],
                    summary: 'Getting what you want. Describing a sword vs describing a sorting algorithm.',
                    theory: 'Prompts are like code; they need structure to work reliably. We use specific delimiters (like ### or ---) to separate the creative Flavor text from the hard technical Mechanics. This prevents the AI from getting confused and ensures it knows exactly which part is the story and which part is the actual game stat block.',
                    task: {
                        description: 'Prompt for a Weapon Item.',
                        before: 'Make a cool sword.',
                        after: 'Create a JSON representation of a "Flame Sword". ### Requirements: 1. Base Damage: 50. 2. Special Effect: "Burn" (DoT). 3. Rarity: Epic. 4. Lore Description: "Forged in the depths...".'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-03',
                    title: '03: Defining Genre & Audience',
                    objectives: ['Identify target demographics', 'Select platform constraints', 'Define genre blending'],
                    summary: 'Who is playing? Mobile hyper-casual vs PC Hardcore.',
                    theory: 'The platform you choose dictates how the game must be designed. Mobile games require short, interruptible sessions and simple touch controls, while PC games can handle complex menus. AI can help you analyze these demographics to ensure your innovative idea actually fits the market you are targeting.',
                    task: {
                        description: 'Define target audience persona.',
                        before: 'Who plays my game?',
                        after: 'Create a Player Persona for a "Cozy Farming Sim" on Switch. Demographics: Female, 18-35. Motivations: Relaxation, Decoration, Socializing. Pain Points: "Stressful timers".'
                    },
                    keywords: [
                        { term: 'Demographics', definition: 'Statistical data relating to the population and particular groups within it.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-05',
                    title: '05: Concept to Clear Vision',
                    objectives: ['Crystallize abstract ideas', 'Define the "Hook"', 'Write an elevator pitch'],
                    summary: 'The elevator pitch. Why should anyone care?',
                    theory: 'The Hook is the single unique feature that makes your game stand out from the thousands released every day. It is the X meets Y factor, like Pokemon with Guns. You can use AI to brainstorm these high-concept combinations to find a market gap that is both familiar and surprisingly new.',
                    task: {
                        description: 'Generate a Game Hook.',
                        before: 'A racing game.',
                        after: 'Brainstorm 5 unique "Hooks" for a Racing Game. It must NOT be realistic. Example directions: "Time Travel", "Anti-Gravity", "Microscopic Cars".'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-06',
                    title: '06: Core Gameplay Loop Generation',
                    objectives: ['Map the minute-to-minute action', 'Define the meta-game', 'Balance risk/reward'],
                    summary: 'What the player actually does. The heartbeat of the game.',
                    theory: "The Core Gameplay Loop is the heartbeat of your game—the action the player repeats every minute (e.g., Kill, Loot, Upgrade). If this loop isn't fun, the game fails.The Meta Game wraps around this query to provide long- term goals.AI is excellent at visualizing and refining these loops to ensure they flow logically.",
                    task: {
                        description: 'Design the loop for a Survival Game.',
                        before: 'Survival loop.',
                        after: 'Define the Core Gameplay Loop for a "Desert Survival" game. Steps: 1. Gather Water. 2. Build Shelter. 3. Explore Ruins. Explain how the "Thirst" mechanic drives the loop.'
                    },
                    keywords: [
                        { term: 'Meta Game', definition: 'The game beyond the basic game; long-term progression and strategy.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-07',
                    title: '07: Writing a GDD with AI',
                    objectives: ['Structure a Game Design Document', 'Fill in section details', 'Maintain a living document'],
                    summary: 'The GDD (Game Design Document). The blueprint.',
                    theory: 'A Game Design Document (GDD) is the blueprint for your entire project, covering every mechanic, character, and interface. It is often tedious to write but essential for finishing a game. AI can act as your secretary, expanding your bullet points into full, professional design specifications.',
                    task: {
                        description: 'Draft GDD Mechanics Section.',
                        before: 'Write mechanics doc.',
                        after: 'Write the "Player Mechanics" section of a GDD for a Platformer. Include specific details on: Jump Height, Double Jump logic, Wall Slide friction, and Dash cooldown.'
                    },
                    keywords: [
                        { term: 'GDD', definition: 'Game Design Document - a descriptive document designed to describe the design of a video game.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-08',
                    title: '08: Feature List & Mechanics',
                    objectives: ['List all game systems', 'Prioritize implementation order', 'Define mechanics interactions'],
                    summary: 'The To-Do list. Inventory, Crafting, Combat.',
                    theory: 'Game mechanics do not exist in a vacuum; they interact to create Emergent Gameplay. For example, if you have a fire system and an oil system, they should combine to create explosions. Planning these interactions early prevents spaghetti code. AI can help matrix these interactions to find fun combinations you missed.',
                    task: {
                        description: 'List mechanics for a Stealth Game.',
                        before: 'Stealth features.',
                        after: 'List 10 mechanics for a Stealth Game. interactions: Light/Shadow system, Sound propagation (footsteps), Enemy Vision Cones, and Distraction items (coins).'
                    },
                    keywords: [
                        { term: 'Emergent Gameplay', definition: 'Complex situations that emerge from the interaction of relatively simple game mechanics.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-09',
                    title: '09: Objectives & Rewards',
                    objectives: ['Design player progression', 'Balance intrinsic vs extrinsic rewards', 'Create quest loops'],
                    summary: 'Why do we play? Dopamine and progress.',
                    theory: 'Players are motivated by two types of rewards: Intrinsic (the joy of moving and shooting) and Extrinsic (getting loot and XP). A great game balances these perfectly. You can use AI to model Reward Schedules, ensuring the player gets a dopamine hit exactly when they might be starting to feel bored.',
                    task: {
                        description: 'Design a Leveling Curve.',
                        before: 'Make levels.',
                        after: 'Create a XP Table for levels 1-10. The XP required should follow an exponential curve (Target: Level 10 takes 5x longer than Level 1). Define the rewards (New Skills) for each level.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-10',
                    title: '10: Simulation Rules & Constraints',
                    objectives: ['Define physics rules', 'Set world boundaries', 'Establish logic limits'],
                    summary: 'The laws of the universe. Gravity, time, and consequences.',
                    theory: "Simulation games rely on a set of consistent rules that govern the world, like 'Fire burns wood' or 'Wolves eat rabbits'. These logical rules must be defined clearly for the system to run autonomously. You can prompt AI to generate these Rule Sets, creating complex ecosystems without manually programming every interaction.",
                    task: {
                        description: 'Define ecosystem rules.',
                        before: 'Nature rules.',
                        after: 'Define the rules for a "Wolf vs Rabbit" simulation. Rule 1: Wolves lose energy to move. Rule 2: Rabbits reproduce every 10 ticks. Rule 3: Wolves die if energy < 0.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-11',
                    title: '11: Breaking into Tasks',
                    objectives: ['Create dev tickets', 'Estimate complexity', 'Identify dependencies'],
                    summary: 'Project Management. Agile for Games.',
                    theory: "Breaking a massive idea like 'Boss Fight' into small, actionable tasks is critical for development. You need to separate the Art (Modelling), the Code (AI behavior), and the Audio (Sound effects). AI is great at breaking down these high-level features into granular tickets that you can tackle one by one.",
                    task: {
                        description: 'Break down a Boss Fight.',
                        before: 'Make boss.',
                        after: 'Break down the development of a "Giant Spider Boss" into tasks. Categories: Art (Model/Rig), AI (Behavior Tree), FX (Poison Spit), Audio (Screech).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-IP-12',
                    title: '12: Feasibility & Scope',
                    objectives: ['Estimate performance costs', 'Cut features for MVP', 'Analyze technical risk'],
                    summary: 'Dream big, build small. Avoiding "Cyberpunk 2077" launch issues.',
                    theory: 'Scope creep is the number one killer of indie games. Developing a Multiplayer Open World MMO as a solo dev is impossible. You must brutally cut features to create a Minimum Viable Product (MVP). AI can act as a producer, analyzing your feature list and highlighting high-risk items that should be cut.',
                    task: {
                        description: 'Scope check a feature.',
                        before: 'Can I build an MMO?',
                        after: 'I am a solo dev. I want to build a "Seamless Open World MMO with destructible terrain". Act as a Senior Producer. Roast this idea. Tell me why it is unfeasible and suggest a scope I can actually handle.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m2',
            title: 'Module 2: Frontend (Game Logic)',
            lessons: [
                {
                    id: 'GS-FE-01',
                    title: '01: Player Movement System',
                    objectives: ['Implement character controllers', 'Handle physics vs kinematic movement', 'Tune "Game Feel"'],
                    summary: 'Moving the character. It sounds simple, but "Mario" feels different from "Celeste".',
                    theory: 'Player movement is more than just changing coordinates; it is about physics, friction, and inertia. Concepts like Coyote Time (jumping after walking off a ledge) make controls feel responsive, not stiff. AI can help tune these values to get the perfect Game Feel.',
                    task: {
                        description: 'Script a 2D Platformer Controller.',
                        before: 'Move code.',
                        after: 'Write a C# script for Unity for a 2D Character Controller. Requirements: 1. Horizontal movement with smoothing. 2. Jump (only when grounded). 3. Variable jump height (hold to go higher).'
                    },
                    keywords: [
                        { term: 'Kinematic', definition: 'Movement controlled by code rather than physics forces.' },
                        { term: 'Coyote Time', definition: 'A small window of time after walking off a ledge where the player can still jump.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-02',
                    title: '02: Camera Systems',
                    objectives: ['Implement smooth camera follow', 'Handle screen shake and dead zones', 'Support multiple perspectives'],
                    summary: 'The player\'s eye. Bad cameras cause motion sickness.',
                    theory: "The camera is the player's eye into your world, so it must be smooth and intelligent. Rigid cameras cause motion sickness, so we use math (Lerp) to strictly smooth out the jitter. Dead Zones allow the player to wiggle slightly without the whole world shaking.",
                    task: {
                        description: 'Create a Top-Down Camera script.',
                        before: 'Follow player.',
                        after: 'Write a script for a "Smooth Follow" camera. It should target the "Player" transform. Use `Vector3.Lerp` to smooth the movement. Add an offset (0, 10, -10).'
                    },
                    keywords: [
                        { term: 'Lerp', definition: 'Linear Interpolation - finding a value between two points.' },
                        { term: 'Dead Zone', definition: 'An area in which movement of the controller produces no response.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-03',
                    title: '03: Physics & Collision',
                    objectives: ['Manage Raycasts and Colliders', 'Optimize physics layers', 'Detect triggers'],
                    summary: 'Bumping into things. The physics engine logic.',
                    theory: 'Physics engines use Colliders to define shape and Rigidbodies to define mass and gravity. Raycasts are like invisible lasers we shoot to check if the player is touching the ground or aiming at an enemy. Understanding these tools prevents players from falling through the floor.',
                    task: {
                        description: 'Detect "Grounded" state.',
                        before: 'Check ground.',
                        after: 'Write a function using `Physics.Raycast` to check if the player is standing on the ground. It should cast a ray downwards 1.1 meters. Draw a debug line to visualize it.'
                    },
                    keywords: [
                        { term: 'Raycast', definition: 'Shooting an invisible line to see what it hits.' },
                        { term: 'Trigger', definition: 'A collider that registers collisions but does not physically block movement.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-04',
                    title: '04: Player Stats System',
                    objectives: ['Manage Health, Mana, Stamina', 'Implement regeneration logic', 'Handle damage calculation'],
                    summary: 'The numbers game. Tracking life and death.',
                    theory: 'Health, Mana, and Stamina are just numbers (floats) that we manage with logic. We must Clamp them so health never goes below 0 or above 100. Regeneration scripts need to run over time, not instantly, adding a layer of tactical resource management.',
                    task: {
                        description: 'Create a Health System script.',
                        before: 'Health code.',
                        after: 'Create a C# class `PlayerStats`. Variables: currentHealth, maxHealth. Function: `TakeDamage(amount)`. Logic: If health <= 0, trigger `Die()`. Include a `Heal(amount)` function.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-05',
                    title: '05: Input Handling',
                    objectives: ['Support Keyboard, Gamepad, and Touch', 'Use the new Input System (Unity)', 'Remap controls'],
                    summary: 'Interacting with the game. Supporting Xbox, PS5, and Keyboard.',
                    theory: "Hardcoding keys like 'Spacebar' prevents players from using controllers or changing bindings. The Unity Input System uses Actions (like 'Jump') that can be mapped to any button on any device. This makes your game accessible to Xbox, PlayStation, and Mobile users instantly.",
                    task: {
                        description: 'Setup Input Actions.',
                        before: 'Input code.',
                        after: 'Explain how to set up the Unity Input System for a "Fire" action. It should map to: Left Mouse Button, Gamepad South Button, and Touch Tap. Write the code to subscribe to the event.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-06',
                    title: '06: Game State Management',
                    objectives: ['Handle Pause, Resume, Game Over', 'Persist data across scenes', 'Manage Singletons'],
                    summary: 'The Master Controller. Is the game running or paused?',
                    theory: "The GameManager is the brain of your application, tracking if the game is Playing, Paused, or Over. It controls the flow of time (TimeScale) and persists important data between scenes using patterns like Singleton so the music doesn't restart every level.",
                    task: {
                        description: 'Create a GameManager singleton.',
                        before: 'Manager script.',
                        after: 'Create a Singleton class `GameManager`. It should have an `GameState` enum (Playing, Paused, GameOver). Write a function `TogglePause()` that sets `timeScale` to 0 or 1.'
                    },
                    keywords: [
                        { term: 'Singleton', definition: 'A design pattern that ensures a class has only one instance and provides a global point of access to it.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-07',
                    title: '07: AI Script Optimization',
                    objectives: ['Identify performance bottlenecks', 'Avoid heavy operations in Update', 'Use Object Pooling'],
                    summary: 'Making it fast. Avoiding "Garbage Collection" spikes.',
                    theory: 'Writing sloppy code in the Update loop, which runs 60 times a second, will kill your frame rate. We use techniques like Object Pooling (recycling bullets instead of destroying them) to keep the game running smoothly on mobile devices.',
                    task: {
                        description: 'Optimize a Bullet spawner.',
                        before: 'Improve this code.',
                        after: 'This script calls `Instantiate` every time a gun fires. This causes lag. Rewrite it to use an `ObjectPool` pattern where bullets are reused instead of destroyed.'
                    },
                    keywords: [
                        { term: 'Object Pooling', definition: 'Reusing objects (like bullets) from a pre-instantiated pool to avoid memory allocation overhead.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-08',
                    title: '08: Debugging Gameplay Logic',
                    objectives: ['Use Debug.Log effectively', 'Visualize Gizmos', 'Isolate bugs'],
                    summary: 'Why is my player falling through the floor?',
                    theory: 'When things break, we need to see the invisible logic. Gizmos allow us to draw red lines and spheres in the editor to visualize enemy vision or trigger zones. Debug inputs allow us to pause time and inspect variables.',
                    task: {
                        description: 'Debug a non-working door.',
                        before: 'Fix door.',
                        after: 'My door isn\'t opening when I get close. Write a debug plan. 1. Add `Debug.Log` to the `OnTriggerEnter` function. 2. Check collision layers. 3. Draw a wire sphere to visualize the detection radius.'
                    },
                    keywords: [
                        { term: 'Gizros', definition: 'Visual aids drawn in the scene view to help debug functionality (never seen in the game).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-FE-09',
                    title: '09: Performance & Memory',
                    objectives: ['Manage Garbage Collection', 'Optimize draw calls', 'Profile the game'],
                    summary: '60 FPS on mobile. Optimization is an art.',
                    theory: 'Mobile phones have limited power, so we must be efficient. Draw Calls are instructions sent to the graphics card; too many, and the phone overheats. We optimize by combining meshes and avoiding expensive operations like string addition inside the main game loop.',
                    task: {
                        description: 'Analyze the Profiler.',
                        before: 'Game is laggy.',
                        after: 'I have a spike in the Profiler under "Scripts". It says "String.Concat". Explain why adding strings together in `Update()` is bad for memory and how to use `StringBuilder`. '
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m3',
            title: 'Module 3: UI / UX Prompts',
            lessons: [
                {
                    id: 'GS-UX-01',
                    title: '01: HUD Design',
                    objectives: ['Design effective Heads-Up Displays', 'Balance information density', 'Visualize health/ammo'],
                    summary: 'What the player needs to know right now.',
                    theory: "The HUD shows vital info like Health and Ammo without pausing the game. It can be Diegetic (on the character's watch) or Non- Diegetic(floating bars).The goal is to inform the player instantly without cluttering the screen or blocking their view.",
                    task: {
                        description: 'Design a Sci-Fi HUD.',
                        before: 'Make HUD.',
                        after: 'Describe the visual design for a Mech Shooter HUD. Elements: Heat Level (Bar), Ammo (Counter), Radar (Bottom Center). Style: Neon Blue, Holographic, Curved edges.'
                    },
                    keywords: [
                        { term: 'Diegetic UI', definition: 'Interface elements that exist within the game world (e.g., Isaac Clarke\'s spine health bar in Dead Space).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-02',
                    title: '02: Menu Systems',
                    objectives: ['Structure Main Menus/Settings', 'Handle navigation flow', 'Implement "Pause" logic'],
                    summary: 'The first thing they see. Navigating options.',
                    theory: "Menus guide the player from the desktop to the gameplay. A good flow (Start to Settings to Game) handles edge cases like Back buttons correctly. Settings must be saved to the disk immediately so players don't have to re - invert their controls every time.",
                    task: {
                        description: 'Design a Settings Menu.',
                        before: 'Settings screen.',
                        after: 'List the essential options for a PC Game Settings menu. categories: Graphics (Resolution, VSync), Audio (Master, SFX, Music), Controls (Remap, Sensitivity), Gameplay (Subtitles).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-03',
                    title: '03: Inventory & Skill UI',
                    objectives: ['Handle grid-based inventories', 'Display item tooltips', 'Visualize skill trees'],
                    summary: 'Managing loot. The "Tetris" inventory vs List inventory.',
                    theory: 'Managing items can be a list (simple) or a grid (Tetris-style). The UI must handle complex logic like stacking items and drag-and-drop. We separate the Visual icon from the Data (ID and Count) to keep things organized.',
                    task: {
                        description: 'Design a RPG Inventory.',
                        before: 'Inventory screen.',
                        after: 'Describe the layout for a Fantasy RPG Inventory. Left: Character Paper Doll (Equipment slots). Right: Grid of Backpack items (5x5). Bottom: Gold count and Weight limit (Encumbrance).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-04',
                    title: '04: Quest & Objective UI',
                    objectives: ['Guide the player', 'Display markers and compasses', 'Log active missions'],
                    summary: 'Where do I go? The "Golden Path".',
                    theory: 'Players need to know where to go (The Golden Path). We use visual markers in the 3D world (Waypoints) and a list of active tasks (Quest Log). Good UI updates promptly with sound and animation to reward the player for every step completed.',
                    task: {
                        description: 'Design a "New Quest" pop-up.',
                        before: 'Quest notification.',
                        after: 'Describe the animation and sound for a "Quest Accepted" notification. Visual: Gold scroll unfurling at the top center. Text: "New Quest: Slay the Dragon". Sound: Trumpet fanfare.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-05',
                    title: '05: UI Animations',
                    objectives: ['Animate transitions', 'Feedback on clicks', 'Use Tweening libraries'],
                    summary: 'Juicy UI. Buttons should bounce when clicked.',
                    theory: "Static menus feel dead and broken. Tweening libraries allow us to make buttons bounce, slide, and fade smoothly. These micro-interactions make the interface feel alive and polished, significantly improving the user's perception of quality.",
                    task: {
                        description: 'Animate a Level Up.',
                        before: 'Level up screen.',
                        after: 'Describe the sequence for a Level Up. 1. Screen dims. 2. "LEVEL UP!" text explodes in (Scale 0 to 1.5 then 1). 3. Particle effects (Confetti). 4. Stat numbers roll up (e.g., Strength 10 -> 12).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-06',
                    title: '06: Accessibility in Games',
                    objectives: ['Implement Colorblind modes', 'Add Subtitles/Captions', 'Support remapping'],
                    summary: 'Let everyone play. Subtitles are mandatory.',
                    theory: 'Games are for everyone. Colorblind modes ensure red and green teams look different. Subtitles are mandatory for the deaf and must be readable against any background. AI can help check your design against accessibility standards.',
                    task: {
                        description: 'Write Subtitle Guidelines.',
                        before: 'Subtitle rules.',
                        after: 'Generate a guideline for "Good Game Subtitles". Font: Sans-serif. Size: Large. Background: Semi-transparent black box. Speaker Name: Included in color. Limit: 2 lines per screen.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-07',
                    title: '07: Mobile vs PC UI',
                    objectives: ['Adapt controls for Touch', 'Scale UI for TV vs Phone', 'Handle Safe Areas'],
                    summary: 'Fingers vs Mouse. They are not the same.',
                    theory: 'A mouse is precise; a thumb is clumsy. Mobile UI buttons must be large and placed away from the screen edges (Safe Area). Console UI needs to support Focus navigation so you can select buttons with a joystick, not just a cursor.',
                    task: {
                        description: 'Adapt a HUD for Mobile.',
                        before: 'Mobile HUD.',
                        after: 'Convert a PC FPS HUD for Mobile. Instead of "Press R to Reload", add a virtual "Reload" button near the Shoot button. Move the minimap away from the top corners (notch area).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-08',
                    title: '08: Player Feedback',
                    objectives: ['Visualize damage/hits', 'Screen shake and rumble', 'Audio cues'],
                    summary: 'Did I hit it? The game must respond to every action.',
                    theory: 'The game must respond to every action. When you get hit, the screen should shake, flash red, and play a sound. This Juice provides tactile feedback, letting the player feel the impact and urgency of the combat.',
                    task: {
                        description: 'Design "Hit" feedback.',
                        before: 'Hit reaction.',
                        after: 'Describe the feedback when a player gets hit. Visual: Screen flashes red (vignette). Camera: Shakes violently. Audio: Muffled "thud" sound. Character: Plays "Flinch" animation.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-UX-09',
                    title: '09: UX Flow',
                    objectives: ['Map the full user session', 'Handle edge cases (disconnects)', 'Design "Game Over" logic'],
                    summary: 'The lifecycle. Start to Finish.',
                    theory: 'The User Experience (UX) covers the entire journey from launching the app to closing it. We map out flowcharts to ensure there are no dead ends, like a Game Over screen with no Restart button. Handling disconnects gracefully is also part of this flow.',
                    task: {
                        description: 'Map the "First Time User" flow.',
                        before: 'Intro flow.',
                        after: 'Map the steps for a new player. 1. Splash Screen. 2. Calibration (Gamma/Audio). 3. Tutorial Mission (No Main Menu yet). 4. Account Creation. Explain why putting Gameplay before Account Creation reduces churn.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m4',
            title: 'Module 4: Backend (Game Servers)',
            lessons: [
                {
                    id: 'GS-BE-01',
                    title: '01: Game Backend Architecture',
                    objectives: ['Differentiate P2P, Dedicated Server, and Relay', 'Understand Authoritative logic', 'Choose protocols (UDP vs TCP)'],
                    summary: 'Who is the referee? The server.',
                    theory: 'Using the right network protocol is key. UDP (User Datagram Protocol) is fast but unreliable, perfect for real-time movement where current speed matters more than past accuracy. TCP is reliable but slow, used for chat or inventory where every packet must arrive. Dedicated servers are the gold standard for preventing cheating.',
                    task: {
                        description: 'Choose architecture for a shooter.',
                        before: 'Server for FPS.',
                        after: 'I am building a competitive 5v5 FPS (like Valorant). Should I use P2P or Dedicated Servers? Explain the "Authoritative" model and how it prevents speed hacks.'
                    },
                    keywords: [
                        { term: 'UDP', definition: 'User Datagram Protocol - fast, connectionless transmission protocol (used for real-time games).' },
                        { term: 'Tick Rate', definition: 'The frequency at which the server updates the game state (e.g., 64 ticks/sec).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-02',
                    title: '02: Authentication & Profiles',
                    objectives: ['Link Steam/Console IDs to accounts', 'Store player stats securely', 'Handle cross-platform login'],
                    summary: 'Who are you? Integration with Steamworks/PSN.',
                    theory: 'Modern games decouple identity from the device. Use "Device ID" for friction-less guest access, but force a "Link Account" (Steam/Google) step to save progress permanently. The backend must always treat the client as untrusted, verifying every login ticket directly with the provider (Valve/Sony) before issuing a session token.',
                    task: {
                        description: 'Design Auth flow with Steam.',
                        before: 'Steam login.',
                        after: 'Explain the flow for "Login with Steam". 1. Client gets Ticket from Steam App. 2. Client sends Ticket to Backend. 3. Backend validates Ticket with Valve Web API. 4. Backend issues Session Token.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-03',
                    title: '03: State Synchronization',
                    objectives: ['Synchronize player movement', 'Handle lag compensation', 'Interpolate states'],
                    summary: 'Avoiding teleporting players. Making it look smooth.',
                    theory: 'To mask latency, local clients use "Prediction" to move instantly without waiting for the server. The server acts as the source of truth, sending "Snapshots" of the world state. If a client disagrees (e.g., they thought they moved but were actually stunned), "Reconciliation" forces the client to snap back to the server\'s reality.',
                    task: {
                        description: 'Explain Client-Side Prediction.',
                        before: 'Fix lag.',
                        after: 'Explain "Client-Side Prediction" for walking. Why do we move the character immediately on keypress instead of waiting for the server? What happens if the server says "No, you hit a wall"?'
                    },
                    keywords: [
                        { term: 'Lag Compensation', definition: 'Techniques used to mask the effects of network latency.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-04',
                    title: '04: Matchmaking Systems',
                    objectives: ['Pair players by skill (ELO)', 'Minimize latency (Ping)', 'Handle lobbies'],
                    summary: 'Finding a fair fight.',
                    theory: 'Matchmaking is a balancing act between Skill (Fairness) and Speed (Queue time). A "Bucketing" system groups players by region and MMR (Matchmaking Rating). As time passes, the search radius expands—prioritizing a fast match over a perfect match to keep players engaged.',
                    task: {
                        description: 'Logic for a Matchmaker.',
                        before: 'Make matchmaker.',
                        after: 'Write pseudocode for a Matchmaking Loop. 1. User joins Queue. 2. Look for users with +/- 100 ELO. 3. Look for regions < 50ms Ping. 4. If not found in 30s, expand ELO range.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-05',
                    title: '05: Leaderboards & Ranking',
                    objectives: ['Implement Sorted Sets (Redis)', 'Prevent score hacking', 'Design Seasonal resets'],
                    summary: 'Who is #1? High scores.',
                    theory: 'High-traffic leaderboards require specialized data structures. Redis "Sorted Sets" allow for O(log N) operations, making it instant to update ranks even with millions of players. Always validate scores server-side to prevent "Script Kiddies" from posting impossible times.',
                    task: {
                        description: 'Design a Redis Leaderboard.',
                        before: 'Redis ranking.',
                        after: 'How would you use Redis `ZADD` and `ZRANGE` to implement a "Top 10 High Scores" list? How do you handle two players having the exact same score?'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-06',
                    title: '06: Economy & Purchases',
                    objectives: ['Integrate Payment APIs', 'Manage Virtual Currency', 'Validate receipts'],
                    summary: 'Monetization. Skins and Gems.',
                    theory: 'Virtual economies must be ACID-compliant (Atomic, Consistent, Isolated, Durable). Differentiate between "Soft Currency" (Earned) and "Hard Currency" (Bought). Receipt Validation is mandatory: your server must talk directly to Apple/Google servers to confirm payment before granting the Gems.',
                    task: {
                        description: 'Validate an Apple Receipt.',
                        before: 'IAP verify.',
                        after: 'Write a Node.js function to validate an iOS App Store receipt. 1. Receive receipt-data. 2. Send to Apple Verify endpoint. 3. Check `status` code. 4. Grant items if valid.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-07',
                    title: '07: Anti-Cheat & Security',
                    objectives: ['Trust nothing from client', 'Detect impossible actions', 'Use Anti-Cheat SDKs'],
                    summary: 'Stopping hackers.',
                    theory: 'Rule #1: The Client is a Liar. Never trust valid inputs. If a player claims to move 100 meters in 1 second, the server must calculate the physics and reject it. Anti-Cheat SDKs (like EasyAntiCheat) are defensive layers, but server-side validation is your primary shield.',
                    task: {
                        description: 'Design a Speed Hack check.',
                        before: 'Stop speed hack.',
                        after: 'Design a server-side check for movement speed. If the player moved > 20 meters in 1 second, and max speed is 10 m/s, flag them. Account for lag spikes.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-08',
                    title: '08: Logging & Monitoring',
                    objectives: ['Track server health', 'Log player events', 'Monitor concurrent users (CCU)'],
                    summary: 'Is the server burning? Knowing before it crashes.',
                    theory: 'You cannot debug a live server with console logs. Use "Structured Logging" (JSON) to capture rich context like PlayerID, MatchID, and GitHash. Feed these into observability tools like Grafana to visualize "CCU" (Concurrent Users) and error spikes in real-time.',
                    task: {
                        description: 'Log a critical error.',
                        before: 'Log crash.',
                        after: 'Write a structure JSON log for a "Match Crash". Fields: MatchID, ServerIP, PlayerCount, StackTrace, Reason. Explain why JSON is better than text logs.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-BE-09',
                    title: '09: Backend Testing',
                    objectives: ['Stress test with bots', 'Simulate high load', 'Unit test game logic'],
                    summary: 'Can it handle 10k players?',
                    theory: 'Simulate the swarm. "Headless Clients" are lightweight bots that run game logic without graphics. Spin up thousands of them to hammer your server, measuring "Tick Rate" stability under load to ensure your launch day isn\'t a disaster.',
                    task: {
                        description: 'Plan a Load Test.',
                        before: 'Test servers.',
                        after: 'Describe a load test plan using a Headless Bot. 1. Bot connects. 2. Bot spams movement packets. 3. Measure Server Tick Rate. If Tick Rate drops below 30Hz, the test fails.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m5',
            title: 'Module 5: Game Data & Storage',
            lessons: [
                {
                    id: 'GS-DB-01',
                    title: '01: Identifying Game Entities',
                    objectives: ['Model game data structures', 'Separate Static vs Dynamic data', 'Plan for scalability'],
                    summary: 'Data structures define the game. Users, Items, Quests.',
                    theory: 'Game data falls into two buckets: "Static Data" (The stats of a theoretical Sword) and "Dynamic Data" (The specific sword in your bag with 50% durability). Use ScriptableObjects (Unity) or DataTables (Unreal) for static definitions, while databases hold the dynamic instances.',
                    task: {
                        description: 'Model a Save File.',
                        before: 'Save player.',
                        after: 'Design the JSON schema for a Save File. Include: Player Position (Vector3), Current Health, Inventory (List of IDs), and Active Quest Step.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-02',
                    title: '02: Player Progress Schema',
                    objectives: ['Track progression flags', 'Persist quest states', 'Handle versioning'],
                    summary: 'Did they kill the boss? Remembering what happened.',
                    theory: 'Track player journeys with "Flags" (Booleans/Enums). "HasMetKing" is a flag. Efficiently packing these into "Bitmasks" saves database space. Quest States (NotStarted, Active, Completed) must be version-controlled so you can change quests later without breaking saves.',
                    task: {
                        description: 'Schema for Quest Log.',
                        before: 'Save quests.',
                        after: 'Create a SQL table definition for `PlayerQuests`. Columns: `player_id`, `quest_id`, `status` (enum), `current_step_index`, `completed_at`.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-03',
                    title: '03: Inventory & Item Schema',
                    objectives: ['Handle item stacking', 'Manage durability/metadata', 'Design loot tables'],
                    summary: 'Keeping track of stuff. 1000 cheese wheels.',
                    theory: 'Normalize your inventory. Do not store "Iron Sword, Damage 50" in every slot. Store `item_id` and `InstanceID`. Look up the base stats from your Static Data. Exceptions apply for "Crafted Items" where players customize the name/stats, requiring unique JSON blobs.',
                    task: {
                        description: 'Design Item Instance data.',
                        before: 'Item data.',
                        after: 'Define the data structure for a "Minecraft" style tool. It needs: `type_id` (Diamond Pickaxe), `durability` (int), `enchantments` (List of objects).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-04',
                    title: '04: World State Storage',
                    objectives: ['Persist environmental changes', 'Synchronize world time', 'Chunks and regions'],
                    summary: 'The tree you cut down stays down.',
                    theory: 'The world is too big to save. Only save the "Delta" (Change). If a player chops 1 tree in a forest, save `{ deleted_tree_id: 505 }`, not the entire forest. Use "Region Files" to load/save only the chunks of the map the player is currently near.',
                    task: {
                        description: 'Save a destructible wall.',
                        before: 'Save wall.',
                        after: 'How would you store the state of a "Destructible Wall" that has 100 pieces? Storing every piece position is expensive. Propose a solution using "Seeds" or "Health States".'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-05',
                    title: '05: SQL vs NoSQL for Games',
                    objectives: ['Choose the right DB for the job', 'Understand read/write patterns', 'Scale for millions of rows'],
                    summary: 'Structured vs Flexible. Player Profiles vs Match History.',
                    theory: 'Choose the right tool. Relational DBs (Postgres) guarantee "Consistency" for meaningful things like Money and Items. NoSQL (Mongo/Dynamo) offers extreme "Write Speed" for high-volume, low-risk data like Chat Logs or Match History.',
                    task: {
                        description: 'Select DB for Chat vs Inventory.',
                        before: 'Pick database.',
                        after: 'Which database would you choose for: 1. Global Chat Logs (High volume, low value). 2. Player Inventory (High consistency, critical). Justify your choices.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-06',
                    title: '06: Caching & Real-Time Data',
                    objectives: ['Reduce database load', 'Implement Redis for leaderboards', 'Handle cache invalidation'],
                    summary: 'Speed is life. Don\'t hit the heavy DB for every bullet.',
                    theory: 'Your database is the bottleneck. Cache "Hot Data" (Active Player Profiles) in RAM (Redis) for microsecond access. Use a "Write-Back" strategy: update the Cache instantly for the player, and sync to the Database in the background every few minutes.',
                    task: {
                        description: 'Design a Session Cache.',
                        before: 'Cache player.',
                        after: 'Write the logic for a "Player Session" cache. On Login: Load User from DB -> Put in Redis. On Game Action: Read/Update Redis. On Logout: Save Redis -> DB.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-07',
                    title: '07: Backup & Save Systems',
                    objectives: ['Prevent save corruption', 'Cloud Save integration', 'Handle conflict resolution'],
                    summary: 'Don\'t delete my 100 hour save! Cloud sync disputes.',
                    theory: 'Save corruption kills games. Implement "Atomic Saves": write to a temporary file (`save.tmp`), verify its integrity with a Checksum, and only then rename it to (`save.json`). Handle Cloud conflicts by comparing timestamps and letting the user choose.',
                    task: {
                        description: 'Resolve a Cloud Conflict.',
                        before: 'Fix sync error.',
                        after: 'Write the UI flow for a Cloud Save Conflict. Display: "Local Save (2 hours ago)" vs "Cloud Save (10 mins ago)". Options: "Use Local", "Use Cloud". Warn about data loss.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-08',
                    title: '08: Analytics & Telemetry',
                    objectives: ['Track player behavior', 'Identify churn points', 'Visualize heatmaps'],
                    summary: 'Big Brother is watching. Improving the game with data.',
                    theory: 'Data drives design. "Telemetry" sends invisible events ("PlayerDied", "QuestAccepted") to your warehouse. Visualize this on "Heatmaps" to see where players are getting stuck or dying too often, allowing you to tune the difficulty scientifically.',
                    task: {
                        description: 'Define specific analytical events.',
                        before: 'Track deaths.',
                        after: 'Define the JSON payload for a "PlayerDeath" event. Include: `location_x`, `location_y`, `killer_id`, `weapon_used`, `time_alive`.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-DB-09',
                    title: '09: DB Optimization',
                    objectives: ['Index columns correctly', 'Partition large tables', 'Archive old data'],
                    summary: 'Handling success. When you have 10 million players.',
                    theory: 'Databases grow forever. "Sharding" splits players across multiple database servers based on ID to spread the load. "Cold Storage" moves data from last year (that nobody reads) to cheap storage (S3), keeping your main database lean and fast.',
                    task: {
                        description: 'Optimize the Match History table.',
                        before: 'Table is huge.',
                        after: 'My `matches` table has 1 billion rows. Explain "Table Partitioning" by Date (e.g., `matches_2023_jan`) to speed up queries for recent games.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m6',
            title: 'Module 6: Level Development',
            lessons: [
                {
                    id: 'GS-LV-01',
                    title: '01: Level Design Prompting',
                    objectives: ['Describe spatial layouts', 'Define pacing and flow', 'Use "Whiteboxing" concepts'],
                    summary: 'Building the stage. From text to terrain.',
                    theory: 'Good levels have "Pacing". Alternate between High-Intensity (Combat), Low-Intensity (Exploration), and Reward (Safety). Prompt AI for "Hub-and-Spoke" or "Linear" layouts to structure the flow. Use "Whiteboxing" (grey blocks) to test the fun before adding art.',
                    task: {
                        description: 'Describe a Hub Area.',
                        before: 'Make a hub.',
                        after: 'Describe the layout for a "Space Station Hub". Center: Command Deck. North: Hangar. East: Quarters. West: Lab. Use specific architectural terms (Corridors, Bulkheads).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-02',
                    title: '02: Procedural Generation',
                    objectives: ['Understand Perlin Noise/Cellular Automata', 'Generate random dungeons', 'Balance randomness'],
                    summary: 'Infinite worlds. Making the computer build the level.',
                    theory: 'Procedural generation isn\'t random; it\'s "Controlled Chaos". Algorithms like "Perlin Noise" create natural terrain, while "Wave Function Collapse" solves puzzle-like tile placement. The "Seed" is the DNA: same Seed equals exact same World.',
                    task: {
                        description: 'Logic for a Random Dungeon.',
                        before: 'Random map.',
                        after: 'Explain the algorithm to generate a "Room and Corridor" dungeon. 1. Place random rectangles (Rooms). 2. Separate them so they don\'t overlap. 3. Connect them with lines (Corridors).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-03',
                    title: '03: Difficulty Scaling',
                    objectives: ['Ramp up challenge', 'Adjust enemy stats dynamically', 'Control resource scarcity'],
                    summary: 'Easy to learn, hard to master. The Flow Channel.',
                    theory: 'The "Flow Channel" keeps players between Boredom and Anxiety. Dynamic Difficulty Adjustment (DDA) reads player performance (Are they dying too much?) and subtly tweaks enemy health or ammo drops to keep them in the zone.',
                    task: {
                        description: 'Design a Boss Scale.',
                        before: 'Make boss harder.',
                        after: 'How should the "Goblin King" boss change from Easy to Hard mode? Easy: Slow attacks. Hard: Adds "Minion Spawns", "Enrage Phase" at 50% HP, and faster attack speed.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-04',
                    title: '04: Enemy Placement Logic',
                    objectives: ['Place enemies for tactical combat', 'Manage spawn triggers', 'Balance encounters'],
                    summary: 'Combat puzzles. Where the bad guys are.',
                    theory: 'Enemies are tools for pacing. "Choke Points" force combat interaction. "Flanking Routes" reward exploration. Never spawn enemies behind a player "out of thin air" unless it is established as a specific mechanic (e.g. teleporting ghosts).',
                    task: {
                        description: 'Design an ambush.',
                        before: 'Place enemies.',
                        after: 'Describe an ambush encounter in a narrow canyon. Player enters trigger -> Rockfall blocks exit -> Archers appear on cliffs -> Melee units charge from front.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-05',
                    title: '05: Mission Design',
                    objectives: ['Structure multi-stage quests', 'Write objective logic', 'Handle fail states'],
                    summary: 'Go here, do that. The narrative wrapper.',
                    theory: 'Missions are the narrative wrapper for gameplay loops. Ensure objectives are "Actions" (Kill, Collect, Escort). "Chained Objectives" (Go to A -> Find Key -> Unlock B) create depth. Always account for "Fail States"—what happens if the VIP dies?',
                    task: {
                        description: 'Structure a Heist Mission.',
                        before: 'Steal the diamond.',
                        after: 'Break down a "Bank Heist" mission into 4 objectives. 1. Disable Alarms (Stealth). 2. Drill Vault (Timed defense). 3. Grab Loot. 4. Escape (Chase sequence).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-06',
                    title: '06: Levels in Engine',
                    objectives: ['Organize scene hierarchies', 'Use Prefabs for repeated content', 'Bake lighting'],
                    summary: 'Putting it together in Unity/Unreal.',
                    theory: 'Engines like Unity run on "Prefabs"—reusable templates. If you fix a door prefab, every door in the game updates instantly. Organize your Hierarchy rigidly (e.g., "Static Geometry", "Lights", "NPCs") to prevent merge conflicts when working with a team.',
                    task: {
                        description: 'Organization strategy.',
                        before: 'Organize project.',
                        after: 'Propose a Scene Hierarchy for a "City Level". Folders: `_Management`, `Environment_Static`, `Lights`, `Audio`, `NPCs`. Why is "Static" separated from "Dynamic"?'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-07',
                    title: '07: World Streaming',
                    objectives: ['Implement Level of Detail (LOD)', 'stream chunks asynchronously', 'Hide loading screens'],
                    summary: 'No loading bars. Seamless open worlds.',
                    theory: 'Open worlds are lies. We use "Occlusion Culling" to stop rendering what you can\'t see, and "Level Streaming" to load the next castle while you walk down the hallway. "LOD" (Level of Detail) swaps high-poly trees for cardboard cutouts when they are far away.',
                    task: {
                        description: 'Streaming logic.',
                        before: 'Load map.',
                        after: 'Explain how to implement "Chunk Loading" based on player distance. If Player is in Chunk (0,0), load (0,1), (1,0), (-1,0), (0,-1). Unload anything > 2 chunks away.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-08',
                    title: '08: Testing & Balancing',
                    objectives: ['Use heatmaps for balance', 'Iterate based on feedback', 'Identify difficulty spikes'],
                    summary: 'Is it fun? Or just frustrating?',
                    theory: 'Fun is measurable. Use "Heatmaps" to track death locations; if 50% of players die at one jump, it\'s too hard. "A/B Testing" allows you to serve different enemy stats to different players to scientifically prove which version keeps them playing longer.',
                    task: {
                        description: 'Analyze fail rate.',
                        before: 'Level is hard.',
                        after: '50% of players quit at the "Cliff Jump" section. Hypothesize 3 reasons (e.g., jump is too far, gap is not visible, controls input lag) and propose fixes.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-LV-09',
                    title: '09: Level Optimization',
                    objectives: ['Bake lightmaps', 'Combine meshes', 'Profile rendering costs'],
                    summary: 'Making it pretty AND fast.',
                    theory: 'Performance is about efficient lying. "Baked Lighting" paints shadows onto textures so the GPU validates nothing at runtime. "Static Batching" glues 100 immovable rocks into one big rock, reducing the "Draw Calls" that choke the processor.',
                    task: {
                        description: 'Optimize a forest scene.',
                        before: 'Laggy forest.',
                        after: 'My forest level has 10,000 individual trees and runs at 5 FPS. Suggest techniques to fix it. Keywords: GPU Instancing, LOD, Imposters, Billboard trees.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m7',
            title: 'Module 7: Assets & Creative',
            lessons: [
                {
                    id: 'GS-AS-01',
                    title: '01: Game Logo Prompts',
                    objectives: ['Generate title treatment', 'Design app icons', 'Create branding consistency'],
                    summary: 'The icon on the dashboard.',
                    theory: 'Your logo is the first thing a player sees. It needs to be readable at the size of a mobile app icon. AI can generate "Title Treatments"—stylized text effects like cracked stone or neon—to give your branding a professional polish.',
                    task: {
                        description: 'Generate RPG Logo prompts.',
                        before: 'RPG logo.',
                        after: 'Write a prompt for a "Dark Fantasy RPG" logo. Text: "SHADOWFALL". Style: Stone texture, cracked letters, purple glow. Icon: A broken crown.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-02',
                    title: '02: Character Concept Art',
                    objectives: ['Generate turnarounds', 'Define character styles', 'Prompt for specific poses'],
                    summary: 'Visualizing the hero.',
                    theory: 'Concept art usually requires a Turnaround—views of the Front, Side, and Back—so 3D modelers can build it. Prompting for "T-Pose" ensures the limbs are separated and easy to rig for animation.',
                    task: {
                        description: 'Prompt for a Cyberpunk Samurai.',
                        before: 'Cyber samurai.',
                        after: 'Generate a prompt for a "Cyberpunk Samurai" concept art. Gear: Neon katana, trench coat. Style: Anime, Cell-shaded. View: Full body, front and back view.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-03',
                    title: '03: Environment Art',
                    objectives: ['Create skyboxes', 'Design terrain textures', 'Visualize mood'],
                    summary: 'The world they walk in.',
                    theory: 'Skyboxes and terrain set the mood. Equirectangular images wrap around the entire world sphere. AI is perfect for generating these seamless, high-resolution backgrounds that add depth to your level.',
                    task: {
                        description: 'Generate a Skybox.',
                        before: 'Space sky.',
                        after: 'Write a prompt for a "Nebula Space" skybox. Format: Equirectangular 360 panorama. Colors: Deep violet, orange stars. Style: Realistic oil painting.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-04',
                    title: '04: Textures & Materials',
                    objectives: ['Generate PBR maps', 'Create seamless patterns', 'Define material properties'],
                    summary: 'Making it look real. Roughness, Metallic, Normal.',
                    theory: 'Materials need more than just color; they need depth. PBR Maps include Normal (bumps), Roughness (shine), and Metallic. AI can now generate these maps from a single image, making a flat brick wall look photorealistic.',
                    task: {
                        description: 'Prompt for a Brick Wall texture.',
                        before: 'Brick texture.',
                        after: 'Generate a "Old Red Brick" seamless texture. include detailed description of the "Normal Map" (deep grout lines) and "Roughness Map" (dry, dusty surface).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-05',
                    title: '05: UI Assets',
                    objectives: ['Create button sheets', 'Design HUD elements', 'Generate icon packs'],
                    summary: 'Buttons and bars.',
                    theory: 'UI elements like buttons need to stretch. We prompt for "Asset Sheets" isolated on black backgrounds so we can cut them out. Designing a cohesive "Skin" (same fonts, colors, border styles) makes the game feel unified.',
                    task: {
                        description: 'Generate a Fantasy UI Kit.',
                        before: 'Fantasy UI.',
                        after: 'Prompt for a "Fantasy UI Asset Sheet". Items: Health Globe, Mana Potion, Pergament Scroll background, Gold close button. Style: Hand-painted, Warcraft-esque.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-06',
                    title: '06: Music Generation',
                    objectives: ['Compose loopable tracks', 'Define emotional arc', 'Generate adaptive stems'],
                    summary: 'The soundtrack of the game.',
                    theory: 'Game music must Loop seamlessly. AI generators can create Stems—separate tracks for Drums, Bass, and Melody. This allows us to fade the drums in when combat starts, creating "Adaptive Audio" that reacts to gameplay.',
                    task: {
                        description: 'Prompt for Boss Music.',
                        before: 'Boss song.',
                        after: 'Describe a "Final Boss" music track. BPM: 140 (Fast). Instruments: Orchestra + Heavy Metal Guitar. Mood: Urgent, Apocalyptic. Structure: Intro -> Main Loop -> Choing.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-07',
                    title: '07: Sound Effects (SFX)',
                    objectives: ['Generate Foley sounds', 'Layer audio for richness', 'Randomize pitch'],
                    summary: 'Crunch, Zap, Whoosh.',
                    theory: 'Sound Effects (SFX) sell the impact. Good sound is Layered—a gun shot is a "Thump" (Bass) + "Crack" (Treble) + "Clink" (Mechanical). Combining these layers creates a rich, professional soundscape.',
                    task: {
                        description: 'Design a Laser Gun sound.',
                        before: 'Pew pew.',
                        after: 'Describe the layers needed for a heavy Laser Cannon. Layer 1: Electrical charge up (Hum). Layer 2: The blast (High pitch Zap). Layer 3: Cooling down (Steam hiss).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-08',
                    title: '08: Asset Optimization',
                    objectives: ['Compress textures (ETC2/ASTC)', 'Reduce polygon counts', 'Manage audio quality'],
                    summary: 'Making the download size small.',
                    theory: 'Assets take up space. We Compress textures and audio to reduce the download size. Using "Powers of 2" (1024x1024) allows the graphics card to process textures efficiently. We preserve visual quality while saving megabytes.',
                    task: {
                        description: 'Optimize a 4k texture.',
                        before: 'File too big.',
                        after: 'My 4k texture is 20MB. Explain how to use "Compression Quality" and "Max Size" in Unity to reduce it to 2MB without ruining the look for a mobile game.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AS-09',
                    title: '09: Licensing & Copyright',
                    objectives: ['Navigate asset store licenses', 'Understand CC0/CC-BY', 'Avoid DMCA strikes'],
                    summary: 'Don\'t steal assets.',
                    theory: "Just because an image is on the internet doesn't mean it's free. We must check licenses (CC0 is safe, CC-BY requires credit). Using AI-generated assets is generally safe from copyright claims, but Steam requires you to disclose it.",
                    task: {
                        description: 'Licensing check.',
                        before: 'Use free music.',
                        after: 'I found a song marked "Creative Commons Non-Commercial". Can I use it in my game if I plan to put ads in the game? Explain why or why not.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m8',
            title: 'Module 8: Game Maintenance & Live Updates',
            lessons: [
                {
                    id: 'GS-MN-01',
                    title: '01: Bug Detection using AI',
                    objectives: ['Identify logical errors', 'Analyze crash dumps', 'Automate reproduction steps'],
                    summary: 'AI finding the needle in the haystack.',
                    theory: 'Fixing bugs is detective work. AI can analyze Stack Traces (the error report) to pinpoint exactly which line of code failed. It can also help guess Reproduction Steps from vague user reports like "The game crashed when I jumped".',
                    task: {
                        description: 'Debug a physics glitch.',
                        before: 'Car flies away.',
                        after: 'The car flies into space when hitting a curb. Provide the physics code for the wheel collider and new friction settings. Ask AI: "Why does high friction cause this explosion?"'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-02',
                    title: '02: Game Balance Updates',
                    objectives: ['Analyze win/loss ratios', 'Tweaking variable constants', 'Simulate meta changes'],
                    summary: 'Nerfing the overpowered sword.',
                    theory: "Live games need constant tuning. If one gun is used 90% of the time, it is unbalanced. AI can run thousands of Simulated Battles in seconds to test new stats, ensuring your balance patch doesn't accidentally break the meta.",
                    task: {
                        description: 'Nerf a Sniper Rifle.',
                        before: 'Gun too strong.',
                        after: 'The "AWP" sniper kills in 1 shot and has no downsides. Propose 3 nerfs. 1. Lower damage (99). 2. Slower reload time. 3. Reduced movement speed while holding it.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-03',
                    title: '03: Adding New Content',
                    objectives: ['Expand existing systems', 'Maintain backward compatibility', 'Designing DLC hooks'],
                    summary: 'More levels, more fun.',
                    theory: 'Updates keep the game alive. Additive content (DLC) should plug into the game without rewriting core code. We plan Hooks in the code early on to allow for new maps, characters, and items to be added easily later. ',
                    task: {
                        description: 'Design a Winter DLC.',
                        before: 'Snow level.',
                        after: 'Outline a "Winter Festival" update. New assets: Snowman, Candy Cane Sword. New Mechanic: "Freezing" status effect. How does this affect existing fire enemies?'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-04',
                    title: '04: Performance in Live Games',
                    objectives: ['Profile live builds', 'Hotfix memory leaks', 'Optimize for new devices'],
                    summary: 'Keeping it smooth after launch.',
                    theory: 'Live games develop Rot over time. Memory leaks (where RAM isn\'t cleared) can crash the game after long sessions. We use profiling tools on real devices to find and fix these invisible performance drains.',
                    task: {
                        description: 'Fix a memory leak.',
                        before: 'Game crashes after 1 hour.',
                        after: 'The game crashes on mobile after 30 mins. It happens when "Particles" allow spawning infinitely. Write a fix to limit particle count to 500 max.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-05',
                    title: '05: Patch Notes Generation',
                    objectives: ['Summarize technical changes', 'Write community-friendly updates', 'Categorize fixes'],
                    summary: 'Telling players what changed.',
                    theory: 'Good communication builds community trust. Players don\'t want technical jargon; they want to know what changed. AI can convert your dry logic git commits into fun, readable Patch Notes that get players excited to log back in.',
                    task: {
                        description: 'Write 1.1 Patch Notes.',
                        before: 'Fixed stuff.',
                        after: 'Convert these git commits into Patch Notes: "Fix colliders", "Nerf shotgun", "New map". Output format: ## Balance, ## Bug Fixes, ## New Content.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-06',
                    title: '06: Player Feedback Analysis',
                    objectives: ['Sentiment analysis on reviews', 'Cluster common complaints', 'Prioritize roadmap'],
                    summary: 'Listening to the mob via AI.',
                    theory: 'After a patch, the community will react. AI can scrape thousands of Steam reviews and Discord messages to perform Sentiment Analysis. This tells you instantly if the update is a Hit or a Miss and what needs fixing next.',
                    task: {
                        description: 'Analyze negative reviews.',
                        before: 'People angry.',
                        after: 'Here are 50 negative reviews. Cluster them into top 3 issues. Example result: 1. Server Lag (40%), 2. Pay to Win (30%), 3. Bugs (30%).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-07',
                    title: '07: Server Scaling Growth',
                    objectives: ['Auto-scale server fleets', 'Manage database shards', 'Handle login queues'],
                    summary: 'Suffering from success.',
                    theory: 'Success is a good problem to have. If your server is full, we use Auto-Scaling to spin up more servers automatically. Login Queues hold the overflow of players in line so the database doesn\'t crash under the load.',
                    task: {
                        description: 'Design a Login Queue.',
                        before: 'Server full.',
                        after: 'Design a queue system. User connects -> Check Server Load. If Load > 90%, send User number "5000 in queue". Update position every 10 seconds.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-08',
                    title: '08: Event-Based Content Updates',
                    objectives: ['Schedule time-limited events', 'Rotate shop items', 'Live-ops management'],
                    summary: 'Halloween events and weekend bonuses.',
                    theory: 'LiveOps means running events like Halloween or Double XP. These events must be scheduled on Server Time (UTC) so they happen for everyone at once. They drive engagement and monetization between major updates.',
                    task: {
                        description: 'Plan a "Double XP" weekend.',
                        before: 'XP event.',
                        after: 'Create a plan for a Double XP event. 1. Server config `xp_multiplier = 2.0`. 2. UI notification "2X XP ACTIVE". 3. Push Notification to mobile users.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-MN-09',
                    title: '09: Long-Term Game Roadmap',
                    objectives: ['Plan 1-year content', 'Manage technical debt', 'Engage community'],
                    summary: 'The game in 2026.',
                    theory: 'Players want to know the game has a future. A Roadmap commits to features 6-12 months out. It balances Technical Debt (fixing old code) with New Features (Shiny stuff) to keep both the developers and the players happy.',
                    task: {
                        description: 'Create a 1-Year Roadmap.',
                        before: 'Future plans.',
                        after: 'Generate a 4-Quarter Roadmap for an RPG. Q1: "Quality of Live" (Inventory sort). Q2: "The Lava Update" (New zone). Q3: "Guild Wars" (PvP). Q4: "Anniversary Event".'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'game-m9',
            title: 'Module 9: AI Tools & Usage',
            lessons: [
                {
                    id: 'GS-AI-01',
                    title: '01: System Prompts for Game Dev',
                    objectives: ['Configure AI context for Unity/Unreal', 'Set coding standards', 'Maintain consistency'],
                    summary: 'Teaching the AI to code like you.',
                    theory: 'A System Prompt is the Personality of the AI. By setting rules like "Always write C# code" or "Use these specific variable names", you verify that every response adheres to your project\'s coding standards without repeating yourself.',
                    task: {
                        description: 'Create a Unity System Prompt.',
                        before: 'Code unity.',
                        after: 'Write a System Prompt for a Unity C# Assistant. Rules: 1. Use `[SerializeField]` instead of public. 2. Cache components in Awake. 3. Use `TextMeshPro` instead of `Text`.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-02',
                    title: '02: Prompt Chaining Pipelines',
                    objectives: ['Automate asset workflows', 'Link text generation to art generation', 'Build NPCs'],
                    summary: 'From Idea to Asset in one flow.',
                    theory: 'Complex tasks need steps. Prompt Chaining takes the output of one prompt (Create a Character) and feeds it into the next (Write Dialogue for that Character). This builds reliable Pipelines for generating content at scale.',
                    task: {
                        description: 'Chain a Quest NPC.',
                        before: 'Make NPC.',
                        after: 'Design a 3-step prompt chain. 1. Create a "Blacksmith" character profile. 2. Write a "Greeting" dialogue line based on that profile. 3. Describe the "Shop Interior" based on the profile.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-03',
                    title: '03: Few-Shot Mechanics',
                    objectives: ['Teach AI custom engine APIs', 'Generate specific logic patterns', 'Clone existing mechanics'],
                    summary: 'Teaching the AI your custom tools.',
                    theory: 'The AI doesn\'t know your custom code. Few-Shot Prompting means giving the AI 2 or 3 examples of how you write code before asking it to generate new content. This Training allows it to write perfect scripts for your specific engine.',
                    task: {
                        description: 'Few-shot Custom Event.',
                        before: 'Use my event system.',
                        after: 'I have a method `EventManager.Trigger("name", data)`. Construct a prompt with 2 examples of triggering events (one for "DoorOpen", one for "EnemyDie") and ask it to write one for "PlayerJump".'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-04',
                    title: '04: Debugging & Bug Detection',
                    objectives: ['Analyze stack traces', 'Find logic errors', 'Suggest optimizations'],
                    summary: 'AI as the second pair of eyes.',
                    theory: 'AI is a tireless pair programmer. You can paste a broken function and ask "Why doesn\'t this work ?". It often spots syntax errors, logic flaws, or edge cases that human eyes miss after hours of staring at the screen.',
                    task: {
                        description: 'Debug a Null Ref.',
                        before: 'Fix error.',
                        after: 'I have `NullReferenceException` at line 40: `enemy.target.TakeDamage()`. Explain 3 possible reasons (e.g., enemy is null, target is null) and how to fix each.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-05',
                    title: '05: RAG for Game Lore',
                    objectives: ['Query a lore database', 'Maintain narrative consistency', 'Generate item descriptions'],
                    summary: 'Keeping the story straight.',
                    theory: 'Retrieval Augmented Generation (RAG) lets the AI Read your game\'s documentation. Instead of guessing, it looks up your specific "Damage Formula" or "Lore History" before answering, ensuring accuracy and consistency across the project.',
                    task: {
                        description: 'Lore check.',
                        before: 'Who is the bad guy?',
                        after: 'Assume the AI has read my GDD. Ask: "Based on the History of the Elves section, why would the Elf King hate the Dwarves? Write a dialogue line reflecting this hatred."'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-06',
                    title: '06: Evaluating AI Playability',
                    objectives: ['Test AI-generated levels', 'Verify puzzle logic', 'Assess fun factor'],
                    summary: 'Can you actually beat the level?',
                    theory: 'AI can "Play" your game conceptually. You can describe a level layout and ask "Is this jump possible?". It acts as a logic check, finding Soft Locks (where the player gets stuck) before you spend hours building the level.',
                    task: {
                        description: 'Verify a Puzzle.',
                        before: 'Check puzzle.',
                        after: 'The AI designed a puzzle: "You need the Red Key to get the Blue Key, and the Blue Key to get the Red Key." Explain why this is a "Soft Lock" and ask for a fix.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-07',
                    title: '07: AI for Procedural Content',
                    objectives: ['Generate wave configs', 'Balance loot tables', 'Create infinite dialogue'],
                    summary: 'Infinite replayability.',
                    theory: 'Code is just logic; Data is content. You can use AI to generate massive JSON lists of items, monsters, and quests. This Data-Driven approach allows you to fill a huge RPG world with content in minutes, not months.',
                    task: {
                        description: 'Generate Loot Table JSON.',
                        before: 'Make loot.',
                        after: 'Generate a JSON array of 10 RPG Weapons. Fields: Name, Damage (10-50), Rarity (Common-Legandary), and a Flavor Text description. Ensure higher rarity has higher damage.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-08',
                    title: '08: AI Ethics & Safety',
                    objectives: ['Prevent toxic chatbots', 'Guide player interactions', 'Moderate content'],
                    summary: 'Keeping the community safe.',
                    theory: 'If you put an LLM inside your game (an AI NPC), players will try to break it. You must design Safety Rails—invisible system instructions—that prevent the NPC from saying offensive or broken things, protecting your game\'s rating.',
                    task: {
                        description: 'Safety rails for specific NPC.',
                        before: 'Safe chat.',
                        after: 'I have an AI Shopkeeper. How do I prevent players from making him say offensive things? Design a "System Instruction" that forbids political or explicit topics.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'GS-AI-09',
                    title: '09: Building AI Features',
                    objectives: ['Integrate run-time AI', 'Use Voice-to-Text', 'Create dynamic narratives'],
                    summary: 'AI as a game mechanic.',
                    theory: 'AI is becoming a game mechanic. From Voice Command spells to NPCs that remember your history, runtime AI opens new genres. The challenge is Latency (speed)—making the AI respond fast enough to feel like a real conversation.',
                    task: {
                        description: 'Design a Voice Command spell system.',
                        before: 'Voice magic.',
                        after: 'Design a mechanic where players cast spells by speaking into the microphone. How do you map "Fireball!" (Voice) -> Text -> Game Action? What happens if the transcription fails?'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        }
    ]
};
