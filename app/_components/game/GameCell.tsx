import { Cell } from "@/_types";
import useGame from "@/_providers/game/useGame";
import { useRef } from "react";

interface Props {
    cell: Cell,
    onCellClick: (x: number, y: number, rowIndex: number, colIndex: number) => void,
    rowIndex: number,
    colIndex: number
}


export default function GameCell({ cell, rowIndex, colIndex, onCellClick }: Props) {
    const { gameState: { isGameCompleted, isGameWon,dimension } } = useGame();
    const cellRef = useRef<HTMLDivElement | null>(null);

    const handleCellClick = () => {
        if (isGameCompleted) return;
        onCellClick(
            cellRef.current?.offsetLeft!,
            cellRef.current?.offsetTop!,
            rowIndex,
            colIndex
        );
    };

    return (
        <div
            onClick={handleCellClick}
            ref={cellRef}
            className={`${isGameCompleted ? "":"hover:bg-blue-200 cursor-pointer"} w-5 h-5 sm:w-6 sm:h-6 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:w-12 2xl:h-12 xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl bg-white text-gray-900 grid place-items-center font-bold transition duration-300 font-serif border-r border-gray-800`}>
            {cell}
        </div>
    );
};