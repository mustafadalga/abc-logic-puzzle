"use client";
import GameOptions from "./GameOptions";
import useGame from "@/_providers/game/useGame";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./gameContainerStyle.css"
import { useRef } from "react";
import GameAbcContainer from "./GameABCContainer";

export default function GameContainer() {
    const { gameState: { showGame } } = useGame();
    const nodeRef = useRef<HTMLDivElement | null>(null)
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={showGame ? 'GamePyramidContainer' : 'GameOptions'}
                nodeRef={nodeRef}
                addEndListener={(done) => {
                    nodeRef.current?.addEventListener("transitionend", done, false);
                }}
                classNames="fade">


                <div ref={nodeRef} className="w-full flex justify-center">
                    {showGame ? <GameAbcContainer/> : <GameOptions/>}
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
};