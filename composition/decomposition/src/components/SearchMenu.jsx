import React from 'react'

export default function SearchMenu({searchMenu}) { // Меню - ссылки разделов
  return (
    <ul className="list-nav">
      {searchMenu.map((el,i) => 
        <li key={i}>
          <a href={el.url}>{el.text}</a>
        </li>
      )}
    </ul>
  )
}
