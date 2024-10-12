import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../comment/Comment";
import PostFooter from "../feedPost/PostFooter";

export default function ProfilePost({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={img}
          alt="Profile Post"
          width="100%"
          height="100%"
          objectFit={"cover"}
        />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader /> */}
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap="4"
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}
            >
              <Flex
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={img} alt="profile post" />
              </Flex>

              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={"./krishnaImages/krishna5.png"}
                      size={"sm"}
                      name="Deepthi Hariraman"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      deepthi_hariraman
                    </Text>
                  </Flex>

                  <Button
                    size={"sm"}
                    bg={"transparent"}
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor="pointer" />
                  </Button>
                </Flex>
                <Divider my={4} bg={"gray.500"} />

                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxHeight={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="1d ago"
                    username="hariraman"
                    profilePic="./krishnaImages/krishna5.png"
                    text="That is an amazing image!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="krishnalakshmi"
                    profilePic="./krishnaImages/krishna4.png"
                    text="Wow"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="sakthivel_kani"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Amazing!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="praveen_hariraman"
                    profilePic="./krishnaImages/krishna3.png"
                    text="Looking Great!"
                  />
                </VStack>
                <Divider my={4} bg={"gray.800"} />

                <PostFooter
                  username={"deepthi_hariraman"}
                  isProfilePage={true}
                />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
