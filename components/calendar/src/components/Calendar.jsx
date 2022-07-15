import React from 'react';
import DayColumn from './DayColumn';
import Weekday from './Weekday';
import DaysInMonth from './DaysInMonth';

export default function Calendar (props) {
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{props.date.weekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{props.date.numDate}</div>
          <div className="ui-datepicker-material-month">{props.date.dayMonth}</div>
          <div className="ui-datepicker-material-year">{props.date.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{props.date.month}</span>&nbsp;<span className="ui-datepicker-year">{props.date.year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <DayColumn/>
        <Weekday/>
        <DaysInMonth days={props.days} date={props.date.numDate}/>
      </table>
    </div>
  )
}