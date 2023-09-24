import { createContext, Dispatch, SetStateAction } from "react";
import { Board, Difficulty, Hints } from "@/_types";

export interface GameState {
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
}

export default createContext<GameContextContextType | null>(null);