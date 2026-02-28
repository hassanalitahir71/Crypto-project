import { Box, Center, Grid, GridItem, HStack } from "@chakra-ui/react";
import DashBoardLayout from "../../assets/Components/DashBoardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSetion from "./components/PriceSetion";
function DashBoard() {
  return (
    <>
      <DashBoardLayout title="Dashboard">
        <Box h="100%" w="800px">

       
        <Grid templateColumns="repeat(2, 1fr)"  
      gap={6}>
          <GridItem colSpan={2}>
            <PortfolioSection/>
          </GridItem>
           <GridItem colSpan={1}>
            <PriceSetion/>
          </GridItem>
           <GridItem colSpan={1}>
            <PriceSetion/>
          </GridItem>
        </Grid>
         </Box>
      </DashBoardLayout>
    </>
  );
}

export default DashBoard;
