import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="Deepthi Hariraman"
          src="./krishnaImages/krishna5.png"
          alt="Deepthi Hariraman Logo"
        />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          width={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>deepthi_hariraman</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as="span"
              fontWeight={"bold"}
              mr={1}
            >
              6
            </Text>
            Posts
          </Text>
          <Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as="span"
              fontWeight={"bold"}
              mr={1}
            >
              100M
            </Text>
            Followers
          </Text>
          <Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as="span"
              fontWeight={"bold"}
              mr={1}
            >
              0
            </Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Deepthi Hariraman
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          &quot;In a world where sinners seek forgiveness, let there be no
          mercy. Let justice be served without exception, even if it falls upon
          me.&quot;
        </Text>
      </VStack>
    </Flex>
  );
}
