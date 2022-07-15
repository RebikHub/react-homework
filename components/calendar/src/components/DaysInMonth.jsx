import React from 'react'
import FifthWeek from './FifthWeek'
import FirstWeek from './FirstWeek'
import FourthWeek from './FourthWeek'
import SecondWeek from './SecondWeek'
import ThirdWeek from './ThirdWeek'

export default function DaysInMonth(props) {
  return (
    <tbody>
      <FirstWeek week={props.days.first} date={props.date}/>
      <SecondWeek week={props.days.second} date={props.date}/>
      <ThirdWeek week={props.days.third} date={props.date}/>
      <FourthWeek week={props.days.fourth} date={props.date}/>
      <FifthWeek week={props.days.fifth} date={props.date}/>
    </tbody>
  )
}
