import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import { Box, Typography } from "@mui/material";
function TrackOnMap() {
  return (
    <div>
      <Box sx={{ display: "flex", mt: 10 }}>
        <SideNav />
        <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
          <Typography>Track On Map</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default TrackOnMap;
