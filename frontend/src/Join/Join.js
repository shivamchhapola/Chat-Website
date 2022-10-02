import { Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Background from './back.svg';
import Mou from './mou.svg';
import { AnimatePresence, motion } from 'framer-motion';

const ConVariant = {
  Open: {
    backgroundColor: '#EDF2F7',
    backgroundImage: 'none',
  },
  Close: {
    backgroundColor: '#A0AEC0',
    backgroundImage: `url(${Mou})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};

const EleVariant = {
  Open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  Close: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default function Join() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      <Flex
        h="100vh"
        w="100vw"
        backgroundColor="gray.800"
        backgroundImage={Background}
        justifyContent="center"
        alignItems="center">
        <Flex
          backgroundColor="gray.200"
          w="60%"
          h="50%"
          direction="row"
          overflow="hidden"
          borderRadius="10">
          <Flex
            as={motion.div}
            justifyContent="center"
            alignItems="center"
            direction="column"
            backgroundPosition="bottom"
            style={isLogin ? { flex: 2 } : { flex: 1 }}
            animate={isLogin ? 'Open' : 'Close'}
            variants={ConVariant}
            layout>
            {isLogin ? (
              <>
                <Input
                  as={motion.input}
                  variants={EleVariant}
                  placeholder="Username"
                  backgroundColor="gray.400"
                  m="2"
                  w="50%"
                  borderRadius="10"
                  _placeholder={{ color: isLogin ? 'gray.50' : 'transparent' }}
                  backgroundImage="none"
                />
                <Input
                  as={motion.input}
                  variants={EleVariant}
                  placeholder="Password"
                  backgroundColor="gray.400"
                  mt="2"
                  w="50%"
                  borderRadius="10"
                  _placeholder={{ color: isLogin ? 'gray.50' : 'transparent' }}
                  backgroundImage="none"
                />
                <Link
                  as={motion.a}
                  variants={EleVariant}
                  fontSize={isLogin ? '2xs' : '0'}
                  textAlign="right"
                  w="50%"
                  mt="0.5">
                  Forgot Password?
                </Link>
              </>
            ) : (
              <Heading
                as={motion.h1}
                animate={isLogin ? 'Close' : 'Open'}
                variants={EleVariant}
                size="lg"
                m="2"
                color="gray.50">
                Already a member?
              </Heading>
            )}
            <Button
              as={motion.button}
              colorScheme="blue"
              variant="solid"
              fontWeight="normal"
              onClick={() => setIsLogin(true)}
              mt="5"
              animate={
                isLogin ? { y: 0, width: '50%' } : { y: -5, width: '70%' }
              }
              borderRadius="full">
              Login
            </Button>
            {isLogin && (
              <Button
                as={motion.button}
                variants={EleVariant}
                rightIcon={isLogin ? <FcGoogle /> : null}
                colorScheme="teal"
                variant="outline"
                fontWeight="normal"
                mt="5"
                w="50%"
                borderRadius="full">
                <Text color={isLogin ? 'teal' : 'transparent'}>
                  Login using
                </Text>
              </Button>
            )}
          </Flex>

          <Flex
            as={motion.div}
            direction="column"
            justifyContent="center"
            alignItems="center"
            backgroundPosition="bottom"
            style={isLogin ? { flex: 1 } : { flex: 2 }}
            animate={isLogin ? 'Close' : 'Open'}
            variants={ConVariant}
            layout>
            {isLogin ? (
              <Heading
                as={motion.h1}
                animate={isLogin ? 'Open' : 'Close'}
                variants={EleVariant}
                size="lg"
                m="2"
                color="gray.50">
                New Here?
              </Heading>
            ) : (
              <>
                <Input
                  as={motion.input}
                  variants={EleVariant}
                  placeholder="Email"
                  backgroundColor="gray.400"
                  mt="2"
                  w="50%"
                  borderRadius="10"
                  _placeholder={{ color: !isLogin ? 'gray.50' : 'transparent' }}
                  backgroundImage="none"
                />
                <Input
                  as={motion.input}
                  variants={EleVariant}
                  placeholder="Username"
                  backgroundColor="gray.400"
                  mt="2"
                  w="50%"
                  borderRadius="10"
                  _placeholder={{ color: !isLogin ? 'gray.50' : 'transparent' }}
                  backgroundImage="none"
                />
                <Input
                  as={motion.input}
                  variants={EleVariant}
                  placeholder="Password"
                  backgroundColor="gray.400"
                  mt="2"
                  w="50%"
                  borderRadius="10"
                  _placeholder={{ color: !isLogin ? 'gray.50' : 'transparent' }}
                  backgroundImage="none"
                />
                <Input
                  as={motion.input}
                  variants={EleVariant}
                  placeholder="Confirm Password"
                  backgroundColor="gray.400"
                  mt="2"
                  w="50%"
                  borderRadius="10"
                  _placeholder={{ color: !isLogin ? 'gray.50' : 'transparent' }}
                  backgroundImage="none"
                />
              </>
            )}
            <Button
              colorScheme="blue"
              variant="solid"
              fontWeight="normal"
              onClick={() => setIsLogin(false)}
              mt="5"
              w="50%"
              borderRadius="full">
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </AnimatePresence>
  );
}
