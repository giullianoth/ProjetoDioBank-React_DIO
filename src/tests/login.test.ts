import { UserData } from "types/user"
import { login } from "../services/login"
import { changeLocalStorage } from "services/storage"

const user: UserData = {
    email: "giulliano@dio.bank",
    password: "123456",
    name: "Giulliano Guimarães",
    balance: 2000,
    id: "1"
}

jest.mock("../services/storage", () => ({
    changeLocalStorage: jest.fn()
}))

describe("login", () => {
    const mockEmail = "giulliano@dio.bank"
    const mockPassword = "123456"

    it("Deve apresentar uma mensagem de boas-vindas ao usuário caso o e-mail seja válido", async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it("Deve exibir um erro caso o e-mail seja inválido", async () => {
        const response = await login("invalid@email.com", mockPassword)
        expect(response).toBeFalsy()
    })

    it("Deve exibir um erro caso a senha esteja incorreta", async () => {
        const response = await login(mockEmail, "invalidpassword")
        expect(response).toBeFalsy()
    })

    it("Deve salvar os dados do usuário após validação de e-mail e senha", async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
        expect(changeLocalStorage).toHaveBeenCalledWith({ login: true, user })
    })
})