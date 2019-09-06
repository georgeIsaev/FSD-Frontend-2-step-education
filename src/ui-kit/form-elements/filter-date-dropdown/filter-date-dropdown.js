function addApplyBtnInDateDropdown (dateDropdownId, datepickerClass) {
  $(datepickerClass).find('.datepicker--buttons').append('<span class="datepicker--button" data-action="apply"> Применить </span>')
  let dateStartEnd = $(dateDropdownId).datepicker().data('datepicker')
  $(datepickerClass).find('.datepicker--button[data-action="apply"]').click((event) => {
    dateStartEnd.hide()
    event.preventDefault()
  })
}

$(document).ready(() => {
  $('#date-filter').datepicker({
    classes: 'date-start-end-filter',
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd M',
    clearButton: true,
    navTitles: {
      days: 'MM yyyy'
    }
  })
  addApplyBtnInDateDropdown ('#date-filter', '.date-start-end-filter')
})
