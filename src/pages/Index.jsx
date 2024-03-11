import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue, VStack, IconButton, Link } from "@chakra-ui/react";
import { FaAngleRight, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={4} px={8}>
        <Heading as="h1" size="xl" letterSpacing="tight">
          hunter.io
        </Heading>
        <Box>
          <Button leftIcon={<FaAngleRight />} colorScheme="purple" variant="solid">
            Get Started
          </Button>
        </Box>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minH="75vh">
        <VStack spacing={5} align="flex-start">
          <Heading as="h2" size="2xl" fontWeight="bold">
            Unleash the Power of Connection
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.300")}>
            hunter.io is your go-to platform for connecting with key decision-makers at scale. Elevate your outreach and build meaningful relationships that drive growth.
          </Text>
          <Button rightIcon={<FaAngleRight />} colorScheme="purple" size="lg">
            Discover More
          </Button>
        </VStack>
        <Box boxSize="sm" px={4}>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1552581234-26160f608093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bmljb3JuJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwwfHx8fDE3MTAxOTQ4Mzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Unicorn Startup Office" />
        </Box>
      </Flex>
      <Flex as="footer" py={10} justify="center" borderTopWidth={1} borderColor={useColorModeValue("gray.200", "gray.700")}>
        <Stack direction="row" spacing={6}>
          <IconButton as={Link} href="https://twitter.com/hunter_io" aria-label="Twitter" icon={<FaTwitter />} isRound />
          <IconButton as={Link} href="https://linkedin.com/company/hunter_io" aria-label="LinkedIn" icon={<FaLinkedin />} isRound />
          <IconButton as={Link} href="https://facebook.com/hunter_io" aria-label="Facebook" icon={<FaFacebookF />} isRound />
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
