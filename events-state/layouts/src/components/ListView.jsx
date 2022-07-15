import React from 'react'
import ShopItem from './ShopItem'

export default function ListView({items}) {
  return (
    <div className='items'>
    {items.map((el, i) => <ShopItem name={el.name} 
                               price={el.price} 
                               color={el.color} 
                               img={el.img} 
                               key={i}/>)}
  </div>
  )
}
