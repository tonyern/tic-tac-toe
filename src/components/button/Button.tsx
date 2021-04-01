import "./button.css";

// @ts-ignore
const Button = ({ onClick, value }): JSX.Element => {
    return (
        <button className="game-tile" onClick={onClick}>
            {value}
        </button>
    );
}

export default Button;