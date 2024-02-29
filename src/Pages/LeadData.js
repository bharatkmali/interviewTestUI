import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchComponets from "../Components/SearchComponets";

const LeadData = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",

        minWidth: "100px",
        border: "0.5px solid #f2693c",
        borderRadius: "20px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        p: "16px",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}
      >
        <Grid item sx={{ display: "flex", alignContent: "center", alignItems: "center" }}>
          <IconButton>{props?.data.icon}</IconButton>
          <Typography>{props?.data.name}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", gap: "3px", alignContent: "center", alignItems: "center" }}>
          <Typography>CLEAR</Typography>
          <CloseIcon />
        </Grid>
      </Grid>
      <SearchComponets />
    </Box>
  );
};

export default LeadData;
