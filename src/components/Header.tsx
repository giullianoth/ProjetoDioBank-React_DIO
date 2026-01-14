import { Heading, Link } from "@chakra-ui/react"
import logo from "../assets/dio.svg"

const Header = () => {
  return (
    <Heading as="h1">
      <Link
        href="#"
        display="flex"
        gap="12px"
        color="white">
        <img src={logo} alt="Dio Bank" width={60} />
        <span>Dio Bank</span>
      </Link>
    </Heading>
  )
}

export default Header