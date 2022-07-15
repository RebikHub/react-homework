import React from 'react'
import HeadLink from './HeadLink'
import VisitedItem from './VisitedItem'

export default function CardVisited({visited}) { // Блок - посещаемые сайты
  return (
    <div className="visited-card card">
      <HeadLink url={visited.url} text={visited.name}/>
      <ul>
        {visited.category.map((el,i) =>
          <li key={i}>
            <VisitedItem url={el.url} name={el.name} text={el.text}/>
          </li>
        )}
      </ul>
    </div>
  )
}
