/*SHOW/HIDE menu when XS*/
document.querySelector('#menu__fullscreen').classList.add('hidden-responsive-menu');
var linkWasActive;
var menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click',function(e){
e.preventDefault();
activateCurrentSection();
hideContainer();
//print the id of the active section
//reset the styling class for all the links
var links = document.querySelectorAll('.menu__fullscreen__inner__nav__item a');
links.forEach(function(link){
  link.classList.add('menu__fullscreen__inner__nav__link');
})
// now add class of highlighted to the active link
var link = document.querySelector('a[href="#'+activeSectionId+'"]');
link.classList.remove('menu__fullscreen__inner__nav__link');
link.classList.add('highlight-link');
console.log(link);



}) ;

var closeMenuIcon = document.querySelector('#closeFullscreenMenu');
closeMenuIcon.addEventListener('click',function(e){
  e.preventDefault();
  // setInterval(scrollToSection(activeSectionId),3000);
  hideMenu();
console.log('link beeing activated before close '+linkWasActive);
  
  setInterval(scrollToSection(linkWasActive),3000);
});
//remove / add classes function 
var element,className;
function addClassToElement(element,className){
  document.querySelector(element).classList.add(className);
}
function removeClassFromElement(element,className){
  document.querySelector(element).classList.remove(className);
}
//make xs menu navigation works 
var fullscreenMenu = document.querySelector('.menu__fullscreen');

//Add event listener
fullscreenMenu.addEventListener('click',getLink);

//getLink function
function getLink(e){

  //get the parent of links
  if(e.target.classList.contains('menu__fullscreen__inner__nav__link')){
    
    hideMenu();
    //go link
    setInterval(scrollToSection(e.target),3000);
    linkWasActive=e.target;
    e.preventDefault();

  }
}

//hide menu fisrt
function hideMenu(){
  //hide menu and bring the body back
  removeClassFromElement('#menu__fullscreen','shown-responsive-menu');
  addClassToElement('#menu__fullscreen','hidden-responsive-menu');
  removeClassFromElement('#full-container','hidden-full-container');
  removeClassFromElement('footer','hidden-full-container');
  //Add back the body margin-bottom
  removeClassFromElement('body','remove-margin-bottom');
}
function hideContainer(){
  removeClassFromElement('#menu__fullscreen','hidden-responsive-menu');
addClassToElement('#menu__fullscreen','shown-responsive-menu');

addClassToElement('#full-container','hidden-full-container');
addClassToElement('footer','hidden-full-container');    
//remove the body margin-bottom 
addClassToElement('body','remove-margin-bottom');
}
//go tolink function
document.addEventListener('scroll',activateCurrentSection);
/* JQUERY PARTS*/










