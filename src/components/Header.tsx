import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react"
import logo from "../assets/dio.svg"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { IAppContext } from "../types/context"
import { changeLocalStorage } from "services/storage"
import { Link } from "react-router-dom"

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext) as IAppContext

  const handleLogout = () => {
    changeLocalStorage({ login: false, user: null })
    setIsLoggedIn(false)
  }

  return (
    <Flex>
      <Heading as="h1">
        <Box
          display="flex"
          alignItems="center"
          gap="12px"
          color="white"
          textDecoration="none">
          <Link to="/">
            <img src={logo} alt="Dio Bank" width={60} />
          </Link>

          <Link to="/">Dio Bank</Link>
        </Box>
      </Heading>

      {isLoggedIn &&
        <>
          <Spacer />

          <Button
            onClick={handleLogout}>
            Sair
          </Button>
        </>}
    </Flex>
  )
}

export default Header