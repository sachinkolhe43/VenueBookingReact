import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const VenueForm = ({ onSave }) => {
     const [venueData, setVenueData] = useState({
          Venue_name: "",
          Venue_description: "",
          Venue_contact: "",
          Venue_address: "",
          Venue_amountPerDay: "",
          Venue_image: "",
     });

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setVenueData((prevData) => ({
               ...prevData,
               [name]: value,
          }));
     };

     const handleSave = () => {
          onSave(venueData);
     };

     return (
          <div>
               <TextField
                    label="Venue Name"
                    name="Venue_name"
                    value={venueData.Venue_name}
                    onChange={handleInputChange}
               />

               <TextField
                    label="Venue Description"
                    name="Venue_description"
                    value={venueData.Venue_description}
                    onChange={handleInputChange}
               />

               <TextField
                    label="Venue Contact"
                    name="Venue_contact"
                    value={venueData.Venue_contact}
                    onChange={handleInputChange}
               />

               <TextField
                    label="Venue Address"
                    name="Venue_address"
                    value={venueData.Venue_address}
                    onChange={handleInputChange}
               />

               <TextField
                    label="Venue Booking Amount"
                    name="Venue_amountPerDay"
                    value={venueData.Venue_amountPerDay}
                    onChange={handleInputChange}
               />

              


               {/* Add other input fields for venue details */}
               <Button variant="contained" color="primary" onClick={handleSave}>
                    Save Venue
               </Button>
          </div>
     );
};

export default VenueForm;
