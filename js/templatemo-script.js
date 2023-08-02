$(function () {
  const $navbarToggler = $(".navbar-toggler");
  const $tmHeader = $(".tm-header");
  const $tmNavLinks = $("#tm-nav .nav-link");

  $navbarToggler.on("click", function (e) {
    $tmHeader.toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function (e) {
    const headerElement = document.getElementById("tm-header");

    if (!headerElement.contains(e.target)) {
      $tmHeader.removeClass("show");
    }
  });

  $tmNavLinks.click(function (e) {
    $tmHeader.removeClass("show");
  });
});
