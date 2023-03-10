import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {fetchAnimeAiring, fetchPagination} from "../utils/Api";
import {AspectRatio, Grid, GridItem, Image, Stack, Text} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";


export function Items() {
    const items = useQuery(["animeAiring"], () => fetchAnimeAiring());


    if (items.isLoading) return (<div> Loading... </div>);
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>{items.data.data.map(anime =>
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
    const items = useQuery(["pagination"], () => fetchPagination());
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.pagination.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.pagination.length;
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