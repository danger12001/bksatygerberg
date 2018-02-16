$(document).ready(function(){
   $('.collapsible').collapsible();
   $(".button-collapse").sideNav({ closeOnClick: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
autoplay() 



 });
  var urlmenu = document.getElementById( 'menu1' );
  urlmenu.onchange = function() {
       window.open(  this.options[ this.selectedIndex ].value );
       this.selectedIndex = 0
  };
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }
