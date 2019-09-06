$(document).ready(() => {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    skin: "round",
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 100,
    postfix: "&#8381;",
    hide_min_max: true,
    onChange: (data) => {
      rangeSliaderValues = `${data.from}&#8381; - ${data.to}&#8381;`
      $('.header__amount-interval').html(rangeSliaderValues)
    }
  })
  let rangeSliaderValues = $('.irs-single').html()
  $('.header__amount-interval').html(rangeSliaderValues)
})