import { useParams } from "react-router";
import Level from "../../Components/Levels/Level";
import { useUserContext } from "../../Context/UserContext";

export default function LevelPage() {
    const { levelId } = useParams();
    const user = useUserContext();

    if (!levelId) {
        return null;
    }

    return (
        <div>
            <Level
                key={levelId}
                levelId={levelId}
                onComplete={() => user.setLevel(levelId)}
            />
        </div>
    );
}
