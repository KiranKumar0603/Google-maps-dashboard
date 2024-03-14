import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import { Box, Typography, Grid } from "@mui/material";
import facebook from "../../assets/facebook.png";
import CustumCard from "../../components/CustumCard";
import MapComponent from "../../components/GoogleMaps";
import CustumBarChart from "../../components/BarChart/BarChart";
import SimpleTable from "../../components/simpleTable";
import TableDataGrid from "../../components/Table";

function Dashboard() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 12.9716,
    lng: 77.594566,
  });
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedRowData, setRowData] = useState([]);
  const [selectedColData, setColData] = useState([]);
  console.log(process.env.REACT_APP_GOOGLE_MAPS_KEY);
  let cardData = [
    {
      title: "Moving",
      percentage: "70%",
      value: "264",
      color: "green",
      logo: facebook,
    },
    {
      title: "Stopped",
      percentage: "70%",
      value: "264",
      color: "red",
      logo: facebook,
    },
    {
      title: "Idle",
      percentage: "70%",
      value: "264",
      color: "orange",
      logo: facebook,
    },
    {
      title: "Inactive",
      percentage: "70%",
      value: "264",
      color: "grey",
      logo: facebook,
    },
    {
      title: "Out Of Service",
      percentage: "70%",
      value: "264",
      color: "maroon",
      logo: facebook,
    },
  ];

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setTableData(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleToggleSelect = (row) => {
    const index = selectedRows.findIndex(
      (selectedRow) => selectedRow.id === row.id
    );

    if (index === -1) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow.id !== row.id)
      );
    }
  };

  useEffect(() => {
    const newcolumns =
      selectedRows.length > 0
        ? Object.keys(selectedRows[0]).map((key) => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
            flex: 1, // Adjust width of column
          }))
        : [];

    // Define rows based on the tableData array
    const newrows = selectedRows.map((item, index) => ({
      id: index + 1, // Assign a unique id to each row
      ...item, // Spread the properties of each item as row data
    }));
    setColData(newcolumns);
    setRowData(newrows);
  }, [selectedRows]);

  const handleDeleteRow = (id) => {
    setSelectedRows(selectedRows.filter((row) => row.id !== id));
    onDelete(id);
  };

  const columns =
    tableData.length > 0
      ? Object.keys(tableData[0]).map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter
          flex: 1, // Adjust width of column
        }))
      : [];

  // Define rows based on the tableData array
  const rows = tableData.map((item, index) => ({
    id: index + 1, // Assign a unique id to each row
    ...item, // Spread the properties of each item as row data
  }));

  // Filter rows based on the filterText
  const filteredRows = rows.filter((row) => {
    return Object.values(row).some((value) => {
      if (
        typeof value === "string" &&
        value.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  });

  const onDelete = (id) => {
    let tempData = [];
    tableData.map((item, index) => {
      if (item.id !== id) {
        tempData.push(item);
      }
    });
    setTableData(tempData);
  };
  return (
    <>
      <Box sx={{ display: "flex", mt: 10 }}>
        <SideNav />
        <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
          <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
            {cardData?.map((item, index) => {
              return <CustumCard data={item} index={index} />;
            })}
          </Grid>

          <Box sx={{ m: 2, borderRadius: "20px", position: "relative" }}>
            <MapComponent
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </Box>

          <Grid container spacing={2} width="100%">
            <Grid item xs={6} sx={{ width: "100%" }}>
              {selectedRowData.length > 0 && selectedColData.length > 0 ? (
                <SimpleTable
                  rows={selectedRowData}
                  columns={selectedColData}
                  heading="Selected Records"
                />
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Please select from below table To see Selected Data
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <CustumBarChart />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={11.5}>
              <TableDataGrid
                isSearch
                handleFilterChange={handleFilterChange}
                rows={filteredRows}
                columns={columns}
                handleToggleSelect={handleToggleSelect}
                handleDeleteRow={handleDeleteRow}
                selectRequired
                deleteRequired
                selectedRows={selectedRows}
                heading="Records"
              />
            </Grid>
          </Grid>

          {/* <Box >
            <TableDataGrid
              isSearch
              handleFilterChange={handleFilterChange}
              rows={filteredRows}
              columns={columns}
              handleToggleSelect={handleToggleSelect}
              handleDeleteRow={handleDeleteRow}
              selectRequired
              deleteRequired
              selectedRows={selectedRows}
              heading="Records"
            />
          </Box> */}
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
