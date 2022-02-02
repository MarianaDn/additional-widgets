import { useEffect, useState } from "react";
import { SearchCard } from "./components/SearchCard";
import { SearchField } from "./components/SearchField";
import { Box, styled } from "@mui/material";
import axios from "axios";

const StyledBox = styled(Box, { name: "StyledBox" })(({ theme }) => ({
  width: "70%",
  margin: theme.spacing(2, "auto"),
  padding: theme.spacing(2),
}));

export const List = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (event) => setValue(event.target.value);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: value,
        },
      });

      setResult(data.query.search);
    };

    if (value && !result.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => value && search(), 700);

      return () => clearTimeout(timeoutId);
    }
  }, [value]);

  return (
    <>
      <SearchField value={value} onChange={handleChange} />
      <StyledBox>
        {result.map(({ pageid, title, snippet }) => (
          <SearchCard
            key={pageid}
            title={title}
            content={snippet}
            pageid={pageid}
          />
        ))}
      </StyledBox>
    </>
  );
};
