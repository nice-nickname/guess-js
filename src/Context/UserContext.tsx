import React, {
    PropsWithChildren,
    useEffect,
    useMemo,
    useState,
} from "react";

export type UserState = {
    isFetched: boolean;
    username: string;
    level: string;
};

export type UserContext = UserState & {
    hasUser: boolean;
    setUsername: (username: string) => void;
    setLevel: (level: string) => void
};

// @ts-expect-error mute
const Context = React.createContext<UserContext>({});

export const useUserContext = () => React.useContext(Context);

export const UserContextProvider = (props: PropsWithChildren) => {
    const [username, setUsername] = useState("")
    const [isFetched, setIsFetched] = useState(false)
    const [level, setLevel] = useState("0")

    useEffect(() => {
        setTimeout(() => setIsFetched(true), 200);
    }, []);

    const hasUser = useMemo(() => {
        return username != null && username.length > 0;
    }, [username]);

    const user = useMemo<UserContext>(() => {
        return {
            // State props
            username,
            isFetched,
            level,

            // Computed props
            hasUser,

            // Methods
            setUsername,
            setLevel
        }
    }, [username, isFetched, level, hasUser])

    return (
        <Context.Provider value={user}>
            {props.children}
        </Context.Provider>
    );
}
