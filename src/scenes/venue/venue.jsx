import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
// import VenueForm from "./VenueForm"; // Import the VenueForm component



const Venue = () => {
  const columns = [
    { field: "Venue_id", headerName: "ID" , headerClassName: "column-header"},
    { field: "Venue_name", headerName: "Name", flex: 1 , headerClassName: "column-header"},
    { field: "Venue_description", headerName: "Description", flex: 1, headerClassName: "column-header" },
    { field: "Venue_contact", headerName: "Contact", flex: 1 , headerClassName: "column-header"},
    { field: "Venue_address", headerName: "Address", flex: 1 , headerClassName: "column-header"},
    { field: "Venue_amountPerDay", headerName: "Amount per Day", flex: 1 , headerClassName: "column-header"},
    { field: "Venue_image", headerName: "Image", flex: 1 , headerClassName: "column-header"},
    {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    headerClassName: "column-header",
    renderCell: (params) => (
      <ButtonGroup>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.row.Venue_id)}>
          Update
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.row.Venue_id)}>
          Delete
        </Button>
      </ButtonGroup>
    ),
    },

  ];

  const [venueData, setVenueData] = useState([]);
  const [selectedVenueId, setSelectedVenueId] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedVenueData, setEditedVenueData] = useState({});
  
  useEffect(() => {
    // Fetch venue data from the backend API
    fetch("http://localhost:4000/venue/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVenueData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUpdate = (venueId) => {
    setSelectedVenueId(venueId);
    const selectedVenue = venueData.find((venue) => venue.Venue_id === venueId);
    setEditedVenueData(selectedVenue);
    setIsEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setSelectedVenueId(null);
    setIsEditDialogOpen(false);
    setEditedVenueData({});
  };

  const handleEditSave = () => {
   

    // Make an API request to update the backend data
    fetch(`http://localhost:4000/venue/${selectedVenueId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedVenueData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated venue data:", data);

        // Update the state with the updated venue data
        const updatedVenueData = venueData.map((venue) =>
          venue.Venue_id === selectedVenueId ? editedVenueData : venue
        );
        setVenueData(updatedVenueData);

        console.log("Saved edited data for venue ID:", selectedVenueId);
        // Close the dialog
        handleEditDialogClose();
      })
      .catch((error) => {
        console.error("Error updating venue data:", error);
        // Handle error cases
      });
  };


  const handleDelete = (Venue_id) => {
    console.log("Delete clicked for user ID:", Venue_id);
    // Show a confirmation dialog and perform deletion
    // Show a confirmation dialog to confirm the deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this venue?");
    if (confirmDelete) {
      // Send a DELETE request to the backend to delete the venue
      fetch(`http://localhost:4000/venue/${Venue_id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Venue deleted:", data);

          // Update the venueData state by removing the deleted venue
          const updatedVenueData = venueData.filter((venue) => venue.Venue_id !== Venue_id);
          setVenueData(updatedVenueData);
        })
        .catch((error) => console.error("Error deleting venue:", error));
    }

  };

  return (
    <Box m="20px">

      <Header title="List Of Venues" subtitle="Managing the Venues" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={venueData}
          columns={columns}
          getRowId={(row) => row.Venue_id}
          sx={{
          "& .MuiDataGrid-cell": {
            fontFamily: "Your Preferred Font",
            fontSize: "18px",
          },
          // Add more styles as needed
        }}
        // ... (other DataGrid configurations)
        />
      </Box>
      <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Venue</DialogTitle>
        <DialogContent>
          {/* Example of editing the venue name */}
          <TextField
            label="Venue Name"
            value={editedVenueData.Venue_name || ""}
            onChange={(e) =>
              setEditedVenueData({ ...editedVenueData, Venue_name: e.target.value })
            }
            fullWidth
          />



          <TextField
            label="Venue Description"
            value={editedVenueData.Venue_description || ""}
            onChange={(e) =>
              setEditedVenueData({ ...editedVenueData, Venue_description: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Venue Contact"
            value={editedVenueData.Venue_contact || ""}
            onChange={(e) =>
              setEditedVenueData({ ...editedVenueData, Venue_contact: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Venue Address"
            value={editedVenueData.Venue_address || ""}
            onChange={(e) =>
              setEditedVenueData({ ...editedVenueData, Venue_address: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Venue Amount per Day"
            value={editedVenueData.Venue_amountPerDay || ""}
            onChange={(e) =>
              setEditedVenueData({ ...editedVenueData, Venue_amountPerDay: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Venue Image"
            value={editedVenueData.Venue_image || ""}
            onChange={(e) =>
              setEditedVenueData({ ...editedVenueData, Venue_image: e.target.value })
            }
            fullWidth
          />
          {/* Add more fields for editing */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  
  );
};

export default Venue;
