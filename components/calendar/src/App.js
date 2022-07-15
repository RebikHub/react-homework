import React from 'react';
import './App.css';
import Calendar from './components/Calendar';
import { date, days } from './date';

export default function App() {
  return (
    <Calendar date={date} days={days}/>
  );
}
