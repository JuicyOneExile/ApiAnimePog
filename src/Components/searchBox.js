import React from 'react';
import {Input} from "@chakra-ui/react";

function SearchBox({searchQuery, setSearchQuery}) {
    return (
        <Input variant='filled' placeholder='Cerca' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
    );

}

export default SearchBox;