import {Avatar, Flex, Heading, Stack} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
import AnimeSearchBar from "../searchComponents/AnimeSearchBar";

const Header = () => {
    return (
        <Stack justifyContent="flex-start" align="center" maxW="100%" bg="#222222">
            <Flex minW="60%" justifyContent="flex-start" p={2.5} gap={5} bg="#222222">
                <Heading color="#afacac"><Link to="/">
                    AnimeList
                </Link>
                </Heading>
                <AnimeSearchBar/>
                <Avatar/>
            </Flex>
        </Stack>
    )
}

export default Header