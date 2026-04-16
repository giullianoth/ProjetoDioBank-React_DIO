import { useContext } from "react"
import Account from "./pages/Account"
import AccountInfo from "./pages/AccountInfo"
import Home from "./pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppContext } from "context/AppContext"
import { IAppContext } from "types/context"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext) as IAppContext

    return (
        <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/conta/1" /> : <Home />} />
            <Route path="/conta/:id" element={isLoggedIn ? <Account /> : <Navigate to="/" />} />
            <Route path="/informacoes-da-conta" element={<AccountInfo />} />
        </Routes>
    )
}

export default MainRoutes