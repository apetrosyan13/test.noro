import React, { useState } from "react";
import Header from "./Header";
import PostsList from "./PostsList";

export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]);
  function inputChangeHandler(e) {
    setInputValue(e.target.value);
  }
  function submitHandler() {
    const newPosts = [...posts];
    newPosts.push(inputValue);
    setPosts(newPosts);
    setInputValue("");
  }
  function reductPost(index, newText) {
    const newPosts = [...posts];
    newPosts[index] = newText;
    setPosts(newPosts);
  }
  function deletePost(index) {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  }
  return (
    <div className="root">
      <div className="main">
        <Header
          inputValue={inputValue}
          inputChangeHandler={inputChangeHandler}
          submitHandler={submitHandler}
        />
        <PostsList
          posts={posts}
          reductPost={reductPost}
          deletePost={deletePost}
        />
      </div>
    </div>
  );
}
