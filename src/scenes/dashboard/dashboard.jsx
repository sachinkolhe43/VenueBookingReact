import React from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Venue Booking Application" subtitle="Welcome to your dashboard" />

       
      </Box>

      {/* MAIN CONTENT */}
      <Box>
        {/* Replace with your main content, Typography, Charts, etc. */}
        <Typography variant="body1">
          Venue Booking is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions. It involves studying the brand, identifying its target audience, devising the event concept, and coordinating the technical aspects before actually launching the event.[1]

          The events industry now includes events of all sizes from the Olympics down to business breakfast meetings. Many industries, celebrities, charitable organizations, and interest groups hold events in order to market their label, build business relationships, raise money, or celebrate achievement.

          The process of planning and coordinating the event is usually referred to as event planning and which can include budgeting, scheduling, site selection, acquiring necessary permits, coordinating transportation and parking, arranging for speakers or entertainers, arranging decor, event security, catering, coordinating with third-party vendors, and emergency plans. Each event is different in its nature so process of planning and execution of each event differs on basis of the type of event.

          The event manager is the person who plans and executes the event, taking responsibility for the creative, technical, and logistical elements. This includes overall event design, brand building, marketing and communication strategy, audio-visual production, script writing, logistics, budgeting, negotiation, and client service.
        </Typography>

        {/* Replace with your charts and components */}
            </Box>
    </Box>
  );
};

export default Dashboard;
