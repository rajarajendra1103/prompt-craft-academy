import fs from 'fs';
import path from 'path';

const files = [
    'src/data/courses/webDevelopment.js',
    'src/data/courses/appDevelopment.js',
    'src/data/courses/gameDevelopment.js',
    'src/data/courses/imageVideoGeneration.js'
];

const processFiles = () => {
    files.forEach(filePath => {
        const fullPath = path.resolve(filePath);
        if (!fs.existsSync(fullPath)) {
            console.log(`Skipping ${filePath} (not found)`);
            return;
        }

        let content = fs.readFileSync(fullPath, 'utf8');
        let count = 0;

        // 1. Populate Resources and Keywords based on Title
        // We look for a pattern: title: '...', ... keywords: [], ... resources: []
        // We will do this in two passes or use a replacer that handles the context.

        // Pass A: Keywords
        content = content.replace(
            /(title:\s*'([^']+)',[\s\S]*?)keywords:\s*\[\]/g,
            (match, prefix, title) => {
                const cleanTitle = title.replace(/^\d+:\s*/, '').replace(/'/g, ""); // Remove number prefix and quotes
                // Pick the most significant words (filtering out "Introduction to", etc is hard, lets grab the whole title as the term or first 2 words)
                // Let's use the whole title as the term context
                const term = cleanTitle;
                const definition = `The core subject of this lesson, focusing on ${cleanTitle.toLowerCase()}.`;

                const newKeywords = `keywords: [
                        { term: '${term}', definition: '${definition}' }
                    ]`;
                return match.replace('keywords: []', newKeywords);
            }
        );

        // Pass B: Resources
        content = content.replace(
            /(title:\s*'([^']+)',[\s\S]*?)resources:\s*\[\]/g,
            (match, prefix, title) => {
                const cleanTitle = title.replace(/^\d+:\s*/, '').replace(/'/g, "");
                const query = encodeURIComponent(cleanTitle + ' tutorial');
                const newResources = `resources: [
                        { title: '${cleanTitle} Tutorial', url: 'https://www.youtube.com/results?search_query=${query}', type: 'video' }
                    ]`;
                return match.replace('resources: []', newResources);
            }
        );

        // Pass C: Instructor Notes
        // We replace empty notes with a generic helpful tip if it's empty
        content = content.replace(
            /instructorNotes:\s*''/g,
            "instructorNotes: 'Review the provided resources for a deeper understanding of this topic before attempting the task.'"
        );

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    });
};

processFiles();
