import {Box, Image, Stack, Heading, Text, Flex, Container, Spacer} from '@chakra-ui/react';
import {Link, useLocation} from 'react-router-dom';

function AnimeSearchResults() {
    const location = useLocation();
    const animeList = location.state.animeList;

    return (
        <Container maxW="100%" bg="#1a1a1a" p={4}>
            <Container maxW="75%" bg="#222222" p={4}>
                <Stack spacing={4}>
                {animeList.map((anime) => (
                    <Box key={anime.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} as={Link} to={`/animes/${anime.mal_id}`}>
                        <Stack direction={{base: "column", md: "row"}} spacing={{base: "4", md: "8"}}>
                            <Image src={anime.images.jpg.image_url} alt={anime.title} w={{base: "100%", md: "200px"}}
                                   h={{base: "auto", md: "250px"}} objectFit="cover"/>
                            <Box p={{base: "4", md: "0"}} flex="1">
                                <Heading fontSize="xl" fontWeight="semibold" mb="2" color="white">
                                    {anime.title}
                                </Heading>
                                <Text color="#afacac"    noOfLines={3}>{anime.synopsis}</Text>
                            </Box>
                        </Stack>
                    </Box>
                ))}

                </Stack>
            </Container>
        </Container>
    );
}

export default AnimeSearchResults;
