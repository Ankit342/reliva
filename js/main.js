$(document).ready(function () {

const MIN_LOADER_TIME = 3000;   // 3 seconds
let pageLoaded = false;

/* PAGE LOAD EVENT */
$(window).on("load", function () {
  pageLoaded = true;
});

/* CLOSE LOADER FUNCTION */
function closeLoader() {
  $("#loader").fadeOut(800);
}

/* WAIT FOR BOTH CONDITIONS */
setTimeout(function () {
  if (pageLoaded) {
    closeLoader();
  } else {
    $(window).on("load", closeLoader);
  }
}, MIN_LOADER_TIME);



/* MOBILE MENU */
$("#menuBtn").click(function () {
  $("#mobileMenu").removeClass("hidden").addClass("flex");
  $("body").addClass("overflow-hidden");
});

$("#closeMenu, #mobileMenu a").click(function () {
  $("#mobileMenu").removeClass("flex").addClass("hidden");
  $("body").removeClass("overflow-hidden");
});


/* SCROLL REVEAL */
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

});
