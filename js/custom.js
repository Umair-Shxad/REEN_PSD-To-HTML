$(function(){

    AOS.init({
        offset: 300,
        duration: 800
    });

    // Menu Open
    $(".toggle-btn").click(function(){
        $(".nav-menu").slideToggle();
    });

    $(".sub-menu").click(function(){
        $(".sub-menu-list").slideToggle();
    });

    // Mega Nav Opening
        $(".mega-open-btn").hover(function(){
          $(".mega-Menu").css("display", "block");
            // Adding hover class in Mega Btn
            $(".mega-Menu").hover(function(){
                $(".mega-Menu").css("display", "block");
                $(".mega-open-btn").addClass("mega-Menu-hover");
            }, function(){
                // removing hover class in Mega Btn
                $(".mega-Menu").css("display", "none");
                $(".mega-open-btn").removeClass("mega-Menu-hover");
            });

          }, function(){
          $(".mega-Menu").css("display", "none");
        });


    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false,
      margin:10,
      responsiveClass:true,
      nav:false,
      dots:true,
      responsive:{
          0:{
              items:1,
          },
          480:{
              items:2,
          },
          1000:{
              items:4,
          }
      }
  })

});
