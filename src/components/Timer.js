import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import bgImage from "../images/banner.jpg";

const timerContainerStyles = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "16px",
  color: "black",
  height: "350px",
  overflow: "hidden",
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
    opacity: 0.3, // Adjust the opacity as needed
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
      <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
        <Typography variant="h4" sx={{ flex: 1 }}>
          Dissanayaka Mudiyanselage Shiranga Malru Dissanayaka - M24W0225
        </Typography>
        <Typography variant="h4" sx={{ marginLeft: "auto" }}>
          {time.toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
