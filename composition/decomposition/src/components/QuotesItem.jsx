import React from 'react'

export default function QuotesItem({currency, value, difference}) { // Блок с котировкой
  return (
    <>
      <h5>{currency}</h5>
      <p>{value}</p>
      <span>{difference}</span>
    </>
  )
}
