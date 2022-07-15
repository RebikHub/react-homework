import React from 'react'
import Video from './Video';

export default function VideoList(props) {
  return props.list.map((el,i) => <Video url={el.url} date={el.date} key={i}/>);
}
