$(document).ready(function() {
   $('li').hover(function() {
      $(this).addClass("hovered");
},
function() {
    $(this).removeClass("hovered");   
});
});