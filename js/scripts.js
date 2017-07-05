$(document).ready(function() {
  $(".container").click(function() {
    $(this).find(".initially-showing").toggle();
    $(this).find(".initially-hidden").toggle();
  });
});
