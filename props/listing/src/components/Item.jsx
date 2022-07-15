import React from 'react'

export default function Item({url, image, title, price, quantity, level}) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={image} alt={title}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={`item-quantity level-${level}`}>{quantity} left</p>
      </div>
    </div>
  )
}
