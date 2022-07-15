import React from 'react'

export default function BroadcastItem({tvShow, tvChannel}) { // Блок с текущей программой и каналом.
  return (
    <>
      <p>{tvShow}</p>
      <span>{tvChannel}</span>
    </>
  )
}
