//create arrays for the style and project types

const styleType = ['Boho', 'Minimalist', 'Gothic', 'Festive', 'Abstract', 'Summer', 'Fall', 'Winter', 'Spring', 'Punk', 'Hippie', 'Cottagecore', 'Rainbow', 'Spooky', 'Grayscale', 'Tiny'];
const projectType = ['Beanie', 'Bucket Hat', 'Sweater', 'Cardigan', 'Blanket', 'Pet Toy', 'Coaster', 'Tapestry', 'Table Runner', 'Headband', 'Bandana', 'Bookmark', 'Shawl', 'Cup Coozie', 'Pot Holder', 'Market Bag', 'Coin Purse', 'Tote Bag', 'Shorts', 'Halter Top', 'Hand Warmers', 'Scarf', 'Keychain', 'Car Decor', 'Flowers', 'Amigurumi', 'Pillow', 'Garland', 'Book Cover', 'Basket', 'Jewelry', 'Doily', 'Skirt', 'Dress', 'Overalls', 'Socks', 'Pants', 'Shirt'];

//create a function that will display a random item from the style and project array

function randomStyleType() {
    return styleType[Math.floor(Math.random()*styleType.length)];
}

function randomProjectType(projectType) {
    return projectType[Math.floor(Math.random()*projectType.length)];
}

//now link the function to html in the project generator container

let styleTypeLi = document.getElementById('style').innerHTML = randomStyleType(styleType);
let projectTypeLi = document.getElementById('project').innerHTML = randomProjectType(projectType);

//add event listener to the button to randomly generate projects!

