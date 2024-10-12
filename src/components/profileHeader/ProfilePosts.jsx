import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

export default function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, index) => {
          return (
            <VStack key={index} alignItems={"flex-start"}>
              <Skeleton w={"full"}>
                <Box h={"300px"}>Content Wrapped</Box>
              </Skeleton>
            </VStack>
          );
        })}

      {!isLoading && (
        <>
          <ProfilePost img="./krishnaImages/krishna1.png" />
          <ProfilePost img="./krishnaImages/krishna2.png" />
          <ProfilePost img="./krishnaImages/shiva1.png" />
          <ProfilePost img="./krishnaImages/krishna3.png" />
          <ProfilePost img="./krishnaImages/krishna4.png" />
          <ProfilePost img="./krishnaImages/krishna5.png" />
        </>
      )}
    </Grid>
  );
}
