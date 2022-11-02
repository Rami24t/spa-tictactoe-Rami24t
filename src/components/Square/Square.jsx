import React from "react";
import { Context } from "../../utils/Context";
import { useContext } from "react";

export default function Square({playerLetter, number}) {

const {state, dispatch} = useContext(Context)


    return <button onClick={()=>!state.winner ? dispatch(
      {type: 'clicked', number: number }) : null} className="square">{playerLetter}</button>;
  }