$(document).ready(function(){
  // Mask for input
  $(".date").mask("99.99.9999",{placeholder:"ДД.ММ.ГГГГ"});

  // Date start - end, 
  $('#date-start').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    clearButton: true,
    onSelect: function (date) {
      $('#date-start').val(date.split("-")[0]);
      $('#date-end').val(date.split("-")[1]);
    }
  });
  
  //  translate date in filter-date-dropdown
  $('#date-filter').datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd M'
  })

  $('.iqdropdown').iqDropdown({
    maxItems: 9,
    minItems: 0,
    selectionText: 'Гость',
    textPlural: 'Гостей',
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
    // fires when an item quantity changes
    onChange: (id, count, totalItems) => {},
    // return false to prevent an item decrement
    beforeDecrement: (id, itemCount) => {},
    // return false to prevent an item increment
    beforeIncrement: (id, itemCount) => {}
  });
});

