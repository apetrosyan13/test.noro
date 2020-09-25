import React from "react";
import { useHistory } from "react-router-dom";

export default function AppChoose() {
  let history = useHistory();
  function toPost() {
    history.push("/post");
  }
  function toValidation() {
    history.push("/Validation");
  }
  return (
    <div className="chooseHeader">
      <div>
        {" "}
        <button className="chooseBtn" onClick={toPost}>
          Posts task
        </button>
        <button className="chooseBtn" onClick={toValidation}>
          Validation task
        </button>
      </div>
    </div>
  );
}
