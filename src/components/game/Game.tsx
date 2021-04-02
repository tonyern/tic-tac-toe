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

    const handleClick = (): void => {

    };

    const jumpTo = (): void => {

    };

    const renderMoves = (): void => {

    };

    return (
        <Board />
    );
}

export default Game;