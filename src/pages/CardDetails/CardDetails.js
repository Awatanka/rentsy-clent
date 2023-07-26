import SideBar from "../../components/SideBar/SideBar";
import Slider from "../../components/Slider/Slider";

import axios from "axios";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function CardDetails({ items }) {
  console.log(" card" + items);
  return (
    <>
      {items && (
        <section className="cardDetail">
          <Slider></Slider>
          <section className="cardDetail__left">
            <Slider items={items} />
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
