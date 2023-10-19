//create arrays for the style and project types

const styleType = ['Boho', 'Minimalist', 'Gothic', 'Festive', 'Abstract', 'Summer', 'Fall', 'Winter', 'Spring', 'Punk', 'Hippie', 'Cottagecore', 'Rainbow', 'Spooky', 'Grayscale', 'Tiny'];
const projectType = ['Beanie', 'Bucket Hat', 'Sweater', 'Cardigan', 'Blanket', 'Pet Toy', 'Coaster', 'Tapestry', 'Table Runner', 'Headband', 'Bandana', 'Bookmark', 'Shawl', 'Cup Coozie', 'Pot Holder', 'Market Bag', 'Coin Purse', 'Tote Bag', 'Shorts', 'Halter Top', 'Hand Warmers', 'Scarf', 'Keychain', 'Car Decor', 'Flowers', 'Amigurumi', 'Pillow', 'Garland', 'Book Cover', 'Basket', 'Jewelry', 'Doily', 'Skirt', 'Dress', 'Overalls', 'Socks', 'Pants', 'Shirt'];

//pull elements from html

let btnStyle = document.getElementById('style-btn');
let resultStyle = document.getElementById('style');
let btnProject = document.getElementById('project-btn');
let resultProject = document.getElementById('project');

//create a function to randomize style and project

function getRandomStyle(min, max) {
    let step1style = max - min + 1;
    let step2style = Math.random() * step1style;
    let result1 = Math.floor(step2style) + min;

    return result1;
}

btnStyle.addEventListener('click', () => {
    let indexStyle = getRandomStyle(0, styleType.length-1);
    resultStyle.innerText = styleType[indexStyle];
})

function getRandomProject(min, max) {
    let step1project = max - min + 1;
    let step2project = Math.random() * step1project;
    let result2 = Math.floor(step2project) + min;

    return result2;
}

btnProject.addEventListener('click', () => {
    let indexProject = getRandomProject(0, projectType.length-1);
    resultProject.innerText = projectType[indexProject];
})

//form open/close

let btnOpen = document.getElementById('contact');
let box = document.querySelector('.box');
let body = document.querySelector('body');
let close = document.querySelector('.close');

btnOpen.addEventListener('click', () => {
    btnOpen.style.display='none';
    box.style.display='block';
});

close.addEventListener('click', () => {
    btnOpen.style.display='block';
    box.style.display='none';
})





