import React, { useState } from 'react';
import { Container, VStack, Heading, Box, Input, Button, useColorModeValue, useToast, Text, Link } from '@chakra-ui/react';
import { useUserStore } from '../store/user';
import { Link as RouterLink } from 'react-router-dom';

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({ email: '', password: '', confirmPassword: '' });
  const { registerUser } = useUserStore();
  const toast = useToast();

  const handleRegister = async () => {
    if (!registerData.email || !registerData.password || !registerData.confirmPassword) {
      toast({ title: "All fields are required", status: "error", isClosable: true });
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      toast({ title: "Passwords do not match", status: "error", isClosable: true });
      return;
    }

    const { success, message } = await registerUser(registerData);
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
        <Heading size="2xl" textAlign="center">Register</Heading>
        <Box w="full" bg={useColorModeValue("white", "gray.700")} p={6} rounded="lg" shadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Email"
              type="email"
              isRequired
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              isRequired
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              isRequired
              value={registerData.confirmPassword}
              onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
            />
            <Button colorScheme="blue" w="full" onClick={handleRegister}>Register</Button>
            <Text>
              Already have an account? <Link as={RouterLink} to="/login" color="blue.400">Login</Link>
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default RegisterPage;
