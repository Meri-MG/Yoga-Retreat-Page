const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-links");
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
            nav.classList.remove('nav-active');
            hamburger.classList.remove('rotate');
        });
    }
}

const speaker = document.querySelector('.flex-wrapper');

let speakers = [
    {
        name: 'Adriene Mishler',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/adriene.jpg',
    },
    {
        name: 'Travis Eliot',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/eliot.jpg',
    },
    {
        name: 'Lauren Eckstrom',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/lauren.jpg',
    },
    {
        name: 'Janice Lennard',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/Janice.png',
    },
    {
        name: 'Karin Dimitrovova',
        occup: 'Yoga instructor',
        description: 'Czech entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/karin.jpg',
    },
    {
        name: 'Zurius River',
        occup: 'Yoga instructor',
        description: 'Georgian entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/Zurius.jpg',
    }
]


function speakersContainer(obj){
        return `<div class='speakers-wrapper'>
        <div class='img-wrapper'>
            <img src='${obj.img}' alt='yoga-teacher'></img>
        </div>
        <div class='info-wrapper'>
            <h2>${obj.name}</h2>
            <p class='occupation'>${obj.occup}</p>
            <div class='obj-hr'></div>
            <p class='desc'>${obj.description}</p>
        </div>
    </div>`;
}

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < speakers.length; i++){
        speaker.innerHTML += speakersContainer(speakers[i]);
    }
})


speakersContainer(speakers);


show_mobile();
hide_mobile();