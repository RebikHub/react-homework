import React from 'react'

export default function Response({name, time, text}) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">{name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  )
}
