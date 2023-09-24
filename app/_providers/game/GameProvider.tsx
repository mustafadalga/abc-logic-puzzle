"use client";
import { ReactNode, useCallback, useMemo, useState } from "react";
import GameContext, { GameState } from "./GameContext";
import { Difficulty } from "@/_enums";
import generateBoard from "@/_utilities/generateBoard";
import generateHints from "@/_utilities/generateHints";
import createEmptyBoard from "@/_utilities/createEmptyBoard";

const LOCALSTORAGE_KEY = "abc-logic-puzzle";


export default function GameProvider({ children }: { children: ReactNode }) {
    const initialOptions = useMemo(() => {
        const isBrowserEnvironment = (): boolean => typeof window !== 'undefined';
        const defaultOptions = {
            dimension: 4,
            difficulty: Difficulty.EASY
        }

        if (!isBrowserEnvironment()) return defaultOptions;

        const storedOptions = localStorage.getItem(LOCALSTORAGE_KEY);
        return storedOptions ? JSON.parse(storedOptions) : defaultOptions;
    }, []);

    const [ gameState, setGameState ] = useState<GameState>({
        ...initialOptions,
        gamerBoard: [],
        hints: {
            top: [],
            bottom: [],
            left: [],
            right: []
        },
        showGame: false,
        isGameCompleted: true,
        isShowSolution: false,
        isGameWon: false
    });

    const newGame = useCallback(() => {
        const board = generateBoard(gameState.dimension);
        const hints = generateHints(board, gameState.difficulty);
        const userBoard = createEmptyBoard(gameState.dimension);
        setGameState(prevState => ({
            ...prevState,
            showGame: true,
            userBoard,
            hints,
            isGameWon: false,
            isGameCompleted: false,
            isShowSolution: false,
        }))
    }, [ gameState.dimension, gameState.difficulty ]);


    const setGameOption = useCallback((type: "dimension" | "difficulty", value: string | Difficulty) => {
        setGameState(prevState => ({
            ...prevState,
            [type]: value
        }));
        const options = {
            dimension: gameState.dimension,
            difficulty: gameState.difficulty,
        }
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(options))
    }, [ gameState.dimension, gameState.difficulty ]);

    const contextValue = useMemo(() => ({
        gameState,
        newGame,
        setGameState,
        setGameOption
    }), [ gameState, newGame, setGameOption, setGameState ])

    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    );
};