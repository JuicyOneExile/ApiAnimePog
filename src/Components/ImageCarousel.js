import React, {useState, useEffect} from "react";
import {Box, Image, IconButton, AspectRatio} from "@chakra-ui/react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const ImageCarousel = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(intervalId);
    }, [images]);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <Box position="relative">
            <AspectRatio ratio={20 / 10}>
                <Image src={images[currentImageIndex]} alt="carousel image"/>
            </AspectRatio>

            <IconButton
                aria-label="Previous image"
                icon={<IoIosArrowBack/>}
                onClick={handlePrevImage}
                position="absolute"
                top="50%"
                left="0"
                transform="translateY(-50%)"
            />

            <IconButton
                aria-label="Next image"
                icon={<IoIosArrowForward/>}
                onClick={handleNextImage}
                position="absolute"
                top="50%"
                right="0"
                transform="translateY(-50%)"
            />
        </Box>
    );
};

export default ImageCarousel;


