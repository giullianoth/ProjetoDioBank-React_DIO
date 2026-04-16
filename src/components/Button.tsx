import { Button as ChakraButton } from "@chakra-ui/react"
import React from "react"

type Props = {
    onClick: React.MouseEventHandler
}

const Button = ({ onClick }: Props) => {
    return (
        <ChakraButton
            onClick={onClick}
            backgroundColor="#17a2b8"
            flexGrow={1}>
            Entrar
        </ChakraButton>
    )
}

export default Button