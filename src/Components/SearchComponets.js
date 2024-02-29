import { VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchComponets = () => {
  const styles = {
    textField: {
      "& .MuiInput-underline:after": {
        borderBottom: "none", // Remove the underline after input
      },
      "& .MuiInput-underline:before": {
        borderBottom: "none", // Remove the underline before input
      },
    },
  };
  return (
    <FormControl
      size="small"
      sx={{
        width: "100%",
        borderBottom: "none",
        p: 1,
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "50px",
        border: "0.5px solid #eee",
        borderBottom: "none",
        " & .MuiInputBase-root:before ": { borderBottom: "none" },
        " & .MuiInputBase-root:hover ": { borderBottom: "none" },
      }}
      variant="standard"
      elevation={3}
    >
      <Input
        id="standard-adornment-password"
        placeholder="Search Name "
        sx={{
          borderBottom: "none",
          " & .MuiInputBase-root:before ": { borderBottom: "none" },
          "& .MuiInput-underline:before": {
            borderBottom: "none", // Remove default underline
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none", // Remove after hover underline
          },
        }}
        InputProps={{ classes: { root: styles.textField } }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchComponets;
