import { Box, Stack, Button, Text } from "@chakra-ui/react";

const LoanContactSection = ({ update }) => {
  return (
    <Box
      bg={update ? "#FFFFFF" : "#5F00D9"}
      h="125px"
      w="400px"
      borderRadius="16px"
    >
      <Stack
        gap="16px"
        bgImage={update ? "url('/Visual.png')" : "url('/contact.png')"}
        p="24px"
      >
        <Button
          px="4px"
          py="6px"
          borderRadius="100px"
          _hover={{
            color: update ? "#171717" : "#5F00D9",
            bg: update ? "#d9d3fa" : "gray",
          }}
          bg={update ? "#5F00D9" : "#FFFFFF"}
          fontSize="12px"
          fontWeight="500"
          h="22px"
          w="56px"
          color={update ? "#FFFFFF" : "#5F00D9"}
        >
          {update ? "Loans" : "Contact"}
        </Button>
        <Text
          fontSize="15px"
          fontWeight="500"
          color={update ? "#171717" : "#FFFFFF"}
        >
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </Text>
      </Stack>
    </Box>
  );
};

export default LoanContactSection;
