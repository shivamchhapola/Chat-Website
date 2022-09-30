import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import { motion } from 'framer-motion';

export default function Join() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      backgroundColor="gray.800"
      justifyContent="center"
      alignItems="center">
      <Box backgroundColor="gray.200" w="60%" h="50%" borderRadius={10}>
        <Flex></Flex>

        <Flex></Flex>
      </Box>
    </Flex>
  );
}
