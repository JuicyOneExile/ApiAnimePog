import { Link } from "react-router-dom";
import { Box, Input, InputGroup, InputLeftElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.jikan.moe/v4/anime?q=${searchTerm}`
            );
            setSearchResults(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box>
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input
                    type="text"
                    placeholder="Search anime"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconButton aria-label="Search" icon={<SearchIcon />} onClick={handleSearch} />
            </InputGroup>
            {searchResults.map((result) => (
                <Link to={`/results/${result.id}`} key={result.id}>
                    <Box>{result.title}</Box>
                </Link>
            ))}
        </Box>
    );
};

export default SearchBar;