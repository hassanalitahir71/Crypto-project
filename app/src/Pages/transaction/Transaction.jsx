import { Box, Stack, Button, Icon, Text, HStack } from "@chakra-ui/react";
import DashBoardLayout from "../../assets/Components/DashBoardLayout";
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
              <HStack justify="space-between">
                <TabList>
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
              <TabPanels>
                {tabsData.map((item) => (
                  <TabPanel key={item.label}>{item.content}</TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
      </Box>
    </DashBoardLayout>
  );
};

export default Transaction;
