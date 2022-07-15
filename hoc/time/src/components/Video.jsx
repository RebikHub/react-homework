/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import changeDate from '../HOC/changeDate'
import DateTime from './DateTime'

const DateTimePretty = changeDate(DateTime)

export default function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} />
      <DateTimePretty date={props.date} />
    </div>
  )
}
