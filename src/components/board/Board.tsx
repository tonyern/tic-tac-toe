import React from "react";
import Button from "../button/Button";

const Board = (): JSX.Element => {
    const doSomething = (): void => {
        console.log("Hello")
    }

    return (
        <React.Fragment>
            <Button value="1" onClick={() => doSomething()} />
        </React.Fragment>
    );
}

export default Board;