import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";

const User = () => {
  const columns = [
    { field: "User_id", headerName: "ID", flex: 0.5, headerClassName: "column-header" },
    { field: "User_name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", headerClassName: "column-header" },
    { field: "User_email", headerName: "Email", flex: 1, headerClassName: "column-header" },
    { field: "User_pass", headerName: "Password", flex: 1, headerClassName: "column-header" },
    { field: "User_contact", headerName: "Contact", flex: 1, headerClassName: "column-header" },
    { field: "User_address", headerName: "Address", flex: 1, headerClassName: "column-header" },
    // {
    // field: "actions",
    // headerName: "Actions",
    // flex: 1,
    // headerClassName: "column-header",
    // renderCell: (params) => (
    //   <ButtonGroup>
    //     <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.row.User_id)}>
    //       Update
    //     </Button>
    //     <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.row.User_id)}>
    //       Delete
    //     </Button>
    //   </ButtonGroup>
    // ),
    // },
  ];

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend API
    fetch("http://localhost:4000/user/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
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
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={userData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.User_id} // Specify the unique identifier
          sx={{
            "& .MuiDataGrid-cell": {
              fontFamily: "Your Preferred Font",
              fontSize: "18px",
            },
            // Add more styles as needed
          }}
        />
      </Box>
    </Box>
  );
};

export default User;
