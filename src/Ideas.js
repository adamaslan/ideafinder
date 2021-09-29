//Ideas.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LogRocket from "logrocket";
import Article from "./Article";

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
      type: "SelectCategory1",
      payload: "deep",
    });
  };
  return (
    <div>
      <h1>Ideas</h1>
      <button onClick={handleSelect}> "SelectCategory" </button>
      <br />
      <button onClick={handleSelect}> "SelectCategory1" </button>
    </div>
  );
}
