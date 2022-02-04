import { useState } from "react";
import { options } from "./constants";
import { Dropdown } from "../Translate/components/Dropdown";
import { Box, Typography } from "@mui/material";

export const DropdownComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Dropdown value={value} onChange={handleChange} data={options} />
      <Typography color={value}>Text for test</Typography>
    </Box>
  );
};
