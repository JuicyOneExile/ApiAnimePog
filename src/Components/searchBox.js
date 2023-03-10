import {Flex, IconButton, Input, Stack} from "@chakra-ui/react";
import React from "react";
import {SearchIcon} from "@chakra-ui/icons";
export function SearchBox() {
    return(
        <Flex>
            <Input placeholder='medium size' size='md' />
            <IconButton icon={<SearchIcon/>}/>
        </Flex>
    );
}