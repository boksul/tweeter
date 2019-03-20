$(document).ready(function() {
  $('#tweetText').on('keyup',function(event) {
    const leftCharacters = 140 - $(this).val().length;
    const counter = $(this).siblings('.counter');
    $('.counter').text(leftCharacters);

    if (leftCharacters < 0) {
      counter.css({"color": "red"})
    } else {
      counter.css({"color": "black"})
    }
  })


})