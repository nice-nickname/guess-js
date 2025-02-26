import Countdown from "../../Components/Countdown/Countdown";
import { useGameContext } from "../../Context/GameContext";

export default function DailyPage() {
    const game = useGameContext();
    return (
        <div>
            Задача дня <Countdown /> {game.dailyLevelId}
        </div>
    );
}
