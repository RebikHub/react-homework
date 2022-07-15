import React from 'react'
import HeadLink from './HeadLink'

export default function CardMap({map}) { // Блок - карта местности
  return (
    <div className="maps-card card">
      <HeadLink url={map.url} text={map.name}/>
      <p>{map.text}</p>
    </div>
  )
}
