import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { UserData } from "../types/user"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { IAppContext } from "../types/context"
import { getAllLocalStorage } from "services/storage"
import { DioBank } from "types/dio-bank"

const Account = () => {
    const [userData, setUserData] = useState<UserData | null>(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext) as IAppContext

    useEffect(() => {
        const storage = getAllLocalStorage()

        if (storage) {
            const { user } = JSON.parse(storage) as DioBank
            setUserData(user)
        }
    }, [])

    useEffect(() => {
        if ((userData && id !== userData.id) || !isLoggedIn) {
            navigate("/")
        }
    }, [id, isLoggedIn, userData, navigate])

    const currentDate = new Date()

    return (
        <Center>
            {userData
                ? <SimpleGrid marginTop="2em" columns={2} gap={8}>
                    <CardInfo
                        heading={`Bem-vindo, ${userData.name}!`}
                        content={`${currentDate.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`} />

                    <CardInfo heading="Saldo" content={`R$ ${userData.balance},00`} />
                </SimpleGrid>

                : <Spinner size="xl" color="white" />}
        </Center>
    )
}

export default Account