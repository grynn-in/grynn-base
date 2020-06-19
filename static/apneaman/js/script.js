/* slick */
$(document).ready(function () {
  $("#category-menu-toggle").click(function () {
    $("body>header>div.main>div.main-content").toggleClass("show");
  });
  slickify();
  breadcrumbResize();
  productImageToSquare();
});

$(window).on("resize", function () {
  breadcrumbResize();
  productImageToSquare();
});

/* breadcrumbResize */
function breadcrumbResize() {
  var crumbOut = $("nav.breadcrumb");
  var crumbIn = $("nav.breadcrumb>ul");
  var i = 1;
  crumbIn.children().css("display", "inline-block");
  while (crumbOut.width() < crumbIn.width() && i < crumbIn.children().length) {
    $("nav.breadcrumb>ul>li:nth-child(" + i++ + ")").css("display", "none");
  }
}

/* radio item */
$(".radio-items > label > input").click(function () {
  var label = $(this).parent();
  if (label.hasClass("active")) {
    label.removeClass("active");
    $("input", label).prop("checked", false);
  } else {
    $("label.active", label.parent()).removeClass("active");
    label.addClass("active");
    $("input", label).prop("checked", true);
  }
});

/* openable */
$(".openable > h4").click(function () {
  $(this).parent().toggleClass("open");
});

function productImageToSquare() {
  $(".myslick-slide .image > img").each(function () {
    var width = $(this).width();
    $(this).height(width);
  });
}

function slickify() {
  $(".myslick").slick({
    infinite: false,
    accessibility: true,
    arrows: true,
    dots: true,
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
