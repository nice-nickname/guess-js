import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";

export type UserState = {
    isFetched: boolean;
    username: string;
    level: string;
    dailyCompleted: boolean;
};

export type UserContext = UserState & {
    hasUser: boolean;
    completed: number;

    setUsername: (username: string) => void;
    setLevel: (level: string) => void;
    setDailyCompleted: (value: boolean) => void;
    setCompleted: (levelId: string) => void
};

// @ts-expect-error mute
const Context = React.createContext<UserContext>({});

export const useUserContext = () => React.useContext(Context);

export const UserContextProvider = (props: PropsWithChildren) => {
    const [username, setUsername] = useState("");
    const [isFetched, setIsFetched] = useState(false);
    const [level, setLevel] = useState("0");
    const [dailyCompleted, setDailyCompleted] = useState(false);
    const [completedLvls, setCompletedLvls] = useState<string[]>([])

    useEffect(() => {
        setTimeout(() => setIsFetched(true), 1500);
    }, []);

    const hasUser = useMemo(() => {
        return username != null && username.length > 0;
    }, [username]);

    const completed = useMemo(() => {
        return completedLvls.length
    }, [completedLvls])

    const setCompleted = useCallback((id: string) => {
        if (completedLvls.indexOf(id) === -1) {
            setCompletedLvls([...completedLvls, id])
        }
    }, [completedLvls])

    const user = useMemo<UserContext>(() => {
        return {
            // State props
            username,
            isFetched,
            level,
            dailyCompleted,

            // Computed props
            hasUser,
            completed,

            // Methods
            setUsername,
            setLevel,
            setDailyCompleted,
            setCompleted
        };
    }, [username, isFetched, level, dailyCompleted, hasUser, completed, setCompleted]);

    return (
        <Context.Provider value={user}>
            {props.children}
        </Context.Provider>
    );
};
