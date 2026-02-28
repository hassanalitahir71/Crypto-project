import {
  Text,
  VStack,
  Stack,
  HStack,
  Flex,
  Icon,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Img,
  Box,
} from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";
import { PiMinusCircleFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";

const PriceSetion = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  const daytamps = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const weaktamps = ["1W", "2W", "3W", "4W", "5W"];
  const monthtamps = ["1M", "2M", "3M", "4M", "5M"];
  return (
    <>
      <Box bg="#FFFFFF" h="345px" w="400px" borderRadius="16px" p="24px">
        <HStack justify="space-between">
          <Flex>
            <Stack gap="2">
              <Text color="#535D66" fontSize="14px" fontWeight="500 ">
                Current Price
              </Text>
              <HStack gap="1">
                <Text fontSize="20px" fontWeight="500 ">
                  22.39401000
                </Text>
                <HStack
                  mt="4px"
                  color="#059669"
                  fontSize="14px"
                  fontWeight="500"
                  gap="2px"
                >
                  <Icon as={LuArrowUpRight}></Icon>
                  <Text>0.04%</Text>
                </HStack>
              </HStack>
            </Stack>
          </Flex>

          <HStack>
            <HStack gap="2" h="38px" pb="20px">
              <Button
                bg="#5F00D9"
                borderRadius="10px"
                h="35px"
                w="70px"
                color="#FFFFFF"
                cursor="pointer"
                _hover={{
                  color: "black",
                  bg: "#d9d3fa",
                }}
              >
                <HStack gap="2">
                  <Icon
                    as={FaCirclePlus}
                    fontSize="14px"
                    fontWeight="500 "
                  ></Icon>
                  <Text fontSize="14px" fontWeight="500 ">
                    Buy
                  </Text>
                </HStack>
              </Button>
              <Button
                bg="#5F00D9"
                borderRadius="10px"
                h="35px"
                w="70px"
                color="#FFFFFF"
                cursor="pointer"
                _hover={{
                  color: "black",
                  bg: "#d9d3fa",
                }}
              >
                <HStack gap="2">
                  <Icon
                    as={PiMinusCircleFill}
                    fontSize="18px"
                    fontWeight="500 "
                  ></Icon>
                  <Text fontSize="14px" fontWeight="500 ">
                    Sell
                  </Text>
                </HStack>
              </Button>
            </HStack>
          </HStack>
        </HStack>
        <Stack placeSelf="end">
          <Tabs variant="soft-rounded">
            <Flex justify="end">
              <TabList p="3px" bg="#F3F3F7" borderRadius="7px">
                {["H", "D", "W", "M"].map((tab) => (
                  <Tab
                    _selected={{ bg: "#FFFFFF", borderRadius: "7px" }}
                    key={tab}
                    fontSize="sm"
                    fontWeight="500"
                    w="30px"
                    gap="2px"
                    p="5px"
                    borderRadius="4"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </Flex>

            <Flex>
              <TabPanels>
                <TabPanel>
                  <Img w="100%" src="\Graph.png" mt="3rem" />
                  <HStack justify="space-between">
                    {timestamps.map((timestamp) => (
                      <Text key={timestamp} fontSize="sm" color="black.80">
                        {timestamp}
                      </Text>
                    ))}
                  </HStack>
                </TabPanel>
                <TabPanel>
                  <Img w="100%" src="\Graph.png" mt="3rem" />
                  <HStack justify="space-between">
                    {daytamps.map((daytamps) => (
                      <Text key={daytamps} fontSize="sm" color="black.80">
                        {daytamps}
                      </Text>
                    ))}
                  </HStack>
                </TabPanel>
                <TabPanel>
                  <Img w="100%" src="\Graph.png" mt="3rem" />
                  <HStack justify="space-between">
                    {weaktamps.map((weaktamps) => (
                      <Text key={weaktamps} fontSize="sm" color="black.80">
                        {weaktamps}
                      </Text>
                    ))}
                  </HStack>
                </TabPanel>
                <TabPanel>
                  <Img w="100%" src="\Graph.png" mt="3rem" />
                  <HStack justify="space-between">
                    {monthtamps.map((monthtamps) => (
                      <Text key={monthtamps} fontSize="sm" color="black.80">
                        {monthtamps}
                      </Text>
                    ))}
                  </HStack>
                </TabPanel>
              </TabPanels>
            </Flex>
          </Tabs>
        </Stack>
      </Box>
    </>
  );
};

export default PriceSetion;
