$(document).ready(function () {

  /// MOBILE MENU TOGGLE
  $("#menuBtn").click(function () {
    $("#mobileMenu").slideToggle();
  });

  /// AUTO RESET MENU ON RESIZE
  $(window).resize(function () {
    if ($(window).width() >= 768) {
      $("#mobileMenu").hide();
    }
  });

  /// SCROLL REVEAL
  function reveal() {
    $(".reveal").each(function () {
      let top = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let height = $(window).height();

      if (scroll + height > top + 100) {
        $(this).addClass("active");
      }
    });
  }

  $(window).on("scroll", reveal);
  reveal();

  /// LOADER
  $(window).on("load", function () {
  $("#loader").fadeOut(800);
});

setTimeout(function(){
  $("#loader").fadeOut(800);
}, 2000);


  /// REVIEW SLIDER
  let index = 0;
  setInterval(() => {
    index = (index + 1) % 3;
    $("#reviewSlider").css("transform", `translateX(-${index * 100}%)`);
  }, 3500);

});
function openModal(){
$("#productModal").removeClass("hidden").addClass("flex");
}

function closeModal(){
$("#productModal").addClass("hidden").removeClass("flex");
}
