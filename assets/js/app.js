$(document).ready(function () {
    $(".logo-car").hover(function () {
      $(".logo-moto").toggleClass("show");
    });
    setFrameSizes();
    $(window).resize(function () {
      setFrameSizes();
    });
  });
  function setFrameSizes() {
    $("iframe").each(function (key, value) {
      var blockWidth = $(this).parent().width();
      var videoWidth = blockWidth - blockWidth / 10;
      $(this).width(videoWidth);
      $(this).height((videoWidth / 420) * 315);
    });
  }