$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    $('.ryu-cool').hide();
  })
  .mouseleave(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function() {
    console.log('mousedown');
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').show();
    $('.ryu-cool').hide();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left','-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  $(document).keydown(function(event) {
    if (event.which == 88) {
      $('.ryu-cool').show();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      }
    })
  .keyup(function(event) {
    if (event.which == 88) {
      $('.ryu-still').show();
      $('.ryu-cool').hide();
    }
  });
});
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
