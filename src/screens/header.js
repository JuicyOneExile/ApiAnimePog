import {Avatar, Box, Flex} from "@chakra-ui/react";
import React from "react";

const Header = () =>{
    return(
        <Box maxW = "100%" bg="blue" mb= "10">
            <Flex justify="flex-end" p="2.5">
                <Avatar />
            </Flex>
        </Box>
    )
}

export default Header

