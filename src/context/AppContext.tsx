import { createContext, ReactNode, useEffect, useState } from "react"
import { IAppContext } from "../types/context"
import { getAllLocalStorage } from "services/storage"
import { DioBank } from "types/dio-bank"
import { login } from "../services/login"

type Props = {
    children: ReactNode
}

export const AppContext = createContext<IAppContext | undefined>(undefined)

export const AppContextProvider = ({ children }: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const storage = getAllLocalStorage()
    const user = "Giulliano"

    useEffect(() => {
        if (storage) {
            const { login } = JSON.parse(storage) as DioBank
            setIsLoggedIn(login)
        }
    }, [storage])

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, login }}>
            {children}
        </AppContext.Provider>
    )
}
