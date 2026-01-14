import { login } from "../services/login"

describe("login", () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it("Deve apresentar uma mensagem de boas-vindas ao usuário", () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith("Bem-vindo, Giulliano!")
    })
})