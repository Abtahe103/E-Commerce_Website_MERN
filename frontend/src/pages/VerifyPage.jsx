import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useUserStore } from '../store/user';
import { useToast, Box, Spinner, Text, useColorModeValue, Container } from '@chakra-ui/react';

const VerifyPage = () => {
  const { token } = useParams();
  const toast = useToast();
  const { verifyUser } = useUserStore();

  const [status, setStatus] = useState({ loading: true, success: null, message: '' });
  const hasVerified = useRef(false); // <- Guard flag

  useEffect(() => {
    const verify = async () => {
      if (hasVerified.current) return; // prevent re-run
      hasVerified.current = true;

      const result = await verifyUser(token);
      setStatus({ loading: false, success: result.success, message: result.message });

      toast({
        title: result.success ? 'Verified!' : 'Verification Failed',
        description: result.message,
        status: result.success ? 'success' : 'error',
        isClosable: true,
      });
    };

    if (token) verify();
  }, [token]);

  return (
    <Container maxW="container.md" centerContent py={20}>
    <Box maxW={"full"} px={100} py={50} rounded={"md"} bg={useColorModeValue("gray.200", "gray.800")} marginY={20} display="flex" alignItems="center" flexDir="column">
      {status.loading ? (
        <Spinner size="xl" />
      ) : (
        <Text fontSize="3xl" color={status.success ? 'green.500' : 'red.400'}>
          {status.message}
        </Text>
      )}
    </Box>
    </Container>
  );
};

export default VerifyPage;
