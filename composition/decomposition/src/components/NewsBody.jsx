import React from 'react';
import NewsItem from './NewsItem';

export default function NewsBody({news}) { // Тело блока с новостями
  return (
    <ul className="body-news">
      {news.map((el,i) => 
        <li key={i}>
          {<NewsItem
            img={el.img}
            url={el.url}
            text={el.text}/>}
        </li>)}
    </ul>
  );
}
