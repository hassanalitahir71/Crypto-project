import { Box, Text, Stack, HStack, Icon, Button } from "@chakra-ui/react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { PiCurrencyBtcFill } from "react-icons/pi";

const TransactionSection = () => {
  const TransactionList = [
    {
      transaction: "INR Deposit",
      date: "2022-06-09 ",
      time: "7:06 PM",
      price: "+ ₹81,123.10",
      pending_price: "",
      icon: BiSolidDollarCircle,
      key: 1,
    },
    {
      transaction: "BTC Sell",
      date: "2022-05-27",
      time: "12:32 PM",
      price: "- 12.48513391 BTC",
      pending_price: "+ $81,123.10",
      icon: PiCurrencyBtcFill,
      key: 2,
    },
    {
      transaction: "INR Deposit",
      date: "2022-06-09 ",
      time: "7:06 PM",
      price: "+ ₹81,123.10",
      pending_price: "+ $81,123.10",
      icon: BiSolidDollarCircle,
      key: 3,
    },
  ];
  return (
    <Box bg="#FFFFFF" h="345px" w="400px" borderRadius="16px" p="24px">
      <Stack>
        <Text fontSize="14px" color="#535D66" fontWeight="medium">
          Recent Transactions
        </Text>
        {TransactionList.map((items) => (
          <HStack key={items.key} justify="space-between" mt="4">
            <HStack gap="4">
              <Box
                h="10"
                w="10"
                borderRadius="100%"
                bg="#F3F3F7"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={items.icon} fontSize="16px" />
              </Box>
              <Stack gap="1">
                <Text fontSize="16px" fontWeight="400">
                  {items.transaction}
                </Text>
                <HStack fontSize="14px" fontWeight="400" color="#797E82">
                  <Text>{items.date}</Text>
                  <Text>{items.time}</Text>
                </HStack>
              </Stack>
            </HStack>

            <Stack gap="1">
              <Text color="#171717">{items.price}</Text>
              <Text
                placeSelf="end"
                fontSize="14px"
                fontWeight="400"
                color="#797E82"
              >
                {items.pending_price}
              </Text>
            </Stack>
          </HStack>
        ))}

        <Button
          h="38px"
          borderRadius="10px"
          fontSize="14px"
          py="10px"
          px="16px"
          mt="22px"
        >
          View All
        </Button>
      </Stack>
    </Box>
  );
};

export default TransactionSection;
