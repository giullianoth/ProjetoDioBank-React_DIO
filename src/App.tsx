import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react'
import './App.css'
import Layout from './components/Layout'
import FormCard from './components/FormCard'

const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <Box
          height="100%"
          position="relative">
          <FormCard />
        </Box>
      </Layout>
    </ChakraProvider>
  )
}

export default App
