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

const speaker = document.querySelector('.section-b');

let speakers = [
    {
        id: '1',
        name: 'Adriene Mishler',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/adriene.jpg',
    },
    {
        id: '2',
        name: 'Adriene Mishler',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/adriene.jpg',
    },
    {
        id: '3',
        name: 'Adriene Mishler',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/adriene.jpg',
    },
    {
        id: '4',
        name: 'Adriene Mishler',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/adriene.jpg',
    },
    {
        id: '5',
        name: 'Adriene Mishler',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/adriene.jpg',
    },
    {
        id: '6',
        name: 'Adriene Mishler',
        occup: 'Yoga instructor',
        description: 'American entrepreneur, yoga teacher, and actress, who co-founded the online library of Yoga materials named ”Find What Feels Good.',
        img: 'images/adriene.jpg',
    }
]

function speakersContainer(obj, index){
    let container = `<div class='speakers-wrapper'>
        <div class='img-wrapper'>
            <img src='${obj[index].img}' alt='yoga-teacher'></img>
        </div>
        <div class='info-wrapper'>
            <h2>${obj[index].name}</h2>
            <p class="occup">${obj[index].occup}</p>
            <hr class='obj-hr'/>
            <p>${obj[index].description}</p>
        </div>
    </div>`;
    speaker.innerHTML += container;
}


show_mobile();
hide_mobile();