import React from 'react'

export default function NewsItem({img, url, text}) { // Новость - ссылка
  return (
    <>
      <img src={img} alt="..." />
      <a href={url}>{text}</a>
    </>
  )
}
