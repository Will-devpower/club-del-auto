
$(document).ready(function(){
       
    var scrollState = 'top';
       
       $(window).scroll(function(){ 
           
        //    console.log(window.scrollY);
           const scrollPos = $(window).scrollTop();
           const size = window.innerWidth; 
   
           if( ( scrollPos > 150 && size >= 1024 ) && ( scrollState === 'top' ) ) {
               $('.image-7').animate({top: '-50px'}, 600);
               
               scrollState = 'scrolled';
           }       
           if( ( scrollPos < 150 && size >= 1024 ) && ( scrollState === 'scrolled' ) ) {
               $('.image-7').animate({top: '0'}, 600);
               
               scrollState = 'top';
           }           
       })


       $('.icon-nav-menu').on('click', function(){
           $('.nav-menu').css('top', '-60px');
       });
    
});