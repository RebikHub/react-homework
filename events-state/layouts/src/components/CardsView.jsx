import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView({cards}) {
  return (
    <div className='cards'>
      {cards.map((el, i) => <ShopCard name={el.name} 
                                 price={el.price} 
                                 color={el.color} 
                                 img={el.img} 
                                 key={i}/>)}
    </div>
  )
}
