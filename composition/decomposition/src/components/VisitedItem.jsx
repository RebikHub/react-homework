import React from 'react'

export default function VisitedItem({url, name, text}) { // Единица посещаемая с ссылкой
  return (
    <>
      <a href={url}>{name}</a>
      <p>{text}</p>
    </>
  )
}
