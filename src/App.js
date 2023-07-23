import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import CardDetails from "./pages/CardDetails/CardDetails";
import Account from "./pages/Account/Account";
import EditProfile from "./pages/EditProfile/EditProfile";
import MapPage from "./pages/MapPage";
import Map from "./components/Map/Map";
import Favorite from "./pages/Favourite/Favourite";

// import axios from "axios";
// import { useEffect } from "react";

function App() {
  // eslint-disable-next-line
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://zillow-com1.p.rapidapi.com/property",
  //     params: {
  //       location: "Vancouver, CA",
  //       page: "1",
  //       status_type: "ForRent",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": `${process.env.REACT_APP_ZILLOW_API_KEY}`,
  //       "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setItems(response.data.props);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log(items); // log the updated items state
  // }, [items]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Rent" element={<HomePage items={items} />} />
          <Route path="/" element={<HomePage items={items} />} />
          <Route path="/card" element={<CardDetails items={items} />} />
          <Route path="/card/:cardId" element={<CardDetails items={items} />} />
          {/* <Route path="/Profile" element={<Profile />} /> */}
          <Route path="/account" element={<Account />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/mapPage" element={<MapPage items={items} />} />
          <Route path="/Favourite" element={<Favorite />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
