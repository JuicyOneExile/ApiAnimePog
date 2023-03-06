import {Avatar, Box, Flex, Heading, Spacer, Text} from "@chakra-ui/react";
import React from "react";
import DrawerExample from "./drawer";

const Header = () => {
    return (
        <Box maxW="100%" bg="blue" mb="10">
            <Flex justify="flex-start" p="2.5">
                <Heading>AnimeList</Heading>
                <Spacer/>
                <Avatar />
                <Spacer/>
                <DrawerExample/>
            </Flex>
        </Box>
    )
}

export default Header