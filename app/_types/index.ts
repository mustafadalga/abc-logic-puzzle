export type Difficulty = "easy" | "medium" | "hard";
export type Board = (Cell | null)[][];
export type Direction = (string | null)[];
export type Letter = "A" | "B" | "C"
export type Cell = Letter | null
export type Hints = {
    top: Direction,
    bottom: Direction,
    left: Direction,
    right: Direction
};
export type CellPosition = {
    row: number,
    col: number
}