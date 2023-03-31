import {Avatar, Box, Container, Flex, Heading, Spacer, Stack, useBreakpointValue} from '@chakra-ui/react'
import React, { useState } from 'react'
import MobileHeader from './MobileHeader'
import { Link } from 'react-router-dom'
import AnimeSearchBar from '../searchComponents/AnimeSearchBar'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isSmallScreen = useBreakpointValue({ base: true, md: false })

    const toggleMobileDrawer = () => setIsOpen(!isOpen)

    return (
        <Box bg="#222222">
            <Container maxW="container.lg">
                <Flex p={2.5} gap={5} bg="#222222">
                    <Heading as={Link} color="#afacac" to={`/`}>
                        AnimeList
                    </Heading>
                    <Spacer/>
                    {!isSmallScreen ? (
                        <>
                            <AnimeSearchBar />
                            <Avatar />
                        </>
                    ) : (
                        <MobileHeader isOpen={isOpen} onToggle={toggleMobileDrawer} />
                    )}
                </Flex>
            </Container>
        </Box>
    )
}

export default Header