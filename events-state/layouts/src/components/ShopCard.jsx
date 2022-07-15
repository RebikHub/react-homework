import React from 'react'

export default function ShopCard({name, price, color, img}) {
  return (
    <div className='shop-card'>
      <h2 className='card-title'>{name}</h2>
      <p className='card-color'>{color}</p>
      <img src={img} alt={name} />
      <div className='card-price-button'>
        <p className='card-price'>${price}</p>
        <button className='card-button'>add to cart</button>
      </div>
    </div>
  )
}
