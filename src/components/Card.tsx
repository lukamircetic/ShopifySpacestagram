import React, { useState } from "react";
import { Box, IconButton, Icon, Image } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
interface CardProps {
  imageUrl: string;
  imageTitle: string;
  imageDate: string;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  imageTitle,
  imageDate,
}) => {
  const [like, setLike] = useState(false);
  return (
    <Box
      maxW="60%"
      minW="450px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="15px"
      bg="white"
    >
      <Image src={imageUrl} alt={imageTitle} />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {imageTitle}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            {imageDate}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>
          <Box>
            <IconButton
              onClick={() => setLike(!like)}
              aria-label="Like"
              color="#E53E3E"
              icon={<Icon as={like ? BsHeartFill : BsHeart} boxSize="2em" />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
