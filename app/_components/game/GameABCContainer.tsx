import { useEffect, useMemo, useRef, useState } from "react";
import useGame from "@/_providers/game/useGame";
import GameButtonGroup from "./GameButtonGroup";
import StopWatch from "@/_components/StopWatch";
import GameBoard from "./GameBoard";

export default function GamePyramidContainer() {
    const { gameState: { isGameCompleted, hints } } = useGame();
    const [ initialDate, setInitialDate ] = useState<Date>(new Date());
    const previousHints = useRef<string | null>(null);
    const memorizeHints = useMemo(() => JSON.stringify(hints), [ hints ]);


    useEffect(() => {
        if (previousHints.current !== memorizeHints) {
            setInitialDate(new Date());
            previousHints.current = memorizeHints;
        }
    }, [ memorizeHints ]);

    return (
        <div className="grid gap-10 h-full">
            <StopWatch key={initialDate.getTime()}
                       initialDate={initialDate}
                       isTimerRunning={!isGameCompleted}/>
            <GameBoard/>
            <GameButtonGroup/>
        </div>
    )
}