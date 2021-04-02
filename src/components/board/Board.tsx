import Button from "../button/Button";
import "./board.css";

const Board = ({ squares, onClick }): JSX.Element => {
    const doSomething = (square: string): void => {
        console.log(square + " was pressed");
    };

    return (
        <div className="game-board">
            <Button value="1" onClick={() => doSomething("1")} />
            <Button value="2" onClick={() => doSomething("2")} />
            <Button value="3" onClick={() => doSomething("3")} />
            <Button value="4" onClick={() => doSomething("4")} />
            <Button value="5" onClick={() => doSomething("5")} />
            <Button value="6" onClick={() => doSomething("6")} />
            <Button value="7" onClick={() => doSomething("7")} />
            <Button value="8" onClick={() => doSomething("8")} />
            <Button value="9" onClick={() => doSomething("9")} />
        </div>
    );
}

export default Board;