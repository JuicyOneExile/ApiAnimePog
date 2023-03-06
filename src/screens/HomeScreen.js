import React from 'react';
import {
    Box,
} from '@chakra-ui/react'
import {Items} from "./pagination";


function HomeScreen(props) {

    // const animeListUpcoming = useQuery(["animeUpcoming"], () => fetchAnimeUpcoming ());
    // const animeListPopular = useQuery(["animePopular"], () => fetchAnimePopular ());

    return (
        <>
            <Box maxW = "1000px" bg="">
                <Items/>
            </Box>
        </>


    );
}

export default HomeScreen;