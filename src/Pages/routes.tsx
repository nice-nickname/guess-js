import { CalendarIcon, PlayIcon, RocketIcon } from "@radix-ui/react-icons";
import DailyPage from "./Daily/DailyPage";
import IndexPage from "./Index/IndexPage";
import StatisticsPage from "./Statistics/StatisticsPage";

export const routes = [
    {
        to: "/",
        title: "Главная",
        icon: <PlayIcon />,
        page: <IndexPage />,
    },
    {
        to: "/daily",
        title: "Задача дня",
        icon: <CalendarIcon />,
        page: <DailyPage />,
    },
    {
        to: "/statistics",
        title: "Статистика",
        icon: <RocketIcon />,
        page: <StatisticsPage />,
    }
];
