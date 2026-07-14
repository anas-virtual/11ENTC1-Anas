document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-btn');
    const links = document.querySelector('.nav-links');

    if (menu) {
        menu.addEventListener('click', () => {
            const open = links.classList.toggle('open');
        });
    }

    const top = document.querySelector('.back-top');
    
})