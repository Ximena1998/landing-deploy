jQuery(function ($) {
  let isMain2SLickInit = false;
  function main2Slick() {
    if (window.innerWidth < 600) {
      if (isMain2SLickInit) {
        return;
      } else {
        $(".main2__list").slick({
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
        isMain2SLickInit = true;
      }
    } else {
      if (isMain2SLickInit) {
        $(".main2__list").slick("unslick");
        isMain2SLickInit = false;
      } else {
        return;
      }
    }
  }
  $(window).on("load", main2Slick);
  $(window).on("resize", main2Slick);
  // hover effect
  // function main2Hover() {
  //   $(this).addClass("main2__img-hovered");
  //   setTimeout(() => {
  //     $(this).removeClass("main2__img-hovered");
  //   }, 1000);
  // }
  // $(".main2__img").on("mouseenter", main2Hover);
});
