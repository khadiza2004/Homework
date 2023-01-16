$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});

$('.venobox').venobox();

$('.slider_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-caret-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-caret-right next"></i>',
});

$(document).ready(function(){
  $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

});




