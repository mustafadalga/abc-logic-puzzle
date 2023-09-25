import IconDelete from "@/_components/icons/IconDelete";
import { Letter } from "@/_types";
import { letters } from "@/_constants";

interface Props {
    position: {
        x: number,
        y: number
    }
    showContextMenu: boolean,
    onMouseLeave: () => void,
    onSelectLetter: (letter: Letter) => void,
    onDeleteNumber: () => void,
}

const CellContextMenu = ({
                             position,
                             onMouseLeave,
                             onSelectLetter,
                             onDeleteNumber,
                             showContextMenu
                         }: Props) => {

    const style = {
        left: `${position.x}px`,
        top: `${position.y}px`,
    }
    return (
        <div
            onMouseLeave={onMouseLeave}
            style={style}
            className={`${showContextMenu ? "animate-scale-in-center" : "animate-scale-out-center"} absolute grid grid-cols-3 w-40 md:w-44 lg:w-48 z-10 overflow-hidden shadow-[0px_0px_5px_0px_#7e22ce] rounded-lg bg-gray-700`}>

            {letters.map((letter,) => (
                <div key={letter}
                     onClick={() => onSelectLetter(letter)}
                     className="cursor-pointer rounded grid place-items-center h-12 text-white hover:bg-gray-600 text-base lg:text-lg xl:text-xl">{letter}</div>
            ))}

            <div className="col-span-3">
                <IconDelete
                    onClick={onDeleteNumber}
                    className="cursor-pointer ml-auto mr-1 mb-1 h-8 w-8 text-red-500 hover:text-red-600"/>
            </div>
        </div>
    );
}

export default CellContextMenu;