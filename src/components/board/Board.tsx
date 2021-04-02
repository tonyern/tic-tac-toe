import { MouseEventHandler } from "react";
import Button from "../button/Button";
import "./board.css";

interface BoardInterface {
    squares: (string | null)[];
    onClick: MouseEventHandler<HTMLButtonElement>;
}

// @ts-ignore
const Board = ({ squares, onClick }): JSX.Element => (
    <div className="game-board">
        {squares.map((square: string, i: number) => (
            <Button key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;