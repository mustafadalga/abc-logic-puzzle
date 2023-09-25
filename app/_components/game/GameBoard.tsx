import GameHints from "./GameHints";
import GameCells from "./GameCells";

export default function GameBoard() {
    return (
        <div className="pt-10 grid place-content-center grid-rows-[48px_auto_48px] grid-cols-[48px_auto_48px]">
            <GameHints/>
            <GameCells/>
        </div>
    );
};