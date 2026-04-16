/// <reference path="react-app-env.d.ts" />
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext'
import MainRoutes from 'routes'
import { createLocalStorage, getAllLocalStorage } from 'services/storage'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    if (!getAllLocalStorage()) {
      createLocalStorage()
    }
  }, [])

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={defaultSystem}>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
