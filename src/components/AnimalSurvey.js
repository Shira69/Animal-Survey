/* Dissanayaka Mudiyanselage Shiranga Malru Dissanayaka
M42W0225 */

import React, { useState } from "react";
import FormComponent from "./FormComponent";
import Timer from "./Timer";
import { Container, Typography, Box } from "@mui/material";

const AnimalSurvey = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <Timer />
      <Container>
        <Typography variant="h4" textAlign={"center"} padding={4} gutterBottom>
        This survey aims to gather information from pet owners and understand public opinions about pets
        </Typography>
        <FormComponent onSubmit={handleFormSubmit} />
        {submittedData && (
          <Box mt={4}>
            <Typography variant="h6">Submitted Data</Typography>
            <pre>{submittedData}</pre>
          </Box>
        )}
      </Container>
    </>
  );
};

export default AnimalSurvey;
