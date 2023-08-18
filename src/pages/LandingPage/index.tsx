import { Button, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";

const LandingPage = () => {
  const { data: sessionData } = useSession();

  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      flexDirection="column"
      grow={1}
    >
      <Heading
        bgGradient="linear(to-r, brand.primary-teal 0%, brand.primary-yellow 70%)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        alignContent="center"
        mx="auto"
      >
        Family Hub
      </Heading>
      <Container mt="5" justifyContent="center">
        <Button
          backgroundColor="white"
          px="3"
          py="2"
          rounded="lg"
          fontWeight="large"
          boxShadow="base"
          mx="auto"
          display="block"
          _hover={{
            opacity: 0.7,
          }}
          onClick={() => void signIn("google")}
        >
          {/** img has display: block, override and give spacing around it (margin) */}
          <Image
            src="./icons/google.svg"
            alt="Google Logo for Google Logon button"
            display="inline-block"
            pr={3}
            align="middle"
          />
          Sign in with Google
        </Button>
      </Container>
    </Flex>
  );
};

export default LandingPage;
