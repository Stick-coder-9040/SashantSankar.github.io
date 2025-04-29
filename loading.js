// Show loading screen for ~10 seconds, then fade out
window.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loading-screen');
    if (!loader) return;
    setTimeout(function() {
        loader.classList.add('fade-out');
        setTimeout(function() {
            loader.style.display = 'none';
        }, 800); // match fade duration
    }, 10000); // 10 seconds
});
