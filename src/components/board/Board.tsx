import Button from "../button/Button";
import "./board.css";

//@ts-ignore
const Board = ({ squares, onClick }): JSX.Element => {
    return (
        <div className="game-board">
            {squares.map((square: string, i: number) => (
                <Button key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}

export default Board;