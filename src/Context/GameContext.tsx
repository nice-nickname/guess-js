import React, { PropsWithChildren, useMemo, useState } from "react";
import GameAuio from "../GameObjects/GameAudio";
import { levels } from "../GameObjects/GameLevels";

export type GameState = {
    dailyLevelId: number;
    volume: number;
    playMusic: boolean;
};

export type GameContext = {
    setVolume: (value: number) => void;
    setPlayMusic: (value: boolean) => void;
} & GameState;

// @ts-expect-error mute
const Context = React.createContext<GameContext>({});

export const useGameContext = () => React.useContext(Context);

export const GameContextProvider = (props: PropsWithChildren) => {
    const [dailyId] = useState(() => {
        const lvls = levels.levels;

        return lvls[new Date().getDate() % lvls.length].id;
    });

    const [volume, setVolume] = useState(() => GameAuio.volume);
    const [playMusic, setPlayMusic] = useState(() => true);

    const gameContext = useMemo<GameContext>(
        () => ({
            dailyLevelId: dailyId,
            volume: volume,
            playMusic: playMusic,

            setVolume: setVolume,
            setPlayMusic: setPlayMusic,
        }),
        [dailyId, playMusic, volume]
    );

    return (
        <Context.Provider value={gameContext}>
            {props.children}
        </Context.Provider>
    );
};
