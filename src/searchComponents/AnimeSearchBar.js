import {useState} from 'react';
import {Input, InputGroup, InputRightElement, IconButton, VStack} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {SearchIcon} from '@chakra-ui/icons';
import axios from 'axios';

function AnimeSearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const searchAnime = async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
        const animeList = response.data.data;
        setQuery('');
        navigate('/search-results', {state: {animeList: animeList}});
    };

    return (
        <InputGroup size="lg">
            <Input
                placeholder="Search anime"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
        </InputGroup>
    );
}

export default AnimeSearchBar;
