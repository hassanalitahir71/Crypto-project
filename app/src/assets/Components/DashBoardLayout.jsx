import SideDrawer from "./SideDrawer";
import TopBar from "./TopBar";
import SideBar from "./sidebar";
import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
function DashBoardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex>
        <Box display={{ base: "none", lg: "flex" }}>
          <SideBar />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopBar title={title} onOpen={onOpen} />
          <Container h=" calc(100vh - 64px)" maxW="70rem" pt="24px" overflowX="hidden"
          overflowY="auto"  bg="#f6f4fa">
            {children}
          </Container>
        </Box>
      </Flex>
    </>
  );
}

export default DashBoardLayout;
