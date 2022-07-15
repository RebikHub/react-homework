import React, { useState } from 'react'
import hexRgb from '../hexRgb';

export default function Converter() {
  const [color, setColor] = useState({
    hex: '#009eff',
    rgb: ''
  })

  function handlerInput(ev) {
    if (/^#\w{3,6}$/.test(ev.target.value)) {
      setColor(prevColor => ({...prevColor, hex: ev.target.value}))
      setColor(prevColor => ({...prevColor, rgb: hexRgb(ev.target.value)}))
    } else {
      setColor(prevColor => ({...prevColor, hex: '#009eff'}))
      setColor(prevColor => ({...prevColor, rgb: 'Ошибка!'}))
    }
  }


  return (
    <div className='converter' style={{backgroundColor: color.hex}}>
      <input type="text" onChange={handlerInput}/>
      <p className='converter-rgb'>{color.rgb}</p>
    </div>
  )
}
