import { Box } from "@chakra-ui/react"
import Header from "./Header"
import React from "react"

type Props = {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Box
            backgroundColor="rgb(232 80 95)"
            width="100%"
            height="100vh"
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            padding="2em">
            <Header />

            <Box flexGrow="1">
                <main style={{ height: "100%" }}>
                    {children}
                </main>
            </Box>
        </Box>
    )
}

export default Layout