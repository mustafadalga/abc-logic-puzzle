import { Direction } from "@/_enums";
import useGame from "@/_providers/game/useGame";

interface IDirection {
    id: Direction,
    className: string,
    hintClassName:string
}

export default function GameHints() {
    const { gameState: { dimension, hints } } = useGame();

    const directionClassNames: IDirection[] = [
        {
            id: Direction.TOP,
            className: `mt-auto grid-cols-${dimension} row-start-1 row-end-2 col-start-2 col-end-3 `,
            hintClassName:"first:border-l border-t border-r border-gray-900",
        },
        {
            id: Direction.BOTTOM,
            className: `mb-auto grid-cols-${dimension} row-start-3 row-end-4 col-start-2 col-end-3`,
            hintClassName:"first:border-l border-t border-b border-r border-gray-900"
        },
        {
            id: Direction.LEFT,
            className: `ml-auto grid grid-rows-${dimension} row-start-2 row-end-3 col-start-1 col-end-2`,
            hintClassName:"last:border-b border-t border-l border-gray-900"
        },
        {
            id: Direction.RIGHT,
            className: `mr-auto grid grid-rows-${dimension} row-start-2 row-end-3 col-start-3 col-end-4`,
            hintClassName:"last:border-b border-t border-r border-gray-900"
        }
    ];
    return (
        <>
            {directionClassNames.map((direction) => (
                <div key={direction.id}
                     className={`grid bg-blue-50 text-gray-900 font-bold place-self-center ${direction.className}`}>
                    {hints[direction.id].map((hint, index) => (
                        <div
                            key={index}
                            className={`${direction.hintClassName} grid place-items-center w-5 h-5 sm:w-6 sm:h-6 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:w-12 2xl:h-12 text-[10px] md:text-xs xl:text-sm 2xl:text-base`}>
                            {hint}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};