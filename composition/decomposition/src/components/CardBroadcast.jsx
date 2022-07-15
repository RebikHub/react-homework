import React from 'react'
import HeadLink from './HeadLink'
import BroadcastItem from './BroadcastItem'

export default function CardBroadcast({broadcast}) { // Блок - что идет в эфире
  return (
    <div className="broadcast-card card">
      <HeadLink url={broadcast.url} text={broadcast.name}/>
      <ul>
        {broadcast.cast.map((el,i) =>
          <li key={i}>
            <img src={el.img} alt="..." />
            <BroadcastItem
              tvShow={el.tvShow}
              tvChannel={el.tvChannel}/>
          </li>
        )}
      </ul>
    </div>
  )
}
