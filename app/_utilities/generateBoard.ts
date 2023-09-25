import { Board } from "@/_types";
import createEmptyBoard from "./createEmptyBoard";
import { letters } from "@/_constants";

export type Position = [ number, number ]


export default function generateBoard(dimension: number): Board {
    const board = createEmptyBoard(dimension);
    const lettersToPlace = Array.from({ length: dimension }, () => letters).flat();
    placeLetterOnBoard(board, lettersToPlace);
    return board;
}


function isValidPlacement(board: Board, targetRow: number, targetCol: number, val: string): boolean {
    const dimension = board.length;
    for (let currentRow = 0; currentRow < dimension; currentRow++) {
        if (board[targetRow][currentRow] === val || board[currentRow][targetCol] === val) {
            return false;
        }
    }
    return true;
}

function placeLetterOnBoard(board: Board, letters: string[]): boolean {
    if (letters.length == 0) {
        return true;
    }

    const dimension = board.length;
    const letter = letters[0];
    const availablePositions: Position[] = [];

    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        for (let colIndex = 0; colIndex < dimension; colIndex++) {
            if (!board[rowIndex][colIndex]) {
                availablePositions.push([ rowIndex, colIndex ]);
            }
        }
    }

    // Randomize available positions
    availablePositions.sort(() => Math.random() - 0.5);

    for (const [ row, col ] of availablePositions) {
        if (isValidPlacement(board, row, col, letter)) {
            board[row][col] = letter;
            if (placeLetterOnBoard(board, letters.slice(1))) {
                return true;
            }
            board[row][col] = null; // Reset if unsuccessful
        }
    }
    return false;
}