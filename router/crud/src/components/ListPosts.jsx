import React from 'react';
import FooterPostComment from './FooterPostComment';
import Post from './Post';

export default function ListPosts({posts}) {
  return (
      <div className="list-posts">
        {posts.map((el) => 
          <Post post={el} key={el.id}>
            <FooterPostComment/>
          </Post>
        )}
      </div> 
  );
};
