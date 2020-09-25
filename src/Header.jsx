import React from "react";

export default function Header(props) {
  return (
    <div className="headerRoot">
      <input
        className="input"
        placeholder="type your post here"
        onChange={(e) => props.inputChangeHandler(e)}
        value={props.inputValue}
      />
      <button
        disabled={!props.inputValue.length}
        onClick={props.submitHandler}
        className="button"
      >
        Submit your post
      </button>
    </div>
  );
}
