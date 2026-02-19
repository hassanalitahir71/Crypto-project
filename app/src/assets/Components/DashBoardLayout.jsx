import TopBar from "./TopBar";
import SideBar from "./sidebar";
import { Flex, Box, Container } from "@chakra-ui/react";
function DashBoardLayout({ title, children }) {
  return (
    <>
      <Flex>
        <Box>
          <SideBar />
        </Box>
        <Box flexGrow={1}>
          <TopBar title={title} />
          <Container h=" calc(100% - 64px)" maxW="70rem" bg="#f6f4fa">
            {children}
          </Container>
        </Box>
      </Flex>
    </>
  );
}

export default DashBoardLayout;
