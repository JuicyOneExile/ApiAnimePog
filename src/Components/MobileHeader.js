import { Avatar, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import AnimeSearchBar from '../searchComponents/AnimeSearchBar'

const MobileHeader = ({ isOpen, onToggle }) => {
    return (
        <>
            <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                onClick={onToggle}
                bg="#222222"
                color="#afacac"
                _hover={{ bg: '#afacac', color: '#222222' }}
                _active={{ bg: '#afacac', color: '#222222' }}
            />
            <Drawer placement="right" onClose={onToggle} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="#222222" color="#afacac">
                    <DrawerHeader>
                        <Link to={`/`} color="#afacac">
                            AnimeList
                        </Link>
                    </DrawerHeader>
                    <DrawerBody>
                        <AnimeSearchBar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileHeader