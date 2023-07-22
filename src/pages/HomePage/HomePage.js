import React from "react";
import { Box } from "@mui/material";
import RentalCardsSection from "../../components/RentalCardsSection";

import Footer from "../../components/Footer";
import VideoHero from "../../components/VideoHero/VideoHero";
import HomePageSubsection from "../../components/HomePageSubSection";

export default function HomePage() {
  return (
    <>
      <main>
        <VideoHero />
        <Box sx={{ margin: 6 }}>
          <RentalCardsSection />
        </Box>
        <Box sx={{ margin: 6 }}>
          <HomePageSubsection />
        </Box>
      </main>
      <Footer />
    </>
  );
}
