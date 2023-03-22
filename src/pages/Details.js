import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
    AspectRatio, Badge,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";

function Details(props) {
    const { id } = useParams()
    const fetchAnime = async () =>
        axios.get(`https://api.jikan.moe/v4/anime/${id}`)
            .then(response => response.data)

    const { data, isLoading, isError } = useQuery([`${id}animes`, id], () => fetchAnime());

    if (isLoading) return <div>Loading...</div>

    return (
        <Container maxW="75%" height="100%">
            <Stack spacing='40px' height="100%" minH="100%">
                <Flex bgColor="gray.800" color="white" p="4" borderRadius="md" boxShadow="md" height="100%">
                    <AspectRatio minW="sm" ratio={4 / 6}>
                        <Image src={data.data.images.jpg.image_url} />
                    </AspectRatio>
                    <VStack align="left" spacing="4" borderColor="white" border="2px" p={6}>
                        <Heading>{data.data.title}</Heading>
                        <Text fontSize="lg">{data.data.synopsis}</Text>
                        <Stack spacing="2">
                            {Array.isArray(data.data) && data.data.flatMap((x,i) =>
                                <Badge key={i}><b>Tags: </b>{x.genres.name} </Badge>
                            )}

                            <Text>
                                <b>Type: </b>{data.data.type}
                            </Text>
                            <Text>
                                <b>Episodes: </b>{data.data.episodes}
                            </Text>
                            <Text>
                                <b>Status: </b>{data.data.status}
                            </Text>
                            <Text>
                                <b>Score: </b>{data.data.score}
                            </Text>
                            <Text>
                                <b>Rating: </b>{data.data.rating}
                            </Text>
                            <Text>
                                <b>Duration: </b>{data.data.duration}
                            </Text>
                        </Stack>
                    </VStack>
                </Flex>
            </Stack>
        </Container>
    );
}

export default Details;
