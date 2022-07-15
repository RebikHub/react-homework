import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      {props.image}
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}
