$(document).ready(() => {
  let menuCollapseOpener = $('.menu').find('.menu__header').find('.menu__header__toggle')
  let menuCollapsedList = $('.menu').find('.menu__list')
  let placeForMenu = $('.place-for-menu')

  menuCollapseOpener.click((event) => {
    if (menuCollapsedList.css('top') != '70px') {
      placeForMenu.css('display', 'block')
      menuCollapsedList.css({
        'top': '70px'
      })
    } else {
      placeForMenu.css('display', 'none')
      menuCollapsedList.css({
        'top': '-99999px'
      })
    }
    event.preventDefault()
  })

  let logo = $('.menu__logo').find('img')
  if ($(window).width() < 481) {
    logo.prop("src", "../../assets/img/logo_min.svg")
  }
})