import React from "react";
import Footer from "../components/Footer";
import Map from "../components/Map/Map";
import CardListAside from "../components/CardsList/CardListAside";

export default function MapPage({ items }) {
  const mapPageStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    margin: "40px 0",
  };

  const mapStyle = {
    flex: 1,
    overflowY: "auto",
  };

  const sideStyle = {
    width: "400px",
    overflowY: "auto",
  };

  return (
    <>
      <div style={mapPageStyle}>
        <div style={mapStyle}>
          <Map items={items} />
        </div>

        <div style={sideStyle}>
          <CardListAside />
        </div>
      </div>
      <Footer />
    </>
  );
}
