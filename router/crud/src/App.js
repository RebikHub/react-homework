import React, { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import ListPosts from "./components/ListPosts";
import EditPost from "./components/EditPost";
import { Link, Route, Routes } from "react-router-dom";
import ButtonCreate from "./components/ButtonCreate";
import Post from "./components/Post";
import FooterPostButtons from './components/FooterPostButtons';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [post, setPost] = useState(null);
  const [postId, setId] = useState(0);
  const [del, setDel] = useState(null);

  function fetchGet() {
    fetch(process.env.REACT_APP_SERVER)
    .then(resp => resp.json())
    .then(json => {
      setPosts(json)
    });
  };

  useEffect(() => {
    fetchGet();
  }, []);

  useEffect(() => {
    if (post !== null) {
      function fetchPost() {
        fetch(process.env.REACT_APP_SERVER, {
          method: 'POST',
          body: JSON.stringify(post)
        })
          .then(() => fetchGet());
        setPost(null);
      }
      fetchPost();
    };
  }, [post]);

  useEffect(() => {
    function fetchDelete() {
      fetch(process.env.REACT_APP_SERVER + del, {
        method: 'DELETE'
      })
      .then(() => fetchGet());
    };
    fetchDelete();
  }, [del]);

  function publishPost() {
    if (content !== '') {
      setPost({
        content: content,
        id: 0
      });
      setContent('');
    };
  };

  function removePost(id) {
    setDel(id);
  };

  function inputCreate(ev) {
    setContent(ev.target.value);
  };

  function closeCreate() {
    setContent('');
  };

  function editPost(post) {
    setPost({
      content: post,
      id: Number(postId)
    });
    setId(0);
  };

  function idPost(id) {
    setId(id);
  };

  return (
    <div className="main-page">
      <ButtonCreate/>
      <Routes>
        <Route path={'/'} element={<ListPosts posts={posts}/>}/>
        <Route path={'/posts/new'} element={<CreatePost
            publishPost={publishPost}
            create={content}
            handleInputCreate={inputCreate}
            closeCreatePost={closeCreate}/>}/>
        <Route path={'/posts/:postId'} element={
            <Post close={<Link to={'/'} className="post-close"/>} posts={posts}>
              <FooterPostButtons idPost={idPost} remove={removePost} />
            </Post>
          } />
        <Route path={'/edit'} element={<EditPost posts={posts} id={postId} editPost={editPost}/>}/>
      </Routes>
    </div>
  );
}
