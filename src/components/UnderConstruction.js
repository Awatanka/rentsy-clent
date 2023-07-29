import EngineeringIcon from "@mui/icons-material/Engineering";

const UnderConstruction = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <EngineeringIcon
          style={{ fontSize: "7rem", marginBottom: "1rem", color: "ffd500" }}
        />
        <h1 style={{ fontSize: "2rem" }}>
          Oops! This page is still under construction. <br /> Please check back
          later!
        </h1>
      </div>
    </div>
  );
};

export default UnderConstruction;
