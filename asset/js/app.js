$(".group_img").slick({
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  adaptiveHeight: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        swipeToSlide: true,
      },
    },
  ],
});
$(".banner_list").slick({
  infinite: true,
  slidesToScroll: 3,
  speed: 300,
  arrows: false,
  slidesToShow: 2,
  adaptiveHeight: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
  adaptiveHeight: true,
  swipeToSlide: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
});

$(".slide_img").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  infinite: true,
  rotate: 50,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 2,
  coverflowEffect: {
    rotate: -50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
