import React from 'react'

export default function ThirdWeek(props) {
  const days = props.week;
  const date = props.date;
  const weekDays = days.map((day) =>
    day === date ? <td className="ui-datepicker-today" key={day.toString()}>{day}</td> : <td key={day.toString()}>{day}</td>
  )
  return (
    <tr>{weekDays}</tr>
  )
}
