/* Dissanayaka Mudiyanselage Shiranga Malru Dissanayaka
M42W0225 */

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import bgImage from "../images/banner.jpg"; // Verify this path

const timerContainerStyles = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  color: "white",
  height: "100px",
  overflow: "hidden",
  background: "rgba(0, 0, 0, 0.6)",
  marginBottom: "24px",
  '&::before': {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.5,
    zIndex: -1,
  },
};

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={timerContainerStyles}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%", position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", marginRight: "auto" }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Dissanayaka Mudiyanselage Shiranga Malru Dissanayaka
          </Typography>
          <Typography variant="h6">
            M24W0225
          </Typography>
        </Box>
        <Typography variant="h4">
          {time.toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
