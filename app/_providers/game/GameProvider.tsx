"use client";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import GameContext, { GameState } from "./GameContext";
import { Difficulty } from "@/_enums";
import generateBoard from "@/_utilities/generateBoard";
import generateHints from "@/_utilities/generateHints";
import createEmptyBoard from "@/_utilities/createEmptyBoard";
import { Cell, CellPosition } from "@/_types";
import isEveryRowAndColValid from "@/_utilities/isEveryRowAndColValid";
import validateUserBoard from "@/_utilities/validateGamerBoard";

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
        validBoard: [],
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
        const validBoard = generateBoard(gameState.dimension);
        const hints = generateHints(validBoard, gameState.difficulty);
        const gamerBoard = createEmptyBoard(gameState.dimension);
        setGameState(prevState => ({
            ...prevState,
            validBoard,
            gamerBoard,
            hints,
            showGame: true,
            isGameWon: false,
            isGameCompleted: false,
            isShowSolution: false,
        }))
    }, [ gameState.dimension, gameState.difficulty ]);

    const setGameOption = useCallback((type: "dimension" | "difficulty", value: string | Difficulty) => {
        setGameState(prevState => ({
            ...prevState,
            [type]: type == "dimension" ? Number(value) : value
        }));
    }, [ setGameState ]);

    const updateCell = useCallback((position: CellPosition, value: Cell) => {
        setGameState(prevState => {
            const gamerBoard = prevState.gamerBoard.map(row => [ ...row ]);
            gamerBoard[position.row][position.col] = value;

            return {
                ...prevState,
                gamerBoard
            }
        })

    }, [ setGameState ]);

    const handleGameWin = useCallback(() => {
        const isGameWon = validateUserBoard(gameState.gamerBoard, gameState.hints);

        if (isGameWon) {
            setGameState(prevState => ({
                ...prevState,
                isGameWon,
                isGameCompleted: true
            }))
        }

    }, [ gameState.gamerBoard, gameState.hints ])


    useEffect(() => {
        const options = {
            dimension: gameState.dimension,
            difficulty: gameState.difficulty,
        }

        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(options))
    }, [ gameState.dimension, gameState.difficulty ]);

    useEffect(() => {
        if (isEveryRowAndColValid(gameState.gamerBoard) && !gameState.isShowSolution) {
            handleGameWin()
        }

    }, [ gameState.gamerBoard, gameState.isShowSolution, handleGameWin ])

    const contextValue = useMemo(() => ({
        gameState,
        newGame,
        setGameState,
        setGameOption,
        updateCell
    }), [ gameState, newGame, setGameOption, setGameState, updateCell ]);

    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    );
};