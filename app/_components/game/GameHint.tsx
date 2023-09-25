import { Cell } from "@/_types";
import { useEffect, useState } from "react";

interface Props {
    hint: Cell,
    className: string
}

export default function GameHint({ hint, className }: Props) {
    const [ displayedHint, setDisplayedHint ] = useState(hint);
    const [ isFading, setIsFading ] = useState(false);

    useEffect(() => {
        if (hint !== displayedHint) {
            setIsFading(true);
            setTimeout(() => {
                setDisplayedHint(hint);
                setIsFading(false);
            }, 300); // 300ms for the fade-out duration
        }
    }, [ hint, displayedHint ]);

    return (
        <div
            className={`${className} grid place-items-center w-5 h-5 sm:w-6 sm:h-6 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:w-12 2xl:h-12 text-[10px] md:text-xs xl:text-sm 2xl:text-base`}>
            <span className={`${isFading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                {displayedHint}
            </span>
        </div>
    );
};