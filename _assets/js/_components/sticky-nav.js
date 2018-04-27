////////////////////////////////////////////////////////////////////////////////
//      Sticky microsite nav
////////////////////////////////////////////////////////////////////////////////

// elements and classes
var stickyNavClass     = '.js-sticky-nav';
var stickyNavContainer = '.js-sticky-nav__container';
var stickyNavModifier  = 'is-stuck';

function stickyNav(){

  var scrollTop = $(document).scrollTop();
  var nav       = $(stickyNavClass);
  var distance  = $(stickyNavContainer).offset().top;

  if( scrollTop > distance ){
    nav.addClass(stickyNavModifier);
  }else{
    nav.removeClass(stickyNavModifier);
  }
}

// runs on page load and scroll
if( $('.js-sticky-nav').length > 0 ){
  stickyNav();
  $(document).scroll(function(){ stickyNav(); });
}

