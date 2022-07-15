import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EditPost({posts, id, editPost}) {
  const post = posts.find((el) => el.id === Number(id));
  const [input, setInput] = useState(post.content);

  return (
    <div className="edit-publish">

      <div className="edit-head">
        <h3>Редактировать публикацию</h3>
        <Link to={'/'} className="edit-close"/>
      </div>

      <div className="edit-body">
        <img src="" alt="" />
        <input
          className="edit-text"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}/>
      </div>

      <div className="edit-tags">
        <div className="edit-photo">
          <span className="edit-photo-png"/>
          <p>Фото/Видео</p>
        </div>
        <div className="edit-friends">
          <span className="edit-friends-png"/>
          <p>Отметить друзей</p>
        </div>
        <div className="edit-emoji">
          <span className="edit-emoji-png"/>
          <p>Чувства/Действия</p>
        </div>
        <div className="edit-point">
          <span className="edit-point-png"/>
          <p>Отметить посещение</p>
        </div>
        <div className="edit-gif">
          <span className="edit-gif-png"/>
          <p>GIF</p>
        </div>
      </div>
      <div className="edit-save">
        <Link to={'/'} type="button" className="edit-btn" onClick={() => {
            editPost(input)
            setInput('')
          }
        }>
          Сохранить
        </Link>
      </div>
    </div>
  );
};
