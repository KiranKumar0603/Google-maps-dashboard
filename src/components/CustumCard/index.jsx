import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function CustumCard({ data, index }) {
  return (
    <>
      <Grid
        key={index}
        sx={{
          borderRadius: "20px",
          justifyContent: "end",
          position: "relative",
          width: "200px",
          display: "grid",
          margin: "30px 10px",
          padding: "10px",
        }}
        boxShadow={5}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            padding: "10px",
          }}
        >
          <img src={data?.logo} width={60} height={50} style={{}} />
          <Typography
            sx={{
              textAlign: "center",
              color: `${data.color}`,
              fontWeight: "bold",
            }}
          >
            {data?.percentage}
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "10px", color: "green" }}
          >
            View Details
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: `${data.color}`,
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            {data?.title}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {data?.value}
          </Typography>
          <Typography sx={{ fontSize: "10px", color: "green" }}>
            View on Maps
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default CustumCard;
