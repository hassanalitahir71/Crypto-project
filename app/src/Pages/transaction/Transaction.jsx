import { Box, Stack, Button, Icon, Grid, Text, HStack } from "@chakra-ui/react";
import DashBoardLayout from "../../assets/Components/DashBoardLayout";
import { GoTriangleDown } from "react-icons/go";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { MdSaveAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Transaction = () => {
  const tabsData = [
    { label: "All", count: 349, content: "All Transactions Content" },
    { label: "Deposit", count: 114, content: "Deposit Transactions Content" },
    { label: "Withdraw", count: 213, content: "Withdraw Transactions Content" },
    { label: "Trade", count: 22, content: "Trade Transactions Content" },
  ];

  const transdata = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      type: {
        payment: "INR Deposit",
        version: "E-Transfer",
      },
      time: "07:06 PM",
      amount: {
        transaction: "+ ₹81,123.10",
        current: "- $81,123.10",
      },
      status: "Pending",
    },
    {
      id: "HD82NA3H",
      date: "2022-06-07",
      type: {
        payment: "INR Withdraw",
        version: "Wire Transfer",
      },
      time: "02:48 PM",
      amount: {
        transaction: "- ₹81,123.10",
        current: "- $81,123.10",
      },
      status: "Processing",
    },
    {
      id: "HD82NA4H",
      date: "2022-06-04",
      type: {
        payment: "Buy",
        version: "",
      },
      time: "09:21 AM",
      amount: {
        transaction: "+ 12.48513391 BTC",
        current: "-- $81,123.10",
      },
      status: "Cancelled",
    },
    {
      id: "HD82NA5H",
      date: "2022-06-03",
      type: {
        payment: "Sell",
        version: "",
      },
      time: "01:32 PM",
      amount: {
        transaction: "- 0.36401628 BTC",
        current: "+ $19,378.84",
      },
      status: "completed",
    },
    {
      id: "HD82NA6H",
      date: "2022-06-03",
      type: {
        payment: "BTC Deposit",
        version: "E-Transfer",
      },
      time: "09:02 AM",
      amount: {
        transaction: "+ 4.13946104 BTC",
        current: "+ $37,929.31",
      },
      status: "Completed",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return {
          bg: "#797E82",
        };
      case "completed":
        return {
          bg: "#059669",
        };
      case "cancelled":
        return {
          bg: "#DC2626",
        };
      case "processing":
        return {
          bg: "#F5A50B",
        };
      default:
        return {
          bg: "black",
        };
    }
  };

  return (
    <DashBoardLayout title="Transactions">
      <Box>
        <Stack gap="12px">
          <Button
            alignSelf="end"
            h="38px"
            w="130px"
            gap="8px"
            borderRadius="10px"
            px="16px"
            py="14px"
            bg="#5F00D9"
            color="#FFFFFF"
          >
            <Icon as={MdSaveAlt} fontSize="16px" fontWeight="500" />
            <Text fontSize="14px" fontWeight="500">
              Export CSV
            </Text>
          </Button>
          <Box h="400px" w="960px" bg="white" p="15px" borderRadius="16px">
            <Tabs variant="line">
              <HStack justify="space-between" borderBottom="1px solid#D8DDE2">
                <TabList border="none" ml="35px">
                  {tabsData.map((item) => (
                    <Tab
                      key={item.label}
                      gap="8px"
                      fontSize="12px"
                      fontWeight="500"
                      _selected={{
                        color: "black",
                        borderColor: "#5F00D9",
                      }}
                    >
                      <Text>{item.label}</Text>
                      <Box bg="#F3F3F7" borderRadius="100px" px="8px" py="4px">
                        <Text color="#797E82">{item.count}</Text>
                      </Box>
                    </Tab>
                  ))}
                </TabList>

                <InputGroup w="250px">
                  <InputLeftElement
                    pointerEvents="none"
                    h="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb="10px"
                  >
                    <IoIosSearch color="#797E82" />
                  </InputLeftElement>
                  <Input
                    placeholder="Search by ID or destination"
                    fontSize="14px"
                    fontWeight="400"
                    size="sm"
                    borderRadius="8px"
                    border="none"
                    _hover={{ border: "none" }}
                  />
                </InputGroup>
              </HStack>
              <Stack w="850px" ml="10px" mr="10px">
                <HStack justify="space-between" h="38px" w="full">
                  <Grid
                    templateColumns="150px 200px 200px 200px 120px"
                    fontSize="12px"
                    fontWeight="500"
                    color="#797E82"
                    borderBottom="1px solid #D8DDE2"
                    py="10px"
                  >
                    <Text>ID</Text>
                    <Text>
                      Date & Time <Icon as={GoTriangleDown} />
                    </Text>
                    <Text>Type</Text>
                    <Text>
                      Amount <Icon as={GoTriangleDown} />
                    </Text>
                    <Text>Status</Text>
                  </Grid>
                </HStack>

                <TabPanels>
                  <TabPanels>
                    {tabsData.map((tab) => (
                      <TabPanel key={tab.label} p={0} h="52px">
                        {transdata.map((item) => (
                          <Box
                            key={item.id}
                            borderBottom="1px solid #D8DDE2"
                            h="55px"
                            py="12px"
                          >
                            <Grid
                              templateColumns="150px 200px 200px 200px 120px"
                              alignItems="center"
                            >
                              <Text fontSize="14px" fontWeight="500">
                                {item.id}
                              </Text>

                              <Stack spacing="2px">
                                <Text fontSize="14px" fontWeight="500">
                                  {item.date}
                                </Text>
                                <Text fontSize="12px" color="gray.500">
                                  {item.time}
                                </Text>
                              </Stack>

                              <Stack spacing="2px">
                                <Text fontSize="14px" fontWeight="500">
                                  {item.type.payment}
                                </Text>
                                <Text fontSize="12px" color="gray.500">
                                  {item.type.version}
                                </Text>
                              </Stack>

                              <Stack spacing="2px">
                                <Text fontSize="14px" fontWeight="500">
                                  {item.amount.transaction}
                                </Text>
                                <Text fontSize="12px" color="gray.500">
                                  {item.amount.current}
                                </Text>
                              </Stack>

                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="12px"
                                fontWeight="500"
                                borderRadius="full"
                                px="6px"
                                py="4px"
                                h="24px"
                                bg="gray.100"
                                {...getStatusStyle(item.status)}
                                color="#FFFFFF"
                              >
                                {item.status}
                              </Box>
                            </Grid>
                          </Box>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabPanels>
              </Stack>
            </Tabs>
          </Box>
        </Stack>
      </Box>
    </DashBoardLayout>
  );
};

export default Transaction;
