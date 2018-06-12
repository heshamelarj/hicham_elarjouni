/*SHOW/HIDE menu when XS*/
document.querySelector('#menu__fullscreen').classList.add('hidden-responsive-menu');


var menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click',function(e){
e.preventDefault();
document.querySelector('#menu__fullscreen').classList.remove('hidden-responsive-menu');
document.querySelector('#menu__fullscreen').classList.add('shown-responsive-menu');
document.querySelector('#full-container').classList.add('hidden-full-container');
document.querySelector('footer').classList.add('hidden-full-container');    
//remove the body margin-bottom 
document.querySelector('body').classList.add('remove-margin-bottom');

}) ;

var closeMenuIcon = document.querySelector('#closeFullscreenMenu');
closeMenuIcon.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('#menu__fullscreen').classList.remove('shown-responsive-menu');
  document.querySelector('#menu__fullscreen').classList.add('hidden-responsive-menu');
  document.querySelector('#full-container').classList.remove('hidden-full-container');
  document.querySelector('footer').classList.remove('hidden-full-container');
  //Add back the body margin-bottom
  document.querySelector('body').classList.remove('remove-margin-bottom');
});
//when click on links

