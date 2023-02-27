import axios from "axios";

export const fetchAnimeAiring = async () =>{
    const url = "https://api.jikan.moe/v4/top/anime?filter=airing"
    const response =  await axios.get(url)
        .then(response => response.data)
        return response;
}

export const fetchAnimeUpcoming = async () =>{
    const url = "https://api.jikan.moe/v4/top/anime?filter=upcoming"
    const response =  await axios.get(url)
        .then(response => response.data)
    return response;
}

export const fetchAnimePopular = async () =>{
    const url = "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
    const response =  await axios.get(url)
        .then(response => response.data)
    return response;
}

