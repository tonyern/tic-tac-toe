import React from "react";
import "./button.css";

const Button = (): JSX.Element => {
    return (
        <>
            <div>
                <button className="game-tile"><h1>1</h1></button>
                <button className="game-tile"><h1>2</h1></button>
                <button className="game-tile"><h1>3</h1></button>
            </div>
            <div>
                <button className="game-tile"><h1>4</h1></button>
                <button className="game-tile"><h1>5</h1></button>
                <button className="game-tile"><h1>6</h1></button>
            </div>
            <div>
                <button className="game-tile"><h1>7</h1></button>
                <button className="game-tile"><h1>8</h1></button>
                <button className="game-tile"><h1>9</h1></button>
            </div>
        </>
    );
}

export default Button;