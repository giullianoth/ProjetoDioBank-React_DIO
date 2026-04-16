import { AbsoluteCenter, Box, Field, Heading, Input, Stack } from "@chakra-ui/react"
import Card from "../components/Card"
import { FormEvent, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { IAppContext } from "types/context"
import Button from "../components/Button"
import { getAllLocalStorage } from "services/storage"
import { DioBank } from "types/dio-bank"

const Home = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn, login } = useContext(AppContext) as IAppContext

    useEffect(() => {
        const storage = getAllLocalStorage()

        if (storage) {
            const { login, user } = JSON.parse(storage) as DioBank

            if (isLoggedIn && login && user) {
                navigate(`/conta/${user.id}`)
            }
        }
    }, [navigate, isLoggedIn])

    const handleValidateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            alert("E-mail ou senha inválido")
            return
        }

        setIsLoggedIn(true)
        navigate(`/conta/1`)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        handleValidateUser(email, password)
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

                    <form onSubmit={handleSubmit}>
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

                            <Button />
                        </Stack>
                    </form>
                </Card>
            </AbsoluteCenter>

        </Box>
    )
}

export default Home