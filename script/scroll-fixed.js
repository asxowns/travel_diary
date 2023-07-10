$(function() {

  $(document).ready(function() {

    var scrollOffset = $('.head').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('.head').addClass('scroll-fixed');
      }
      else {
        $('.head').removeClass('scroll-fixed');
      }
    });
  });
});
