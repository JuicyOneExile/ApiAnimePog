import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {IconButton, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

function AnimeSearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const searchAnime = async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
        const animeList = response.data.data;
        setQuery('');
        navigate('/search-results', {state: {animeList: animeList}});
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchAnime();
        }
    };

    return (<InputGroup size="lg">
            <Input
                placeholder="Search anime"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                bg="gray.700"
                color="gray.100"
                _placeholder={{color: 'gray.400'}}
                borderRadius="md"
                borderColor="gray.500"
                borderWidth="1px"
                px="4"
                py="2"
                _focus={{outline: 'none', boxShadow: 'outline', borderColor: 'gray.400'}}
            />
            <InputRightElement>
                <IconButton
                    aria-label="Search anime"
                    icon={<SearchIcon/>}
                    size="lg"
                    colorScheme="gray"
                    variant="solid"
                    onClick={searchAnime}
                />
            </InputRightElement>
        </InputGroup>);
}

export default AnimeSearchBar