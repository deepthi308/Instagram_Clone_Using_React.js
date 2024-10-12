import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"full"}
      >
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          Sell All
        </Text>
      </Flex>
      <SuggestedUser
        name="Human"
        followers={"300k"}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Mr. Unknown"
        followers={"200k"}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Programmer"
        followers={"100k"}
        avatar="https://bit.ly/code-beast"
      />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        &copy; 2024 Built By{" "}
        <Link
          href="https://www.youtube.com/@h.deepthi4135/playlists"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Deepthi Hariraman
        </Link>
      </Box>
    </VStack>
  );
}
