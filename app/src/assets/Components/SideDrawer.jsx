import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Portal,
} from "@chakra-ui/react";
import SideBar from "./sidebar";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} h="">
      <Portal>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <SideBar />
          </DrawerBody>
        </DrawerContent>
      </Portal>
    </Drawer>
  );
};

export default SideDrawer;
