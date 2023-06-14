import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function Filter() {
  const [bedrooms, setBedrooms] = useState("");
  const [type, setType] = useState("");
  const [pets, setPets] = useState("");

  return (
    <div className="filter">
      <div className="filter-container__form">
        <FormControl className="formControl">
          <InputLabel className="formControl-inputLabel">Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="formControl-select"
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              width: 100,
              height: 50,
            }}
          >
            <MenuItem value="appartment">Apartment</MenuItem>
            <MenuItem value="house">House</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="filter-container__form">
        <FormControl className="formControl">
          <InputLabel>Bedrooms</InputLabel>
          <Select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              width: 120,
              height: 50,
            }}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>1 bedroom</MenuItem>
            <MenuItem value={2}>2 bedrooms</MenuItem>
            <MenuItem value={3}>3 bedrooms</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="filter-container__form">
        <FormControl className="formControl">
          <InputLabel>Pets</InputLabel>
          <Select
            value={pets}
            onChange={(e) => setPets(e.target.value)}
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              width: 100,
              height: 50,
            }}
          >
            <MenuItem value="Dog">Dog</MenuItem>
            <MenuItem value="Cat">Cat</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
