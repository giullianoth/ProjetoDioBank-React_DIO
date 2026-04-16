import { login } from "../services/login"

describe("login", () => {
    const mockEmail = "giulliano@dio.bank"

    it("Deve apresentar uma mensagem de boas-vindas ao usuário caso o e-mail seja válido", async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it("Deve exibir um erro caso o e-mail seja inválido", async () => {
        const response = await login("invalid@email.com")
        expect(response).toBeFalsy()
    })
})