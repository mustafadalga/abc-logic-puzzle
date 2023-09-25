"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import useGame from "@/_providers/game/useGame";
import GameButtonGroup from "./GameButtonGroup";
import StopWatch from "./StopWatch";
import GameBoard from "./GameBoard";

export default function GamePyramidContainer() {
    const { gameState } = useGame();
    const [ initialDate, setInitialDate ] = useState<Date>(new Date());
    const previousBoard = useRef<string | null>(null);
    const memorizeBoard = useMemo(() => JSON.stringify(gameState.gamerBoard), [ gameState.gamerBoard ]);

    useEffect(() => {
        if (previousBoard.current !== memorizeBoard) {
            setInitialDate(new Date());
            previousBoard.current = memorizeBoard;
        }
    }, [ initialDate, memorizeBoard ]);

    return (
        <div className="grid gap-10 h-full">
            <StopWatch key={initialDate.getTime()}
                       initialDate={initialDate}
                       isTimerRunning={!gameState.isGameCompleted}/>
            <GameBoard/>
            <GameButtonGroup/>
        </div>
    )
}