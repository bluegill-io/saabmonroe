$(function(){
  $('.js-scroll-to').on('click', function(eve){
    eve.preventDefault();
    let loc = $(eve.currentTarget).data('id');
    $('html, body').animate({ scrollTop: ($("." + loc).offset().top) }, 1000);
  });
});
