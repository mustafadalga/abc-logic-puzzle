import { useMemo } from "react";
import { CSSTransition } from "react-transition-group";
import IconTrophy from "@/_components/icons/IconTrophy";
import useGame from "@/_providers/game/useGame";
import "./trophy.css";
import GameHints from "./GameHints";
import GameCells from "./GameCells";

export default function GameBoard() {
    const { gameState: { isGameWon, dimension } } = useGame();
    const iconClass = useMemo(() => {
        if (dimension > 10) {
            return "w-40 h-40 -ml-10 -mt-10"
        }
        if (dimension > 6) {
            return "w-32 h-32 -ml-16 -mt-16"
        }

        return "w-20 h-20 -ml-10 -mt-10"
    }, [ dimension ])
    return (
        <div className="relative grid place-content-center grid-rows-[48px_auto_48px] grid-cols-[48px_auto_48px]">
            <GameHints/>
            <GameCells/>
            <CSSTransition
                in={isGameWon}
                timeout={300}
                classNames="trophy"
                unmountOnExit>
                <IconTrophy
                    className={`${iconClass} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale text-orange-400`}/>
            </CSSTransition>
        </div>
    );
};