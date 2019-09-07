$(document).ready(() => {
  let menuCollapseOpener = $('.menu').find('.menu__header').find('.menu__header__toggle')
  let menuCollapsedList = $('.menu').find('.menu__collapse')

  menuCollapseOpener.click((event) => {
    if (menuCollapsedList.css('top') != '70px') {
      menuCollapsedList.css({
        'top': '70px'
      })
    } else {
      menuCollapsedList.css({
        'top': '-99999px'
      })
    }
    event.preventDefault()
  })
})