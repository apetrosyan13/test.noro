import React, { useState } from "react";
export default function Post(props) {
  const [editOpen, setEditOpen] = useState("none");
  const [editOpenBoolean, setEditOpenBoolean] = useState(false);
  const [inputValue, setInputValue] = useState("");
  function editHandler() {
    if (editOpenBoolean) {
      setEditOpen("none");
    } else {
      setEditOpen("flex");
    }
    setEditOpenBoolean(!editOpenBoolean);
  }
  function inputHandler(e) {
    setInputValue(e.target.value);
  }
  function submitHandler() {
    props.reductPost(props.index, inputValue);
    setInputValue("");
    editHandler();
  }
  return (
    <div className="postRoot">
      <div className="commentText">{props.text}</div>
      <div className="postButtons">
        <p className="date">{new Date().toLocaleDateString()}</p>
        <div>
          <button
            className="btnDelete"
            onClick={() => props.deletePost(props.index)}
          >
            delete
          </button>
          <button className="btnEdit" onClick={editHandler}>
            Edit
          </button>
        </div>
      </div>
      <div style={{ display: editOpen, position: "absolute" }}>
        <input
          value={inputValue}
          onChange={(e) => inputHandler(e)}
          className="input"
        />
        <button
          className="button"
          onClick={submitHandler}
          disabled={!inputValue.length}
        >
          submit changes
        </button>
      </div>
    </div>
  );
}
