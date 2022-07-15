import React from 'react'

export default function Typing({name, time}) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">{name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="fa">
        <span className="fa-circle dot-one"></span>
        <span className="fa-circle dot-two"></span>
        <span className="fa-circle dot-three"></span>
      </div>
    </li>
  )
}
