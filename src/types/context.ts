export interface IAppContext {
    user: string
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
    login: (email: string, password: string) => Promise<boolean>
}