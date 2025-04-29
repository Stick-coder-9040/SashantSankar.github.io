// Theme toggle with icon swap (moon for night, sun for day)
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle-icon');
    if (!themeToggle) return;
    const iconElem = themeToggle.querySelector('i');
    function updateIcon() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            iconElem.className = 'fas fa-moon'; // Show moon (night) in light mode
        } else {
            iconElem.className = 'fas fa-sun'; // Show sun (day) in dark mode
        }
    }
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        updateIcon();
    });
    // Set icon on page load
    updateIcon();
});
