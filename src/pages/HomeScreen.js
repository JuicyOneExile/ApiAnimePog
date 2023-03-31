import React, {useEffect, useState} from 'react';
import {AspectRatio, Box, Container, Flex, Image, SimpleGrid, Stack, Tab, TabList, Tabs, Text,} from '@chakra-ui/react'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import "../styles/pagination.css";
import {Link} from "react-router-dom";
import ImageCarousel from "../Components/ImageCarousel";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import luffy from "../images/luffy.png";
import {useLocation} from 'react-router-dom';

const images = [image1, image2, image3, image4, image5];

const filters = [
    {query: "airing", name: "Airing"},
    {query: "upcoming", name: "Upcoming"},
    {query: "bypopularity", name: "Popular"},
    {query: "favorite", name: "Favorite"}
];


function HomeScreen(props) {
    const [filter, setFilter] = useState("airing");
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const {state} = useLocation();

    const fetchAnime = async (_filter, _page) =>
        axios.get(`https://api.jikan.moe/v4/top/anime?filter=${_filter}&page=${_page}&limit=24`)
            .then(response => response.data);

    const {data, isLoading, isError} = useQuery([`${page}${filter}animes`, page], () => fetchAnime(filter, page));

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage);
        setPage(selectedPage + 1);
    };

    useEffect(() => {
        if (state && state.page) {
            setPage(state.page);
            setCurrentPage(state.page - 1);
        }
    }, [state]);
    return (
        <Container maxW="100%" bg="#1a1a1a" bgImage={luffy} backgroundRepeat="no-repeat" backgroundPosition="right" backgroundAttachment="fixed" bgSize="25%">

            <Container maxW="60%" align="center" justify="center" paddingY={4}>
                <Container maxW="100%" borderRadius="md" bg="#222222"  mb={5}>

                    <ImageCarousel images={images}/>
                </Container>

                <Stack bg="#222222" p={5} borderRadius="md">
                    <Box paddingY={3}>
                        <Tabs>
                            <TabList color="#afacac">
                                {filters.flatMap((x, i) =>
                                    <Tab textTransform="capitalize" key={i} value={x.query} onClick={event => setFilter(event.target.value)}>
                                        {x.name}
                                    </Tab>
                                )}
                            </TabList>
                        </Tabs>
                    </Box>
                    {isLoading ? <div> Loading...</div> :
                        <Flex justifyContent="center">
                            <Box maxW="1000px" bg="">
                                <SimpleGrid columns={[2, 3, 4]} spacing='40px'>
                                    {data?.data.flatMap((x, i) =>
                                        <Box key={i} as={Link} to={`/animes/${x.mal_id}`}>
                                            <AspectRatio ratio={4 / 6}>
                                                <Image src={x.images.jpg.image_url}/>
                                            </AspectRatio>
                                            <Text noOfLines={2} color="#afacac">{x.title}</Text>
                                        </Box>
                                    )}
                                </SimpleGrid>
                            </Box>
                        </Flex>}
                    <Flex justifyContent={"center"}>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next"
                            onPageChange={(e) => {
                                console.log("last_visible_page:", data?.pagination?.last_visible_page);
                                console.log("selected page:", e.selected + 1);
                                setPage(e.selected + 1);
                                setCurrentPage(e.selected + 1);
                            }}
                            pageRangeDisplayed={5}
                            pageCount={data?.pagination?.last_visible_page}
                            previousLabel="previous"
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
        </Container>

    );
}

export default HomeScreen;