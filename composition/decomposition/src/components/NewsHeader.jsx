import React from 'react'
import HeadLink from './HeadLink'

export default function NewsHeader({news, date}) { // Заголовок блока новостей
  return (
    <header className="header-news">
      <ul className="header-news-list">
        {news.map((el,i) =>
          <li key={i}>
            {<HeadLink
              url={el.url}
              text={el.name}/>}
          </li>)}
      </ul>
      <p>{date}</p>
    </header>
  )
}
