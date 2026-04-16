import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const AccountInfo = () => {
    return (
        <>
            <Text>Informações da Conta</Text>
            <Link to="/conta/1" className="App-link">Visualizar Conta</Link>
        </>
    )
}

export default AccountInfo