import { MouseEventHandler } from "react";
import "./button.css";

interface SquareInterface {
    onClick: MouseEventHandler<HTMLButtonElement>;
    value: string;
}

const Button = ({ onClick, value }: SquareInterface): JSX.Element => {
    return (
        <button className="game-tile" onClick={onClick}>
            {value}
        </button>
    );
}

export default Button;