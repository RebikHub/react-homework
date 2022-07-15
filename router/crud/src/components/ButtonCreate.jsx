import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonCreate() {
  return (
    <div className="main-head">
      <Link to={'/posts/new'} className="main-create-btn">Создать пост</Link>
    </div>
  );
};
