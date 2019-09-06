$(document).ready(() => {
  let sumPrice = $('.cost-calculation').find('.at-days')
  let totalCost = $('.total-cost').find('.total-price')
  let dayCount = parseInt($('.cost-calculation').find('.price-at-day').text().split('x')[1])
  let dayPrice = parseInt($('.cost-calculation').find('.price-at-day').text().split('x')[0].replace(/\D+/g,""))
  let sale = parseInt($('.cost-calculation').find('.serv-price').text().replace(/\D+/g,""))
  let extraPrice = parseInt($('.cost-calculation').find('.extra-price').text().replace(/\D+/g,""))
  let daysPrice = dayPrice * dayCount

  sumPrice.text(`${daysPrice.toLocaleString()}₽`)
  totalCost.text(`${(daysPrice - sale + extraPrice).toLocaleString()}₽`)
})