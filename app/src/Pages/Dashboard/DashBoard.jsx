import { Box, Center, Grid, GridItem, HStack } from "@chakra-ui/react";
import DashBoardLayout from "../../assets/Components/DashBoardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSetion from "./components/PriceSetion";
import TransactionSection from "./components/TransactionSection";
import LoanContactSection from "./components/LoanContactSection";
function DashBoard() {
  return (
    <>
      <DashBoardLayout title="Dashboard">
        <Box h="100%" w="800px" display="flex" justifyContent="center">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem colSpan={2}>
              <PortfolioSection />
            </GridItem>
            <GridItem
              colSpan={{
                base: "2",
                md: "2",
                lg: "1",
              }}
            >
              <PriceSetion />
            </GridItem>
            <GridItem
              colSpan={{
                base: "2",
                md: "2",
                lg: "1",
              }}
            >
              <TransactionSection />
            </GridItem>
            <GridItem
              colSpan={{
                base: "2",
                md: "2",
                lg: "1",
              }}
            >
              <LoanContactSection update={true} />
            </GridItem>
            <GridItem
              colSpan={{
                base: "2",
                md: "2",
                lg: "1",
              }}
            >
              <LoanContactSection />
            </GridItem>
          </Grid>
        </Box>
      </DashBoardLayout>
    </>
  );
}

export default DashBoard;
