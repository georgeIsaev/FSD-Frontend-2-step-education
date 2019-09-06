function likeBtn (ths) {
  let thisLikeBtn = $(ths).hasClass('like-button') ? $(ths) : $(ths).parent()
  let likeCount = parseInt(thisLikeBtn.find('.likes-count').html())

  thisLikeBtn.toggleClass('_liked')
  if (thisLikeBtn.hasClass('_liked')){
    thisLikeBtn.find('.likes-count').html(likeCount + 1)
  } else {
    thisLikeBtn.find('.likes-count').html(likeCount - 1)
  }
}

$(document).ready(() => {
  $('.like-button').click((event) => {
    likeBtn(event.target)
    event.preventDefault()
  })
})