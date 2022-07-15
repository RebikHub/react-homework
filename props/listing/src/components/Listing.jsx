import React from 'react';
import Item from './Item';

function cutTitle(text) {
  const splitText = text.split('')
  let resultText = []
  for (let i = 0; i < 50; i++) {
    resultText.push(splitText[i])
  }
    return `${resultText.join('')}...`
}

export default function Listing({items}) {
  const products = items.filter(el => el.state === 'active');
  products.forEach(el => {
    if (el.quantity <= 10) {
      el.level = 'low'
    } else if (el.quantity > 10 && el.quantity <= 20) {
      el.level = 'medium'
    } else if (el.quantity > 20) {
      el.level = 'high'
    }

    el.image = el.MainImage.url_570xN;

    if (el.title.length > 50) {
      el.titleText = cutTitle(el.title)
    } else {
      el.titleText = el.title
    }

    if (el.currency_code === 'USD') {
      el.currencyPrice = `$${el.price}`
    } else if (el.currency_code === 'EUR') {
      el.currencyPrice = `€${el.price}`
    } else {
      el.currencyPrice = `${el.price} ${el.currency_code}`
    }
  })

  return (
  <div className="item-list">
    {items.map(el => <Item 
      url={el.url}
      image={el.image}
      title={el.titleText}
      price={el.currencyPrice}
      quantity={el.quantity}
      level={el.level}
      key={el.listing_id}
      />)}
  </div>
  )
}

Listing.defaultProps = {
  items: []
}
