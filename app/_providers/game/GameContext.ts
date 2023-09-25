import { createContext, Dispatch, SetStateAction } from "react";
import { Board, Cell, CellPosition, Difficulty, Hints } from "@/_types";

export interface GameState {
    validBoard: Board,
    gamerBoard: Board,
    hints: Hints,
    dimension: number,
    difficulty: Difficulty,
    showGame: boolean,
    isGameCompleted: boolean,
    isShowSolution: boolean,
    isGameWon: boolean
}

interface GameContextContextType {
    gameState: GameState;
    setGameOption: (type: "dimension" | "difficulty", value: string | Difficulty) => void,
    setGameState: Dispatch<SetStateAction<GameState>>;
    newGame: () => void,
    updateCell: (position: CellPosition, value: Cell) => void
}

export default createContext<GameContextContextType | null>(null);