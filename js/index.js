$(function(){
 var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header-jp').addClass('shrink');
        }
        else {
            $('.header-jp').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});