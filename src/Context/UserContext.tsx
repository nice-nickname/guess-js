import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Cookie from "../Utils/Cookie";

const Context = React.createContext<UserContext>({
    userFetched: false,
    username: '',
    setUser: () => {},
    updateCookie: () => {}
})

export type UserState = {
    userFetched: boolean
    username: string
}

export type UserContext = UserState & {
    setUser: (user: UserState) => void
    updateCookie: (user: UserState) => void
}

export const useUserContext = () => React.useContext(Context);

export function AppContextProvider(props: PropsWithChildren) {

    const [user, setUser] = useState<UserState>({
         username: '',
         userFetched: false
    })

    useEffect(() => {
        let username = ''

        const cookieState = Cookie.get('_state')
        if (cookieState) {
            const state = JSON.parse(cookieState)

            if (state && state['username']) {
                username = state['username']
            }
        }

        setUser({
            userFetched: true,
            username
        })

    }, [])

    const updateCookie = useCallback((state: UserState) => {
        Cookie.set('_state', JSON.stringify(state))
    }, [])

    return (
        <Context.Provider value={{
            ...user,
            setUser: setUser,
            updateCookie: updateCookie
        }}>
            {props.children}
        </Context.Provider>
    )
}
