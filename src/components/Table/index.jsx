import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  TextField,
  InputAdornment,
  Typography,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";

const TableDataGrid = ({
  handleFilterChange,
  rows,
  columns,
  handleToggleSelect,
  handleDeleteRow,
  selectRequired,
  deleteRequired,
  selectedRows,
  isSearch,
  heading,
}) => {
  const getRowClassName = (params) => {
    return params.id % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        my: 10,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
      </Box>

      {rows.length > 0 ? (
        <DataGrid
          rows={rows}
          columns={[
            ...columns,
            selectRequired === true && {
              field: "select",
              headerName: "Select",
              sortable: false,
              width: 100,
              renderCell: (params) => (
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "10px",
                    borderRadius: "10px",
                    bgcolor: "#9584ed",
                    width: "200px",
                  }}
                  onClick={() => handleToggleSelect(params.row)}
                >
                  {selectedRows?.some((row) => row.id === params.row.id)
                    ? "Unselect"
                    : "Select"}
                </Button>
              ),
            },
            deleteRequired === true && {
              field: "delete",
              headerName: "Delete",
              sortable: false,
              width: 100,
              renderCell: (params) => (
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "10px",
                    borderRadius: "10px",
                    bgcolor: "red",
                  }}
                  onClick={() => handleDeleteRow(params.row.id)}
                >
                  Delete
                </Button>
              ),
            },
          ]}
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
        />
      ) : (
        <>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            No data found (please refresh for data)
          </Typography>
        </>
      )}
    </Box>
  );
};

export default TableDataGrid;
