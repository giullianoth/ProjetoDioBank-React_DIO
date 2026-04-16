import { AbsoluteCenter, Box, Field, Heading, Input, Stack } from "@chakra-ui/react"
import Card from "../components/Card"
import { useContext, useState } from "react"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { IAppContext } from "types/context"
import Button from "../components/Button"
import { changeLocalStorage } from "services/storage"

const Home = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const { setIsLoggedIn } = useContext(AppContext) as IAppContext

    const handleValidateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            alert("E-mail ou senha inválido")
            return
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate(`/conta/1`)
    }

    return (
        <Box
            height="100%"
            position="relative">
            <AbsoluteCenter
                width="100%"
                maxW="md">
                <Card>
                    <Heading
                        as="h2"
                        fontWeight="bold"
                        fontSize="1.3em"
                        marginBottom="20px">
                        Faça o Login
                    </Heading>

                    <Stack gap="4" w="full">
                        <Field.Root>
                            <Input
                                type="email"
                                placeholder="E-mail"
                                border="1px solid #CCC"
                                padding="10px"
                                value={email}
                                onChange={event => setEmail(event.target.value)} />
                        </Field.Root>

                        <Field.Root>
                            <Input
                                type="password"
                                placeholder="Senha"
                                border="1px solid #CCC"
                                padding="10px"
                                value={password}
                                onChange={event => setPassword(event.target.value)} />
                        </Field.Root>

                        <Button onClick={() => handleValidateUser(email, password)} />
                    </Stack>
                </Card>
            </AbsoluteCenter>

        </Box>
    )
}

export default Home