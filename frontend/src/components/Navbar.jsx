import { Container, Flex, Text, HStack, Button, useColorMode} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const Navbar = () => {
const { colorMode, toggleColorMode } = useColorMode();
  return (
   
    <Container maxW={"1340px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row",
            }}
        >
            <Text
                fontSize={{ base: "22px", sm: "28px" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
                //color={"blue.500"}  // Add a default text color
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>


            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                    <FaPlusSquare/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMdMoon /> : <IoMdSunny />}

                </Button>

                <Link to={"/login"}>
                    <Button
                        ml={5}
                        bgGradient="linear(to-r, blue.200, blue.400)"
                         _hover={{
                        bgGradient: "linear(to-r, blue.500, cyan.400)",
                        boxShadow: "0 0 10px 2px rgba(0, 153, 255, 0.5)",
                        }}
                    >Login</Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
 
  )
}

export default Navbar