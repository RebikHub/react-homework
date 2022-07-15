import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function FooterPostButtons({remove, idPost}) {
  const params = useParams();

  return (
    <div className="post-edit-remove">
      <Link to={'/edit'} onClick={() => idPost(params.postId)} className="edit-btn">
        Изменить
      </Link>
      <Link to={'/'} onClick={() => remove(params.postId)} className="remove-btn">
        Удалить
      </Link>
    </div>
  );
};
