import { UserData } from "./types/user"

const account: UserData = {
    email: "giulliano@dio.bank",
    password: "123456",
    name: "Giulliano Guimarães",
    balance: 2000,
    id: "1"
}

export const api: Promise<UserData> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account)
    }, 3000)
})