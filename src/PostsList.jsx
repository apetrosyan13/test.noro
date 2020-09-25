import React from "react";
import Post from "./Post";
import uniqid from "uniqid";
export default function PostsList(props) {
  return (
    <div className="postsList">
      {props.posts.map((post, index) => (
        <Post
          key={uniqid()}
          text={post}
          index={index}
          deletePost={props.deletePost}
          reductPost={props.reductPost}
        />
      ))}
    </div>
  );
}
