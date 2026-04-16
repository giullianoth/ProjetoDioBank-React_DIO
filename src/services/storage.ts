import { DioBank } from "types/dio-bank"

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem("diobank")
}

export const createLocalStorage = (): void => {
    localStorage.setItem("diobank", JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: DioBank): void => {
    localStorage.setItem("diobank", JSON.stringify(dioBank))
}