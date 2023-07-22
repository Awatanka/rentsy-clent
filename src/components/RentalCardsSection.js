import React from "react";
import RentalCardsSubSection from "./RentalCardsSubSection";
import apartmentList from "../data/propertyList.json";

export default function RentalCardsData() {
  const apartmentListFirst = apartmentList.slice(3, 7);
  const apartmentListSecond = apartmentList.slice(8, 12);
  const houseList = apartmentList
    .filter((item) => item.propertyType === "SINGLE_FAMILY")
    .slice(14, 18);

  const sections = [
    {
      title: "Latest in Vancouver",
      description:
        "If you aren’t familiar with Vancouver and it’s many great communities and not sure what would be the right fit for you. Are you unsure of the going rate in your area? Well we offer our 'market stats' and 'similar properties' features to gage comparable properties to yours. This is a great tool that can allow you to point out the advantages your property has over another similar property.",
      items: apartmentListFirst,
    },
    {
      title: "Discover Similar in Vancouver",
      description:
        "Welcome to our curated selection of properties that are similar to your preferences in Vancouver. Whether you're searching for your dream home or a place to start your new chapter, our extensive filters allow you to find exactly what you're looking for. Find your Perfect Match, Filter by Price, Explore homes that match your budget, ensuring you find a property that suits your financial goals. Need more space or looking for a cozy home? Filter by bedroom count to find your ideal living space. Select the number of bathrooms that fit your lifestyle and comfort needs. Tailor your search for properties that offer the perfect lease duration for your plans. Whether you prefer apartments, townhouses, or houses, we've got you covered. Find pet-friendly properties to ensure your furry friends feel right at home too. Discover properties without the hassle of broker fees, making your search simpler and more affordable. Use custom keywords to narrow down your search and find unique properties that match your preferences. Start your journey today and unlock a world of possibilities with our 'Similar in Vancouver' selection. Our goal is to assist you in finding a place that truly feels like home. Happy house hunting!",
      items: apartmentListSecond,
    },
    {
      title: "Single Family Homes",
      description:
        "Explore our exclusive collection of single-family homes in Vancouver. These spacious and elegant properties are perfect for those seeking a serene living environment. Find the home that complements your lifestyle and fulfills your aspirations.Welcome to our premier rental house selection, where finding your dream home becomes a delightful experience. At Rentsy, we are committed to helping you discover the perfect rental property that suits your lifestyle and preferences. Whether you are searching for a cozy apartment, a spacious townhouse, or a luxurious family home, we have an extensive collection of rental houses to choose from.",
      items: houseList,
    },
  ];

  return (
    <>
      {sections.map((section) => (
        <RentalCardsSubSection
          key={section.title}
          title={section.title}
          description={section.description}
          items={section.items}
        />
      ))}
    </>
  );
}
