import React, {useState} from 'react';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import SearchBox from "../Components/searchBox";
import useDebounce from "../hooks/Debounce";

function SearchPage(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearch = useDebounce(searchQuery, 500);
    const fetchAnime = async (debouncedSearch) =>
        axios.get(`https://api.jikan.moe/v4/anime?q=${debouncedSearch}`)
            .then(response => response.data)
    const {data, isLoading, isError} = useQuery([`${searchQuery}animes`, searchQuery], () => fetchAnime(debouncedSearch));
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
    );
}

export default SearchPage;