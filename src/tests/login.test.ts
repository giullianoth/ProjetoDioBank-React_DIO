import { login } from "../services/login"

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
})