import { useState } from "react";
import { Box } from "@mui/material";
import { SearchField } from "../common/SearchField";
import { Dropdown } from "./components/Dropdown";
import { Convert } from "./components/Convert";
import { options } from "./constants";

export const Translate = () => {
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("");

  const handleChange = (event) => setValue(event.target.value);
  const handleLanguageChange = (event) => setLanguage(event.target.value);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchField
        value={value}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <Dropdown
        value={language}
        onChange={handleLanguageChange}
        data={options}
      />
      <Convert language={language} text={value} />
    </Box>
  );
};
