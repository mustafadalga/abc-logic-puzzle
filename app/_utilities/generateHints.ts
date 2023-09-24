import { Board, Difficulty, Direction, Hints } from "@/_types";

export default function generateHints(board: Board, difficulty: Difficulty): Hints {
    const columnHints = generateColumnHints(board);
    const rowHints = generateRowHints(board);

    const hints: Hints = {
        ...columnHints,
        ...rowHints
    };

    const hintPercentages: { [key in Difficulty]: number } = {
        easy: 1,
        medium: 0.9,
        hard: 0.8
    };

    const totalHints = board.length * 4;
    const hintsToShow = Math.round(totalHints * hintPercentages[difficulty]);
    hideSomeHints(hints, hintsToShow);

    return hints;
}

function generateColumnHints(board: Board): { top: Direction, bottom: Direction } {
    const dimension = board.length;
    const top: Direction = [];
    const bottom: Direction = [];

    for (let col = 0; col < dimension; col++) {
        for (let row = 0; row < dimension; row++) {
            if (board[row][col]) {
                top.push(board[row][col]);
                break;
            }
        }
        for (let row = dimension - 1; row >= 0; row--) {
            if (board[row][col]) {
                bottom.push(board[row][col]);
                break;
            }
        }
    }
    return { top, bottom };
}

function generateRowHints(board: Board): { left: Direction, right: Direction } {
    const dimension = board.length;
    const left: Direction = [];
    const right: Direction = [];

    for (let row = 0; row < dimension; row++) {
        for (let col = 0; col < dimension; col++) {
            if (board[row][col]) {
                left.push(board[row][col]);
                break;
            }
        }
        for (let col = dimension - 1; col >= 0; col--) {
            if (board[row][col]) {
                right.push(board[row][col]);
                break;
            }
        }
    }
    return { left, right };
}

function hideSomeHints(hints: Hints, hintsToShow: number): void {
    const allHints: { direction: keyof Hints, index: number }[] = [];
    for (const direction in hints) {
        hints[direction as keyof Hints].forEach((_, index) => {
            allHints.push({ direction: direction as keyof Hints, index });
        });
    }

    const hintsToHide = allHints.sort(() => Math.random() - 0.5).slice(hintsToShow);
    hintsToHide.forEach(hintInfo => {
        hints[hintInfo.direction][hintInfo.index] = null!;
    });
}