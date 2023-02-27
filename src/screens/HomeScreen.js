import React from 'react';
import {fetchAnimeAiring, fetchAnimePopular, fetchAnimeUpcoming} from "../utils/Api";
import {useQuery} from "@tanstack/react-query";
import {Container, Grid, GridItem, Image, Stack, Text} from '@chakra-ui/react'

function HomeScreen(props) {

    const animeListAiring = useQuery(["animeAiring"], () => fetchAnimeAiring());
    // const animeListUpcoming = useQuery(["animeUpcoming"], () => fetchAnimeUpcoming ());
    // const animeListPopular = useQuery(["animePopular"], () => fetchAnimePopular ());

    if (animeListAiring.isLoading) return <div> Loading... </div>

    return (
        <Container maxW = "1000px" bg="">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>{animeListAiring.data.data.map(anime =>
                <GridItem>
                    <Stack>
                        <Image src={anime.images.jpg.image_url}/>
                        <Text noOfLines={2}>{anime.title}</Text>
                    </Stack>
                </GridItem>)}
            </Grid>
        </Container>

    );
}

export default HomeScreen;