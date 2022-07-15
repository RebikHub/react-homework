import React from 'react'
import QuotesItem from './QuotesItem'

export default function NewsQuotes({quotes}) { // Блок котировок
  console.log(quotes);
  return (
    <ul className="quotes">
      {quotes.map((el,i) =>
        <li key={i}>
          {<QuotesItem
            currency={el.currency}
            value={el.value}
            difference={el.difference}/>}
        </li>
      )}
    </ul>
  )
}
