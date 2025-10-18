// Functionality for the dynamic text effect using Typed.js
document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. TYPED.JS INITIALIZATION
    // ----------------------------------------------------
    var typed = new Typed('#element', {
        // List of roles tailored to a student developer
        strings: ['Software Developer', 'Full-Stack Developer', 'Ethical Hacker', 'Problem Solver'],
        typeSpeed: 70, // Typing speed in milliseconds
        backSpeed: 50, // Erasing speed
        loop: true, // Loop the animation indefinitely
        showCursor: true, // Show the cursor
        cursorChar: '|', // Cursor character
    });

    // ----------------------------------------------------
    // 2. THEME TOGGLE LOGIC (Dark/Light Mode)
    // ----------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    
    // Function to set the theme based on the current state
    const setTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.classList.replace('fa-sun', 'fa-moon'); // Show moon icon for light mode
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            themeToggle.classList.replace('fa-moon', 'fa-sun'); // Show sun icon for dark mode
            localStorage.setItem('theme', 'dark');
        }
    };

    // Apply stored theme or default to 'dark'
    if (storedTheme === 'light') {
        setTheme('light');
    } else {
        // Default (or stored 'dark') theme is already handled by CSS `:root`
        setTheme('dark'); 
    }

    // Event listener for toggling the theme
    themeToggle.addEventListener('click', () => {
        const isLightMode = document.body.classList.contains('light-mode');
        setTheme(isLightMode ? 'dark' : 'light'); // Toggle the theme
    });
});

// ----------------------------------------------------
// 3. MOBILE NAVIGATION LOGIC
// ----------------------------------------------------

// Functionality for Mobile Navigation Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
    // document.body.classList.toggle('no-scroll'); // Optional: Prevent background scrolling
}

// Close mobile menu when a link is clicked (for smoother navigation)
const navLinksList = document.querySelectorAll('.nav-links a');

navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        // Only close if the menu is active/visible
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});