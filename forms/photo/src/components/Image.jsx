import React from 'react'

export default function Image({onRemove, href, name, id}) {
  return (
    <div className='image'>
      <img src={href} alt={name}/>
      <button className='close-image'
        type='button'
        onClick={() => onRemove(id)}
        ></button>
    </div>
  )
}
