import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React, {StrictMode} from "react";
import App from "./App";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider} from "@chakra-ui/react";
import Header from "./Components/Header";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Components/Footer";

const client = new QueryClient()

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <QueryClientProvider client={client}>
                    <Header/>
                    <App/>
                    <Footer/>
                </QueryClientProvider>
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>


);
