"use client";
import Select from "./Select";
import { Difficulty } from "@/_enums";
import useGame from "@/_providers/game/useGame";

interface ISelect {
    label: string;
    value: string
}

const dimensions: ISelect[] = [
    {
        "label": "4",
        "value": "4"
    },
    {
        "label": "5",
        "value": "5"
    },
    {
        "label": "6",
        "value": "6"
    },
    {
        "label": "7",
        "value": "7"
    },
    {
        "label": "8",
        "value": "8"
    },
    {
        "label": "9",
        "value": "9"
    },
    {
        "label": "10",
        "value": "10"
    },
    {
        "label": "11",
        "value": "11"
    },
    {
        "label": "12",
        "value": "12"
    }
];

const difficulties: ISelect[] = [
    {
        "label": "Easy",
        "value": Difficulty.EASY
    },
    {
        "label": "Medium",
        "value": Difficulty.MEDIUM
    },
    {
        "label": "Hard",
        "value": Difficulty.HARD
    }
]

const GameOptions = () => {
    const { setGameOption, gameState, newGame } = useGame();
    return (
        <section
            className="grid gap-3 w-full max-w-xl p-8 rounded-md transition-all ease-linear shadow-[0px_0px_3px_0px_#a5b4fc] hover:shadow-[0px_0px_6px_0px_#a5b4fc] bg-white">
            <h1 className="text-center text-blue-500 font-bold text-2xl lg:text-3xl">Game Options</h1>

            <div className="grid gap-1 w-full">
                <label htmlFor="dimension"
                       className="font-medium text-xs lg:text-sm xl:text-base text-gray-900">Dimension</label>
                <Select
                    id="dimension"
                    isClearable={false}
                    onChange={(dimension: ISelect | null) => setGameOption("dimension", dimension?.value as string)}
                    placeholder="Select Difficulty"
                    options={dimensions}
                    value={dimensions.find(option => Number(option.value) === gameState.dimension)}
                />
            </div>

            <div className="grid gap-1 w-full">
                <label htmlFor="difficulty"
                       className="font-medium text-xs lg:text-sm xl:text-base text-gray-900">Difficulty</label>
                <Select
                    id="difficulty"
                    isClearable={false}
                    onChange={(difficulty: ISelect | null) => setGameOption("difficulty", difficulty?.value as Difficulty)}
                    placeholder="Select Difficulty"
                    options={difficulties}
                    value={difficulties.find(option => option.value === gameState.difficulty)}
                />
            </div>


            <div className="grid mt-10">
                <button
                    onClick={newGame}
                    className="bg-blue-500 hover:bg-blue-600 transition-all shadow text-white px-5 py-2 rounded-lg">
                    Play
                </button>
            </div>
        </section>
    );
};

export default GameOptions;