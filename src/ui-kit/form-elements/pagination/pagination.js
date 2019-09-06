function pagination (){
  for (let i = 0; i < dataPages.length - 1; i++){

    $(dataPages).css("display", "none")
    $('.pagination__btn').find('.ellipsis').remove()
    $('.start-page').css("display", "flex")
    $('.final-page').css("display", "flex")
    $('.next-page').css({
      "display": "flex",
      "opacity": "1"
    })
    
    if (($(dataPages[i]).hasClass('active-page') && $(dataPages[i]).hasClass('start-page')) || $(dataPages[1]).hasClass('active-page')){
      $(dataPages[1]).css("display", "flex")
      $(dataPages[2]).css("display", "flex")
      $(dataPages[i+2]).after('<i class="ellipsis">...</i>')
      break
    } else if ($(dataPages[2]).hasClass('active-page')){
      $(dataPages[1]).css("display", "flex")
      $(dataPages[2]).css("display", "flex")
      $(dataPages[3]).css("display", "flex")
      $(dataPages[3]).after('<i class="ellipsis">...</i>')
      break
    } else if (($(dataPages[i]).hasClass('active-page') && $(dataPages[i]).hasClass('final-page')) || $(dataPages[dataPages.length - 3]).hasClass('active-page')){
      if($(dataPages[i]).hasClass('final-page')){
        $('.next-page').css("opacity", "0.5")
      }
      $(dataPages[dataPages.length - 3]).css("display", "flex")
      $(dataPages[dataPages.length - 4]).css("display", "flex")
      $(dataPages[dataPages.length - 4]).before('<i class="ellipsis">...</i>')
      break
    } else if ($(dataPages[dataPages.length - 4]).hasClass('active-page')){
      $(dataPages[dataPages.length - 3]).css("display", "flex")
      $(dataPages[dataPages.length - 4]).css("display", "flex")
      $(dataPages[dataPages.length - 5]).css("display", "flex")
      $(dataPages[dataPages.length - 5]).before('<i class="ellipsis">...</i>')
      break
    } else if ($(dataPages[i]).hasClass('active-page')){
      $(dataPages[i - 1]).css("display", "flex")
      $(dataPages[i + 1]).css("display", "flex")
      $(dataPages[i]).css("display", "flex")
      $(dataPages[i + 1]).after('<i class="ellipsis">...</i>')
      $(dataPages[i - 1]).before('<i class="ellipsis">...</i>')
      break
    }
  }
}

$(document).ready(() => {
  let dataPages = $('.pagination__btn').find('a')
  pagination()
  for (let i = 0; i < dataPages.length; i++){
    if (i < dataPages.length - 1) {
      $(dataPages[i]).click((event) => {
        $('.active-page').removeClass('active-page')
        $(dataPages[i]).addClass('active-page')
        event.preventDefault()
        pagination()
      })
    } else {
      $(dataPages[i]).click((event) => {
        for (let j = 0; j < dataPages.length - 1; j++){
          if ($(dataPages[j]).hasClass('active-page') && j < dataPages.length - 2){
            $(dataPages[j]).removeClass('active-page')
            $(dataPages[j + 1]).addClass('active-page')
            break
          }
        }
        event.preventDefault()
        pagination()
      })
    }
  }
})