import React from 'react'

export default function Label(props) {
  return (
    <div className={`wrap-item wrap-item-${props.visual}`}>
      <span className="label">{props.title}</span>
      {props.children}
    </div>
  )
}
