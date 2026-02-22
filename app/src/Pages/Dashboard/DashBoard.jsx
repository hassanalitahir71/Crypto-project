import { Center, Grid, GridItem, HStack } from "@chakra-ui/react";
import DashBoardLayout from "../../assets/Components/DashBoardLayout";
import PortfolioSection from "./components/PortfolioSection";
function DashBoard() {
  return (
    <>
      <DashBoardLayout title="Dashboard">
        <Grid templateColumns="repeat(2, 1fr)"  
      gap={6}>
          <GridItem colSpan={2}>
            <PortfolioSection/>
          </GridItem>
        </Grid>
      </DashBoardLayout>
    </>
  );
}

export default DashBoard;
