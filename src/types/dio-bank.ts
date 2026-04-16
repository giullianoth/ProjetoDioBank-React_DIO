import { UserData } from "./user"

export interface DioBank {
    login: boolean
    user: UserData | null
}