import {Avatar, Box, Flex, Heading, Spacer, Text} from "@chakra-ui/react";
import React from "react";
import {DrawerExample} from "../Components/drawer";
import {SearchBox} from "../Components/searchBox";

const Header = () => {
    return (
        <Box maxW="100%" bg="blue" mb="10">
            <Flex justify="space-between" p={2.5}>
                <Heading>AnimeList</Heading>
                <SearchBox/>
                <Flex>
                    <Avatar />
                    <DrawerExample/>
                </Flex>

            </Flex>
        </Box>
    )
}

export default Header