import React from 'react'
import BroadcastItem from './BroadcastItem'
import HeadLink from './HeadLink'

export default function CardTvProgram({tvProgram}) { // Блок - телепрограмма
  return (
    <div className="tv-program-card card">
      <header>
        <HeadLink url={tvProgram.url} text={tvProgram.name}/>
        <a href={tvProgram.link.url}>{tvProgram.link.name}</a>
      </header>
      <ul>
        {tvProgram.program.map((el,i) =>
          <li key={i}>
            <time>{el.time}</time>
            <BroadcastItem tvShow={el.name} tvChannel={el.channel}/>
          </li>
        )}

      </ul>
    </div>
  )
}
