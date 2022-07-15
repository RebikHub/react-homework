import React from 'react';
import './App.css';
import data from './data';
import Listing from './components/Listing';

export default function App() {
  return (
    <Listing items={data}/>
  );
}
