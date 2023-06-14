import CardList from "../../components/CardsList/CardList";
import Map from "../../components/Map/Map";
import "../MapPage/mapPage.scss";
import Footer from "../../components/Footer/Footer";

export default function MapPage({ items }) {
  return (
    <>
      <div className="mapPage">
        <div className="mapPage-map">
          <Map items={items} />
        </div>

        <div className="mapPage-side">
          <CardList />
        </div>
      </div>
      <Footer />
    </>
  );
}
