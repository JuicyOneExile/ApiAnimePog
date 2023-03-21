import {Avatar, Box, Flex, Heading, Spacer, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {DrawerExample} from "./drawer";
import {Link} from "react-router-dom";
import SearchBox from "./searchBox";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <Box maxW="100%" bg="blue" mb="10">
            <Flex justifyContent="flex-start" align="center" p={2.5} gap={5}>
                <Heading><Link to="/">
                    AnimeList
                </Link>
                </Heading>
                <Spacer/>
                <Avatar/>
                <DrawerExample/>
            </Flex>
        </Box>
    )
}

export default Header