$(document).ready(function(){
        $('.header__box').slick({
            dots: true,
            infinite: true,
        });
    });

$(document).ready(function(){
    $('.posts__box').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
        responsive: [
    {
       breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
                    $('.navbar').css({"background":"black"});
                    $('.navbar').css({"top":"0px"});
                }
            else if(window.innerWidth <= 768){
                $('.navbar').css({"background":"black"});
                $('.navbar').css({"top":"0px"});
            }
            else {
                $('.navbar').css({"background":"transparent"});
                $('.navbar').css({"top":"20px"});
            }
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
