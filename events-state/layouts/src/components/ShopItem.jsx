import React from 'react'

export default function ShopItem({name, price, color, img}) {
  return (
    <div className='shop-item'>
      <img src={img} alt={name} />
      <h2 className='item-title'>{name}</h2>
      <p>{color}</p>
      <p>${price}</p>
      <button className='item-button'>add to card</button>
    </div>
  )
}
