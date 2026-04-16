import { Button, Flex, Heading, Link, Spacer } from "@chakra-ui/react"
import logo from "../assets/dio.svg"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { IAppContext } from "../types/context"
import { changeLocalStorage } from "services/storage"

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext) as IAppContext

  const handleLogout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
  }

  return (
    <Flex>
      <Heading as="h1">
        <Link
          href="#"
          display="flex"
          gap="12px"
          color="white"
          textDecoration="none">
          <img src={logo} alt="Dio Bank" width={60} />
          <span>Dio Bank</span>
        </Link>
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