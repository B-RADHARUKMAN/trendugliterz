var isBuilder = $("html").hasClass("is-builder");
isBuilder ||
  (0 != $("section.popup-btn-cards").length &&
    $("section.popup-btn-cards .card-wrapper").each(function (s, p) {
      $(this).addClass("popup-btn");
    }));
