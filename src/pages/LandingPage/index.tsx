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
  /*
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
      </div> */
};

export default LandingPage;
