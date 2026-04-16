import { Card as ChakraCard } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Card = ({ children }: Props) => {
    return (
        <ChakraCard.Root width="100%">
            <ChakraCard.Body>
                {children}
            </ChakraCard.Body>
        </ChakraCard.Root>
    )
}

export default Card