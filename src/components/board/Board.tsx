import React from "react";
import Button from "../button/Button";

const Board = (): JSX.Element => {
    const doSomething = (): void => {
        console.log("Hello")
    }

    return (
        <React.Fragment>
            <Button value="1" onClick={() => doSomething()} />
            <Button value="2" onClick={() => doSomething()} />
            <Button value="3" onClick={() => doSomething()} />
            <Button value="4" onClick={() => doSomething()} />
            <Button value="5" onClick={() => doSomething()} />
            <Button value="6" onClick={() => doSomething()} />
            <Button value="7" onClick={() => doSomething()} />
            <Button value="8" onClick={() => doSomething()} />
            <Button value="9" onClick={() => doSomething()} />
        </React.Fragment>
    );
}

export default Board;