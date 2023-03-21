import ReactDOM from 'react-dom/client';
import React, {StrictMode} from "react";
import App from "./App";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider, Container, Flex} from "@chakra-ui/react";
import Header from "./Components/header";
import {BrowserRouter} from "react-router-dom";

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <BrowserRouter>
        <ChakraProvider>
            <QueryClientProvider client={client}>
               <Header />
                <App/>

            </QueryClientProvider>
        </ChakraProvider>
        </BrowserRouter>
    </StrictMode>


);