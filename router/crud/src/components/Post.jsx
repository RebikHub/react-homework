import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Post(props) {
  const params = useParams();
  let id;
  let time;
  let content;

  if (props.post) {
    id = props.post.id;
    time = new Date(props.post.created).toLocaleTimeString();
    content = props.post.content;
  } else if(params) {
    const obj = props.posts.find((el) => el.id === Number(params.postId));
    id = obj.id;
    time = new Date(obj.created).toLocaleTimeString();
    content = obj.content;
  };

  return (
    <div className="post">

    <Link to={`/posts/${id}`}>
      <header className="post-head">
        <img src="#" alt="#" />
        <div className="post-head-title">
          <h4 className="name-creator">UserName</h4>
          <p className="description-creator">
            Post creator
            <span className="create-time"> - {time}</span>
            </p>
        </div>
        {props.close}
      </header>
      <p className="post-body">{content}</p>
    </Link>

    <div className="post-likes">
      <div className="likes">
        <span/>
        <p>Нравиться</p>
      </div>
      <div className="comment-on">
        <span/>
        <p>Комментировать</p>
      </div>
    </div>
    {props.children}
  </div>
  );
};
