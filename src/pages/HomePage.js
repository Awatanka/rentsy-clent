import React from "react";
import { Box } from "@mui/material";
import RentalCardsSection from "../components/RentalCardsSection";

import Footer from "../components/Footer";
import VideoHero from "../components/VideoHero/VideoHero";
import HomePageSubsection from "../components/HomePageSubSection";
import CustomImageSlider from "../components/CustomImageSlider";

export default function HomePage({ items }) {
  return (
    <>
      <main>
        <VideoHero />
        <Box sx={{ margin: 6 }}>
          <RentalCardsSection items={items} />
        </Box>
        <Box sx={{ margin: 6 }}>
          <HomePageSubsection />
        </Box>
      </main>
      <CustomImageSlider />
      <Footer />
    </>
  );
}
