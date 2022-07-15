import React from 'react';
import './App.css';
import Store from './components/Store';
import products from './Products'


export default function App() {
    return (
        <Store products={products} />
    );
}
