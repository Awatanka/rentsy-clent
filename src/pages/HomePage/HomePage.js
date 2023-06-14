import "../HomePage/homePage.scss";
import VideoHero from "../../components/VideoHero/VideoHero";
import Footer from "../../components/Footer/Footer";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Link } from "react-router-dom";
import ListHouse from "../../components/ListHouse/ListHouse";
import RentalCards from "../../components/RentalCard/RentalCards";

export default function HomePage({ items }) {
  return (
    <>
      <main className="main">
        <VideoHero />
        <section className="cardNew">
          <div className="cardNew-content"></div>
        </section>
        <section className="cardSimilar">
          <div className="cardSimilar-content">
            <RentalCards items={items} />
          </div>
        </section>
        <section className="cardNew">
          <div className="cardNew-title">
            <h4 className="cardNew-title__header"> Houses in Vancouver </h4>
            <p className="cardNew-title__content">
              Find homes to rent in Vancouver, BC. Rentsy provides the latest
              listings and comprehensive property information such as prices,
              photos and information about neighborhood.
            </p>
            <p className="cardNew-title__more">
              <Link
                to={"/card"}
                style={{ textDecoration: "none", color: "black" }}
                className="viewMore"
              >
                View more <ReadMoreIcon />{" "}
              </Link>
            </p>
          </div>
          <div className="cardHouse">
            {" "}
            <ListHouse items={items} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
