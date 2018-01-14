import 'bootstrap/dist/css/bootstrap.min.css'

import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

$(() => {
  $('.js-scroll-to').on('click', (eve) => {
    eve.preventDefault();
    let loc = $(eve.currentTarget).data('id');
    $('html, body').animate({ scrollTop: ($("." + loc).offset().top) }, 1000);
  })
});