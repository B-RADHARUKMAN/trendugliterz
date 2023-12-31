function animateBackgroundText(t, e, a) {
  $(t).stop();
  var n = $(t).find(".animated-element");
  n.text(e),
    n.css({ "white-space": "nowrap", "z-index": 0 }),
    $(t).css({
      position: "absolute",
      left: document.body.clientWidth,
      top: "calc(50% - " + $(t).height() / 2 + "px)",
    }),
    $(t).animate({ left: -$(t).width() }, a, "linear", function () {
      $(this).css({ left: document.body.clientWidth });
    });
  var i = setInterval(function () {
    $(t).animate({ left: -$(t).width() }, a, "linear", function () {
      $(this).css({ left: document.body.clientWidth });
    });
  }, a);
  $(t).attr("id", "interval" + i);
}
var isBuilder = $("html").hasClass("is-builder");
isBuilder
  ? ($(document).on("delete.cards", function (t) {
      if (0 != $(t.target).find(".animated-text-background").length) {
        var e = $(t.target).find(".animated-text-background").attr("id"),
          a = parseInt(e.substr(8));
        clearInterval(a);
      }
    }),
    $(document)
      .on("add.cards", function (t) {
        0 != $(t.target).find(".animated-text-background").length &&
          $(t.target)
            .find(".animated-text-background")
            .each(function () {
              var t =
                  1e3 *
                  (101 -
                    parseInt(
                      $(this).find(".animated-element").attr("data-speed")
                    )),
                e = $(this).find(".animated-element").attr("data-word");
              animateBackgroundText($(this), e, t);
            });
      })
      .on("changeParameter.cards", function (t, e, a) {
        ("animatedText" != e &&
          "textSpeed" != e &&
          "textTitle" != e &&
          "textSize" != e) ||
          $(t.target)
            .find(".animated-text-background")
            .each(function () {
              var t =
                  1e3 *
                  (101 -
                    parseInt(
                      $(this).find(".animated-element").attr("data-speed")
                    )),
                e = $(this).find(".animated-element").attr("data-word"),
                a = $(this).attr("id"),
                n = parseInt(a.substr(8));
              clearInterval(n),
                $(this).clearQueue(),
                animateBackgroundText($(this), e, t);
            });
      }))
  : void 0 === window.initAnimatedBgTextPlugin &&
    ((window.initAnimatedBgTextPlugin = !0),
    $(".animated-text-background").each(function () {
      var t =
          1e3 *
          (101 -
            parseInt($(this).find(".animated-element").attr("data-speed"))),
        e = $(this).find(".animated-element").attr("data-word");
      animateBackgroundText($(this), e, t);
    }));
