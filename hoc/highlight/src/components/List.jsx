
import React from 'react'
import highlighter from '../HOC/highlighter';
import Article from './Article';
import Video from './Video';

export default function List(props) {
  return props.list.map((item,i) => {
    let LabelComponent;
    switch (item.type) {
      case 'video':
        LabelComponent = highlighter(item, Video)
        break
      case 'article':
        LabelComponent = highlighter(item, Article)
        break
      // no default
    }
    return <LabelComponent {...item} key={i}/>
  });
}
