import { AbsoluteCenter, Card, Field, Heading, Input, Stack } from "@chakra-ui/react"
import Button from "./Button"
import { login } from "../services/login"

const FormCard = () => {
    const handleLogin = () => {
        login()
    }

    return (
        <AbsoluteCenter>
            <Card.Root minW="md">
                <Card.Header>
                    <Card.Title
                        fontWeight="bold"
                        fontSize="1.3em">
                        Faça o Login
                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root>
                            <Input
                                type="email"
                                placeholder="E-mail"
                                border="1px solid #CCC"
                                padding="10px" />
                        </Field.Root>

                        <Field.Root>
                            <Input
                                type="password"
                                placeholder="Senha"
                                border="1px solid #CCC"
                                padding="10px" />
                        </Field.Root>
                    </Stack>
                </Card.Body>

                <Card.Footer>
                    <Button onClick={handleLogin} />
                </Card.Footer>
            </Card.Root>
        </AbsoluteCenter>
    )
}

export default FormCard