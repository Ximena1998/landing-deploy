jQuery(function ($) {
  let isMain3Slick = false;
  function main3Slick() {
    if (window.innerWidth < 650) {
      if (isMain3Slick) {
        return;
      } else {
        $(".main3__slideshow").slick({
          infinite: true,
          slidesToShow: 1,
          swipeToSlide: true,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          dots: false,
        });
        isMain3Slick = true;
      }
    } else {
      if (isMain3Slick) {
        $(".main3__slideshow").slick("unslick");
        isMain3Slick = false;
      } else {
        return;
      }
    }
  }
  $(window).on("load", main3Slick);
  $(window).on("resize", main3Slick);
});
