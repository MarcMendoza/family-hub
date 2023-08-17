import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

// logo name gradient
// style="background: linear-gradient(to right, rgb(45, 56, 138) 0%, rgb(0, 174, 239) 100%);"

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Box backgroundColor="brand.primary-blue-gray" borderColor="gray.500">
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          className="p-3"
        >
          <HStack>
            <Text
              textColor="brand.primary-yellow"
              fontWeight="bold"
              fontSize="xl"
            >
              Family Hub
            </Text>
          </HStack>
          <Menu>
            {sessionData ? (
              <>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar name={sessionData.user.name ?? ""} />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
                </MenuList>
              </>
            ) : (
              <MenuButton
                backgroundColor="white"
                px="3"
                py="2"
                rounded="lg"
                fontWeight="medium"
                _hover={{
                  opacity: 0.3,
                }}
                onClick={
                  sessionData
                    ? () => void signOut()
                    : () => void signIn("google")
                }
              >
                {/** img has display: block, override and give spacing around it (margin) */}
                <Image
                  src="./icons/google.svg"
                  alt="Google Logo for Google Logon button"
                  className="inline-block pr-3 align-middle"
                />
                Sign in with Google
              </MenuButton>
            )}
          </Menu>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
