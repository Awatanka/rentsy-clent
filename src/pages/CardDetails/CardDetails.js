import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";
import CustomSlider from "../../components/Slider/CustomSlider";

const cacheItem = {};

function CardDetails({ items }) {
  const [item, setItem] = useState(null);
  const params = useParams();
  const itemId = params.cardId;

  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://zillow-com1.p.rapidapi.com/property",
      params: { zpid: `${itemId}` },
      headers: {
        "X-RapidAPI-Key": "da86316bdcmsh9b607f3eb67c004p10dbbfjsnd18353baa41d",
        "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
      },
    }),
    [itemId]
  );

  useEffect(() => {
    if (cacheItem[itemId]) {
      console.log("use from cache");
      setItem(cacheItem[itemId]);
    } else {
      axios
        .request(options)
        .then(function (response) {
          setItem(response.data);
          cacheItem[itemId] = response.data;
          console.log(item);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [item, itemId, options]);

  return (
    <>
      {item &&
        itemId &&
        options(
          <section className="cardDetail">
            <section className="cardDetail__left">
              <Typography variant="h6" className="cardDetail__left-title">
                {item.title}
              </Typography>
              <CustomSlider element={item} />
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
