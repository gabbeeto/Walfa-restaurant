import './styling/style.css';
import mainImg from './img/restaurantPicture.png'

import noodlesImg from './img/noodles.png'
import fishImg from './img/fish.png'
import pizzaImg from './img/pizza.png'
import hamburguerImg from './img/hamburguer.png'

import croissantImg from './img/croissant.png' 
import frenchFriesImg from './img/frenchFries.png' 
import saladImg from './img/salad.png' 
import porkImg from './img/pork.png' 

import facePictureImg from './img/gabbetoFace.png'

//simplify code section


function mkEl(el){
return document.createElement(el);
}


function appendInDocument(el){
document.body.appendChild(el);
}

function append(el,el2){
el.appendChild(el2)
}


function createFood(foodname, price, image, foodInfo){
const li = mkEl('li');




const figure = mkEl('figure')

let img = mkEl('img');
img.src = image;

let foodName = mkEl('figCaption');
foodName.innerText = foodname;

const foodAndPriceInfoContainer = mkEl('div');

let foodInformation = mkEl('p');
foodInformation.innerText = foodInfo;

let priceInformation = mkEl('h3');
priceInformation.innerText = price;

append(foodList, li);
append(li, figure);
append(figure, img);
append(figure, foodAndPriceInfoContainer);
append(foodAndPriceInfoContainer, foodName);
append(foodAndPriceInfoContainer, priceInformation);
append(li, foodInformation);

}






//header section 

const header = mkEl('header');
const tittle = mkEl('h1');
tittle.innerHTML = `Walfa Restaurant <span> by <a href='https://gabbeeto.github.io/' target='_blank'>gabbeto</a> </span>`;


appendInDocument(header);
append(header, tittle);



const main = mkEl('main');
appendInDocument(main);

export const sectionForButtons = mkEl('Section');
sectionForButtons.id = 'buttonSection';

export const homeButton = mkEl('button');
homeButton.innerText = 'home';


export const menuButton = mkEl('button');
menuButton.innerText = 'menu';


export const aboutButton = mkEl('button');
aboutButton.innerText = 'about me';



append(main, sectionForButtons);
append(sectionForButtons, homeButton);
append(sectionForButtons, menuButton);
append(sectionForButtons, aboutButton);







//home section
export const sectionForHome = mkEl('section')
sectionForHome.id = 'home';

const mainFigure = mkEl('figure');


const mainPicture = mkEl('img');
mainPicture.src = mainImg;

const homeTittle = mkEl('figcaption')
homeTittle.innerText = 'Welcome to the Restaurant!'


const homeDescription = mkEl('p')
homeDescription.innerText = `This Restaurant is made for the walfa community so walfas can have a great place to go and eat together. non-walfas are also welcomed to the restaurant. We hope you have a great time right here. if you are a 'loquendero'/'loquender', we have a special meal for you. We do not condome any violence nor any malicious activity. Thank you for reading.`


append(main, sectionForHome);

append(sectionForHome, mainFigure);
append(mainFigure, mainPicture);
append(mainFigure, homeTittle);
append(sectionForHome, homeDescription);











//menu section
export const sectionForMenu = mkEl('section');
sectionForMenu.id = 'menu';

const foodList  = mkEl('ul');






append(main, sectionForMenu);
append(sectionForMenu, foodList);
createFood('noodles','3$', noodlesImg, 'my favorite food');
createFood('pizza', '5$' ,pizzaImg,'I like this one' );
createFood('hamburguer', '4$', hamburguerImg, 'I desire this one sometimes');
createFood('fish', '2$', fishImg, `loved by walfas but not by me`);
createFood('pork', '5$', porkImg, `over-rated`);
createFood('salad', '3$', saladImg, `for those of you who are vegan`);
createFood('croissant', '2$', croissantImg, `je ne peux pas parle le francai`);
createFood('french fries', '3$', frenchFriesImg, `if you want the mcdunals feeling`);












//'about me' section
export const sectionForAbout = mkEl('section');
sectionForAbout.id = 'about';



const aboutMeTittle = mkEl('h2')
aboutMeTittle.innerText = 'I am Gabbeeto'


const aboutMeDescription = mkEl('p')
aboutMeDescription.innerHTML = `I usually code for fun, I hope you like this fake restaurant, I've been learning how to code for few months. you can visit my own <a  href='https://gabbeeto.github.io/' target='_blank'>page<a> and my own <a target='_blank' href='https://github.com/gabbeeto/'>github account</a> if you want to`;

const facePicture = mkEl('img');
facePicture.src = facePictureImg;


append(main, sectionForAbout);
append(sectionForAbout, aboutMeTittle);
append(sectionForAbout, aboutMeDescription);
append(sectionForAbout, facePicture);



