export const calculateWinner = (squares: (string | null)[]): string | null => {
    // All possible winning moves in Tic-Tac-Toe. Look up winning moves.
    const lines: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i: number = 0; i < lines.length; i++) {
        const [a, b, c]: number[] = lines[i];

        // Checking for player move and if there is a winner.
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

const squares: (string | null)[] = [
    null, null, null,
    "X", "X", "X",
    null, null, null
];

console.log(calculateWinner(squares));