
var App = {
  homeslider: function () {
    jQuery('.slider_testimonial').slick({
      slidesToShow: 3,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 1500,
      dots: false,
      arrows: true,
      centerMode: true,
      centerPadding: '200px',
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: { 
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
      ]
    });
    jQuery('.slider_non').slick({
      slidesToShow: 3,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 1500,
      dots: false,
      arrows: true,
      centerMode: true,
      centerPadding: '200px',
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: { 
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
      ]
    });
    jQuery('.slider_news').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev_blue.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next_blue.svg" class="img-fluid"/></div>',
     
    });
    
  
    jQuery('.slider_logo').slick({
      slidesToShow: 4,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: true,
      arrows: true,
      centerPadding: '0px',
      centerMode: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev_gray.png" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next_gray.png" class="img-fluid"/></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: { 
            arrows: false,
            centerMode: true,
            
            slidesToShow: 2,
          }
        },
      ]
    });
  
    jQuery('.slider').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: false,
      arrows: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev-white.png" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next-white.png" class="img-fluid"/></div>',
    });
  },
  menuside: function () {
    jQuery('.hamburger_btn').click(function(e){
        e.preventDefault();
        jQuery('.hamburger-icon').toggleClass('open');
        jQuery('#menu-side').toggleClass('open');
        jQuery('.overlay_menu').toggleClass('is-active');
    });
    jQuery('.overlay_menu').click(function () {
        jQuery('.hamburger-icon').removeClass('open');
        jQuery('#menu-side').removeClass('open');
        jQuery('.overlay_menu').removeClass('is-active');
    });
  },
  
}
jQuery(document).ready(function () {
  App.homeslider();
  App.menuside();
  AOS.init({
    disable: 'mobile'
  });
  var modal = $('.overlay_contact');
  var btn = $('.btn-contact');


  btn.click(function () {
    modal.show();
    
  });

  // modal.click(function () {
  //   modal.hide();
  // });

  $(window).on('click', function (e) {
    if ($(e.target).is('.overlay_contact')) {
      modal.hide();
    }
  });
  var $slider = $('.slider');

  if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text('0.' + currentSlide + ' ' +  '/' + '  ' +  '  ' + '0.3' )
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}
});