/*SHOW/HIDE menu when XS*/
document.querySelector('#menu__fullscreen').classList.add('hidden-responsive-menu');


let menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click',function(e){
e.preventDefault();

document.querySelector('#menu__fullscreen').classList.add('shown-responsive-menu');
document.querySelector('#menu__fullscreen').classList.remove('hidden-responsive-menu');
document.querySelector('#full-container').classList.add('hidden-full-container');
document.querySelector('#full-container').classList.remove('shown-full-container');
document.querySelector('footer').classList.add('hidden-full-container');    


}) ;

let closeMenuIcon = document.querySelector('#closeFullscreenMenu');
closeMenuIcon.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('#menu__fullscreen').classList.add('hidden-responsive-menu');
  document.querySelector('#menu__fullscreen').classList.remove('shown-responsive-menu');
  document.querySelector('#full-container').classList.add('shown-full-container');
  document.querySelector('#full-container').classList.remove('hidden-full-container');
  document.querySelector('footer').classList.remove('hidden-full-container');
  document.querySelector('footer').classList.add('shown-full-container');

});
//when click on links

