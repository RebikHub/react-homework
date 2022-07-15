import React from 'react'
import Message from './Message'
import Response from './Response'
import Typing from './Typing';

export default function MessageHistory({list}) {
  if (list.length === 0) {
    return null;
  }
  const chatList = list.map(el => {
    if (el.type === 'message') {
      return <Message name={el.from.name} time={el.time} text={el.text} key={el.id}/>
    } else if (el.type === 'response') {
      return <Response name={el.from.name} time={el.time} text={el.text} key={el.id}/>
    }
    return <Typing name={el.from.name} time={el.time} key={el.id}/>
  })
  return (
    <ul>
      {chatList}
    </ul>
  )
}

MessageHistory.defaultProps = {
  list: []
}
