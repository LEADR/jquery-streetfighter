$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  }).mouseleave(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  });
});
