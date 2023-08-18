import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";

const AccountMenu = () => {
  const { data: sessionData } = useSession();

  return (
    <Box position="absolute" top={3} right={3} zIndex={1} cursor="pointer">
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            name={sessionData?.user.name ?? "Error"}
            src={sessionData?.user.image ?? ""}
          />
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
