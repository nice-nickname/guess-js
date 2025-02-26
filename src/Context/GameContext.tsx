import React, { PropsWithChildren, useMemo, useState } from "react";
import { levels } from "../GameObjects/GameLevels";

export type GameState = {
    dailyLevelId: string
}

// @ts-expect-error mute
const Context = React.createContext<GameState>({})

export const useGameContext = () => React.useContext(Context)

export const GameContextProvider = (props: PropsWithChildren) => {
    const [dailyId] = useState(() => {
        const lvls = levels.levels

        return lvls[new Date().getDate() % lvls.length].id
    })

    const gameContext = useMemo<GameState>(() => ({
        dailyLevelId: dailyId
    }), [dailyId])

    return (
        <Context.Provider value={gameContext}>
            {props.children}
        </Context.Provider>
    )
}


