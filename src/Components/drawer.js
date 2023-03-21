import {
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Icon, IconButton, Input, Stack,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {HamburgerIcon} from "@chakra-ui/icons";

export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Stack>
            <IconButton   icon={<HamburgerIcon />} onClick={onOpen}/>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>AnimeList</DrawerHeader>

                    <DrawerBody>
                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </Stack>
    )
}