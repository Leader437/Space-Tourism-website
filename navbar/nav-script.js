
const navBtn = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav__list");
const navItem = document.querySelector(".nav__anchor");

navBtn.addEventListener('click', () => {
    visibility = navbar.getAttribute('data-visible');
    if (visibility === "false") {
        navbar.setAttribute('data-visible', true);
        navBtn.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        navbar.setAttribute('data-visible', false);
        navBtn.setAttribute('aria-expanded', false);
    }
});

navItem.addEventListener('click', () => {
    navbar.setAttribute('data-visible', false);
})
