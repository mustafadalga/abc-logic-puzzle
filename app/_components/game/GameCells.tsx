import { tailwindGridClassNames } from "@/_constants";
import useGame from "@/_providers/game/useGame";
import GameCell from "./GameCell";
import { useCallback, useState } from "react";
import CellContextMenu from "./CellContextMenu";
import { Cell, CellPosition } from "@/_types";


export default function GameCells() {
    const { gameState: { dimension, gamerBoard, isGameCompleted }, updateCell } = useGame()
    const gridClassNames = tailwindGridClassNames[dimension - 1];
    const [ showContextMenu, setShowContextMenu ] = useState(false);
    const [ contextMenuPosition, setContextMenuPosition ] = useState({ x: 0, y: 0 });
    const [ position, setPosition ] = useState<CellPosition>({
        row: -1,
        col: -1
    });
    const openContextMenu = useCallback(() => {
        setShowContextMenu(true)
    }, []);
    const closeContextMenu = useCallback(() => {
        setShowContextMenu(false);
    }, []);

    const handleCellClick = useCallback((x: number, y: number, row: number, col: number) => {
        setContextMenuPosition({ x, y });
        setPosition({
            row,
            col
        });
        openContextMenu();
    }, [ openContextMenu ]);

    const updateBoardCell = useCallback((value: Cell) => {
        updateCell(position, value)
        closeContextMenu();
    }, [ position, closeContextMenu, updateCell ]);

    return (
        <div
            className={`grid place-items-center ${gridClassNames.row} relative w-full rounded-lg row-start-2 row-end-2 col-start-2 col-end-3`}>
            {gamerBoard.map((row, rowIndex) => (
                <div key={rowIndex}
                     className={`grid border-t border-l last:border-b border-gray-900 ${gridClassNames.col}`}>
                    {row.map((cell, cellIndex) => (
                        <GameCell key={cellIndex}
                                  cell={cell}
                                  onCellClick={handleCellClick}
                                  rowIndex={rowIndex}
                                  colIndex={cellIndex}/>
                    ))}
                </div>
            ))}

            <CellContextMenu
                showContextMenu={showContextMenu}
                position={contextMenuPosition}
                onMouseLeave={closeContextMenu}
                onSelectLetter={(letter) => updateBoardCell(letter)}
                onDeleteNumber={() => updateBoardCell(null)}/>
        </div>
    );
};