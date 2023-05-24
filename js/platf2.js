jQuery(function ($) {
  let isPlatf2Slick = false;
  function platf2Slick() {
    if (window.innerWidth < 1200) {
      if (isPlatf2Slick) {
        return;
      } else {
        $(".platf2__list").slick({
          infinite: true,
          slidesToShow: 3,
          swipeToSlide: true,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          dots: false,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 675,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
        isPlatf2Slick = true;
      }
    } else {
      if (isPlatf2Slick) {
        $(".platf2__list").slick("unslick");
        isPlatf2Slick = false;
      } else {
        return;
      }
    }
  }
  $(window).on("load", platf2Slick);
  $(window).on("resize", platf2Slick);
});
