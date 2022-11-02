import React from "react";
import Board from "../Board/Board";

export default function Game() {
    return (
      <article className="game container mt-5">
        <section className="row">
          <div className="col-sm-8 game-board">
            <Board />
          </div>
          <div className="col-sm-4 game-info">
            <p className="h2">{/* status */}</p>
            <ul className="nav nav-pills flex-column">
                <li><button>Start the Game</button></li>
                <li><button>Go to #1</button></li>
                <li><button>Go to #2</button></li>
                <li><button>Go to #3</button></li>
            </ul>
          </div>
        </section>
      </article>
    );
  }