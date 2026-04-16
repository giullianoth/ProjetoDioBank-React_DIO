import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { UserData } from "../types/user"
import { Link, useNavigate, useParams } from "react-router-dom"
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
        <Center flexDirection="column" rowGap={12}>
            {userData
                ? <>
                    <SimpleGrid marginTop="2em" columns={1} gap={8} md={{ gridTemplateColumns: "1fr 1fr" }}>
                        <CardInfo
                            heading={`Bem-vindo, ${userData.name}!`}
                            content={`${currentDate.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`} />

                        <CardInfo heading="Saldo" content={`R$ ${userData.balance},00`} />
                    </SimpleGrid>

                    <Link to={`/usuario/${userData.id}`}>
                        <Text color="white" fontWeight="bold">Detalhes do Perfil</Text>
                    </Link>
                </>

                : <Spinner size="xl" color="white" />}
        </Center>
    )
}

export default Account