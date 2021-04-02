import { useState } from "react";
import Board from "../board/Board";
import { calculateWinner } from "../CalculateWinner";
import "./game.css";

const Game = (): JSX.Element => {
    // Initialize Tic-Tac-Toe board with 9 spots that are null.
    const [board, setBoard] = useState(Array(9).fill(null) as (string | null)[]);
    // X player goes first.
    const [xIsNext, setXIsNext] = useState(true);
    // Constantly check if the current move is a winning move or not.
    const winner: string | null = calculateWinner(board);

    const handleClick = (i: number): void => {
        const boardCopy: (string | null)[] = [...board];

        // If user clicks an occupied square or game is won then return.
        if (winner || boardCopy[i]) return;

        // Puts an X or O in an empty square.
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        // Next player O.
        setXIsNext(!xIsNext);
    };

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div className="game-display">
                <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
                <button className="start-btn" onClick={() => setBoard(Array(9).fill(null))}>
                    Reset Game
                </button>
            </div>
        </>
    );
}

export default Game;