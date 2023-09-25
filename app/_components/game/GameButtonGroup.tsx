import useGame from "@/_providers/game/useGame";

export default function GameButtonGroup() {
    const {
        gameState,
        setGameState,
        newGame,
    } = useGame();
    const handleShowSolution = () => {
        if (gameState.isGameCompleted) return;

        setGameState(prevState => ({
            ...prevState,
            gamerBoard: gameState.validBoard,
            isGameCompleted: true,
            isShowSolution: true,
        }));
    }
    const handleExit = () => {
        setGameState(prevState => ({
            ...prevState,
            gamerBoard: [],
            validBoard: [],
            hints: {
                top: [],
                bottom: [],
                left: [],
                right: []
            },
            showGame: false,
            isGameCompleted: true,
            isShowSolution: false,
            isGameWon: false
        }));
    }
    return (
        <div className="grid grid-cols-3 justify-center gap-3">
            <button type="button"
                    onClick={newGame}
                    className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-center text-xs sm:text-sm gap-3 min-w-[5rem] lg:min-w-0 px-3 py-1.5 rounded-md shadow transition-all truncate">
                <span>New Game</span>
            </button>
            <button type="button"
                    onClick={handleShowSolution}
                    className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-center text-xs sm:text-sm gap-3 min-w-[5rem] lg:min-w-0 px-3 py-1.5 rounded-md shadow transition-all truncate">
                <span>Show Solution</span>
            </button>
            <button type="button"
                    onClick={handleExit}
                    className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-center text-xs sm:text-sm gap-3 min-w-[5rem] lg:min-w-0 px-3 py-1.5 rounded-md shadow transition-all truncate">
                <span>Exit</span>
            </button>
        </div>
    );
};