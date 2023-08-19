import './styling/style.css';


function mkEl(el){
return document.createElement(el);
}


function appendInDocument(el){
document.body.appendChild(el);
}

function append(el,el2){
el.appendChild(el2)
}

const header = mkEl('header');
const tittle = mkEl('h1');
tittle.innerHTML = `Walfa Restaurant by <a href='https://gabbeeto.github.io/' target='_blank'>gabbeto</a>`;


appendInDocument(header);
append(header, tittle);



const main = mkEl('main');

appendInDocument(main);

const sectionForButtons = mkEl('Section');
sectionForButtons.id = 'buttonSection';

const homeButton = mkEl('button');
homeButton.innerText = 'home';

const aboutButton = mkEl('button');
aboutButton.innerText = 'about us';

const menuButton = mkEl('button');
menuButton.innerText = 'menu';



append(main, sectionForButtons);
append(sectionForButtons, homeButton);
append(sectionForButtons, aboutButton);
append(sectionForButtons, menuButton);


const sectionForHome = mkEl('section')


const homeTittle = mkEl('h2')
homeTittle.innerText = 'Welcome to Restaurant'


const homeDescription = mkEl('p')
homeDescription.innerText = `This Restaurant is made for the walfa community so walfas can have a great place to go and eat together. non-walfas are also welcomed to the restaurant. We hope you have a great time right here. if you are a 'loquendero'/'loquender', we have a special meal for you. We do not condome any violence nor any malicious activity. Thank you for reading.`


append(main, sectionForHome);
append(sectionForHome, homeTittle);
append(sectionForHome, homeDescription);


