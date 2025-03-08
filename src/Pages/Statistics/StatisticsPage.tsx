import { Badge, DataList, Heading } from "@radix-ui/themes";
import { useMemo } from "react";
import { useUserContext } from "../../Context/UserContext";
import { levels } from "../../GameObjects/GameLevels";

export default function StatisticsPage() {
    const user = useUserContext();

    const accomplishedLevels = useMemo(() => {
        const index = levels.levels.findIndex((lvl) => lvl.id === user.level);

        return index >= 0 ? index + 1 : 0;
    }, [user.level]);

    const items = [
        {
            label: "Пользователь",
            content: (
                <Badge color="green" variant="soft" radius="full">
                    {user.username}
                </Badge>
            ),
        },
        {
            label: "Пройдено уровней",
            content: (
                <Badge variant="soft" radius="full">
                    {accomplishedLevels} / {levels.levels.length}
                </Badge>
            ),
        },
        {
            label: "Пройдено успешно",
            content: (
                <Badge variant="soft" radius="full">
                    {user.completed} / {levels.levels.length}
                </Badge>
            ),
        },
        {
            label: "Задача дня",
            content: (
                <Badge
                    variant="soft"
                    radius="full"
                    color={user.dailyCompleted ? "green" : "indigo"}
                >
                    {user.dailyCompleted ? "Пройдена" : "Не пройдена"}
                </Badge>
            ),
        },
    ];

    return (
        <>
            <Heading mb="5">Статистика</Heading>

            <DataList.Root>
                {items.map((item) => (
                    <DataList.Item align="center">
                        <DataList.Label minWidth="160px">
                            {item.label}
                        </DataList.Label>
                        <DataList.Value>{item.content}</DataList.Value>
                    </DataList.Item>
                ))}
            </DataList.Root>
        </>
    );
}
