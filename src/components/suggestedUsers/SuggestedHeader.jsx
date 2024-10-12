import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar
          name="As a Programmer"
          size={"lg"}
          src="./krishnaImages/krishna5.png"
        />
        <Box fontSize={12} fontWeight={"bold"}>
          deepthi_hariraman
        </Box>
      </Flex>
      <Link
        to={"/auth"}
        as={RouterLink}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        Log Out
      </Link>
    </Flex>
  );
}
