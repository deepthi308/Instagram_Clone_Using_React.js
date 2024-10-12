import { Box, Container, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

export default function FeedPost({ img, username, avatar }) {
  return (
    <Container>
      <PostHeader avatar={avatar} username={username} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} />
    </Container>
  );
}
