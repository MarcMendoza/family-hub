import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const theme = extendTheme({
    colors: {
      brand: {
        "primary-blue-gray": "#4d6e7f",
        "secondary-blue-gray": "#60899f",
        "primary-yellow": "#f9c307",
        "secondary-yellow": "#FACF39",
        "tertiary-yellow": "#fbdb6b",
        "primary-teal": "#3C8E9B",
        "secondary-teal": "#33A8A4",
        "deep-teal": "#4d6e7f",
      },
      "main-background": "#fcffee",
    },
    fonts: {
      body: `'Roboto', sans-serif`,
      heading: `'Roboto', sans-serif`,
    },
  });

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Container
          minH="100vh"
          minW="100vw"
          p={0}
          m={0}
          display="grid"
          bg="main-background"
        >
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
