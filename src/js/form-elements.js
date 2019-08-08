$(document).ready(function(){
  // Mask for input
  $(".date").mask("99.99.9999",{placeholder:"ДД.ММ.ГГГГ"})

  // Date start - end, 
  $('#date-start').datepicker({
    range: true,
    multipleDatesSeparator: '-',
    clearButton: true,
    onSelect: function (date) {
      $('#date-start').val(date.split("-")[0])
      $('#date-end').val(date.split("-")[1])
    }
  })
  
  //  translate date in filter-date-dropdown
  $('#date-filter').datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd M'
  })

  
  // let iqdropdownSelection = $('.iqdropdown-selection')
  // const globalItemCount = {
  //       adults: 0, 
  //       children: 0,
  //       infant: 0
  //     }
  // let clearFlag = false

  // $('.iqdropdown').iqDropdown({
  //   maxItems: 9,
  //   minItems: 0,
  //   selectionText: 'гость',
  //   textPlural: 'гостей',
  //   controls: {
  //     position: 'right',
  //     displayCls: 'iqdropdown-item-display',
  //     controlsCls: 'iqdropdown-item-controls',
  //     counterCls: 'counter'
  //   },
  //   // fires when an item quantity changes
  //   onChange: (id, count, totalItems) => {
  //     const adChilCount = globalItemCount.adults + globalItemCount.children
  //     let infantCount = globalItemCount.infant
  //     console.log(id, count, totalItems)
  //     if (adChilCount == 1){
  //       iqdropdownSelection.html(adChilCount + ' гость')
  //     } else if (adChilCount > 1 && adChilCount < 5 ){
  //       iqdropdownSelection.html(adChilCount + ' гостя')
  //     } else if (adChilCount > 4 || adChilCount == 0){
  //       iqdropdownSelection.html(adChilCount + ' гостей')
  //     } else {
  //       iqdropdownSelection.html('Сколько гостей')
  //     }
      
  //     if (infantCount == 1){
  //       iqdropdownSelection.html(iqdropdownSelection.html() + ', ' + infantCount + ' младенец')
  //     } else if (infantCount > 1 && infantCount < 5 ){
  //       iqdropdownSelection.html(iqdropdownSelection.html() + ', ' + infantCount + ' младенеца')
  //     } else if (infantCount > 4 ){
  //       iqdropdownSelection.html(iqdropdownSelection.html() +', ' + infantCount + ' младенецев')
  //     } 
  //   },
  //   // return false to prevent an item decrement
  //   beforeDecrement: (id, itemCount) => {
  //     globalItemCount[id]--
  //     return true
  //   },
  //   // return false to prevent an item increment
  //   beforeIncrement: (id, itemCount) => {
  //     globalItemCount[id]++
  //     return true
  //   }
  // })
  // $('.iqdropdown-selection').html('Сколько гостей')

  // function clear (flag) {
  //   if (flag) {
  //     globalItemCount['adults'] = 0
  //     globalItemCount['children'] = 0
  //     globalItemCount['infant'] = 0
  //     clearFlag = false
  //   }
  // }
  // $('.btn-clear').click(()=>{
  //   console.log(globalItemCount)
  //   clearFlag = true
  //   clear (clearFlag)
  //   $('.counter').html('0')
  //   $('.iqdropdown-selection').html('Сколько гостей')
  // })
})


function fixDropdownButtons () {
  let dropdownButtons = $('.iqdropdown-item-controls')
  for (let i = 0; i < dropdownButtons.length; i++){
    let decrementBtn = $(dropdownButtons[i]).find('.button-decrement')
    let incrementBtn = $(dropdownButtons).find('.button-increment')
    let counter = $(dropdownButtons).find('.counter')
    let totalCount = parseInt($('#iqOpen').html().match(/\d+/))
    console.log($('#iqOpen').html())
    if (counter.text() == 0){
      $(decrementBtn[i]).css('border-color', 'rgba(31, 32, 65, 0.25)')
      console.log('sss')
    } else if (totalCount == 9) {
      incrementBtn.css('border-color', 'rgba(31, 32, 65, 0.25)')
      console.log('aaa')
    }
  }
}


