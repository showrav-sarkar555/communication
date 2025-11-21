// Lecture notes data
const lectures = [
    { num: '01', title: 'Introduction', file: 'lecture-01.md' },
    { num: '02', title: 'Network Models', file: 'lecture-02.md' },
    { num: '03', title: 'Physical Layer', file: 'lecture-03.md' },
    { num: '04', title: 'Digital Transmission', file: 'lecture-04.md' },
    { num: '05', title: 'Analog Transmission', file: 'lecture-05.md' },
    { num: '06', title: 'Bandwidth Utilization', file: 'lecture-06.md' },
    { num: '07', title: 'Transmission Media', file: 'lecture-07.md' },
    { num: '08', title: 'Switching', file: 'lecture-08.md' },
    { num: '09', title: 'Data Link Layer', file: 'lecture-09.md' },
    { num: '10', title: 'Error Detection', file: 'lecture-10.md' }
];

let currentLecture = 0;
let notesCache = {};

// DOM Elements
const noteContent = document.getElementById('noteContent');
const searchInput = document.getElementById('searchInput');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const lectureLinks = document.querySelectorAll('.lecture-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadLecture(0);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Lecture links
    lectureLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadLecture(index);
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentLecture > 0) {
            loadLecture(currentLecture - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentLecture < lectures.length - 1) {
            loadLecture(currentLecture + 1);
        }
    });

    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));

    // Menu toggle for mobile
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentLecture > 0) {
            loadLecture(currentLecture - 1);
        } else if (e.key === 'ArrowRight' && currentLecture < lectures.length - 1) {
            loadLecture(currentLecture + 1);
        }
    });
}

// Load lecture content
async function loadLecture(index) {
    currentLecture = index;
    const lecture = lectures[index];

    // Update active state in sidebar
    lectureLinks.forEach((link, i) => {
        if (i === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update navigation buttons
    prevBtn.disabled = (index === 0);
    nextBtn.disabled = (index === lectures.length - 1);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Load content
    try {
        noteContent.innerHTML = '<div class="loading">Loading notes...</div>';
        
        let markdown;
        if (notesCache[lecture.file]) {
            markdown = notesCache[lecture.file];
        } else {
            const response = await fetch(`notes/${lecture.file}`);
            if (!response.ok) throw new Error('Failed to load lecture');
            markdown = await response.text();
            notesCache[lecture.file] = markdown;
        }

        // Convert markdown to HTML using marked.js
        const html = marked.parse(markdown);
        noteContent.innerHTML = html;

        // Update page title
        document.title = `${lecture.title} - Communication Engineering`;

    } catch (error) {
        noteContent.innerHTML = `
            <div class="error" style="padding: 2rem; text-align: center; color: #dc2626;">
                <h2>Error Loading Lecture</h2>
                <p>Failed to load lecture ${lecture.num}. Please try again.</p>
                <p style="font-size: 0.875rem; color: #64748b;">${error.message}</p>
            </div>
        `;
    }
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (!searchTerm) {
        // Clear highlights
        const content = noteContent.innerHTML;
        noteContent.innerHTML = content.replace(/<mark>(.*?)<\/mark>/g, '$1');
        return;
    }

    // Get the current content
    let content = notesCache[lectures[currentLecture].file] || '';
    
    if (!content) return;

    // Convert to HTML first
    let html = marked.parse(content);

    // Remove existing highlights
    html = html.replace(/<mark>(.*?)<\/mark>/g, '$1');

    // Highlight search term (case-insensitive)
    const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
    html = html.replace(regex, '<mark>$1</mark>');

    noteContent.innerHTML = html;

    // Scroll to first match
    const firstMatch = noteContent.querySelector('mark');
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Configure marked.js options
marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    mangle: false,
    sanitize: false
});

// Add custom renderer for better code blocks
const renderer = new marked.Renderer();
renderer.code = function(code, language) {
    const validLang = language || 'plaintext';
    return `<pre><code class="language-${validLang}">${code}</code></pre>`;
};
marked.use({ renderer });

// Print functionality
function printNotes() {
    window.print();
}

// Export functionality (optional)
function exportToHTML() {
    const content = noteContent.innerHTML;
    const fullHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${lectures[currentLecture].title}</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 2rem auto; padding: 2rem; }
        h1 { color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 0.5rem; }
        h2 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; margin-top: 2rem; }
        code { background: #f1f5f9; padding: 0.2rem 0.4rem; border-radius: 3px; }
        pre { background: #f1f5f9; padding: 1rem; border-radius: 5px; overflow-x: auto; }
        table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
        th { background: #2563eb; color: white; padding: 0.5rem; }
        td { border: 1px solid #e2e8f0; padding: 0.5rem; }
    </style>
</head>
<body>
${content}
</body>
</html>
    `;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lecture-${lectures[currentLecture].num}.html`;
    a.click();
    URL.revokeObjectURL(url);
}

// Expose functions globally if needed
window.printNotes = printNotes;
window.exportToHTML = exportToHTML;
