import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Typography } from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";
import Slider from "../../components/Slider/Slider";

function CardDetails({ items }) {
  const [item, setItem] = useState(null);

  const params = useParams();
  const cacheItem = useRef({});

  const itemId = params.cardId;

  const options = {
    method: "GET",
    url: "https://zillow-com1.p.rapidapi.com/property",
    params: { zpid: `${itemId}` },
    headers: {
      "X-RapidAPI-Key": "da86316bdcmsh9b607f3eb67c004p10dbbfjsnd18353baa41d",
      "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
    },
  };

  // const options = {
  //   method: "GET",
  //   url: "https://zillow56.p.rapidapi.com/property",
  //   params: { zpid: `${itemId}` },
  //   headers: {
  //     "X-RapidAPI-Key": "da86316bdcmsh9b607f3eb67c004p10dbbfjsnd18353baa41d",
  //     "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
  //   },
  // };

  useEffect(() => {
    if (cacheItem.current[itemId]) {
      console.log("useg from cache");
      setItem(cacheItem.current[itemId]);
    } else {
      axios
        .request(options)
        .then(function (response) {
          setItem(response.data);
          cacheItem.current[itemId] = response.data;
          console.log(item);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [params]);

  return (
    <>
      {item && (
        <section className="cardDetail">
          <section className="cardDetail__left">
            <Typography variant="h6" className="cardDetail__left-title">
              {item.title}
            </Typography>
            <Slider element={item} />
          </section>
          <section className="cardDetail__right">
            <SideBar items={items} />
          </section>
        </section>
      )}
    </>
  );
}

export default CardDetails;
