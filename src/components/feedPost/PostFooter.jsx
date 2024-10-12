import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

export default function PostFooter({ username, isProfilePage }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((currLikesCount) => currLikesCount - 1);
    } else {
      setLiked(true);
      setLikesCount((currLikesCount) => currLikesCount + 1);
    }
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex
        alignItems={"center"}
        gap={4}
        w={"full"}
        pt={0}
        mb={2}
        mt={4}
        my={4}
      >
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"small"}>
        {likesCount} likes
      </Text>

      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {username}
            {"  "}
            <Text
              fontWeight={400}
              as={"span"}
              display={"inline-block"}
              //   marginLeft={2}
            >
              Feeling Good 🦚!
            </Text>
          </Text>
          <Text color={"gray"} fontSize={"sm"}>
            View all 1,000 comments
          </Text>
        </>
      )}
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              bg={"transparent"}
              _hover={{ color: "white" }}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}
