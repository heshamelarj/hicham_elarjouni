/*SHOW/HIDE menu when XS*/
document.querySelector('#menu__fullscreen').classList.add('hidden-responsive-menu');


var menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click',function(e){
e.preventDefault();
removeClassFromElement('#menu__fullscreen','hidden-responsive-menu');
addClassToElement('#menu__fullscreen','shown-responsive-menu');

addClassToElement('#full-container','hidden-full-container');
addClassToElement('footer','hidden-full-container');    
//remove the body margin-bottom 
addClassToElement('body','remove-margin-bottom');

}) ;

var closeMenuIcon = document.querySelector('#closeFullscreenMenu');
closeMenuIcon.addEventListener('click',function(e){
  e.preventDefault();
  removeClassFromElement('#menu__fullscreen','shown-responsive-menu');
  addClassToElement('#menu__fullscreen','hidden-responsive-menu');
  removeClassFromElement('#full-container','hidden-full-container');
  removeClassFromElement('footer','hidden-full-container');
  //Add back the body margin-bottom
  removeClassFromElement('body','remove-margin-bottom');
});
//remove / add classes function 
var element,className;
function addClassToElement(element,className){
  document.querySelector(element).classList.add(className);
}
function removeClassFromElement(element,className){
  document.querySelector(element).classList.remove(className);
}
//hide menu if parent pos not top
var menu1 = document.querySelector('.menu-1');
var aboutBody = document.querySelector('.about');
var workBody = document.querySelector('.work__body');
var menu2 = document.querySelector('.menu-2');
var menu3 = document.querySelector('.menu-3');
window.addEventListener('scroll',function(e){
  
  
 if(menu1.clientHeight + workBody.clientHeight <= window.outerHeight){
   console.log('show menu');
   
 }

})









