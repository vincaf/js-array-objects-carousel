const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


// Creazione di nuovi elementi da popolare con il contenuto dell'array
const imgWrapper = document.getElementById('wrapper');
let activeImageIndex = 0;

for (let i = 0; i < images.length; i++) {

    const newImg = document.createElement('img');
    const newTitle = document.createElement('h1');
    const newSubtitle = document.createElement('p');

    // aggiunta del contenuto nell'attributo
    newImg.setAttribute('src', images[i].url);
    newTitle.innerText = images[i].title;
    newSubtitle.innerText = images[i].description;

    if(i === activeImageIndex){
        newImg.classList.add('ms_active');
        newTitle.classList.add('ms_active');
        newSubtitle.classList.add('ms_active');
    }

    // scrittura in pagina
    imgWrapper.append(newImg);
    imgWrapper.append(newTitle);
    imgWrapper.append(newSubtitle);
}


// Inizializzazione dei bottoni e degli elementi contenuti nel wrapper
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('previous-button');

const imageElements = document.querySelectorAll('img');
const titleElements = document.querySelectorAll('h1');
const subtitleElements = document.querySelectorAll('p');

// Funzionalità ai bottoni che passano alla slide successiva (next) o precedente(prev)
nextButton.addEventListener('click', function(){
    imageElements[activeImageIndex].classList.remove('ms_active');
    titleElements[activeImageIndex].classList.remove('ms_active');
    subtitleElements[activeImageIndex].classList.remove('ms_active');

    activeImageIndex++;

    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    }

    // prendo l'elemento all'indice attuale e aggiungo la classe active per renderlo visibile
    imageElements[activeImageIndex].classList.add('ms_active');
    titleElements[activeImageIndex].classList.add('ms_active');
    subtitleElements[activeImageIndex].classList.add('ms_active');
});

prevButton.addEventListener('click', function(){
    imageElements[activeImageIndex].classList.remove('ms_active');
    titleElements[activeImageIndex].classList.remove('ms_active');
    subtitleElements[activeImageIndex].classList.remove('ms_active');

    activeImageIndex--;

    if (activeImageIndex === -1) {
        activeImageIndex = images.length -1;
    }

    // prendo l'elemento all'indice attuale e aggiungo la classe active per renderlo visibile
    imageElements[activeImageIndex].classList.add('ms_active');
    titleElements[activeImageIndex].classList.add('ms_active');
    subtitleElements[activeImageIndex].classList.add('ms_active');
});


// Funzionalità di autoplay con next slide ogni 3 secondi
const nextSlideAuto = setInterval(function(){
    imageElements[activeImageIndex].classList.remove('ms_active');
    titleElements[activeImageIndex].classList.remove('ms_active');
    subtitleElements[activeImageIndex].classList.remove('ms_active');

    activeImageIndex++;

    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    }
    
    imageElements[activeImageIndex].classList.add('ms_active');
    titleElements[activeImageIndex].classList.add('ms_active');
    subtitleElements[activeImageIndex].classList.add('ms_active');
}, 3000);

