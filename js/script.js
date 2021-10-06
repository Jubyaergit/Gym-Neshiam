$(".banner-slider").slick({
    arrows: false,
    // dots: true,
    // prevArrow: '<i class="fas fa-angle-left prev"></i>',
    // nextArrow: '<i class="fas fa-angle-right next"></i>',
    
});

$(".team-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
});

$('.venobox').venobox(); 

$("#colorful").colorfulTab();   

$(".clint-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(window).scroll(function(){
  if($(window).scrollTop()>700){
    $(".backtotop").fadeIn()
  }
  else{
    $(".backtotop").fadeOut()
  }

  if($(window).scrollTop()>700){
    $(".menu").addClass("fixedmenu")
  }
  else{
    $(".menu").removeClass("fixedmenu")
  }
})

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})

$('.js-preloader').preloadinator({
  minTime: 1000
});