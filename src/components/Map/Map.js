import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import dogParksJson from "../../data/dog-off-leash-parks.json";
import crimesJson from "../../data/crimeData.json";
import schoolsJson from "../../data/schools.json";
import { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import SchoolIcon from "@mui/icons-material/School";
import Filter from "../Filter";
import "./map.scss";
import * as ReactDOMServer from "react-dom/server";

export default function Map({ items }) {
  const classes = useStyles();
  const coordinates = { lat: 49.246292, lng: -123.116226 };
  // eslint-disable-next-line
  const [coor, setCoor] = useState(coordinates);
  const [dogParks, setDogParks] = useState([]);
  const [showDogParks, setShowDogParks] = useState(false);

  const [crimes, setCrimes] = useState([]);
  const [showCrimes, setShowCrimes] = useState(false);

  const [schools, setSchools] = useState([]);
  const [showSchools, setShowSchools] = useState(false);

  // eslint-disable-next-line
  // const onMarkerClick = (event) => {
  //   event.preventDefault();
  //   console.log("event");
  // };

  //***************  appartmens ************************/

  const handleItems = (map, maps) => {
    items.map((item) => {
      const place = new maps.Marker({
        position: {
          lat: item.latitude,
          lng: item.longitude,
        },
      });

      const InfoWindowContent = (
        <>
          <div id="bodyContent">
            <h5>{item.propertyType}</h5>
            <h6>
              {" "}
              {item.bedrooms} Bedrooms / {item.bathrooms} Bathrooms
            </h6>

            <p>Address: {item.address}</p>
            <p>Price: {item.price} CAD</p>

            <p>
              <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
                Learn More
              </a>
            </p>
          </div>
        </>
      );

      place.addListener("click", () => {
        const content = ReactDOMServer.renderToString(InfoWindowContent);
        var infowindow = new maps.InfoWindow();
        infowindow.setContent(content);
        infowindow.open(map, place);
      });
      place.setMap(map);
      return place;
    });
  };

  //***************dog-parks ************************/

  const handleDogParks = (map, maps) => {
    setDogParks(
      dogParksJson.map((park) => {
        const parkCoords = park.fields.geom.coordinates[0].map((entry) => {
          return {
            lat: entry[1],
            lng: entry[0],
          };
        });

        var dogPark = new maps.Polygon({
          paths: parkCoords,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#ffd500",
          fillOpacity: 0.35,
        });

        dogPark.setMap(map);
        return dogPark;
      })
    );
  };

  const hideDogParks = () => {
    dogParks.forEach((park) => park.setVisible(showDogParks));
  };

  //***************Crimes ************************/

  const handleCrimes = (map, maps) => {
    setCrimes(
      crimesJson.map((crime) => {
        const crimePlace = new maps.Marker({
          key: crime.Latitude,
          position: {
            lat: crime.Latitude,
            lng: crime.Longitude,
          },
          label: {
            text: crime.TYPE,
            color: "black",
          },
          icon: {
            path: maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale: 3,
          },
        });

        crimePlace.setMap(map);
        return crimePlace;
      })
    );
  };

  const hideCrimes = () => {
    crimes.forEach((crime) => crime.setVisible(showCrimes));
  };

  //***************Schools ************************/

  const hideSchools = () => {
    schools.forEach((school) => school.setVisible(showSchools));
  };

  const handleSchools = (map, maps) => {
    setSchools(
      schoolsJson.map((school) => {
        const schoolCoords = {
          lat: school.fields.geom.coordinates[1],
          lng: school.fields.geom.coordinates[0],
        };

        const schoolPlace = new maps.Marker({
          key: schoolCoords.lat,
          position: {
            lat: schoolCoords.lat,
            lng: schoolCoords.lng,
          },
          icon: {
            path: maps.SymbolPath.CIRCLE,
            scale: 4,
            strokeColor: "green",
          },
        });

        schoolPlace.setMap(map);
        return schoolPlace;
      })
    );
  };

  const CustomButtonMap = ({ label, icon, onClick }) => (
    <button
      onClick={onClick}
      style={{
        fontSize: "14px",
        width: "9rem",
        height: "3.125rem",
        padding: "6px 12px",
        border: "1px solid",
        lineHeight: "1.5",
        fontWeight: 600,
        background: "#ffd500",
        borderColor: "grey",
        borderRadius: "5px",
        margin: "0 2rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        transition: "background 0.3s, transform 0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          background: "#ffd500",
          transform: "scale(1.05)",
        },
      }}
    >
      {label} {icon}
    </button>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "20px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Filter />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomButtonMap
            label="Dog off-leash"
            icon={<PetsIcon />}
            onClick={() => {
              setShowDogParks((state) => !state);
              hideDogParks();
            }}
          />
          <CustomButtonMap
            label="Crimes"
            icon={<PrivacyTipIcon />}
            onClick={() => {
              setShowCrimes((state) => !state);
              hideCrimes();
            }}
          />
          <CustomButtonMap
            label="Schools"
            icon={<SchoolIcon />}
            onClick={() => {
              setShowSchools((state) => !state);
              hideSchools();
            }}
          />
        </div>
      </div>

      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          defaultCenter={coordinates}
          center={coor}
          defaultZoom={12}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            handleDogParks(map, maps);
            handleCrimes(map, maps);
            handleItems(map, maps);
            handleSchools(map, maps);
          }}
        ></GoogleMapReact>

        {hideDogParks()}
        {hideCrimes()}
        {hideSchools()}
      </div>
    </>
  );
}
