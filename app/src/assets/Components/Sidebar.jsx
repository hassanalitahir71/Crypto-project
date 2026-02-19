import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidDashboard, BiSupport } from "react-icons/bi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";

const SideBar = () => {
  const navItems = [
    { Icon: BiSolidDashboard, Text: "Dashboard", path: "/" },
    { Icon: TbArrowsDoubleNeSw, Text: "Transaction", path: "/" },
  ];

  return (
    <Stack justifyContent="space-between" w="16rem" h="100vh">
      <Box>
        <Heading
          as="h1"
          textAlign="center"
          textStyle="md"
          fontWeight="bold"
          mt="14"
          fontSize="20px"
          color="Purple"
        >
          @DOSOMECODING
        </Heading>

        <Box mx="3" mt="6">
          {navItems.map((item) => (
            <HStack
              key={item.Text}
              gap="4"
              px="4"
              py="3"
              bg=""
              borderRadius="10px"
              h="42px"
              color="Gray"
              textStyle="md"
              _hover={{
                bgColor: "Gray",
                cursor: "pointer",
                fontWeight: "medium",
                color: "Black",
              }}
            >
              <Icon as={item.Icon} />
              <Text fontSize="14px">{item.Text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mx="3" mb="3">
        <HStack
          gap="4"
          px="4"
          py="3"
          bg=""
          borderRadius="10px"
          h="42px"
          color="Gray"
          textStyle="medium"
          _hover={{
            bgColor: "Gray",
            cursor: "pointer",
            fontWeight: "medium",
            color: "Black",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px">Support</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideBar;
