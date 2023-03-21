import React, {useState} from 'react';
import {
    AspectRatio,
    Box, Button, Container, Flex, Image, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text,
} from '@chakra-ui/react'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import "../styles/pagination.css";
import {Link} from "react-router-dom";

const filters = [{query: "airing", name: "Airing"},
    {query: "upcoming", name: "Upcoming"},
    {query: "bypopularity", name: "Popular"},
    {query: "favorite", name: "Favorite"}];


function HomeScreen(props) {

    const [filter, setFilter] = useState("airing");
    const [page, setPage] = useState(1);
    const fetchAnime = async (_filter, _page) =>
        axios.get(`https://api.jikan.moe/v4/top/anime?filter=${_filter}&page=${_page}&limit=24`)
            .then(response => response.data)
    const {data, isLoading, isError} = useQuery([`${page}${filter}animes`, page], () => fetchAnime(filter, page));
    return (
        <Container maxW="55%">
        <Stack spacing={30}>
            <Flex justifyContent="flex-end">
                <Menu>
                    <MenuButton as={Button} textTransform="capitalize">
                        {filter}
                    </MenuButton>
                    <MenuList>
                        {filters.flatMap((x, i) =>
                            <MenuItem key={i} value={x.query} onClick={event => setFilter(event.target.value)}>
                                {x.name}
                            </MenuItem>

                        )}
                    </MenuList>
                </Menu>
            </Flex>
            {isLoading ? <div> Loading...</div> :
                <Box maxW="1000px" bg="">

                    <SimpleGrid columns={[2, 3, 4]} spacing='40px'>
                        {data?.data.flatMap((x,i) =>
                            <Box key={i} as={Link} to={`/animes/${x.mal_id}`}>
                                <AspectRatio ratio={4 / 6}>
                                    <Image src={x.images.jpg.image_url}/>
                                </AspectRatio>
                                <Text noOfLines={2} >{x.title}</Text>
                            </Box>
                        )}
                    </SimpleGrid>
                </Box>}
            <Flex>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={(e) => setPage(e.selected + 1)}
                    pageRangeDisplayed={5}
                    pageCount={data?.pagination?.last_visible_page}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    activeClassName={'item active '}
                    breakClassName={'item break-me '}
                    containerClassName={'pagination'}
                    disabledClassName={'disabled-page'}
                    marginPagesDisplayed={2}
                    nextClassName={"item next "}
                    pageClassName={'item pagination-page '}
                    previousClassName={"item previous"}
                />

            </Flex>
        </Stack>

        </Container>
    );
}

export default HomeScreen;