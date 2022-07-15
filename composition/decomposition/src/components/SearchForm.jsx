import React from 'react';

export default function SearchForm(prop) { // Форма поиска
  return (
    <form action="" className="search-form">
      <input
        type="text"
        className="search-input"
        onChange={prop}/>
      <button className="search-btn">Найти</button>
    </form>
  );
}
