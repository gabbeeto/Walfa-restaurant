import { sectionForButtons, homeButton,aboutButton,menuButton, sectionForHome, sectionForMenu, sectionForAbout } from "./html.js";

displaySection(sectionForHome, sectionForMenu, sectionForAbout);

sectionForButtons.addEventListener('click',openTab)

function openTab(event){
if(event.target == homeButton){
displaySection(sectionForHome, sectionForMenu, sectionForAbout);
}
else if(event.target == menuButton){
displaySection(sectionForMenu, sectionForHome, sectionForAbout);
}
else if(event.target == aboutButton){
displaySection(sectionForAbout, sectionForHome, sectionForMenu);
}
}

function displaySection(displayedSection, UndisplayedSection1, UndisplayedSection2){
displayedSection.style.display = 'flex';
UndisplayedSection1.style.display = 'none';
UndisplayedSection2.style.display = 'none';
}

