document.addEventListener('DOMContentLoaded', () => {
    const savedColorMode = localStorage.getItem('colourMode');
    if (savedColourMode === 'colourblind') document.body.classList.add('colourblind-mode');

    const colourToggle = document.createElement('button');
    colourToggle.classNmae = 'colour-toggle';
    colourToggle.type = 'button';
    colourToggle.setAttribute('aria-pressed', document.body.classList.contains('colourblind-mode'));
    colourToggle.innerHTML = '<span aria-hidden="true">◐</span> Colour-blind view';
    document.body.appendChild(colourToggle);

    colourToggle.addEventListener('click', () => {
        const enabled = document.body.classList.toggle('colourblind-mode');
        colourToggle.setAttribute('aria-pressed', enabled);
        localStorage.setItem('colourMode', enabled ? 'colourblind' : 'standard');
    });

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
                row.style.display = tab.dataset.day === 'all' || row.dataset.day === tab.dataset.day ? 'table-row' : 'none';
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

    document.querySelectorAll('.gallery img').forEach((image) => image.addEventListener('click', () => {
        const lightbox = document.querySelector('.lightbox');
        lightbox.querySelector('img').src = image.src;
        lightbox.classList.add('open');
    }));
    document.querySelector('.lightbox button')?.addEventListener('click', () => document.querySelector('.lightbox').classList.remove('open'));

    document.querySelectorAll('form[data-validate]').forEach((form) => form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;
        form.querySelectorAll('[required]').forEach((input) => {
            const error = input.parentElement.querySelector('.error');
            const invalid = !input.value.trim() || (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value));
            if (error) error.style.display = invalid ? 'block' : 'none';
            if (invalid) valid = false;
        });
        if (valid) {
            form.querySelector('.form-message').style.display = 'block';
            form.reset();
        }
    }));
});