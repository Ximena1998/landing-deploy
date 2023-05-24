jQuery(function ($) {
  const complH1 = $(".compl__h1");
  const complP = $(".compl__p");
  $(complH1).on("click", function () {
    let index = $(this).index();
    complH1.removeClass("big");
    $(this).addClass("big");
    $(complP).addClass("display-none");
    $(complP[index]).removeClass("display-none");
  });
});
