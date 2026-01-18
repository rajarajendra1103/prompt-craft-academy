import { Clapperboard } from 'lucide-react';

export const imageVideoGeneration = {
    id: 'img-video-gen',
    title: 'Image & Video Generation',
    description: 'Master AI art and video workflows',
    icon: Clapperboard,
    modules: [
        {
            id: 'img-m1',
            title: 'Module 1: Idea → Prompts',
            lessons: [
                {
                    id: 'IV-IP-01',
                    title: '01: Introduction to Prompt Engineering',
                    objectives: ['Define prompt engineering for visuals', 'Understand the difference between text and visual prompting', 'Learn the basics of Generative AI models'],
                    summary: 'From words to pixels. Understanding how AI sees the world.',
                    theory: 'Visual Prompt Engineering differs from coding prompts. Instead of logic, you describe attributes. Generative models (like Midjourney or Runway) function as "translators" that convert semantic descriptors (text) into latent visual representations (pixels), requiring a focus on descriptive, sensory language.',
                    task: {
                        description: 'Translate a vague idea into a visual description.',
                        before: 'Show me a cat.',
                        after: 'A fluffy Persian cat sitting on a velvet red sofa, soft afternoon sunlight streaming through a window, cinematic lighting, 8k resolution.'
                    },
                    keywords: [
                        { term: 'Latent Space', definition: 'The abstract multi-dimensional space where the AI stores its understanding of concepts.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IP-02',
                    title: '02: Visual Thinking & Idea Clarity',
                    objectives: ['Visualize concepts before writing', 'Identify key visual elements', 'Separate subject from environment'],
                    summary: 'Seeing it in your mind first. Separation of concerns.',
                    theory: 'Before writing a prompt, deconstruct your mental image into layers: Subject (Who), Action (What), Environment (Where), and Lighting/Mood (How). Clear visualization prevents "prompt salad" by ensuring every word serves a specific visual purpose in the final composition.',
                    task: {
                        description: 'Deconstruct a scene.',
                        before: 'A cool cyberpunk city.',
                        after: 'Subject: A lone cyborg detective. Action: Standing in rain. Environment: Neon-lit Tokyo backstreet. Mood: Melancholic, blue and pink lighting.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IP-03',
                    title: '03: Converting Ideas into Visual Descriptions',
                    objectives: ['Use sensory language', 'Avoid abstract concepts', 'Focus on visual adjectives'],
                    summary: 'Don\'t say "Scary", say "Shadows and teeth".',
                    theory: 'AI models struggle with abstract concepts like "Freedom" or "Success". To get the best results, convert these into concrete visual anchors. Instead of "A sad atmosphere", describe "Rain streaking down a window, muted grey color palette, lonely figure in silhouette".',
                    task: {
                        description: 'Convert abstract to concrete.',
                        before: 'A happy dog.',
                        after: 'A golden retriever leaping mid-air catching a frisbee, sunny park background, vibrant green grass, tongue out, tail blurred in motion.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IP-04',
                    title: '04: Prompt Anatomy (Who, What, Where, How)',
                    objectives: ['Structure prompts logically', 'Prioritize tokens', 'Master the standard formula'],
                    summary: 'The skeleton of a good prompt.',
                    theory: 'A robust prompt follows a hierarchy: [Main Subject] + [Action/Pose] + [Setting/Context] + [Art Style/Medium] + [Lighting/Camera]. Placing the most important subject first ensures the AI prioritizes it, preventing it from getting lost in background details.',
                    task: {
                        description: 'Reorder a messy prompt.',
                        before: 'Blue lighting, cinematic, a man running, forest, photo.',
                        after: 'A man running efficiently through a dense pine forest, low angle shot, cinematic blue moonlight, photorealistic style, 8k.'
                    },
                    keywords: [
                        { term: 'Token Weight', definition: 'The importance the AI assigns to specific words (earlier words usually have higher weight).' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IP-05',
                    title: '05: Defining Intent, Mood & Outcome',
                    objectives: ['Use emotional keywords', 'Set the tone with lighting', 'Define the end goal first'],
                    summary: 'How should the viewer feel?',
                    theory: 'Mood is defined by lighting and color grading. Keywords like "Volumetric lighting", "God rays", or "Noir" drastically change the emotional impact. Intent involves specifying the *purpose* (e.g., "Wallpaper", "Icon", "Sprite Sheet") to guide the composition.',
                    task: {
                        description: 'Change the mood of a scene.',
                        before: 'A castle.',
                        after: 'Ominous dark castle on a jagged cliff, storm clouds, lightning strike, gothic horror atmosphere, high contrast, desaturated colors.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IP-06',
                    title: '06: From Abstract Thought to Concrete Prompt',
                    objectives: ['Practice the full workflow', 'Iterate on initial ideas', 'Refine details'],
                    summary: 'Putting it all together. The final polish.',
                    theory: 'This lesson bridges the gap between a fleeting thought and a final prompt. It involves an iterative process: Draft -> Visualize -> Refine -> Technical Polish. Adding "Quality Boosters" (e.g., "Masterpiece", "Unreal Engine 5 Render") is the final step to ensure high fidelity.',
                    task: {
                        description: 'Finalize a complex prompt.',
                        before: 'Future car.',
                        after: 'Sleek aerodynamic flying car hovering over a futuristic glass city, sunset reflection on chrome, motion blur, wide angle lens, concept art style by Syd Mead, 4k.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'img-m2',
            title: 'Module 2: Image Generation Prompts',
            lessons: [
                {
                    id: 'IV-IG-01',
                    title: '01: Image Prompt Structure & Formula',
                    objectives: ['Master the 5-part formula', 'Use delimiters effectively', 'Balance detail vs freedom'],
                    summary: 'Structure leads to predictability.',
                    theory: 'The Formula: (Subject + Action) + (Environment) + (Lighting/Atmosphere) + (Camera/Angle) + (Style/Medium). Using commas or double colons (::) to separate these chunks helps the model distinguish between the "What" and the "How".',
                    task: {
                        description: 'Apply the formula.',
                        before: 'A robot in a desert.',
                        after: 'A rusty scavenger robot walking, vast dune desert background, harsh midday sun, heat waves, low angle tracking shot, hyper-realistic, 85mm lens.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IG-02',
                    title: '02: Subject Description & Detail Control',
                    objectives: ['Describe specific features', 'Use reference terms properly', 'Control subject focus'],
                    summary: 'It\'s all about the details. Hair, eyes, texture.',
                    theory: 'To control the subject, use descriptive "micro-details". Instead of "A woman", specify "A woman with braided red hair, freckles, wearing a leather aviator jacket". Over-describing can confuse the AI, so focus on the defining characteristics that matter most.',
                    task: {
                        description: 'Detail a character portrait.',
                        before: 'A warrior.',
                        after: 'Portrait of an elderly viking warrior, scarred face, braided white beard, wearing fur-lined steel armor, intense gaze, intricate etching details on metal.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IG-03',
                    title: '03: Style, Art Direction & Aesthetic Control',
                    objectives: ['Invoke specific art styles', 'Mix mediums creatively', 'Understand "In the style of"'],
                    summary: 'Oil painting or 3D render? You decide.',
                    theory: 'Art Direction keywords define the medium. "Oil Painting", "Vector Art", "3D Render", "Polaroid", "Ukiyo-e". You can mix styles (e.g., "Cyberpunk Art Nouveau") to create unique aesthetics, but be careful with conflicting terms.',
                    task: {
                        description: 'Switch art styles.',
                        before: 'A city street.',
                        after: 'A bustling Tokyo street, Ukiyo-e woodblock print style, thick outlines, flat colors, textured paper effect, traditional Japanese aesthetic.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IG-04',
                    title: '04: Lighting, Color & Mood Design',
                    objectives: ['Master lighting terminologies', 'Use color palettes', 'Set emotional tone'],
                    summary: 'Lighting is everything. Rembrandt vs Neon.',
                    theory: 'Lighting defines the form. "Rembrandt Lighting" creates drama with shadows. "Softbox" creates flattering portraits. "Cyberpunk" implies neon pinks and blues. Explicitly stating the "Color Palette" (e.g., "Monochromatic Red") forces visual cohesion.',
                    task: {
                        description: 'Relight a scene.',
                        before: 'A dark room.',
                        after: 'A dusty attic room, illuminated by single shaft of God Ray sunlight through a crack in the roof, motes of dust dancing in light, dark shadows.'
                    },
                    keywords: [
                        { term: 'Color Grading', definition: 'The process of altering and enhancing the color of a motion picture, video image, or still image.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-IG-05',
                    title: '05: Camera Angles & Framing for Images',
                    objectives: ['Use cinematic camera terms', 'Control depth of field', 'Define composition'],
                    summary: 'Where is the camera? Lens choice matters.',
                    theory: 'Camera keywords control the perspective. "Wide Angle" shows the environment. "Macro" shows tiny details. "Bokeh" or "f/1.8" blurs the background. Terms like "Rule of Thirds" or "Symmetrical Composition" guide the placement of the subject.',
                    task: {
                        description: 'Reframe a shot.',
                        before: 'Close up of a flower.',
                        after: 'Macro shot of a dew drop on a rose petal, shallow depth of field, bokeh background, f/2.8, sharp focus on the droplet, high detail.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'img-m3',
            title: 'Module 3: Video Generation Prompts',
            lessons: [
                {
                    id: 'IV-VG-01',
                    title: '01: Video Prompt Structure & Flow',
                    objectives: ['Adapt image prompts for video', 'Focus on temporal coherence', 'Understand frame consistency'],
                    summary: 'Moving pictures. Adding the dimension of time.',
                    theory: 'Video prompts require a "First Frame" description plus a "Motion" description. Unlike images, you must define how things *change*. Structure: [Start Image Description] + [Action/Movement] + [Camera Move] + [End State].',
                    task: {
                        description: 'Prompt for a 3s clip.',
                        before: 'A car driving.',
                        after: 'A red sports car driving fast on a coastal highway, wheels spinning, wind blowing palm trees, camera tracking the car from the side, sunset lighting.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-VG-02',
                    title: '02: Motion & Action Description',
                    objectives: ['Describe specific movements', 'Control speed and intensity', 'Avoid "morphing" artifacts'],
                    summary: 'Walking, running, flying. Making it move right.',
                    theory: 'Verbs are critical. "Walking", "Sprinting", "Floating". Adverbs control the quality: "Slowly", "Aggressively", "Smoothly". Defining the *magnitude* of motion (Low vs High Motion scores) prevents the video from becoming a chaotic mess.',
                    task: {
                        description: 'Describe complex motion.',
                        before: 'A dancer.',
                        after: 'A ballerina performing a pirouette, cloth of the dress flowing fluidly, smooth rotational motion, slow motion capture, high frame rate.'
                    },
                    keywords: [
                        { term: 'Motion Bucket', definition: 'A parameter in many AI video tools that controls the overall amount of change/movement in a clip.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-VG-03',
                    title: '03: Camera Movement & Shot Types',
                    objectives: ['Direct the virtual cameraman', 'Use Pan, Tilt, Zoom', 'Combine camera and subject motion'],
                    summary: 'The camera moves too. Cinematic language.',
                    theory: 'Camera movement adds production value. "Pan Right" reveals more of the scene. "Push In" (Dolly Zoom) creates intimacy or tension. "Drone Shot" implies a high, smoothing floating motion. Clearly separating Subject Motion from Camera Motion is vital.',
                    task: {
                        description: 'Direct a drone shot.',
                        before: 'Fly over city.',
                        after: 'Aerial drone shot flying forward over NYC skyscrapers, camera tilting down slowly to reveal street traffic, stable motion, high velocity.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-VG-04',
                    title: '04: Time, Pace & Scene Duration',
                    objectives: ['Control perception of time', 'Create slow-motion effects', 'Manage clip length'],
                    summary: 'Fast cuts vs long takes. Time warping.',
                    theory: 'Pacing dictates the energy. "Slow Motion" creates grandeur. "Timelapse" shows the passage of time (clouds moving fast). Specifying the frame rate (e.g., "24fps" vs "60fps") can influence the smoothness and realism of the generated video.',
                    task: {
                        description: 'Create a timelapse.',
                        before: 'Flower growing.',
                        after: 'Timelapse of a rose blooming, petals unfolding rapidly, stem rising, background lighting changing from day to night, smooth transition.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-VG-05',
                    title: '05: Emotion & Atmosphere in Motion',
                    objectives: ['Convey feeling through movement', 'Use atmospheric effects', 'Sync mood with action'],
                    summary: 'Rain, fog, and feelings. The vibe of the video.',
                    theory: 'Atmosphere is dynamic in video. "Rain falling", "Fog rolling in", "Light flickering". These moving elements reinforce the mood better than a static description. Matching the speed of the environment (violent storm) to the camera (shaky cam) amplifies the effect.',
                    task: {
                        description: 'Create a horror atmosphere.',
                        before: 'Scary hallway.',
                        after: 'Dark hospital hallway, lights flickering on and off, camera shaking (handheld style), shadows moving on the walls, eerie atmosphere.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'img-m4',
            title: 'Module 4: Consistency (Characters, Style, World)',
            lessons: [
                {
                    id: 'IV-CS-01',
                    title: '01: Understanding Visual Consistency',
                    objectives: ['Define what needs to stay the same', 'Identify consistency challenges', 'Learn the "Seed" concept'],
                    summary: 'Why does my character look different in every picture?',
                    theory: 'AI models are random by nature. Consistency requires locking variables. The "Seed" is the starting number for the random noise generation; keeping the Seed constant (while changing the prompt slightly) helps retain the overall composition and character features.',
                    task: {
                        description: 'Test seed consistency.',
                        before: 'Generate a girl.',
                        after: 'Generate a "Portrait of a girl with blue hair" using Seed 12345. Then generate "Portrait of a girl with blue hair smiling" using Seed 12345. Compare results.'
                    },
                    keywords: [
                        { term: 'Seed', definition: 'A number used to initialize the generation process. Using the same seed often produces similar results.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CS-02',
                    title: '02: Character Consistency Techniques',
                    objectives: ['Create character sheets', 'Use distinctive features', 'Name your characters (for some models)'],
                    summary: 'Keeping the face the same across multiple shots.',
                    theory: 'To lock a character, use a "Character Sheet" prompt first (Front, Side, Back views). Assign very specific, unique features (e.g., "Scar over left eye", "Neon green jacket") that act as anchors. Some models allow training on specific faces (LoRa) for perfect consistency.',
                    task: {
                        description: 'Create a character anchor.',
                        before: 'A cool guy.',
                        after: 'Character Sheet for "Max": A cyberpunk detective with a robotic left arm, red sunglasses, and a trench coat. Front view, Side view, facial close-up. Flat lighting.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CS-03',
                    title: '03: Style Locking & Visual Identity',
                    objectives: ['Maintain art style across valid assets', 'Use style reference images', 'Create brand guidelines'],
                    summary: 'Ensuring all images look like they belong to the same project.',
                    theory: 'Style consistency builds a brand. Use "Style References" (uploading an image to guide the style) or very rigid style prompt blocks (copy-pasting the exact same art direction keywords: "Vector art, flat colors, thick outlines") for every single generation.',
                    task: {
                        description: 'Define a rigid style block.',
                        before: 'Draw a cat, then a dog.',
                        after: 'Style Block: " isometric 3D render, claymorphism, soft pastel colors, cute aesthetic, clean background". Apply this block to Prompt A ("A Cat") and Prompt B ("A Dog").'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CS-04',
                    title: '04: World-Building Consistency',
                    objectives: ['Define rule sets for the world', 'Maintain architectural consistency', 'Keep lighting rules'],
                    summary: 'Same city, different street. Cohesive environments.',
                    theory: 'Worlds need rules. If your city is "Solarpunk", it must always have "Greenery on buildings" and "Solar panels". Define a "World Bible" of 3-5 keywords that must appear in every environment prompt to ensure the locations feel connected geographically.',
                    task: {
                        description: 'Define world rules.',
                        before: 'A fanasy world.',
                        after: 'World Rules: "Floating islands, waterfalls falling into void, purple sky". Generate "A market scene" and "A castle scene" ensuring both include these rule keywords.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CS-05',
                    title: '05: Maintaining Consistency Across Generations',
                    objectives: ['Workflow for multi-shot storytelling', 'Use "Image-to-Image" for iteration', 'Correcting drift'],
                    summary: 'Telling a story without the characters morphing.',
                    theory: 'When moving from Scene A to Scene B, use Image-to-Image. Feed the output of Scene A as the input for Scene B with a low "Denoising Strength". This tells the AI: "Keep the composition and colors, but change the action slightly".',
                    task: {
                        description: 'Sequence two shots.',
                        before: 'Man walks, man runs.',
                        after: 'Take the image of "Man standing". Use it as an Image Prompt. Prompt: "Man running". Set Image Weight to High. This keeps the same clothes/face but changes the pose.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'img-m5',
            title: 'Module 5: Continuity (Story & Motion Flow)',
            lessons: [
                {
                    id: 'IV-CN-01',
                    title: '01: Basics of Visual & Narrative Continuity',
                    objectives: ['Understand continuity in storytelling', 'Link scenes logically', 'Maintain "Eye Trace"'],
                    summary: 'Making sure Scene 2 follows Scene 1.',
                    theory: 'Continuity means the logic holds up. If a character is wearing a hat in Shot A, they must have it in Shot B unless we saw them take it off. Visual cues (lighting direction, props) must persist to tell a coherent story.',
                    task: {
                        description: 'Audit a storyboard.',
                        before: 'Two random scenes.',
                        after: 'Scene 1: Hero enters a dark cave (Holding a Torch). Scene 2: Hero sees a dragon (Must still be holding the torch, lighting must come from the torch). Correction: Add "Torchlight illumination" to Scene 2 prompt.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CN-02',
                    title: '02: Scene-to-Scene Story Flow',
                    objectives: ['Create cause-and-effect sequences', 'Transition between locations', 'Use established establishing shots'],
                    summary: 'Cause and effect. Walking through the door.',
                    theory: 'Narrative flow relies on "Cause and Effect". If Scene A shows a gun firing, Scene B must show the bullet hitting or missing. Prompts must reflect this causal link. Use "Establishing Shots" (Wide) before "Inserts" (Close-ups) to orient the viewer.',
                    task: {
                        description: 'Script a transition.',
                        before: 'Guy at home. Guy at work.',
                        after: 'Shot A: Man picks up car keys (Close up). Shot B: Man opens car door (Medium Shot). Shot C: Car driving on highway (Wide Shot). This bridge connects the two locations logically.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CN-03',
                    title: '03: Temporal Continuity (Time & Progression)',
                    objectives: ['Show passage of time', 'Age characters or environments', 'Maintain day/night consistency'],
                    summary: 'Time moves forward. Or backward.',
                    theory: 'Temporal continuity tracks time. If a scene starts at "Sunset", the next shot taking place 5 minutes later cannot be "High Noon". Use specific lighting keywords ("Golden Hour", "Blue Hour", "Midnight") to firmly place the scene in a timeline.',
                    task: {
                        description: 'Progress time in a scene.',
                        before: 'Day then night.',
                        after: 'Shot 1: Castle gates at Noon, harsh shadows. Shot 2: Castle gates at Sunset, long shadows, orange light. Shot 3: Castle gates at Night, torchlight only. Ensure the gate damage remains consistent.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CN-04',
                    title: '04: Motion Direction & Camera Continuity',
                    objectives: ['Respect the "180-degree rule"', 'Match movement vectors', 'Create seamless cuts'],
                    summary: 'If he runs Left-to-Right, stick to it.',
                    theory: 'Directional continuity prevents confusion. If a hero runs Left-to-Right in Shot A, they must enter Shot B from the Left (moving Right). Reversing this makes it look like they turned around. Explicitly prompt "Running from left to right" to enforce this vector.',
                    task: {
                        description: 'Fix a direction error.',
                        before: 'He runs left, then runs right.',
                        after: 'Shot A: Hero runs Left -> Right. Shot B: Hero enters frame Left -> Right. (If Shot B had him running Right -> Left, it would look like he is running back to the start).'
                    },
                    keywords: [
                        { term: '180 Degree Rule', definition: 'A rule in filmmaking stating that two characters in a scene should maintain the same left-right relationship to one another.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CN-05',
                    title: '05: Emotional Continuity in Visual Storytelling',
                    objectives: ['Maintain emotional tone', 'Use color psychology for arcs', 'Reflect character state in environment'],
                    summary: 'The world feels what the hero feels.',
                    theory: 'The environment reflects the story "Pathetic Fallacy". If the hero is sad, the rain starts. If they win, the sun comes out. Use prompt keywords to sync the "Atmosphere" with the "Narrative Beat" to create subconscious emotional continuity.',
                    task: {
                        description: 'Sync weather with emotion.',
                        before: 'Sad guy, sunny day.',
                        after: 'Scene: Funeral. Prompt: "Graveyard context, rain pouring, grey sky, muted colors, characters in black, tears mixing with rain, somber atmosphere."'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'img-m6',
            title: 'Module 6: Editing, Refinement & Control',
            lessons: [
                {
                    id: 'IV-ER-01',
                    title: '01: Iterative Prompt Refinement',
                    objectives: ['Analyze failure cases', 'Adjust token weights', 'Remove conflicting terms'],
                    summary: 'Why did it look weird? fixing the prompt.',
                    theory: 'Rarely is the first prompt perfect. Iteration involves simplified debugging. If the image is too chaotic, reduce the number of descriptive words. If it\'s too boring, add "Dynamic Composition". Change one variable at a time to isolate what works.',
                    task: {
                        description: 'Debug a glitched prompt.',
                        before: 'A horse riding a bike.',
                        after: 'Initial: "Horse riding bike". Result: Messy. Refined: "A horse sitting on a bicycle, human pose, anthropomorphic horse, hooves on handlebars, cartoon style". Adding "Anthropomorphic" fixes the anatomy issue.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-ER-02',
                    title: '02: Improving Output Without Changing Style',
                    objectives: ['Use "Vary Region" (Inpainting)', 'Upscale correctly', 'Fix faces'],
                    summary: 'Don\'t throw away the whole image. Fix the bad hand.',
                    theory: 'Inpainting allows you to mask a specific area (like a messed-up hand) and re-prompt only that section. This preserves the perfect lighting and composition of the rest of the image. "Vary Region" is the scalpel of AI art.',
                    task: {
                        description: 'Fix a bad hand.',
                        before: 'Regenerate whole image.',
                        after: 'Select the 6-fingered hand. Mask it. Prompt: "A human hand, five fingers, relaxed pose". Generate until fixed. Do not re-roll the whole image.'
                    },
                    keywords: [
                        { term: 'Inpainting', definition: 'The process of reconstructing lost or deteriorated parts of images and videos.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-ER-03',
                    title: '03: Controlled Variations & Alternatives',
                    objectives: ['Explore "Chaos" parameters', 'Generate variations of a composition', 'A/B test styles'],
                    summary: 'Same idea, different flavor.',
                    theory: 'Sometimes you want the same composition but a different vibe. Use "Chaos" or "Variance" sliders in tools. Low Chaos = slight changes (lighting tweaks). High Chaos = wild changes (compositional shifts). Use this to explore possibilities from a solid base.',
                    task: {
                        description: 'Generate 3 variants.',
                        before: 'Make it different.',
                        after: 'Base: "Cyberpunk City". Variant 1: "At Night" (Low Chaos). Variant 2: "In Winter" (Med Chaos). Variant 3: "Post-Apocalyptic" (High Chaos).'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-ER-04',
                    title: '04: Fixing Common Visual Issues',
                    objectives: ['Fix extra limbs', 'Correct text rendering', 'Remove artifacts'],
                    summary: 'Why are there 7 fingers? Dealing with hallucinations.',
                    theory: 'Artifacts happen. Extra limbs often occur when keywords imply motion (e.g., "Running") without clear anatomical constraints. Negative Prompts (e.g., "Negative: Extra limbs, bad anatomy, mutated hands, text, watermark") act as a filter to tell the AI what to Avoid.',
                    task: {
                        description: 'Construct a Negative Prompt.',
                        before: 'It looks bad.',
                        after: 'Positive: "Portrait of a man." Negative: "Blurry, low quality, bad anatomy, extra fingers, missing limbs, text, logo, watermark, cropped."'
                    },
                    keywords: [
                        { term: 'Negative Prompt', definition: 'A list of things the AI should try not to generating.' }
                    ],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-ER-05',
                    title: '05: Fine-Tuning Details for Professional Results',
                    objectives: ['Upscale for print/web', 'Photoshop compositing', 'Color correction'],
                    summary: 'The prompt is only 80% of the work. The rest is polish.',
                    theory: 'Raw AI output is rarely production-ready. Generative Upscaling (Magnific/Topaz) adds texture detail to lo-res outputs. Color Grading in post (Photoshop/Premiere) unifies the look. Professional workflows treat the AI image as a "Raw file" to be developed.',
                    task: {
                        description: 'Plan the post-processing.',
                        before: 'Post raw image.',
                        after: 'Workflow: 1. Generate Image (Midjourney). 2. Fix hands (Inpainting). 3. Upscale 4x (Topaz). 4. Color Grade/Grain (Lightroom). 5. Export.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'img-m7',
            title: 'Module 7: AI Tools & Usage',
            lessons: [
                {
                    id: 'IV-TL-01',
                    title: '01: Overview of Image Generation Tools',
                    objectives: ['Compare Midjourney, DALL-E, Stable Diffusion', 'Understand strengths/weaknesses', 'Choose based on use case'],
                    summary: 'Midjourney for art, DALL-E for chat, SD for control.',
                    theory: 'Tool selection matters. Midjourney excels at "Artistic Texture" and lighting. DALL-E 3 follows "Complex Instructions" best. Stable Diffusion (ControlNet) offers "Precise Layout Control". Choose the engine that fits your specific need.',
                    task: {
                        description: 'Select tool for logo.',
                        before: 'Use any tool.',
                        after: 'Task: Create a minimal vector logo. Choice: DALL-E 3 is best for unstanding the text "Vector" and "Minimal", whereas Midjourney might make it too painterly.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-TL-02',
                    title: '02: Overview of Video Generation Tools',
                    objectives: ['Compare Runway, Pika, Sora', 'Understand video constraints', 'Learn web vs local tools'],
                    summary: 'Moving pictures. The frontier.',
                    theory: 'Video AI is new. Runway Gen-2/Gen-3 offers specific "Camera Controls" and "Motion Brushes". Pika Labs is great for "Animation" styles. Understanding the "Context Window" (duration limit) of each tool helps you plan your shots (usually 4s-10s clips).',
                    task: {
                        description: 'Plan a toolchain for a trailer.',
                        before: 'Make video.',
                        after: 'Use Midjourney to generate the "First Frame" (for quality). Use Runway Gen-2 with "Image-to-Video" to animate that frame. This ensures high visual fidelity.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-TL-03',
                    title: '03: Choosing the Right Tool for the Right Task',
                    objectives: ['Analyze project requirements', 'Balance cost vs quality', 'Speed vs Control'],
                    summary: 'Don\'t use a sledgehammer to crack a nut.',
                    theory: 'Speed vs Control. For a quick blog header, DALL-E 3 is instant. For a client character design, Stable Diffusion with ControlNet is required to keep the pose exact. Assess the "Cost of Failure" (time spent re-rolling) before starting.',
                    task: {
                        description: 'Evaluate a Client Brief.',
                        before: 'Do the job.',
                        after: 'Brief: "I need my specific product bottle in a jungle." Tool: Stable Diffusion + ControlNet (Canny Edge) to lock the bottle shape, inpainting the jungle around it.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-TL-04',
                    title: '04: Workflow: Prompt → Generate → Refine',
                    objectives: ['Build a repeatable pipeline', 'Organize files and seeds', 'Version control assets'],
                    summary: 'Professionalizing the chaos.',
                    theory: 'Amateurs roll dice; Pros have a pipeline. 1. Ideation (ChatGPT). 2. Base Generation (Midjourney). 3. Selection (Culling). 4. Refinement (Inpainting/ps). 5. Upscaling. Naming your files with the Seed/Prompt ID is crucial for retracing steps.',
                    task: {
                        description: 'Design a folder structure.',
                        before: 'Downloads folder.',
                        after: 'Folder: `Project_Name / 01_Prompts / 02_Raw_Gens / 03_Selected / 04_Upscaled / 05_Final`. Keep a `log.txt` with parameters used for 05_Final.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-TL-05',
                    title: '05: Building a Personal Prompt Library',
                    objectives: ['Save successful prompts', 'Categorize by style', 'Create reusable templates'],
                    summary: 'Don\'t reinvent the wheel. Save your magic words.',
                    theory: 'A "Prompt Library" is your greatest asset. Save snippets that work (e.g., a specific lighting block: "volumetric fog, god rays, 4k, octane render"). creating a "Mix-and-Match" system allows you to build high-quality prompts in seconds by combining tested components.',
                    task: {
                        description: 'Create a template snippet.',
                        before: 'Re-type prompts.',
                        after: 'Snippet "Cinematicly": "..., shallow depth of field, anamorphic lens flares, film grain, color graded, ISO 800". Paste this at the end of any subject prompt for instant movie vibes.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        },
        {
            id: 'img-m8',
            title: 'Module 8: Common Mistakes to Avoid',
            lessons: [
                {
                    id: 'IV-CM-01',
                    title: '01: Vague & Overloaded Prompts',
                    objectives: ['Identify token conflicts', 'Simplify language', 'Focus on key elements'],
                    summary: 'Too many cooks spoil the broth.',
                    theory: 'Short is sweet. "Overloaded" prompts (100 words of gibberish) confuse the AI, diluting the weight of important terms. "Vague" prompts ("Make it cool") leave too much to chance. Find the specific words that trigger the look you want using the fewest tokens possible.',
                    task: {
                        description: 'Optimize an overloaded prompt.',
                        before: 'A big giant massive huge red crimson scarlet fire truck car vehicle driving moving fast quick...',
                        after: 'A massive crimson firetruck speeding down a highway, motion blur, 8k.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CM-02',
                    title: '02: Inconsistent Characters & Styles',
                    objectives: ['Check for style drift', 'Verify character features', 'Standardize outputs'],
                    summary: 'Did he change shirts mid-scene?',
                    theory: 'The viewer notices errors. If a character has a beard in shot 1 and stubble in shot 2, the illusion breaks. Always double-check your "Anchors" (hair color, clothing, props) before finalizing an image. Don\'t accept "Good Enough" if it breaks continuity.',
                    task: {
                        description: 'Spot the difference.',
                        before: 'Two images.',
                        after: 'Image A: Max has a red tie. Image B: Max has a blue tie. Fix: Re-run Image B with specific prompt "wearing a red tie" or use Inpainting to recolor it.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CM-03',
                    title: '03: Poor Camera & Motion Instructions',
                    objectives: ['Avoid "Impossible Cameras"', 'Clarify physics', 'Match framing to subject'],
                    summary: 'Don\'t put the camera inside the wall.',
                    theory: 'AI has no physical body. It might place a camera "Inside" a person\'s head or "Floating" in an impossible way. Ensure your camera descriptors imply a physical lens (e.g., "Drone shot", "Shoulder rig") to ground the image in reality.',
                    task: {
                        description: 'Fix an impossible angle.',
                        before: 'Eye view from inside mouth.',
                        after: 'Unless it\'s a dentist ad, avoid gross angles. Change to "POV shot looking at the dentist" or "Extreme close up of teeth".'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CM-04',
                    title: '04: Broken Continuity in Stories',
                    objectives: ['Check narrative logic', 'Verify timeline consistency', 'Ensure spatial coherence'],
                    summary: 'Wait, how did they get there?',
                    theory: 'Narrative Teleportation confuses viewers. Don\'t jump from "Deep Jungle" to "Desert" without a travel montage. Ensure the background environment transitions logically (e.g., Jungle -> Jungle Edge -> Plains -> Desert).',
                    task: {
                        description: 'Patch a plot hole.',
                        before: 'Forest -> Ocean.',
                        after: 'Insert a middle scene: "Hero walking out of the forest onto a sandy beach". This visual bridge explains the location change.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                },
                {
                    id: 'IV-CM-05',
                    title: '05: Unrealistic Expectations from AI',
                    objectives: ['Understand model limitations', 'Manage client expectations', 'Know when to use manual tools'],
                    summary: 'It\'s magic, but not miracles.',
                    theory: 'AI cannot read your mind. It struggles with specific text, complex finger interactions, and strict spatial logic (e.g. "A map of Europe but upside down"). Knowing what AI is Bad At (Logic, Text, Hands) prevents frustration. Use Photoshop for the last 10%.',
                    task: {
                        description: 'Decide: AI vs Manual.',
                        before: 'Generate specific text.',
                        after: 'Requirement: "A sign saying \'Welcome to thilak\'s store\'". Decision: Don\'t prompt this. Prompt "A blank sign". Add the text in Photoshop. It is faster and cleaner.'
                    },
                    keywords: [],
                    resources: [],
                    instructorNotes: ''
                }
            ]
        }
    ]
};
