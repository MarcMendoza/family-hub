import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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
        white: "#ffffff",
      },
    },
    fonts: {
      body: `'Roboto', sans-serif`,
      heading: `'Roboto', sans-serif`,
    },
  });

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
