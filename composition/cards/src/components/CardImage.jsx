import React from 'react'

export default function CardImage(props) {
  return (
    <img src={props.href} className="card-img-top" alt={props.name}/>
  )
}
