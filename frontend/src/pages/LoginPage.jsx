import React, { useState } from 'react';
import { Container, VStack, Heading, Box, Input, Button, useColorModeValue, useToast, Text, Link } from '@chakra-ui/react';
import { useUserStore } from '../store/user';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { loginUser } = useUserStore();
  const toast = useToast();

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      toast({ title: "All fields are required", status: "error", isClosable: true });
      return;
    }

    const { success, message } = await loginUser(loginData);
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      isClosable: true
    });
  };

  return (
    <Container maxW="container.sm" minH="100vh" centerContent py={20}>
      <VStack spacing={8} w="md">
        <Heading size="2xl" textAlign="center">Login</Heading>
        <Box w="full" bg={useColorModeValue("white", "gray.700")} p={6} rounded="lg" shadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Email"
              type="email"
              isRequired
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              isRequired
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <Button colorScheme="blue" w="full" onClick={handleLogin}>Login</Button>
            <Text>
              Not registered yet? <Link as={RouterLink} to="/register" color="blue.400">Register</Link>
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default LoginPage;
