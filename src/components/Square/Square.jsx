import React, { useRef } from "react";
import { Context } from "../../utils/Context";
import { useContext, useEffect } from "react";

export default function Square({playerLetter, number}) {

const {state, dispatch} = useContext(Context)

const handleClick = (e) => {
  e.target.classList.add('selected');
  !state.winner ? dispatch({type: 'clicked', number: number }) : null;
}


  return <button className={state.winner?' selected square':'square'} onClick={handleClick}>{playerLetter}</button>;
  }