import "../../ui-kit/cards/in-room-card/in-room-card"
import "../../ui-kit/form-elements/comment/comment"

$(document).ready(() => {
  let data = {
    settings: ['0%', '25%', '25%', '50%'],
    class: ['.bad', '.passably', '.good', '.magnificently'],
    elements: [],
    offsets: [],
    elementsHover: [],
    offsetsHover: []
  }

  function arcLength (percent, l) {
    return (parseFloat(percent) * l / 100)
  }
  
  function chart(sel, value, offset) {
    let pie = arcLength(value, 364.24) - 2
    $(sel).attr({
      'stroke-dasharray': `${pie > 0 ? pie : '0'} 364.24`,
      'stroke-width': `${pie > 0 ? '4' : '0'}`,
      'stroke-dashoffset': offset
    })
  }
  
  function chartHover (sel, value, offset, offset2){
    $(sel).hover(
      function() {
        $(this).css({
          'r' : '55',
          'stroke-dasharray': `${arcLength(value, 345.4) - 2} 345.4`,
          'stroke-width': '10',
          'stroke-dashoffset': offset2,
          'cursor': 'pointer'
        })
        $('.chart__votes-count').find(sel).css('display', 'block')
      }, function() {
        $(this).css({
          'r' : '58',
          'stroke-dasharray': `${arcLength(value, 364.24) - 2} 364.24`,
          'stroke-width': '4',
          'stroke-dashoffset': offset
        })
        $('.chart__votes-count').find(sel).css('display', 'none')
      }
    )
  }

  for (let i = 0; i < 4; i++) {
    let element = arcLength(data.settings[i], 364.24)
    let offset = i == 0 ? -2 : (data.elements[i-1] > 0 ? data.offsets[i-1] - data.elements[i-1] : data.offsets[i-1])
    let elementHover = arcLength(data.settings[i], 345.4)
    let offsetHover = i == 0 ? -2 : (data.elementsHover[i-1] > 0 ? data.offsetsHover[i-1] - data.elementsHover[i-1] : data.offsetsHover[i-1])

    data.elements.push(element)
    data.offsets.push(offset)
    data.elementsHover.push(elementHover)
    data.offsetsHover.push(offsetHover)
    
    chart(data.class[i], data.settings[i], data.offsets[i])
    chartHover(data.class[i], data.settings[i], data.offsets[i], data.offsetsHover[i])
  }

})