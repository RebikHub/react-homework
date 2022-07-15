import React from 'react'

export default function HeadLink({text, url}) { // Заголовок - ссылка
  return (
    <a href={url}>
      <h4>{text}</h4>
    </a>
  )
}
