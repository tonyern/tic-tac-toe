import React, { useState } from "react";
import Board from "../board/Board";
import { calculateWinner } from "../CalculateWinner";

const Game = (): JSX.Element => {
    // Initialize Tic-Tac-Toe board with 9 spots that are null.
    const [board, setBoard] = useState(Array(9).fill(null));
    // X player goes first.
    const [xIsNext, setXIsNext] = useState(true);
    // Constantly check if the current move is a winning move or not.
    const winner = calculateWinner(board);

    const handleClick = (i: number): void => {
        const boardCopy = [...board];

        // If user clicks an occupied square or game is won then return.
        if (winner || boardCopy[i]) return;

        // Puts an X or O in an empty square.
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        // Next player O.
        setXIsNext(!xIsNext);
    };

    const jumpTo = (): void => {

    };

    const renderMoves = (): void => {

    };

    return (
        <Board squares={board} onClick={handleClick} />
    );
}

export default Game;