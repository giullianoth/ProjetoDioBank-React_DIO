import { Center, Text } from "@chakra-ui/react"
import CardInfo from "components/CardInfo"
import { Link } from "react-router-dom"

const UserInfo = () => {
    return (
        <Center flexDirection="column" rowGap={12} marginTop="2em">
            <CardInfo heading={`Perfil de Giulliano`}
            content={<><p><strong>Nome:</strong> Giulliano</p><p><strong>E-mail:</strong> giulliano@dio.bank</p></>} />

            <Link to="/conta/1" className="App-link">
                <Text color="white" fontWeight="bold">Visualizar Conta</Text>
            </Link>
        </Center>
    )
}

export default UserInfo