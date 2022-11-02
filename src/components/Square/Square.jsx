import React, { useRef } from "react";
import { Context } from "../../utils/Context";
import { useContext, useEffect } from "react";

export default function Square({playerLetter, number}) {

const {state, dispatch} = useContext(Context)

const handleClick = () => !state.winner ? dispatch({type: 'clicked', number: number }) : null


  return <button onClick={handleClick} className="square">{playerLetter}</button>;
  }