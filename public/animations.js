
   $(document).ready(function(){
       
    var scrollState = 'top';
       
       $(window).scroll(function(){ 
           
        //    console.log(window.scrollY);
           var scrollPos = $(window).scrollTop();
   
           if( ( scrollPos > 150 ) && ( scrollState === 'top' ) ) {
               $('.image-7').animate({top: '-50px'}, 600);
               
               scrollState = 'scrolled';
           }       
           if( ( scrollPos < 150 ) && ( scrollState === 'scrolled' ) ) {
               $('.image-7').animate({top: '0'}, 600);
               
               scrollState = 'top';
           }           
       })
    
    });