import DashBoardLayout from "../../assets/Components/DashBoardLayout";
import { Box, Button, HStack, Icon, Stack, Text, Flex } from "@chakra-ui/react";
import { MdMail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";

const Support = () => {
  return (
    <>
      <DashBoardLayout title="Support">
        <Box h="480" w="780px" justifyContent="center" alignItems="center">
          <Stack gap="75px" alignItems="center">
            <Flex
              direction={{
                base: "column",
                md: "column",
                lg: "row",
              }}
              gap="24px"
            >
              <Stack h="128px" w="340px" placeSelf="flex-start" gap="8px">
                <Icon as={MdMail} fontSize="24px" color="#5F00D9" />
                <Text fontSize="30px" fontWeight="500" color="#171717">
                  Contact Us
                </Text>
                <Text fontSize="14px" fontWeight="400" color="#535D66">
                  Have a question or just want to know more? Feel free to reach
                  out to us.
                </Text>
              </Stack>
              <Box w="416px" h="465px" bg="white" borderRadius="16px" p="24px">
                <Stack gap="28px">
                  <FormControl>
                    <Stack gap="20px">
                      <HStack gap="8px">
                        <FormControl>
                          <FormLabel fontSize="12px" fontWeight="500">
                            Name
                          </FormLabel>
                          <Input
                            h="30px"
                            type="text"
                            fontSize="13px"
                            fontWeight="400"
                            borderRadius="8px"
                            placeholder="James"
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel fontSize="12px" fontWeight="500">
                            Surname
                          </FormLabel>
                          <Input
                            h="30px"
                            type="text"
                            fontSize="13px"
                            fontWeight="400"
                            borderRadius="8px"
                            placeholder="Arthur"
                          />
                        </FormControl>
                      </HStack>

                      <FormControl>
                        <FormLabel fontSize="12px" fontWeight="500">
                          Email address
                        </FormLabel>
                        <Input
                          h="30px"
                          fontSize="13px"
                          fontWeight="400"
                          borderRadius="8px"
                          type="email"
                          placeholder="name@mail.com"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel fontSize="12px" fontWeight="500">
                          Message
                        </FormLabel>
                        <Textarea
                          h="80px"
                          type="text"
                          fontSize="13px"
                          fontWeight="400"
                          borderRadius="8px"
                          placeholder="Your Message"
                        />
                      </FormControl>
                    </Stack>
                  </FormControl>
                  <Checkbox>
                    <Text fontSize="12px" fontWeight="400" color="#171717">
                      I agree with{" "}
                      <Text as="span" color="#5F00D9">
                        Terms & Conditions.
                      </Text>
                    </Text>
                  </Checkbox>
                  <Stack>
                    <Button
                      fontSize="14px"
                      fontWeight="500"
                      h="38px"
                      px="14px"
                      py="16px"
                      color="#797E82"
                      borderRadius="10px"
                      bg="#D8DDE2"
                    >
                      Send a Message
                    </Button>
                    <Button
                      fontSize="14px"
                      fontWeight="500"
                      h="38px"
                      px="14px"
                      py="16px"
                      color="#171717"
                      borderRadius="10px"
                      bg="#EEEEF4"
                    >
                      Book a Meeting
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Flex>
            <Flex
              direction={{
                base: "column",
                md: "column",
                lg: "row",
              }}
              gap="22px"
              mb="24px"
            >
              <Stack h="128px" w="340px" gap="16px">
                <Icon
                  as={BiSolidMessageRounded}
                  color="#5F00D9"
                  fontSize="24px"
                />
                <Text fontSize="32px" fontWeight="500">
                  Live Chat
                </Text>
                <Text color="#535D66" fontSize="12px" fontWeight="500">
                  Don’t have time to wait for the answer? Chat with us now.
                </Text>
              </Stack>
              <Box bg="#5F00D9" h="125px" w="416px" borderRadius="16px">
                <Stack
                  gap="16px"
                  borderRadius="16px"
                  bgImage="url('/chatbot.png')"
                  p="24px"
                >
                  <Button
                    px="4px"
                    py="6px"
                    borderRadius="100px"
                    _hover={{
                      color: "#5F00D9",
                      bg: "gray",
                    }}
                    bg="#FFFFFF"
                    fontSize="12px"
                    fontWeight="500"
                    h="22px"
                    w="56px"
                    color="#5F00D9"
                  >
                    Chatbot
                  </Button>
                  <Text fontSize="15px" fontWeight="500" color="#FFFFFF">
                    Chat with us now
                  </Text>
                </Stack>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </DashBoardLayout>
    </>
  );
};

export default Support;
