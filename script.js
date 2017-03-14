$(document).ready(function() {
   $('ul').hover(function() {
      $(this).addClass("hovered");
},
function() {
    $(this).removeClass("hovered");   
});
});