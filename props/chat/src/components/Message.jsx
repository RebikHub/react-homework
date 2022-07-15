import React from 'react'

export default function Message({name, time, text}) {
  return (
    <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{name}</span>
    </div>
    <div className="message other-message float-right">{text}</div>
  </li>
  )
}
