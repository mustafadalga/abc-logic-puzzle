import { Board, Cell } from "@/_types";
import { letters } from "@/_constants";


export default function isEveryRowAndColValid(board: Board): boolean {
    const dimension = board.length;

    // Check rows
    for (const row of board) {
        if (!containsABC(row)) {
            return false;
        }
    }

    // Check columns
    for (let col = 0; col < dimension; col++) {
        const colValues: Cell[] = [];
        for (let row = 0; row < dimension; row++) {
            colValues.push(board[row][col]);
        }
        if (!containsABC(colValues)) {
            return false;
        }
    }

    return true;
}


function containsABC(values: Cell[]): boolean {
    const filteredValues = values.filter(cell => cell !== null);
    const uniqueValuesSet = new Set(filteredValues);
    const hasAllLetter = letters.every(letter => uniqueValuesSet.has(letter))
    return hasAllLetter && uniqueValuesSet.size === letters.length;
}