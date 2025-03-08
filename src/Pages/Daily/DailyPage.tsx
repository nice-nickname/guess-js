import { Flex, Heading, Text } from "@radix-ui/themes";
import Countdown from "../../Components/Countdown/Countdown";
import Level from "../../Components/Levels/Level";
import { useGameContext } from "../../Context/GameContext";
import { useUserContext } from "../../Context/UserContext";

export default function DailyPage() {
    const game = useGameContext();
    const user = useUserContext();

    return (
        <div>
            <Flex justify="between" mb="6">
                <Heading size="7">Задача дня</Heading>

                <Heading size="7">
                    <Countdown />
                </Heading>
            </Flex>

            {!user.dailyCompleted ? (
                <Level
                    levelId={game.dailyLevelId}
                    onComplete={() => { }}
                    onCorrect={() => user.setDailyCompleted(true)}
                />
            ) : (
                <Text>Задача дня пройдена! Возвращайтесь позже.</Text>
            )}
        </div>
    );
}
