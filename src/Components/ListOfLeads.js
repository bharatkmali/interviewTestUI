import { Box, Grid, IconButton, Radio, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchComponets from "./SearchComponets";
import AdsClickIcon from "@mui/icons-material/AdsClick";
const ListOfLeads = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        // flexWrap: { md: "nowrap", xs: "wrap" },
        //     height: "140px",
        //  minWidth: "100px",
        border: "0.5px solid #eee",
        borderRadius: "20px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        p: "16px",
        width: "100%",
        ":hover": {
          border: "1px solid #377573",
        },
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}
      >
        <Grid item sx={{ display: "flex", alignContent: "center", alignItems: "center" }}>
          <IconButton>
            <AdsClickIcon />
          </IconButton>
          <Typography>Lead name</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", gap: "3px", alignContent: "center", alignItems: "center" }}>
          <Radio size="small" />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          gap: "3px",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
          whiteSpace: "nowrap",
        }}
      >
        <Typography sx={{ fontStyle: "italic", opacity: "7px", textOverflow: "ellipsis", overflow: "hidden" }}>
          Account / 14 opportunities, 3 open / 15 offers
        </Typography>
      </Grid>
    </Box>
  );
};

export default ListOfLeads;
