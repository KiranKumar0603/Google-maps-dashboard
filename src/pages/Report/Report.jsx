import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import { Box, Typography } from "@mui/material";
function Report() {
  return (
    <div>
      {" "}
      <Box sx={{ display: "flex", mt: 10 }}>
        <SideNav />
        <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
          <Typography>Report</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Report;
