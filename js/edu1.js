jQuery(function ($) {
  $(".edu1__list").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
        },
      },
    ],
  });
});
