import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const Dropdown = ({ value, onChange, data }) => (
  <FormControl
    sx={{ m: 2, width: "70%", backgroundColor: "#fff" }}
    color="secondary"
  >
    <InputLabel htmlFor="demo-customized-select-native">Language</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      value={value}
      onChange={onChange}
      autoWidth
      label="Language"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {data.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
