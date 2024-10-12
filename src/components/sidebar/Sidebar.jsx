import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  const sidebarItems = [
    {
      icon: <AiOutlineHome size={30} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: (
        <Avatar
          size={"sm"}
          name="Deepthi Hariraman"
          src="./krishnaImages/krishna5.png"
        />
      ),
      text: "Profile",
      link: "/deepthi_hariraman",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={{ base: 10 }}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((sidebarItem, index) => {
            return (
              <Tooltip
                key={index}
                hasArrow
                label={sidebarItem.text}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
              >
                <Link
                  display={"flex"}
                  to={sidebarItem.link || null}
                  as={RouterLink}
                  alignItems={"center"}
                  justifyContent={{ base: "center", md: "flex-start" }}
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  p={2}
                  w={{ base: 10, md: "full" }}
                >
                  {sidebarItem.icon}
                  <Box display={{ base: "none", md: "block" }}>
                    {sidebarItem.text}
                  </Box>
                </Link>
              </Tooltip>
            );
          })}
        </Flex>
        <Tooltip
          hasArrow
          label={"Log Out"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            justifyContent={{ base: "center", md: "flex-start" }}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Log Out</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
}
