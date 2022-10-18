import React, { useState, useEffect } from 'react';
import {
  Heading,
  Flex,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';
import { FiMenu, FiX, FiHome, FiDownload } from 'react-icons/fi';
import { VscAccount, VscSignIn } from 'react-icons/vsc';
import { MdOutlineChatBubbleOutline } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <NavbarContainer>
      <Flex
        w={['70%', '40%', '30%', '23%']}
        direction="row"
        justifyContent="left"
        alignContent="center"
        padding="2">
        <Icon as={MdOutlineChatBubbleOutline} color="gray.50" boxSize="7" />
        <Heading
          color="gray.50"
          ml={1}
          lineHeight="1.4rem"
          align="center"
          fontSize="1.2rem"
        >
          | Chat Website
        </Heading>
      </Flex>
      <Box
        display={['flex', 'flex', 'none', 'none']}
        position="absolute"
        right="1rem">
        <IconButton
          icon={isOpen ? <FiX /> : <FiMenu />}
          variant="outline"
          color="white"
          size="sm"
          _hover={{
            backgroundColor: 'grey',
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </Box>
      {isOpen && (
        <Box display={['flex', 'flex', 'none', 'none']}>
          <Box
            backgroundColor="gray.200"
            position="absolute"
            top="5rem"
            right="0"
            width="10rem"
            borderRadius="1rem 0 0 1rem"
            data-aos="fade-left">
            <VStack
              color="grey.800"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              spacing="1rem"
              padding="1rem">
              <Button
                leftIcon={<FiHome />}
                variant="link"
                size="md"
                colorScheme="none">
                Home
              </Button>
              <Button
                leftIcon={<VscAccount />}
                variant="link"
                size="md"
                colorScheme="none">
                Sign Up
              </Button>
              <Button
                leftIcon={<VscSignIn />}
                variant="link"
                size="md"
                colorScheme="none">
                Login
              </Button>
              <Button
                leftIcon={<FiDownload />}
                variant="link"
                size="md"
                colorScheme="none">
                Download
              </Button>
            </VStack>
          </Box>
        </Box>
      )}
      <ButtonGroup
        variant="link"
        color="#ffffff"
        spacing="2rem"
        colorScheme="none"
        display={['none', 'none', 'flex', 'flex']}>
        <Button>Home</Button>
        <Button>Sign Up</Button>
        <Button>Login</Button>
        <Button>Download</Button>
      </ButtonGroup>
    </NavbarContainer>
  );
}

function NavbarContainer(props) {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      direction="row"
      padding="1rem 2rem 1rem 0.5rem"
      h="10%">
      {props.children}
    </Flex>
  );
}
