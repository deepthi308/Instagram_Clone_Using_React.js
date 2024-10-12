import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "../feedPost/FeedPost";
import { useEffect, useState } from "react";

export default function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack
                gap={2}
                alignItems={"flex-start"}
                justifyContent={"center"}
              >
                <Skeleton height={"10px"} width={"200px"} />
                <Skeleton height={"10px"} width={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Contents Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost
            img="./krishnaImages/krishna1.png"
            username="julie_kutty"
            avatar="./img1.png"
          />
          <FeedPost
            img="./krishnaImages/krishna2.png"
            username="praveen_hariraman"
            avatar="./img2.png"
          />
          <FeedPost
            img="./krishnaImages/krishna3.png"
            username="krishnalakshmi"
            avatar="./img3.png"
          />
          <FeedPost
            img="./krishnaImages/shiva1.png"
            username="hariraman"
            avatar="./img4.png"
          />
          <FeedPost
            img="./krishnaImages/krishna4.png"
            username="sakthivel_kani"
            avatar="./img1.png"
          />
          <FeedPost
            img="./krishnaImages/krishna5.png"
            username="deepthi_hariraman"
            avatar="./img2.png"
          />
        </>
      )}
    </Container>
  );
}
