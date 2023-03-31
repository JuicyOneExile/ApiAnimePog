import { Box, Container, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <Box bg="#111111" color="white" borderTop="1px solid #333333">
            <Container maxW="container.xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" py={6}>
                    <Flex direction="column">
                        <Text fontWeight="bold" mb={2}>AnimeList</Text>
                        <Text fontSize="sm" color="#aaa">All the information you need on animes in one place</Text>
                    </Flex>
                    <Stack direction="row" spacing={6} alignItems="center">
                        <IconButton icon={<FaFacebook />} variant="unstyled" aria-label="Facebook" fontSize="xl" color="#aaa" _hover={{ color: "white" }} />
                        <IconButton icon={<FaTwitter />} variant="unstyled" aria-label="Twitter" fontSize="xl" color="#aaa" _hover={{ color: "white" }} />
                        <IconButton icon={<FaGithub />} variant="unstyled" aria-label="GitHub" fontSize="xl" color="#aaa" _hover={{ color: "white" }} onClick={() => window.open('https://github.com/JuicyOneExile/ApiAnimePog', '_blank')} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
