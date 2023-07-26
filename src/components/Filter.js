import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useState } from "react";

export default function Filter() {
  const [bedrooms, setBedrooms] = useState("");
  const [type, setType] = useState("");
  const [pets, setPets] = useState("");

  return (
    <div style={{ display: "flex", width: "400px", marginLeft: "40px" }}>
      <FormControl
        variant="outlined"
        sx={{ minWidth: "100px", margin: "10px" }}
      >
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          label="Type"
          sx={{ height: "3rem", "&:focus": { color: "aliceblue" } }}
        >
          <MenuItem value="appartment">Apartment</MenuItem>
          <MenuItem value="house">House</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        sx={{ minWidth: "100px", margin: "10px" }}
      >
        <InputLabel>Bedrooms</InputLabel>
        <Select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          label="Bedrooms"
          sx={{ height: "3rem", "&:focus": { color: "aliceblue" } }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>1 Bedroom</MenuItem>
          <MenuItem value={2}>2 Bedrooms</MenuItem>
          <MenuItem value={3}>3 Bedrooms</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        sx={{ minWidth: "100px", margin: "10px" }}
      >
        <InputLabel>Pets</InputLabel>
        <Select
          value={pets}
          onChange={(e) => setPets(e.target.value)}
          label="Pets"
          sx={{ height: "3rem", "&:focus": { color: "aliceblue" } }}
        >
          <MenuItem value="Dog">Dog</MenuItem>
          <MenuItem value="Cat">Cat</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
