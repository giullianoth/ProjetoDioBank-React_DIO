import { Box, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    heading: string
    content: string | ReactNode
}

const CardInfo = ({ heading, content }: Props) => {
    return (
        <Box
            backgroundColor="#f3f4f5"
            padding="20px"
            borderRadius="10px"
            width="100%"
            maxWidth="480px">
            <Text fontSize="xl" fontWeight="bold">{heading}</Text>
            <Text>{content}</Text>
        </Box>
    )
}

export default CardInfo