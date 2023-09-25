export type Difficulty = "easy" | "medium" | "hard";
export type Letter = "A" | "B" | "C"
export type Cell = Letter | null
export type Board = Cell[][];
export type Direction = Cell[];
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