// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkmode-button');
    const body = document.body;
    const specialSection = document.querySelector('.special-section'); // Add this line if needed

    // Check for saved light mode preference in localStorage
    if (localStorage.getItem('lightmode') === 'enabled') {
        body.classList.add('lightmode');
        if (specialSection) specialSection.classList.add('lightmode');
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('lightmode')) {
            body.classList.remove('lightmode');
            if (specialSection) specialSection.classList.remove('lightmode');
            localStorage.setItem('lightmode', 'disabled');
        } else {
            body.classList.add('lightmode');
            if (specialSection) specialSection.classList.add('lightmode');
            localStorage.setItem('lightmode', 'enabled');
        }
    });
});
