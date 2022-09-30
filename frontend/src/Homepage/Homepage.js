import { Heading, Link, Text } from '@chakra-ui/layout';
import React, { Component } from 'react';
import Navbar from './Navbar';
import { Box, Flex, Button, Image, IconButton } from '@chakra-ui/react';
import { FaArrowRight, FaInstagram, FaTwitter } from 'react-icons/fa';
import Svg1 from './Icons/Svg1.svg';
import TLogo from './Icons/TLogo.png';
import HeadBack from './Icons/random-shapes.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VscNoNewline } from 'react-icons/vsc';

export default class Homepage extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <Flex flexDirection="column" bgColor="gray.200">
        <Box
          h={['80vh', '85vh', '90vh', '100vh']}
          bgColor="gray.800"
          bgImage={HeadBack}>
          <Navbar />
          <Flex h="90%" align="center" justify="center" direction="column">
            <Heading
              fontSize={['2rem', '3rem', '3rem', '4rem']}
              color="gray.100">
              IMAGINE A PLACE...
            </Heading>
            <Text
              color="gray.100"
              m={[
                '2rem 1rem 3rem 1rem',
                '3rem 2rem 3rem 2rem',
                '3rem 4rem 3rem 4rem',
                '3rem 15rem 3rem 15rem',
              ]}
              fontSize={['1rem', '1.25rem']}>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </Text>
            <Box>
              <Button as={Link} rightIcon={<FaArrowRight />} href="/join" _hover={{
                textDecoration: "none",
                backgroundColor: "gray.300",
              }}>
                Join Us
              </Button>
            </Box>
          </Flex>
        </Box>

        <Flex
          h={['80vh', '90vh', 'auto', '100vh']}
          marginBottom="7rem"
          align="center"
          justify="center"
          direction={['column', 'column', 'row', 'row']}
          data-aos="fade-up">
          <Image src={Svg1} w={['80%', '70%', '50%', '60%']} />
          <Box padding={['2rem', '3rem', '3rem', '2rem']}>
            <Heading
              fontSize={['1.3rem', '2rem', '2rem', '2.5rem']}
              textAlign="left">
              Create an invite-only place where you belong
            </Heading>
            <Text
              fontSize={['1rem', '1rem', '1.2rem', '1.2rem']}
              textAlign="left"
              marginTop={['1rem', '1rem', '1.2rem', '1.2rem']}>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </Text>
          </Box>
        </Flex>

        <Flex
          h={['80vh', '90vh', 'auto', '100vh']}
          marginBottom="7rem"
          align="center"
          justify="center"
          direction={['column-reverse', 'column-reverse', 'row', 'row']}
          data-aos="fade-up">
          <Box padding={['2rem', '3rem', '3rem', '2rem']}>
            <Heading
              fontSize={['1.3rem', '2rem', '2rem', '2.5rem']}
              textAlign="left">
              Create an invite-only place where you belong
            </Heading>
            <Text
              fontSize={['1rem', '1rem', '1.2rem', '1.2rem']}
              textAlign="left"
              marginTop={['1rem', '1rem', '1.2rem', '1.2rem']}>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </Text>
          </Box>
          <Image src={Svg1} w={['80%', '70%', '50%', '60%']} />
        </Flex>

        <Flex
          h={['80vh', '90vh', 'auto', '100vh']}
          marginBottom="7rem"
          align="center"
          justify="center"
          direction={['column', 'column', 'row', 'row']}
          data-aos="fade-up">
          <Image src={Svg1} w={['80%', '70%', '50%', '60%']} />
          <Box padding={['2rem', '3rem', '3rem', '2rem']}>
            <Heading
              fontSize={['1.3rem', '2rem', '2rem', '2.5rem']}
              textAlign="left">
              Create an invite-only place where you belong
            </Heading>
            <Text
              fontSize={['1rem', '1rem', '1.2rem', '1.2rem']}
              textAlign="left"
              marginTop={['1rem', '1rem', '1.2rem', '1.2rem']}>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </Text>
          </Box>
        </Flex>

        <Flex
          h={['80vh', '90vh', 'auto', '100vh']}
          marginBottom="7rem"
          align="center"
          justify="center"
          direction="column"
          data-aos="fade-up">
          <Box padding={['2rem', '3rem', '3rem', '2rem']}>
            <Heading
              fontSize={['1.7rem', '2.3rem', '2.3rem', '2.8rem']}
              textAlign="center"
              marginLeft={[0, 0, '2.5rem', '5rem']}
              marginRight={[0, 0, '2.5rem', '5rem']}>
              RELIABLE TECH FOR STAYING CLOSE
            </Heading>
            <Text
              marginLeft={[0, 0, '2.5rem', '5rem']}
              marginRight={[0, 0, '2.5rem', '5rem']}
              fontSize={['1rem', '1rem', '1.2rem', '1.2rem']}
              textAlign="center"
              marginTop={['1rem', '1rem', '1.2rem', '1.2rem']}>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </Text>
          </Box>
          <Image src={Svg1} w={['80%', '70%', '50%', '60%']} />
        </Flex>

        <Flex direction="column" h="30vh" data-aos="fade-up">
          <Heading marginBottom={['1rem', '1rem', '2rem', '2rem']}>
            Ready to start your journey?
          </Heading>
          <Box>
            <Button
              rightIcon={<FaArrowRight />}
              bgColor="gray.800"
              color="gray.50"
              _hover={{
                backgroundColor: 'gray.700',
              }}>
              Join Us
            </Button>
          </Box>
        </Flex>

        <Flex
          bgColor="gray.800"
          h="5vh"
          direction="row"
          justify="space-between"
          align="center">
          <Image
            src={TLogo}
            display={['none', 'none', 'block', 'block']}
            h="100%"
            marginLeft="0.5rem"
          />
          <Text
            color="gray.50"
            marginLeft={['1rem', '1rem', '0', '0']}
            marginRight={['0', '0', '2rem', '2rem']}
            fontSize="0.8rem">
            Shivam Chhapola
          </Text>
          <Box>
            <IconButton
              as="a"
              size="xs"
              marginRight="1rem"
              href="https://instagram.com/shiv_chhapola"
              target="_blank"
              icon={<FaInstagram />}
            />
            <IconButton
              as="a"
              size="xs"
              marginRight="1rem"
              href="https://twitter.com/shiv_chhapola"
              target="_blank"
              icon={<FaTwitter />}
            />
          </Box>
        </Flex>
      </Flex>
    );
  }
}
