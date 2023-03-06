import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {fetchAnimeAiring} from "../utils/Api";
import {AspectRatio, Grid, GridItem, Image, Stack, Text} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";

export function Items() {
    const animeListAiring = useQuery(["animeAiring"], () => fetchAnimeAiring());
    if (animeListAiring.isLoading) return (<div> Loading... </div>);
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>{animeListAiring.data.data.map(anime =>
            <GridItem>
                <Stack>
                    <AspectRatio maxW='100%' ratio={4 / 6}>
                        <Image src={anime.images.jpg.image_url}/>
                    </AspectRatio>
                    <Text noOfLines={2}>{anime.title}</Text>
                </Stack>
            </GridItem>)}
        </Grid>
    );
}

export function PaginatedItems({ itemsPerPage }) {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = animeListAiring.data.data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(animeListAiring.data.data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % animeListAiring.data.data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
export default PaginatedItems