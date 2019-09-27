$(document).ready(() => {
  let menuCollapseOpener = $('.menu').find('.menu__header').find('.menu__header__toggle')
  let menuCollapsedList = $('.menu').find('.menu__list')
  let placeForMenu = $('.place-for-menu')

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

  let logo = $('.menu__logo').find('img')
  if ($(window).width() < 481) {
    logo.prop("src", "/assets/img/logo_min.svg")
  }
})