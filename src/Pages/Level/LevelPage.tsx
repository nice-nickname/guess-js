import { useParams } from "react-router"

export default function LevelPage() {
    const { levelId } = useParams()

    return (
        <div>
            {levelId}
        </div>
    )
}
