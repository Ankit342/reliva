$(function () {

  const MIN_TIME = 3000;
  const startTime = Date.now();

  function hideLoader() {
    const elapsed = Date.now() - startTime;
    const remaining = MIN_TIME - elapsed;

    setTimeout(function () {
      $("#loader").fadeOut(800);
    }, remaining > 0 ? remaining : 0);
  }

  /* This fires for fast OR cached pages */
  if (document.readyState === "complete") {
    hideLoader();
  } else {
    $(window).on("load", hideLoader);
  }


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
