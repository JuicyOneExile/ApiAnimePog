import React, {Fragment} from 'react';
import {
    Box, Image,
} from '@chakra-ui/react'
import {Items, PaginatedItems} from "./pagination";


function HomeScreen(props) {

    // const animeListUpcoming = useQuery(["animeUpcoming"], () => fetchAnimeUpcoming ());
    // const animeListPopular = useQuery(["animePopular"], () => fetchAnimePopular ());

    return (
        <>
            <Box maxW = "1000px" bg="">
                <Items/>
                <PaginatedItems/>
            </Box>
        </>


    );
}

export default HomeScreen;