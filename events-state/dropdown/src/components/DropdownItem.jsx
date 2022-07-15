import React from 'react'

export default function DropdownItem({change, text, onChange}) {
  return (
    <li className={change ? 'active' : null}>
      <button className='change' onClick={(ev) => onChange(ev)}>{text}</button>
    </li>
  )
}
