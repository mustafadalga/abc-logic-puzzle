import { Board, Direction, Hints } from "@/_types";
import generateHints from "./generateHints";

export default function validateUserBoard(userBoard: Board, originalHints: Hints): boolean {
    return isBoardValid(userBoard) && doesBoardAlignWithHints(userBoard, originalHints);
}

function doesBoardAlignWithHints(board: Board, hints: Hints): boolean {
    const generatedHints = generateHints(board, "easy");

    for (const direction in hints) {
        const hintDirection = direction as keyof Hints;
        for (let i = 0; i < hints[hintDirection].length; i++) {
            // Only compare non-empty (non-null) hints
            if (hints[hintDirection][i] && hints[hintDirection][i] !== generatedHints[hintDirection][i]) {
                return false;
            }
        }
    }
    return true;
}

function isBoardValid(board: Board): boolean {
    return isRowsValid(board) && isColumnsValid(board);
}

function isRowsValid(board: Board): boolean {
    for (const row of board) {
        if (!hasUniqueValues(row)) {
            return false;
        }
    }
    return true;
}

function isColumnsValid(board: Board): boolean {
    const dimension = board.length;
    for (let col = 0; col < dimension; col++) {
        const colValues: Direction = [];
        for (let row = 0; row < dimension; row++) {
            colValues.push(board[row][col]);
        }
        if (!hasUniqueValues(colValues)) {
            return false;
        }
    }
    return true;
}

function hasUniqueValues(values: (string | null)[]): boolean {
    const nonEmptyValues = values.filter(cell => cell);
    return new Set(nonEmptyValues).size === nonEmptyValues.length;
}