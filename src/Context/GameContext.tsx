import React, { PropsWithChildren, useMemo, useState } from "react";
import { levels } from "../GameObjects/GameLevels";
import GameAuio from "../GameObjects/GameAudio";

export type GameState = {
    dailyLevelId: string;
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
    const [playMusic, setPlayMusic] = useState(
        () => !GameAuio.isAmbientPlayed()
    );

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
