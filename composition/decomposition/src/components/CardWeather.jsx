import React from 'react'
import HeadLink from './HeadLink'

export default function CardWeather({weather}) { // Блок - погода
  return (
    <div className="weather-card card">
      <HeadLink text={weather.name} url={weather.url}/>
      <div className="weather">
        <img src={weather.img} alt="..." />
        <p>{weather.current}</p>
        <span>{weather.today}</span>
      </div>
    </div>
  )
}
