import { Button as ChakraButton } from "@chakra-ui/react"
import React from "react"

const Button = () => {
    return (
        <ChakraButton
        type="submit"
            backgroundColor="#17a2b8"
            flexGrow={1}>
            Entrar
        </ChakraButton>
    )
}

export default Button