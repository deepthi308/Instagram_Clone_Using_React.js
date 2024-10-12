import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="./logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram Logo"
          />
          <Input
            type="email"
            placeholder="Email"
            fontSize={14}
            value={inputs.value}
            onChange={({ target }) =>
              setInputs({ ...inputs, email: target.value })
            }
          />
          <Input
            type="password"
            placeholder="Password"
            fontSize={14}
            value={inputs.password}
            onChange={({ target }) =>
              setInputs({ ...inputs, password: target.value })
            }
          />

          {!isLogin ? (
            <Input
              type="password"
              placeholder="Confirm Password"
              fontSize={14}
              value={inputs.confirmPassword}
              onChange={({ target }) =>
                setInputs({ ...inputs, confirmPassword: target.value })
              }
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          {/* --------------- OR TEXT --------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image w={5} src="./google.png" alt="Google Logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
