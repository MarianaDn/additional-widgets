import { useState } from "react";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Accordion } from "../Accordion/Accordion";
import { items } from "../../constants";
import styles from "../Accordion/Accordion.module.scss";
import { List } from "../List/List";

export const ColorTabs = () => {
  const [value, setValue] = useState("Accordion");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", background: "#fff" }}
        >
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="Accordion" label="Accordion" />
            <Tab value="List" label="List" />
            <Tab value="Dropdown" label="Dropdown" />
            <Tab value="Translate" label="Translate" />
          </TabList>
        </Box>
        <TabPanel value="Accordion">
          {items.map(({ id, title, content }, index) => {
            const active = index === activeIndex && [
              styles.arrowActive,
              styles.cardActive,
            ];

            return (
              <Accordion
                id={id}
                title={title}
                content={content}
                key={id}
                active={active}
                setActiveIndex={setActiveIndex}
              />
            );
          })}
        </TabPanel>
        <TabPanel value="List">
          <List />
        </TabPanel>
        <TabPanel value="Dropdown">Dropdowne</TabPanel>
        <TabPanel value="Translate">Translate</TabPanel>
      </TabContext>
    </Box>
  );
};
