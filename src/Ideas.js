//Ideas.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LogRocket from "logrocket";

LogRocket.init("gbbmyq/statedfun");

export default function Ideas({ stuff }) {
  const ideasData = useSelector((reduxState) => reduxState.ideas);

  const dispatch = useDispatch();

  console.log(ideasData);
  const handleSelect = () => {
    dispatch({
      type: "SelectCategory",
      payload: "fun",
    });
    dispatch({
      type: "SelectCategory",
      payload: "deep",
    });
  };
  return (
    <div>
      <p>Ideas</p>
      <button onClick={handleSelect}> "SelectCategory" </button>
      <button onClick={handleSelect}> "SelectCategory1" </button>
    </div>
  );
}
