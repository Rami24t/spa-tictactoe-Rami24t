import {createContext, useReducer } from "react";

export const Context = createContext({});

export default function ContextProvider({children}) {

    const reducer = (prevState, action)=>{
        console.log(prevState.player);
        switch(action.type){
            case 'reset':
                return {
                    ...prevState,
                    player: 'X',
                    board: 
                [null,null,null,null,null,null,null,null,null],
                moves: [],
                winner: null
            }

            case 'goTo':
                prevState.moves.length = action.idx+1;
                console.log(prevState.moves);
                return {
                    ...prevState, winner: action.move.winner, board: action.move.board, player: action.move.prevPlayer == 'X' ? 'O' : 'X'
                }
            case 'clicked':
                prevState.board[action.number]= prevState.player;
                prevState.moves = [...prevState.moves,
                    {prevPlayer: prevState.player,
                    board: [...prevState.board],
                    winner: prevState.winner                
                }];
             prevState.winner = prevState.checkWin(prevState.board);
            return {...prevState, player: prevState.nextPlayer()}
                default:
                    break;
                }
    return prevState
}

const [state,dispatch] = useReducer(reducer,
    {
        winner: null,
        player: 'X',
        board: 
       [
           null,null,null,
           null,null,null,
           null,null,null
       ],
       moves: [
    //     {
    //         prevPlayer: 'O',
    //         board: [
    //         null,null,'null',
    //         null,null,null,
    //         null,null,null
    //         ],
    //          winner: null
    // },
       ],
        nextPlayer:
        function(){
            return (this.player == 'X') ? 'O': 'X'
        },
        checkWin:
        function(aBoard){
            if(
                (aBoard[0]!==null && aBoard[0]===aBoard[1] && aBoard[1] === aBoard[2]) ||
                (aBoard[3]!==null && aBoard[3]===aBoard[4] && aBoard[4]==aBoard[5]) ||
                (aBoard[6]!==null && aBoard[6]==aBoard[7] && aBoard[7] === aBoard[8]) ||
                (aBoard[0]!==null && aBoard[0]==aBoard[3] && aBoard[3] === aBoard[6]) ||
                (aBoard[1]!==null && aBoard[1]==aBoard[4] && aBoard[4] === aBoard[7]) ||
                (aBoard[2]!==null && aBoard[2]==aBoard[5] && aBoard[5] === aBoard[8]) ||
                (aBoard[0]!==null && aBoard[0]==aBoard[4] && aBoard[4] === aBoard[8]) ||
                (aBoard[2]!==null && aBoard[2]==aBoard[4] && aBoard[4] === aBoard[6])
                )
                return this.player;
            else
            return null;
        }
,
})


return <Context.Provider value={{state, dispatch}}>
{children}
</Context.Provider>
}

// by Rami Al-Saadi / Nov 2 2022