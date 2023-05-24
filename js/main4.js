jQuery(function ($) {
  let isMain4Slick = false;
  function main4Slick() {
    if (window.innerWidth < 950) {
      if (isMain4Slick) {
        return;
      } else {
        $(".main4__list").slick({
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
      }
      isMain4Slick = true;
    } else {
      if (isMain4Slick) {
        $(".main4__list").slick("unslick");
        isMain4Slick = false;
      } else {
        return;
      }
    }
  }
  $(window).on("load", main4Slick);
  $(window).on("resize", main4Slick);
});
