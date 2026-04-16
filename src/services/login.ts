import { api } from "../api"
import { changeLocalStorage } from "./storage"

export const login = async (email: string, password: string): Promise<boolean> => {
    const data = await api

    if (email !== data.email || password !== data.password) {
        return false
    }

    changeLocalStorage({
        login: true,
        user: data
    })

    return true
}