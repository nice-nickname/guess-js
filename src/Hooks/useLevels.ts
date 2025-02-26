import { useMemo } from "react";
import { levels } from "../GameObjects/GameLevels";

export default function useLevels(id: string) {
    const level = useMemo(() => {
        return levels.levels.find((lvl) => lvl.id === id)!;
    }, [id]);

    const prevLevel = useMemo(() => {
        const prevIndex = levels.levels.findIndex((lvl) => lvl.id === id) - 1;

        return prevIndex >= 0 ? levels.levels[prevIndex] : null
    }, [id]);

    const nextLevel = useMemo(() => {
        const nextIndex = levels.levels.findIndex((lvl) => lvl.id === id) + 1;

        return nextIndex < levels.levels.length ? levels.levels[nextIndex] : null
    }, [id])

    return [level, prevLevel, nextLevel]
}
