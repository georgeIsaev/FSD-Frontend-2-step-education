function addApplyBtnInDateDropdown (dateDropdownId, datepickerClass) {
  $(datepickerClass).find('.datepicker--buttons').append('<span class="datepicker--button" data-action="apply"> Применить </span>')
  let dateStartEnd = $(dateDropdownId).datepicker().data('datepicker')
  $(datepickerClass).find('.datepicker--button[data-action="apply"]').click((event) => {
    dateStartEnd.hide()
    event.preventDefault()
  })
}

$(document).ready(() => {
  $('#date-start').datepicker({
    classes: 'date-start-end',
    range: true,
    multipleDates: true,
    multipleDatesSeparator: '-',
    clearButton: true,
    onSelect: function (date) {
      $('#date-start').val(date.split("-")[0])
      $('#date-end').val(date.split("-")[1])
    },
    navTitles: {
      days: 'MM yyyy'
    }
  })

  let dateStart = $('#date-start').datepicker().data('datepicker')
  $('#date-end').click((event) => {
    dateStart.show()
    event.preventDefault()
  })
  addApplyBtnInDateDropdown ('#date-start', '.date-start-end')
})