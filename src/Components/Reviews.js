import React, { useState, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Text, Image, Flex, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Reviews = ({ animeId }) => {
    const fetchReviews = async () => {
        const response = await axios.get(
            `https://api.jikan.moe/v4/anime/${animeId}/reviews`
        );
        return response.data;
    };
    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const { data, isLoading, isError } = useQuery(['reviews', animeId], fetchReviews);
    const [expanded, setExpanded] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const MAX_LINES = 3;

    const handleToggleExpand = (index) => {
        setExpandedIndex(index);
        setExpanded((prevExpanded) => !prevExpanded);
    };

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error fetching reviews</div>;

    const reviews = data.data;

    return (
        <Box
            bg="#222222"
            color="#afacac"
            mt={10}
            p={5}
            borderRadius="md"
            overflowY="scroll"
            maxHeight="400px"
            width="100%"
        >
            <Text fontSize="xl" mb={5}>
                Reviews
            </Text>
            {reviews.length === 0 ? (
                <Text>No reviews found for this anime.</Text>
            ) : (
                reviews.map((review, index) => (
                    <Box
                        key={review.mal_id}
                        mb={5}
                        p={3}
                        borderRadius="md"
                        bg="#333333"
                        ref={
                            expandedIndex === index
                                ? (ref) =>
                                    ref &&
                                    ref.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                : null
                        }
                    >
                        <Flex d="flex" alignItems="center" mb={2}>
                            <Image
                                src={review.user.images.jpg.image_url}
                                alt="User profile picture"
                                boxSize={10}
                                ml={5}
                                mr={5}
                                borderRadius={50}
                            />
                            <Text fontWeight="bold">{review.user.username}</Text>
                            <Spacer />
                            <Text>{formattedDate(review.created_at)}</Text>
                        </Flex>
                        <Text
                            color="gray.500"
                            noOfLines={expanded && expandedIndex === index ? undefined : MAX_LINES}
                            ml={5}
                            mr={5}
                        >
                            {review.review}
                        </Text>
                        {review.review.split('\n').length > MAX_LINES && (
                            <Text
                                as={Link}
                                onClick={() => handleToggleExpand(index)}
                                alignSelf="flex-start"
                                color="gray.550"
                                m={5}
                                _hover={{ color: 'gray.600' }}
                            >
                                {expanded && expandedIndex === index ? 'See less' : 'See more'}
                            </Text>
                        )}
                    </Box>
                ))
            )}
        </Box>
    );
};

export default Reviews;
