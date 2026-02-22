import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { IoPerson } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

function TopBar({ title, onOpen }) {
  return (
    <Box h="16" w="100%" bg="White" color="Black">
      <HStack
        justifyContent="space-between"
        h="16"
        px="8"
        mx={{ base: "11px", lg: "112px", md: "11px" }}
        align="center"
      >
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
            md: "block",
          }}
        />
        <Heading as="h1" fontSize="28px">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={IoPerson} fontSize="30px" cursor="pointer" />
          </MenuButton>

          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Contact us</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopBar;
