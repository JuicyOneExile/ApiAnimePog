import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {
    AspectRatio,
    Badge, Box,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import {StarIcon} from "@chakra-ui/icons";
import Reviews from "../Components/Reviews";

const MAX_LINES = 4;

function Details(props) {
    const { id } = useParams();
    const fetchAnime = async () =>
        axios.get(`https://api.jikan.moe/v4/anime/${id}`).then((response) => response.data);

    const { data, isLoading, isError } = useQuery([`${id}animes`, id], () => fetchAnime());

    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => setExpanded(!expanded);

    if (isLoading) return <div>Loading...</div>;

    const { synopsis } = data.data;

    return (
        <Container maxW="100%" minHeight="100vh" bg="#1a1a1a" py={0} align="center">
            <Box maxW="container.lg" bg="#1a1a1a">
                <Flex flexDirection={{base: "column", lg: "row"}} color="#afacac" align="center" justify="center">
                    <AspectRatio minW="sm" ratio={4 / 6} flex="1">
                        <Image src={data.data.images.jpg.image_url} style={{height: '80%', width: '80%', margin: 'auto'}}/>
                    </AspectRatio>
                    <Box flex="1" ml={{ base: 0, lg: "40px" }} align="left">
                        <VStack align="left" spacing="6">
                            <Heading size="lg" fontWeight="bold" mb={2}>
                                {data.data.title}
                            </Heading>
                            <Stack direction="row" spacing="4" mb={6}>
                                {Array.isArray(data.data.genres) &&
                                    data.data.genres.map((genre) => (
                                        <Badge key={genre.mal_id} colorScheme="purple">
                                            {genre.name}
                                        </Badge>
                                    ))}
                            </Stack>
                            <Stack spacing="4" align="left">
                                <Text>
                                    <b>Type:</b> {data.data.type}
                                </Text>
                                <Text>
                                    <b>Episodes:</b> {data.data.episodes}
                                </Text>
                                <Text>
                                    <b>Status:</b> {data.data.status}
                                </Text>
                                <Text>
                                    <b>Score:</b> {data.data.score}/10 <StarIcon color="yellow" />
                                </Text>
                                <Text>
                                    <b>Rating:</b> {data.data.rating}
                                </Text>
                                <Text>
                                    <b>Duration:</b> {data.data.duration}
                                </Text>
                            </Stack>
                        </VStack>
                    </Box>
                </Flex>
                <Flex direction="column" bgColor="#222222" borderRadius="md">
                    {synopsis ? (
                        <Text color="#afacac" fontSize="md" m={5} noOfLines={expanded ? undefined : MAX_LINES} align="left">
                            {synopsis}
                        </Text>
                    ) : (
                        <Text color="#afacac" fontSize="md" m={5} align="left">
                            No description found for this anime.
                        </Text>
                    )}

                    {synopsis.split('\n').length > MAX_LINES && (
                        <Text as={Link} onClick={handleToggleExpand} alignSelf="flex-start" color="#afacac" m={5} align="left">
                            {expanded ? "See less" : "See more"}
                        </Text>
                    )}
                </Flex>
                {data.data.trailer.embed_url ? (
                    <Flex direction="column" bgColor="#222222" borderRadius="md" mt={10}>
                        <Heading color="#afacac" size="md" m={5} align="left">
                            Trailer
                        </Heading>
                        <AspectRatio ratio={16 / 9} mb={5} ml={5} mr={5}>
                            <iframe
                                title="trailer"
                                src={data.data.trailer.embed_url + `/autoplay=1`}
                                allowFullScreen
                            ></iframe>
                        </AspectRatio>
                    </Flex>
                ) : (
                    <Flex direction="column" bgColor="#222222" borderRadius="md" mt={10}>
                        <Heading color="#afacac" size="md" m={5} align="left">
                            Trailer
                        </Heading>
                        <Text color="#afacac" fontSize="md" m={5} align="left">
                            No trailer found for this anime.
                        </Text>
                    </Flex>
                )}
                <Reviews animeId={id}/>
            </Box>
        </Container>
    );
}

export default Details;