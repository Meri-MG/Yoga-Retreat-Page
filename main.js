const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const nav_link = document.querySelectorAll(".nav-link")

const show_mobile = () => {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburger.classList.toggle('rotate');
    });
};

const hide_mobile = () => {
    for (let i = 0; i < nav_link.length; i += 1){
        nav_link[i].addEventListener('click', () => {
            nav.nav.classList.remove('nav-active');
            hamburger.classList.remove('rotate');
        });
    }
}

show_mobile();
hide_mobile();