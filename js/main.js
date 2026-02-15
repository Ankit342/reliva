$(document).ready(function () {
const MIN_LOADER_TIME = 4200;
let pageLoaded = false;

  /// OPEN MENU
$("#menuBtn").click(function () {
  $("#mobileMenu").removeClass("hidden").addClass("flex");
  $("body").addClass("overflow-hidden");
});

/// CLOSE MENU
$("#closeMenu, #mobileMenu a").click(function () {
  $("#mobileMenu").removeClass("flex").addClass("hidden");
  $("body").removeClass("overflow-hidden");
});

/// AUTO RESET ON DESKTOP
$(window).resize(function () {
  if ($(window).width() >= 768) {
    $("#mobileMenu").removeClass("flex").addClass("hidden");
    $("body").removeClass("overflow-hidden");
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

 $(window).on("load", function () {
  pageLoaded = true;
});

setTimeout(function () {
  if (pageLoaded) {
    closeLoader();
  } else {
    $(window).on("load", closeLoader);
  }
}, MIN_LOADER_TIME);

function closeLoader() {
  $("#loader").addClass("loader-exit");

  setTimeout(() => {
    $("#loader").fadeOut(800);
  }, 900);
}


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
