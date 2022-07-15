import React from 'react'

export default function FirstWeek(props) {
  const days = props.week;
  const date = props.date;
  const weekDays = days.map((day) =>
    days[days.length-1] < day ? <td className="ui-datepicker-other-month" key={day.toString()}>{day}</td> :
    day === date ? <td className="ui-datepicker-today" key={day.toString()}>{day}</td> : <td key={day.toString()}>{day}</td>
  )

  return (
    <tr>{weekDays}</tr>
  )
}
