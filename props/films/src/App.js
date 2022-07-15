import React from 'react';
import Stars from './components/Stars';
import './App.css';

export default function App() {
  function randomStars() {
    return Math.floor(Math.random()*5);
  }
  return (
    <Stars count={randomStars()}/>
  );
}
