import ReactDOM from 'react-dom/client';
import React, {StrictMode} from "react";
import App from "./App";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider, Container, Flex} from "@chakra-ui/react";
import Header from "./screens/header";

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <ChakraProvider>
            <QueryClientProvider client={client}>
               <Header />
                <Container maxW = "55%">
                    <App />
                </Container>

            </QueryClientProvider>
        </ChakraProvider>
    </StrictMode>


);