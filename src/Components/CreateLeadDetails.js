import { Box, Button, Paper, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import SearchComponets from "./SearchComponets";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import DomainIcon from "@mui/icons-material/Domain";
import LeadData from "../Pages/LeadData";
const CreateLeadDetails = () => {
  const navPoint = [
    { name: "Leads", icon: <AdsClickIcon /> },
    { name: "Accounts", icon: <DomainIcon /> },
    { name: "Contacts", icon: <AdsClickIcon /> },
  ];
  const LeadDatas = [
    { name: "Lead status", icon: <AdsClickIcon /> },
    { name: "Lead source", icon: <DomainIcon /> },
    { name: "Address", icon: <AdsClickIcon /> },
    { name: "Company type", icon: <AdsClickIcon /> },
    { name: "Company size", icon: <DomainIcon /> },
    { name: "Platform / audience", icon: <AdsClickIcon /> },
    { name: "Product interest", icon: <AdsClickIcon /> },
    { name: "Brand name", icon: <DomainIcon /> },
    { name: "PCurrency", icon: <AdsClickIcon /> },
  ];
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        borderRadius: "20px",
        width: "400px",

        gap: 1,
        height: "calc(100vh - 100px - 13px)",
        border: "1px solid #eee",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box>
        <Button variant="text" sx={{ color: "#eee" }}>
          CLEAR ALL
        </Button>
        <SearchComponets />
        <Box sx={{ display: "flex", my: 2, justifyContent: "center", gap: 2 }}>
          {navPoint.map((obj) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  minHeight: "70px",
                  minWidth: "100px",
                  border: "0.5px solid #f2693c",
                  borderRadius: "20px",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {obj.icon}
                {obj.name}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          my: 2,
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          height: "calc(100vh - 100px - 257px)",
          overflowX: "auto",
          paddingTop: "100px",
        }}
      >
        <Toolbar />
        <Toolbar />
        {LeadDatas.map((obj, index) => {
          return <LeadData data={obj} />;
        })}
      </Box>
    </Paper>
  );
};

export default CreateLeadDetails;
