var fullscreenMenu = document.querySelector('#menu__fullscreen');
var targetLink ;
var activeHref;
var activeSectionPos;
var activeSection ;
var menuIcon = document.querySelector('.menu');
var closeMenuIcon = document.querySelector('#closeFullscreenMenu');
var element,className;



/*SHOW/HIDE menu when XS*/
fullscreenMenu.classList.add('hidden-responsive-menu');

menuIcon.addEventListener('click',function(e){
   
    e.preventDefault();
    hideMenuIcon();
    activateCurrentSection();
    hideContainer();
     // scroll to target
  $('html, body').animate({
    scrollTop: 0
  }, 200);
    //reset the styling class for all the links
    var links = document.querySelectorAll('.menu__fullscreen__inner__nav__item a');
    links.forEach(function(li){
      
      li.classList.add('menu__fullscreen__inner__nav__link');
     
})
      // console.log('link was active :'+link);
      targetLink.classList.remove('menu__fullscreen__inner__nav__link');
      targetLink.classList.add('highlight-link');
 
  
  



}) ;

closeMenuIcon.addEventListener('click',function(e){
    e.preventDefault();
    // setInterval(scrollToSection(activeSectionId),3000);
    showMenuIcon();
    hideMenu();
    // console.log('link beeing activated before close '+tergetLink);
    setInterval(scrollToSection(targetLink),2000);
});

//remove / add classes function 
function addClassToElement(element,className){
  document.querySelector(element).classList.add(className);
}

function removeClassFromElement(element,className){
  document.querySelector(element).classList.remove(className);
}
//make xs menu navigation works 

//Add event listener
fullscreenMenu.addEventListener('click',getLink);

//getLink function
function getLink(e){

  //get the parent of links
  if(e.target.classList.contains('menu__fullscreen__inner__nav__link')){
    
    hideMenu();
    //go link
    setInterval(scrollToSection(e.target),3000);
    console.log(e.target);
    
    targetLink=e.target;
    showMenuIcon();
    e.preventDefault();
    
  }
}

//hide menu fisrt
function hideMenu(){
  //hide menu and bring the body back
  removeClassFromElement('#menu__fullscreen','shown-responsive-menu');
  addClassToElement('#menu__fullscreen','hidden-responsive-menu');

}
//hide container
function hideContainer(){
  removeClassFromElement('#menu__fullscreen','hidden-responsive-menu');
  addClassToElement('#menu__fullscreen','shown-responsive-menu');
  $('a[href="#about"]').addClass('scroll-to-menu');

}

//hide mneu icon
function hideMenuIcon(){
  addClassToElement('#iconMenu','hide-icon-menu');
  // removeClassToElement('#iconMenu','menu');
}
function showMenuIcon(){
  removeClassFromElement('#iconMenu','hide-icon-menu');
  // removeClassToElement('#iconMenu','menu');
}

/* JQUERY PARTS*/
document.addEventListener('scroll',activateCurrentSection);

/**
 * TODO: 
 * add when click links in menu fullscreen scroling must go from the active section to the selected section (that means from top to bottom or bottom to top)   
 **/