function toggleGlyphicon (){
  if ($('.iqdropdown-menu').hasClass('menu-open')){
    $('#iqOpen').find('span').toggleClass('glyphicon-down glyphicon-up')
  } else if ($('#iqOpen').click(() => {})) {
    $('#iqOpen').find('span').toggleClass('glyphicon-down glyphicon-up')
  }
}

const iqdrop = {
  item1: 0,
  item2: 0,
  item3: 0
}

let flagZerro = false

$(document).ready(() => {
  $('.iqdropdown').iqDropdown({
    // max total items
    maxItems: Infinity,
    // min total items
    minItems: 0,
    // text to show on the dropdown
    selectionText: 'гость',
    // text to show for multiple items
    textPlural: 'гостей',
    // buttons to increment/decrement
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
    // fires when an item quantity changes
    onChange: (id, count, totalItems) => {
      const sumGuest = iqdrop['item1'] + iqdrop['item2']
      let textDrop = '';
      if((sumGuest >= 5) || (sumGuest == 0)){
        textDrop = sumGuest + ' гостей'
      } else if ((sumGuest > 1) && (sumGuest < 5)){
        textDrop = sumGuest + ' гостя'
      } else if ( sumGuest == 1){
        textDrop = sumGuest + ' гость'
      }

      if (iqdrop['item3'] >= 5){
        textDrop = textDrop + ', ' + iqdrop['item3'] + ' младенцев' 
      } else if (iqdrop['item3'] == 1){
        textDrop = textDrop + ', ' + iqdrop['item3'] + ' младенец' 
      } else if ((iqdrop['item3'] > 1) && (iqdrop['item3'] < 5)){
        textDrop = textDrop + ', ' + iqdrop['item3'] + ' младенца' 
      }
      
      $('.iqdropdown-selection').html(textDrop + '<span class="glyphicon glyphicon-up"></span>')

      if (totalItems != 0){
        $('.btn-clear').css('display', 'block')
      } else {
        $('.btn-clear').css('display', 'none')
      }
    },
    // return false to prevent an item decrement
    beforeDecrement: (id, itemCount) => {
      let totalCount = itemCount['item1'] + itemCount['item2'] + itemCount['item3'] + 1
      if (flagZerro) {
        itemCount['item1'] = 0
        itemCount['item2'] = 0
        itemCount['item3'] = 0
        flagZerro = false
      } else if (totalCount > 0) {
        iqdrop[id] = itemCount [id] - 1
        return true
      }
    },
    // return false to prevent an item increment
    beforeIncrement: (id, itemCount) => {
      let totalCount = itemCount['item1'] + itemCount['item2'] + itemCount['item3'] + 1
      if (flagZerro) {
        itemCount['item1'] = 0
        itemCount['item2'] = 0
        itemCount['item3'] = 0
        flagZerro = false
        iqdrop[id] = itemCount [id] + 1
        return true 
      } else if (totalCount < 10){
        iqdrop[id] = itemCount [id] + 1
        return true 
      }
    }
  })

  $('.btn-clear').click((event) => {
    iqdrop['item1'] = 0
    iqdrop['item2'] = 0
    iqdrop['item3'] = 0
    flagZerro = true
    $('.counter').html('0')
    $('.iqdropdown-selection').html('Сколько гостей' + '<span class="glyphicon glyphicon-up"></span>')
    $('.iqdropdown').find('.input-btn').css({
      'border-color': 'rgba(31, 32, 65, 0.5)',
      'border-bottom-right-radius': '0',
      'border-bottom-left-radius': '0'
    })
    $('.btn-clear').css('display', 'none')
    event.preventDefault
  })

  $('#iqOpen').click((event) => {
    $('.iqdropdown-menu').toggleClass('menu-open')
    $('.iqdropdown').find('.input-btn').css({
      'border-color': 'rgba(31, 32, 65, 0.5)',
      'border-bottom-right-radius': '0',
      'border-bottom-left-radius': '0'
    })
    toggleGlyphicon ()
    event.preventDefault;
  })
  
  
  $(document).click((event) => {
    // if the event is not triggered by your submenu, hide it.
    if (($(event.target).closest("#iqOpen").length) || ($(event.target).closest(".btn-clear").length)) return;
    
    if ($('.iqdropdown-menu').hasClass('menu-open')){
      toggleGlyphicon ()
      $('.iqdropdown-menu').removeClass('menu-open')
    }
    event.stopPropagation()
  })
})
