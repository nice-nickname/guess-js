import { useMemo } from "react"
import { levels } from "../../GameObjects/levels"

export type LevelProps = {
    id: string
}

export default function Level({ id }: LevelProps) {
    const level = useMemo(() => {
        return levels.levels.find(lvl => lvl.id === id)!
    }, [id])

    return (
        <div>
            {level.id}
        </div>
    )
}
