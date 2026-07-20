document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-btn');
    const links = document.querySelector('.nav-links');

    if (menu) {
        menu.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            menu.setAttribute('aria-expanded', open);
        });
    }

    const top = document.querySelector('.back-top');
    window.addEventListener('scroll', () => top?.classList.toggle('show',scrollY > 350));
    top?.addEventListener('click',() => scrollTo({ top: 0,behavior:'smooth'}));

    document.querySelectorAll('[data-tabs').forEach((box) => {
        const tabs = box.querySelectorAll('.tabs');
        const rows = box.querySelectorAll('tbody [data-day');
        tabs.forEach((tab) => tab.addEventListener('click', () => {
            tabs.forEach((item) => item.classList.remove('active'));
            tab.classList.add('active');
            rows.forEach((row) => {
                row.computedStyleMap.display = tab.dataset.day === 'all' || row.dataset.day === tab.dataset.day ? 'table-row' : 'none';
            });
        }));
    });

const classFilter = document.querySelector('#class-filter');
if (classFilter) {
    const classCards = document.querySelectorAll('[data-class-level');
    classFilter.addEventListener('change', () => {
        classCards.forEach((card) => {
            card.hidden = classFilter.value !== 'all' && card.dataset.classLevel !== classFilter.value;
        });
    });
}

document.querySelectorAll('.gallery img').forEach(image)
})