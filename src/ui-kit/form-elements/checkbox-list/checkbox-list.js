function openCheckboxList () {
  let cbOpener = $('._isExpandable').find('.checkbox-list__caption')
  let hiddenList = $('._isExpandable').find('.checkbox-list__menu')
  cbOpener.click((event) => {
    if (hiddenList.css('display') == 'none'){
      hiddenList.css('display', 'block')
      cbOpener.find('.glyphicon').css({
        'transform': 'rotate(135deg)',
        'top': '5px'
      })
    } else {
      hiddenList.css('display', 'none')
      cbOpener.find('.glyphicon').css({
        'transform': 'rotate(-45deg)',
        'top': '2px'
      })
    }
    event.preventDefault()
  })
}

$(document).ready(() => {
  openCheckboxList()
})