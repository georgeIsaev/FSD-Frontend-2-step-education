$(document).ready(() => {
  let ruteButtons = $('.rute-button')

  for (let i = 0; i < ruteButtons.length; i++ ){
    let defaultStar = $(ruteButtons[i]).attr('defaultStar')
    $(ruteButtons[i]).find(`input[id$=${defaultStar}]`).prop('checked', true)
  }
})