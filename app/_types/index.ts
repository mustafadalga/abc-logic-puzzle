export type Difficulty = "easy" | "medium" | "hard";
export type Board = (string | null)[][];
export type Direction = (string | null)[];
export type Position = [number, number]
export type Hints = {
    top: Direction,
    bottom: Direction,
    left: Direction,
    right: Direction
};
