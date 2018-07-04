/*
* Fixed Navbar Scrolling
* Github: https://github.com/ts-de/bootstrap4-fixed-navbar
*/

// init nav object from dom
var nav = $('nav');
var menuHeight = $('#menu__fullscreen');
// get heigth of the nav
var navHeight = nav.outerHeight();
var targetPos;
var href ; 
// click-trigger
$('a[href*="#"]:not([href="#"])').click(function(event) {
  scrollToSection(this);
  event.preventDefault();
});

// scroll-trigger
$(document).scroll(function() {
  activateCurrentSection();
});

// get target position and scrolls to it
function scrollToSection(self) {
  // get the target href
   href = $(self).attr('href');
    
    
  // get the target position
  if(href == "#about"){
   targetPos = $(href).offset().top - navHeight + 5;
  
  
  }else if(href == "#about" && $(self).hasClass('scroll-to-menu')){
    console.log('we are in the condition');
    
    targetPos = $(href).offset().top - menuHeight.outerHeight();
   
   
 }else {
  targetPos = $(href).offset().top;//modifier this to adjust to my design
 
 
}
 
 
  
  // scroll to target
  $('html, body').animate({
    scrollTop: targetPos
  }, 2000);
}

/*
* Updates active section on scroll
*/
// scroll-trigger
$(document).scroll(function() {
  activateCurrentSection();
});

/*
* Updates active section on scroll
*/
var activeSectionId; // init the id of the element that will be activated
function activateCurrentSection() {
  

  // get all sections
  var sections = $('.section');
  
  
  // store current position on the page when scroll is triggered
  var pos = $(document).scrollTop();
  // console.log('pso scroll doc '+pos);
  

  /*
  * Exception: if last section is <100% of the screen height
  * make it active when 50% of it is visible.
  * Otherwise the last section would never activate.
  */
  var lastSection = sections[sections.length-1];  // get last section
  var lastSectionTooSmall = $(lastSection).height() < $(window).height();

  if (lastSectionTooSmall) {
    var lastSectionTopPos = $(lastSection).offset().top;
    // lastSectionTriggerPos is true if 50% of the last section is visible
    var lastSectionTriggerPos = $(window).height() + $(document).scrollTop() - ($(lastSection).height()/2);
    var lastSectionInView = lastSectionTriggerPos > lastSectionTopPos;
  }

  if (lastSectionTooSmall && lastSectionInView) {
    activeSectionId = $(lastSection).attr('id');
  } else {  // else last section is >= 100% of the view check all sections to find the top one
    sections.each(function() {
      var top = $(this).offset().top - navHeight; // get the top & bottom position of the section
      var bottom = top + $(this).outerHeight();

      /*
      * if the current position is higher (deeper on the page) than the top of the section
      * and it is smaller (heiger on the page) than the bottom of the section
      * it is the active section.
      */
      if (pos >= top && pos <= bottom) {
        activeSectionId = $(this).attr('id');       // store the id of this section
      }
    });
  }

  /*
   if an id was set before, activate the section in the nav
   */
  if (activeSectionId) {
    nav.find('a').removeClass('active');
    nav.find('a[href="#' + activeSectionId + '"]').addClass('active');
  }
}
