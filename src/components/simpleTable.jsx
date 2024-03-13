import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  TextField,
  InputAdornment,
  Typography,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Table/index.css";
const SimpleTable = ({
  handleFilterChange,
  rows,
  columns,

  isSearch,
  heading,
}) => {
  const getRowClassName = (params) => {
    console.log(params);
    return params.id % 2 === 0 ? "even-row" : "odd-row";
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        my: 3,
      }}
    >
      <Typography variant="h6">{heading}</Typography>
      {isSearch && (
        <TextField
          placeholder="Search"
          onChange={handleFilterChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            border: 0,
            boxShadow: 2,

            width: "300px",
            alignSelf: "flex-end",
          }}
        />
      )}

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        disableEval
        disableRowSelectionOnClick
        disableVirtualization
        getRowClassName={getRowClassName}
        rowHeight={38}
        sx={{ overflowX: "scroll" }}
      />
    </Box>
  );
};

export default SimpleTable;
