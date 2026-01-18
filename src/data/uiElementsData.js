export const uiElements = [
    {
        id: 'ui-hamburger',
        name: 'Hamburger Menu',
        types: ['Standard', 'Animated', 'Overlay'],
        usage: 'Mobile navigation toggle.',
        prompt: 'Create a responsive navigation bar with a "Hamburger Menu" button for mobile view. When clicked, it should smoothly animate into an "X" icon and slide out a navigation drawer from the right side.'
    },
    {
        id: 'ui-accordion',
        name: 'Accordion',
        types: ['Simple', 'Multi-close', 'Nested'],
        usage: 'Organizes large amounts of content into collapsible sections to save screen space.',
        prompt: 'Build an "Accordion" component. It should consist of multiple header-panel pairs. Clicking a header should toggle the visibility of the corresponding panel with a smooth height transition. Ensure a chevron icon rotates when expanded.'
    },
    {
        id: 'ui-breadcrumbs',
        name: 'Breadcrumbs',
        types: ['Slash Separator', 'Chevron', 'Background Path'],
        usage: 'Navigation aid showing the user\'s current location within the site hierarchy.',
        prompt: 'Design a "Breadcrumb" navigation list. Items should be separated by a "/" or chevron icon. The last item (current page) should be non-clickable and styled differently. Include logic to auto-generate from the URL path.'
    },
    {
        id: 'ui-carousel',
        name: 'Carousel / Slider',
        types: ['Image Slide', 'Card Slider', 'Auto-play'],
        usage: 'Displays a set of scrollable content items (images, cards) in a minimal space.',
        prompt: 'Implement an Image Carousel with "Previous" and "Next" buttons and bottom dot indicators. Support auto-play functionality that pauses on hover. Ensure smooth sliding animations between items.'
    },
    {
        id: 'ui-pagination',
        name: 'Pagination',
        types: ['Simple Numbers', 'Load More Button', 'Infinite Scroll'],
        usage: 'Divides large datasets into manageable pages to improve loading time and UX.',
        prompt: 'Create a "Pagination" component receiving `currentPage` and `totalPages` props. Render scaleable page numbers (e.g., 1, 2, ..., 10) with logic to truncate with ellipses if there are many pages. Style the active page distinctively.'
    },
    {
        id: 'ui-tabs',
        name: 'Tabs',
        types: ['Horizontal', 'Vertical', 'Pilled'],
        usage: 'Allows swapping between different content views within the same context without leaving the page.',
        prompt: 'Construct a "Tabs" interface. Render a horizontal list of tab buttons above a content area. Clicking a button switches the active content panel. Add a sliding underline animation to indicate the active tab.'
    },
    {
        id: 'ui-skeleton',
        name: 'Skeleton Loader',
        types: ['Text Line', 'Circle (Avatar)', 'Card Block'],
        usage: 'Placeholders shown while data is loading to reduce perceived latency.',
        prompt: 'Design a "Skeleton Loader" for a user profile card. Create gray placeholder shapes for the avatar (circle) and text lines (rectangles) with a shimmering CSS gradient animation to mimic loading activity.'
    },
    {
        id: 'ui-avatar',
        name: 'Avatar',
        types: ['Image', 'Initials Fallback', 'Status Indicator'],
        usage: 'Visual representation of a user or entity.',
        prompt: 'Create a reusable "Avatar" component. It should take an `src` prop for an image and `name` for fallback initials. If the image fails to load, display the initials on a colored background. Support different sizes (sm, md, lg).'
    },
    {
        id: 'ui-badge',
        name: 'Badge',
        types: ['Notification Counter', 'Status Label', 'Tag'],
        usage: 'Small visual indicator for status, numbers, or tags.',
        prompt: 'Implement a "Badge" component. It should support variants like "success" (green), "warning" (yellow), and "danger" (red). Use it to create a "Notification Bell" with a red count badge overlapping the top-right corner.'
    },
    {
        id: 'ui-progress',
        name: 'Progress Bar',
        types: ['Linear', 'Circular', 'Stepped'],
        usage: 'Visualizes the completion status of a task or process.',
        prompt: 'Build a linear "Progress Bar". It should take a `percentage` prop (0-100). The bar should have a track background and a fill color that animates width changes. Add a text label showing the percentage number.'
    },
    {
        id: 'ui-dropdown',
        name: 'Dropdown Menu',
        types: ['Hover', 'Click', 'Context Menu'],
        usage: 'Toggles a list of actions or options without cluttering the UI.',
        prompt: 'Create a "Dropdown Menu" triggered by a button. The menu should appear below the button when clicked and close when clicking outside. Support keyboard navigation (Arrow keys to move, Enter to select, Esc to close).'
    },
    {
        id: 'ui-datepicker',
        name: 'Date Picker',
        types: ['Single Date', 'Range Select', 'Calendar View'],
        usage: 'Allows users to select a date or range visually.',
        prompt: 'Design a "Date Picker" input. When focused, show a calendar popup grid for the current month. Allow users to click a day to fill the input. Highlight the current date and disable past dates if needed.'
    },
    {
        id: 'ui-upload',
        name: 'File Upload',
        types: ['Drag & Drop', 'Button Trigger', 'Preview'],
        usage: 'Interface for selecting files to upload.',
        prompt: 'Implement a "Drag and Drop" file upload zone. Styling should change when a file is dragged over it (border highlight). Display the list of selected files with file names, sizes, and a "remove" icon for each.'
    },
    {
        id: 'ui-range',
        name: 'Range Slider',
        types: ['Single Thumb', 'Double Thumb (Min/Max)', 'Vertical'],
        usage: 'Selecting a value or range from a fixed set.',
        prompt: 'Create a custom styled "Range Input" (slider) for selecting a price value. Replace the default browser thumb and track styles with custom CSS. Add a tooltip that follows the thumb thumb to display the current value.'
    },
    {
        id: 'ui-stepper',
        name: 'Stepper',
        types: ['Horizontal', 'Vertical', 'Numbered'],
        usage: 'Guides users through a multi-step process (e.g., checkout).',
        prompt: 'Build a "Stepper" component for a wizard form. Horizontal circles connected by lines should represent steps. Highlight completed steps in green, current step in blue, and pending steps in gray. Allow navigation only to completed or next steps.'
    },
    {
        id: 'ui-search',
        name: 'Search Bar',
        types: ['Simple', 'Autocomplete / Typeahead', 'Expandable'],
        usage: 'Allows users to query large datasets.',
        prompt: 'Implement an "Autocomplete Search Bar". As the user types, make a mock API call and display a dropdown list of matching results below the input. Highlight the matching text portion in the results.'
    },
    {
        id: 'ui-sidebar',
        name: 'Sidebar Navigation',
        types: ['Fixed', 'Collapsible', 'Floating'],
        usage: 'Primary navigation for complex dashboards.',
        prompt: 'Design a collapsible "Sidebar" layout. It should have a toggle button to shrink it to icon-only mode. Ensure the main content area expands to fill the remaining space smoothly when the sidebar shrinks.'
    },
    {
        id: 'ui-rating',
        name: 'Star Rating',
        types: ['Interactive', 'Read-only', 'Half-stars'],
        usage: 'Collecting or displaying user feedback scores.',
        prompt: 'Create an interactive "Star Rating" component. Hovering over the 4th star should highlight stars 1-4 in gold. Clicking should persist the selection. Support partial ratings if possible (CSS gradients).'
    },
    {
        id: 'ui-timeline',
        name: 'Timeline',
        types: ['Vertical', 'Horizontal', 'Alternating'],
        usage: 'Displaying events in chronological order.',
        prompt: 'Build a vertical "Timeline" to show project history. Use a central line with dots to mark events. Content cards should alternate left and right of the line for desktop view, but stack vertically on mobile.'
    },
    {
        id: 'ui-tree',
        name: 'Tree View',
        types: ['File System', 'Category Hierarchy', 'Checkable'],
        usage: 'Displaying hierarchical data like folder structures.',
        prompt: 'Implement a recursive "Tree View" for a folder structure. Folders can be expanded/collapsed to show children files. Use indentation and folder/file icons to visualize hierarchy visually.'
    },
    {
        id: 'ui-pricing',
        name: 'Pricing Table',
        types: ['Comparison', 'Tiered cards', 'Feature List'],
        usage: 'Displaying subscription options to users.',
        prompt: 'Design a "Pricing Table" with 3 tiers (Basic, Pro, Enterprise). Highlight the "Pro" tier (center) with a scale transform or distinct border. Use checkmarks for included features and grayed text for missing ones.'
    },
    {
        id: 'ui-hero',
        name: 'Hero Section',
        types: ['Centered Text', 'Split Screen (Text/Image)', 'Video Background'],
        usage: 'The first visual a user sees, designed to hook attention.',
        prompt: 'Create a modern "Hero Section". Use a split layout: big bold typography and CTA buttons on the left, and a 3D illustration or high-quality image on the right. Add a subtle entrance animation for the text elements.'
    },
    {
        id: 'ui-scrollbar',
        name: 'Custom Scrollbar',
        types: ['Thin', 'Hidden (Hover to show)', 'Themed/Colored'],
        usage: 'Enhances the visual consistency of scrollable areas.',
        prompt: 'Design a custom CSS scrollbar for a vertically scrollable div. The scrollbar should be distinct but subtle: width of 8px, a track color of transparent, and a thumb color of var(--accent) with rounded corners (border-radius: 4px).'
    },
    {
        id: 'ui-zoom',
        name: 'Zoom Controls',
        types: ['Plus/Minus Buttons', 'Slider'],
        usage: 'Allows users to adjust the view scale.',
        prompt: 'Implement a UI control group for "Zooming". Include a "+" button, a "-" button, and a reset button. Styling should be minimal with icons.'
    },
    {
        id: 'ui-modal',
        name: 'Modal / Dialog',
        types: ['Centered Alert', 'Form Modal'],
        usage: 'Interrupts the user workflow to demand attention.',
        prompt: 'Create a reusable "Modal" component. It should have a darkened backdrop (overlay) that closes the modal when clicked. The modal box should be centered, have a header with a Close "X" button, a content area, and a footer with action buttons.'
    },
    {
        id: 'ui-tooltip',
        name: 'Tooltip',
        types: ['Top/Bottom/Left/Right'],
        usage: 'Provides brief helper text on hover.',
        prompt: 'Implement a CSS-only "Tooltip". The tooltip text should be stored in a "data-tooltip" attribute on the target element. On hover, display the text in a small black box with white text.'
    },
    {
        id: 'ui-toggle',
        name: 'Toggle Switch',
        types: ['iOS Style', 'Material Design'],
        usage: 'Used for binary settings options.',
        prompt: 'Create an accessible "Toggle Switch" component using a checkbox input. Visually hide the checkbox and style the label to look like a pill-shaped track with a circular thumb.'
    },
    {
        id: 'ui-card',
        name: 'Card Component',
        types: ['Basic Profile', 'Product Card'],
        usage: 'Groups related information into a single container.',
        prompt: 'Design a flexible "Card" component for a blog post. It should include an image slot at the top (aspect ratio 16:9), a title, a short excerpt, tag chips, and a "Read More" button.'
    },
    {
        id: 'ui-toast',
        name: 'Toast Notification',
        types: ['Success', 'Error'],
        usage: 'Non-intrusive notification that appears temporarily.',
        prompt: 'Build a "Toast Notification" system. Include functions to trigger success (green), error (red), and info (blue) toasts. The toast should slide in from the top-right.'
    }
];
