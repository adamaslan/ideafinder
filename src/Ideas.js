//Ideas.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LogRocket from "logrocket";

LogRocket.init("gbbmyq/statedfun");

export default function Ideas({ stuff }) {
  const ideasData = useSelector((reduxState) => reduxState.ideas);

  const dispatch = useDispatch();

  console.log(ideasData);
  const handleSelect = (dog) => {
    dispatch({
      type: "SelectCategory",
      payload: dog,
    });

    /* dispatch({
      type: "SelectCategory1",
      payload: "deep",
    })*/
  };
  return (
    <div>
      <h1>Ideas</h1>
      <h2>{ideasData.selected[0]}</h2>
      <button onClick={() => handleSelect("fun")}> Select Fun </button>
      <br />
      <button onClick={() => handleSelect("deep")}> Select Deep </button>
    </div>
  );
}
