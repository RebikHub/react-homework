/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url}></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}
