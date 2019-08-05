$(document).ready(function(){
  // Mask for input
  $(".date").mask("99.99.9999",{placeholder:"ДД.ММ.ГГГГ"});

  // Date start - end
  $('#date-start').datepicker({
    onSelect: function (date) {
      $('#date-start').val(date.split("-")[0]);
      $('#date-end').val(date.split("-")[1]);
    }
  });

});

