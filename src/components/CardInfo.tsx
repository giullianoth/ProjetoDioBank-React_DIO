import { Box, Text } from "@chakra-ui/react"

type Props = {
    heading: string
    content: string
}

const CardInfo = ({ heading, content }: Props) => {
    return (
        <Box
            backgroundColor="#f3f4f5"
            padding="20px"
            borderRadius="10px">
            <Text fontSize="xl" fontWeight="bold">{heading}</Text>
            <Text>{content}</Text>
        </Box>
    )
}

export default CardInfo