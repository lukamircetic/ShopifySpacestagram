import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Icon, Image, AspectRatio } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { isBooleanObject } from "util/types";
interface CardProps {
  url: string;
  title: string;
  date: string;
  type: string;
}


function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export const Card: React.FC<CardProps> = ({ url, title, date, type }) => {
  const [like, setLike] = useLocalStorage(date, false);

  return (
    <Box
      minW={[450, 550, 650]}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="15px"
      bg="white"
    >
      {type == "video" ? (
        <AspectRatio>
          <iframe title={title} src={url} />
        </AspectRatio>
      ) : (
        <AspectRatio>
          <Image src={url} alt={title} />
        </AspectRatio>
      )}
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            {date}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>
          <Box>
            <IconButton
              onClick={() => setLike(!like)}
              className="like-button"
              aria-label="Like"
              color="#E53E3E"
              icon={<Icon as={like ? BsHeartFill : BsHeart} boxSize="2em" />}
              _focus={{ outline: "none" }}
              _focusVisible={{ outline: "black solid 2px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
