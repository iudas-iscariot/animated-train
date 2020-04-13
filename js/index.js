

$(document).ready(function(){
        $('.header__box').slick({
            dots: true,
            infinite: true,
        });
    });

$(document).ready(function(){
        $('.ideas__box').slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
              slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
          arrows: false,
         slidesToShow: 1,
           centerMode: false,
            variableWidth: false,
      }
    }
  ]
});
    });


$(document).ready(function(){
    $('.posts__box').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',


        responsive: [
    {
       breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
});





$(window).scroll(function(){
            if ($(window).scrollTop() > '200'){
                    $('.navbar').css({"opacity":"0.7"});
                    $('.navbar').css({"background":"black"});
                    $('.navbar').css({"top":"0px"});
                }
            else if(window.innerWidth <= 768){
                $('.navbar').css({"opacity":"0.8"});
                $('.navbar').css({"background":"black"});
                $('.navbar').css({"top":"0px"});
            }
            else {
                $('.navbar').css({"background":"transparent"});
                $('.navbar').css({"top":"20px"});
            }
});

$(function(){
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });

$('.project__box') .isotope({
            itemSelector: '.project__block',
            layoutMode: 'fitRows'
        });
        $('.project__types button').click(function(){
            $('.project__types button').removeClass('active');
            $(this) .addClass('active');

            var selector = $(this).attr('data-filter');
            $('.project__box') .isotope({
                filter: selector
            });
            return false;
        });
