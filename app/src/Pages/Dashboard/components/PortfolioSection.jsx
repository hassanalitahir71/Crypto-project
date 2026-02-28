import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { FaCircleInfo } from "react-icons/fa6";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <>
      <HStack
        h="106px"
        W="800px"
        gap="105px"
        borderRadius="16px"
        align="Center"
        flex="row"
        bg="white"
      >
        <Box ml="35px">
          <HStack gap="30px">
            <Stack gap="3">
              <HStack gap="1">
                <Text color="#535D66" fontSize="12px" fontWeight="500 ">
                  Total Portfolio value
                </Text>
                <Icon
                  as={FaCircleInfo}
                  color="#535D66"
                  fontSize="12px"
                  fontWeight="500 "
                ></Icon>
              </HStack>
              <Text fontSize="md" fontWeight="500 ">
                ₹ 112,312.24
              </Text>
            </Stack>
            <Stack gap="3">
              <Text color="#535D66" fontSize="12px" fontWeight="500 ">
                Wallet Balances
              </Text>
              <HStack gap="1">
                <Text fontSize="md" fontWeight="500 ">
                  22.39401000
                </Text>
                <Text
                  display="flex"
                  bg="#F3F3F7"
                  borderRadius="100px"
                  w="35px"
                  alignItems="center"
                  justifyContent="center"
                  color="#535D66"
                  fontSize="12px"
                  fontWeight="500 "
                >
                  BTC
                </Text>
              </HStack>
            </Stack>
            <Stack gap="3">
              <Text color="white" fontSize="12px" fontWeight="500 ">
                Wallet Balances
              </Text>
              <HStack gap="1">
                <Text fontSize="md" fontWeight="500 ">
                  ₹ 1,300.00
                </Text>
                <Text
                  display="flex"
                  bg="#F3F3F7"
                  borderRadius="100px"
                  w="35px"
                  alignItems="center"
                  justifyContent="center"
                  color="#535D66"
                  fontSize="12px"
                  fontWeight="500 "
                >
                  INR
                </Text>
              </HStack>
            </Stack>
          </HStack>
        </Box>
        <Box mr="24px"  mb="25px">
          <HStack gap="8px">
            <Button
              bg="#5F00D9"
              borderRadius="10px"
              px="16px"
              py="10px"
              color="#FFFFFF"
              cursor="pointer"
              _hover={{
                color: "black",
                bg: "#d9d3fa",
              }}
            >
              <HStack gap="1">
                <Icon
                  as={LuArrowDownToLine}
                  fontSize="14px"
                  fontWeight="500 "
                ></Icon>
                <Text fontSize="14px" fontWeight="500 ">
                  Deposit
                </Text>
              </HStack>
            </Button>
            <Button
              bg="#5F00D9"
              borderRadius="10px"
              px="16px"
              py="10px"
              color="#FFFFFF"
              cursor="pointer"
              _hover={{
                color: "black",
                bg: "#d9d3fa",
              }}
            >
              <HStack gap="1">
                <Icon
                  as={LuArrowUpToLine}
                  fontSize="12px"
                  fontWeight="500 "
                ></Icon>
                <Text fontSize="14px" fontWeight="500 ">
                  Withdraw
                </Text>
              </HStack>
            </Button>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default PortfolioSection;
