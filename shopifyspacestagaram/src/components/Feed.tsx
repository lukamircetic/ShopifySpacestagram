import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { convertDatetoISO, subtractDate } from "../helpers/helpers";
import { Card } from "./Card";

interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  const [photos, updatePhotos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [endDate, updateEndDate] = useState(defaultStartDate);
  const [startDate, updateStartDate] = useState(
    subtractDate(defaultEndDate, 10)
  );

  async function requestNasaPhotos() {
    const start = convertDatetoISO(startDate);
    const end = convertDatetoISO(endDate);
    const apiURL = `https://api.nasa.gov/planetary/apod?start_date=${start}&end_date=${end}&api_key=z8XDACpMBFMGyIZI20YO8lIYkq70AF1ZmLnse3xS`;
    const res = await fetch(apiURL);
    const response = await res.json();
    updatePhotos(response);
  }

  async function requestMorePhotos() {
    updateEndDate(subtractDate(endDate, 11));
    updateStartDate(subtractDate(startDate, 11));
    const start = convertDatetoISO(startDate);
    const end = convertDatetoISO(endDate);
    const apiURL = `https://api.nasa.gov/planetary/apod?start_date=${start}&end_date=${end}&api_key=z8XDACpMBFMGyIZI20YO8lIYkq70AF1ZmLnse3xS`;
    const res = await fetch(apiURL);
    const response = await res.json();
    console.log(photos);
    updatePhotos((photos) => [...photos, ...response]);
  }

  useEffect(() => {
    requestNasaPhotos();
  }, []);
  console.log(photos);
  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center">
      <InfiniteScroll
        dataLength={photos.length}
        next={requestMorePhotos}
        hasMore={hasMore}
        loader={<h3> Loading </h3>}
        endMessage={<h3> No more photos </h3>}
      >
        {photos.length > 0
          ? photos
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((photo, i) => (
                <Card
                  key={i}
                  imageUrl={photo.url}
                  imageDate={photo.date}
                  imageTitle={photo.title}
                />
              ))
          : null}
      </InfiniteScroll>
    </Box>
  );
};
