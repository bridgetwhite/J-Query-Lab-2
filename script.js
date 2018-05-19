// $(document).ready(function(){
//   console.log("It works!!!!!!!");
// });

var form = $('form');
form.hide();


$('#save').on('click', function () {
  currentTable.addClass('reserved');
  var userName= $('.name').val();
  var guestCount = $('.table-number').val();
    currentTable.append(`<div class = "tool-tip"> Name: ${userName}<br> Guests: ${guestCount}</div>`)
  $('form').fadeOut(500);
  // form.hide();
  $(".reserved").css({
  "background-color":"#ADAAAA"

});
$("#myForm")[0].reset();
});


var currentTable;
$('.available').on('click', function () {
   currentTable = $(this);
   $('form').fadeIn(700);
   form.show();
   $('#newRes').text(currentTable.text())
   form.show();

   $('#newRes').text(currentTable.attr('id').substring(5))
   $('form').fadeIn(500);
   form.show();

   });


var numberDisplay;
$('#number').on('click', function(){
    currentTable=$(this);
});



//This is the x button
$('.material-icons').on('click', function (){
  $('form').fadeOut(500);
    // form.hide();

});
