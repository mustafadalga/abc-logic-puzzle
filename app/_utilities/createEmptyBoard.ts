import { Board } from "@/_types";

export default function createEmptyBoard(dimension: number): Board {
    return Array.from({ length: dimension }, () => Array.from({ length: dimension }, () => null));
}