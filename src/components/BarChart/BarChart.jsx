import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { Tabs, Tab } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";

const CustumBarChart = () => {
  // Sample data for the multi-series bar chart
  const [selectedTab, setSelectedTab] = useState("day");

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const data = [
    { name: "April", series1: 120, series2: 150 },
    { name: "May", series1: 200, series2: 220 },
    { name: "June", series1: 300, series2: 320 },
    { name: "July", series1: 300, series2: 320 },
  ]; // Define chart options

  const options = {
    color: ["orange", "#5238ee"],
    tooltip: {
      trigger: "axis",
    },

    xAxis: {
      type: "category",
      data: data.map((item) => item.name),
    },
    yAxis: {
      type: "value",
      interval: 100,
    },
    series: [
      {
        name: "Lorem",
        type: "bar",
        data: data.map((item) => item.series1),
      },
      {
        name: "Ipusum",
        type: "bar",
        data: data.map((item) => item.series2),
      },
    ],
  };

  return (
    <Box>
      <Box
        boxShadow={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          borderRadius: "25px",
          m: 1,
        }}
      >
        <Tabs value={selectedTab} onChange={handleChangeTab} sx={{}}>
          <Tab value="day" label="Day" />
          <Tab value="week" label="Week" />
          <Tab value="month" label="Month" />
        </Tabs>
        <ReactECharts
          option={options}
          style={{ height: "300px", width: "100%" }}
        />
      </Box>

      <Grid sx={{ display: "flex" }}>
        {options?.color?.map((item, index) => {
          return (
            <>
              <Box
                sx={{ width: 50, height: 10, backgroundColor: item, m: 1 }}
              ></Box>
              <Typography>Lorem</Typography>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CustumBarChart;
