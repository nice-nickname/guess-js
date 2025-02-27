import { Badge, DataList, Heading } from "@radix-ui/themes";
import { useMemo } from "react";
import { useUserContext } from "../../Context/UserContext";
import { levels } from "../../GameObjects/GameLevels";

export default function StatisticsPage() {
    const user = useUserContext();

    const accomplishedLevels = useMemo(() => {
        const index = levels.levels.findIndex((lvl) => lvl.id === user.level);

        return index > 0 ? index : 0;
    }, [user.level]);

    return (
        <>
            <Heading mb="5">Статистика</Heading>
            <DataList.Root>
                <DataList.Item align="center">
                    <DataList.Label minWidth="160px">
                        Пользователь
                    </DataList.Label>
                    <DataList.Value>
                        <Badge color="jade" variant="soft" radius="full">
                            {user.username}
                        </Badge>
                    </DataList.Value>
                </DataList.Item>
                <DataList.Item align="center">
                    <DataList.Label>Пройдено уровней</DataList.Label>
                    <DataList.Value>
                        <Badge variant="soft" radius="full">
                            {accomplishedLevels} / {levels.levels.length}
                        </Badge>
                    </DataList.Value>
                </DataList.Item>
            </DataList.Root>
        </>
    );
}
