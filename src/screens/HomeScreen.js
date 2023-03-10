import React, {useState} from 'react';
import {
    AspectRatio,
    Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Stack, Text,
} from '@chakra-ui/react'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import "../styles/pagination.css";


function ChevronDownIcon() {
    return null;
}

function HomeScreen(props) {
    const [filter, setFilter] = useState("airing");
    const [page, setPage] = useState(1);
    const fetchAnime = async (_filter, _page) =>
        axios.get(`https://api.jikan.moe/v4/top/anime?filter=${_filter}&page=${_page}&limit=24`)
            .then(response => response.data)
    const {data, isLoading, isError} = useQuery([`${page}${filter}animes`, page], () => fetchAnime(filter, page));
    return (
        <Stack spacing={30}>
            <Flex justifyContent="flex-end" >
                <Menu>
                    <MenuButton as={Button} textTransform="capitalize" rightIcon={<ChevronDownIcon />}>
                        {filter}
                    </MenuButton>
                    <MenuList>
                        <MenuItem value={"airing"}>
                            Airing
                        </MenuItem>
                        <MenuItem value={"bypopularity"}>
                            Popular
                        </MenuItem>
                        <MenuItem value={"upcoming"}>
                            Upcoming
                        </MenuItem>
                        <MenuItem value={"favorite"}>
                            Favorite
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            {isLoading ? <div> Loading...</div> :
                <Box maxW="1000px" bg="">

                    <SimpleGrid columns={[2, 3, 4]} spacing='40px'>
                    {data?.data.map(x =>
                        <Box>
                            <AspectRatio ratio={4/6}>
                                <Image src={x.images.jpg.image_url} />
                            </AspectRatio>
                            <Text>{x.title}</Text>
                        </Box>


                    )}
                        </SimpleGrid>
                </Box>}
            <Flex>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={(e) => setPage(e.selected+1)}
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
                {/*<h1>{page}</h1>
                <Button onClick={() => setPage(prev => prev+1)}>
                    "+1 page"
                </Button>*/}

            </Flex>
        </Stack>
    );
}

export default HomeScreen;