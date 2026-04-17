import { Center, Spinner, Text } from "@chakra-ui/react"
import CardInfo from "components/CardInfo"
import { AppContext } from "context/AppContext"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAllLocalStorage } from "services/storage"
import { IAppContext } from "types/context"
import { DioBank } from "types/dio-bank"
import { UserData } from "types/user"

const UserInfo = () => {
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
    }, [id, isLoggedIn, navigate, userData])

    const cardContent = userData
        ? (
            <>
                <span><strong>Nome:</strong> {userData.name}</span><br />
                <span><strong>E-mail:</strong> {userData.email}</span>
            </>
        )
        : null

    return (
        userData
            ? <Center flexDirection="column" rowGap={12} marginTop="2em">
                <CardInfo heading={`Perfil de ${userData.name}`}
                    content={cardContent} />

                <Link to={`/conta/${userData.id}`} className="App-link">
                    <Text color="white" fontWeight="bold" textDecoration="underline">Visualizar Conta</Text>
                </Link>
            </Center>

            : <Spinner size="xl" color="white" />
    )
}

export default UserInfo