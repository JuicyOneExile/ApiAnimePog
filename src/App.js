import React from "react";
import HomeScreen from "./screens/HomeScreen";
import {ChakraProvider} from '@chakra-ui/react'

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const client = new QueryClient()

const App = () =>{
    return(
        <ChakraProvider>
            <QueryClientProvider client={client}>
                <HomeScreen />
            </QueryClientProvider>
        </ChakraProvider>

    )
}

export default App;