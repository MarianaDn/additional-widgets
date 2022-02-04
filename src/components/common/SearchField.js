import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import outlinedInputClasses from "@mui/material/OutlinedInput/outlinedInputClasses";

const StyledTextField = styled(TextField, { name: "StyledTextField" })(
  ({ theme }) => ({
    display: "block",
    width: "70%",
    margin: theme.spacing(0, "auto"),

    [`& .${outlinedInputClasses.root}`]: {
      width: "100%",
      backgroundColor: "#ffffff",
    },
  })
);

export const SearchField = ({ value, onChange, placeholder }) => (
  <StyledTextField
    placeholder={placeholder}
    color="secondary"
    value={value}
    onChange={onChange}
  />
);
