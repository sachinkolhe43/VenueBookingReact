import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Bookings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "VenueBooking_id", headerName: "Booking ID", flex: 1, headerClassName: "column-header" },
    { field: "User_name", headerName: "User Name", flex: 1, headerClassName: "column-header" },
    { field: "Venue_name", headerName: "Venue Name", flex: 1 , headerClassName: "column-header"},
    { field: "Total_amount", headerName: "Total Amount", flex: 1 , headerClassName: "column-header"},
    {
      field: "Start_date",
      headerName: "Start Date",
      valueFormatter: ({ value }) => {
        const formattedDate = new Date(value).toLocaleDateString();
        return formattedDate;
      }, headerClassName: "column-header"
    },
    {
      field: "End_date",
      headerName: "End Date",
      valueFormatter: ({ value }) => {
        const formattedDate = new Date(value).toLocaleDateString();
        return formattedDate;
    },headerClassName: "column-header"
  },
   {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    headerClassName: "column-header",
    renderCell: (params) => (
      <ButtonGroup>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.row.User_id)}>
          Update
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.row.User_id)}>
          Delete
        </Button>
      </ButtonGroup>
    ),
    },
  ];

  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    // Fetch booking data from the backend API
    fetch("http://localhost:4000/booking/venuebookings/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookingData(data.data);
      })
      .catch((error) => console.error("Error fetching booking data:", error));
  }, []);

  const handleUpdate = (userId) => {
    // Implement the update logic here
    console.log("Update clicked for user ID:", userId);
    // Open a dialog or navigate to an edit page
  };

  const handleDelete = (userId) => {
    // Implement the delete logic here
    console.log("Delete clicked for user ID:", userId);
    // Show a confirmation dialog and perform deletion
  };

  return (
    <Box m="20px">
      <Header title="Bookings" subtitle="List of Venue Bookings" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={bookingData}
          columns={columns}
          getRowId={(row) => row.VenueBooking_id} // Specify the unique identifier
          sx={{
            "& .MuiDataGrid-cell": {
              fontFamily: "Your Preferred Font",
              fontSize: "18px"
            }
            // Add more styles as needed
          }}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Bookings;
