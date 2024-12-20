// Sample animation for image fade-in
window.onload = function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transition = 'opacity 2s';
        img.onload = function() {
            img.style.opacity = 1;
        };
    });
};
