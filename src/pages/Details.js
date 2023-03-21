import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {AspectRatio, Text, Container, Flex, Heading, HStack, Image, Spacer, Stack, Tag} from "@chakra-ui/react";

function Details(props) {
    const {id} = useParams()
    const fetchAnime = async () =>
        axios.get(`https://api.jikan.moe/v4/anime/${id}`)
            .then(response => response.data)
    const {data, isLoading, isError} = useQuery([`${id}animes`, id], () => fetchAnime());
    if (isLoading) return <div>Loading...</div>

    return (
        <Container maxW="75%">

            <Stack spacing='40px'>
                <Flex bgColor="red.500" gap="40px">
                        <AspectRatio minW="sm" ratio={4 / 6}>
                            <Image src={data.data.images.jpg.image_url}/>
                        </AspectRatio>
                    <Stack>
                        <Heading>{data.data.title}</Heading>
                        <Text>
                            {data.data.synopsis}
                        </Text>
                    </Stack>

                </Flex>
        </Stack>
        </Container>
    );
}

export default Details;