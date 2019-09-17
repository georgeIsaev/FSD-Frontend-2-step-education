import '../../ui-kit/header/header'
import '../../ui-kit/form-elements/filter-date-dropdown/filter-date-dropdown'
import '../../ui-kit/form-elements/quantity-dropdown/quantity-dropdown'
import '../../ui-kit/form-elements/range-slider/range slider'
import '../../ui-kit/form-elements/checkbox-list/checkbox-list'
import '../../ui-kit/form-elements/pagination/pagination'
import '../../ui-kit/cards/room-card/room-card'

$(document).ready(() => {
  let filtersBtnOpen = $('._search-room').find('.filters__btn._open')
  let filtersBtnApply = $('._search-room').find('.filters__btn._apply')
  let filters = $('._search-room').find('.filters')

  filtersBtnOpen.click((event) => {
    filters.css('left', '-2.5%')
    filtersBtnApply.css('display', 'block')
    filtersBtnOpen.css('display', 'none')
    event.preventDefault()
  })

  filtersBtnApply.click((event) => {
    filters.css('left', '-99999999px')
    filtersBtnApply.css('display', 'none')
    filtersBtnOpen.css('display', 'block')
    event.preventDefault()
  })
})