$(document).ready(function() {
    
    //navi show.
    $('.js--section-pics').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            $('nav').addClass('animated fadeIn');

            var icon = $('.js--nav-icon ion-icon').attr("name");
                   
            if (icon == "close") {
              $('.js--nav-icon ion-icon').attr("name", "menu");
              
              var nav = $('.js--main-nav');
              nav.slideToggle(200);
            }

        } else {
            $('nav').removeClass('animated fadeIn');
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    //btn scroll on click
    $('.js--scroll-to-pics').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-pics').offset().top}, 1000); 
    });
        
    //href jump smoother
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    

    //animate on hoover//     
    $("#btn").hover(function(){
        $(this).addClass('animated rubberBand');
    }, function(){
        $(this).removeClass('animated rubberBand');
    });
    
    
    //animate fadein n stuff for other elems
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
        $("figure").addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    //hamburg show menu

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon').attr("name");

        nav.slideToggle(200);
               
        if (icon == "menu") {
          $('.js--nav-icon ion-icon').attr("name", "close");
        }
        else{
          $('.js--nav-icon ion-icon').attr("name", "menu");
        }
    });
});