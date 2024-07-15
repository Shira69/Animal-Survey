import React, { useContext, useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Timer from "../components/Timer";
import FormContext from "../context/FormContext";

const AnimalQuestions = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const { formData, setFormData } = useContext(FormContext);

  const onSubmit = (data) => {
    setSubmittedData(data);
    setFormData({ ...formData, ...data });
  };

  return (
    <>
      <Timer />
      <Box p={3}>
        <Typography variant="h4" mb={3}>
          Animal Questions
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box mb={2}>
            <TextField
              {...register("favoriteAnimal", { required: true })}
              label="What is your favorite animal?"
              variant="outlined"
              fullWidth
              error={!!errors.favoriteAnimal}
              helperText={errors.favoriteAnimal ? "This field is required" : ""}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("reasonForFavorite", { required: true })}
              label="Why do you like this animal?"
              variant="outlined"
              fullWidth
              error={!!errors.reasonForFavorite}
              helperText={
                errors.reasonForFavorite ? "This field is required" : ""
              }
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("ownPets", { required: true })}
              label="Do you own any pets?"
              variant="outlined"
              fullWidth
              error={!!errors.ownPets}
              helperText={errors.ownPets ? "This field is required" : ""}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("desiredPet", { required: true })}
              label="If you could own any animal, what would it be?"
              variant="outlined"
              fullWidth
              error={!!errors.desiredPet}
              helperText={errors.desiredPet ? "This field is required" : ""}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("fearedAnimal", { required: true })}
              label="What animal do you fear the most?"
              variant="outlined"
              fullWidth
              error={!!errors.fearedAnimal}
              helperText={errors.fearedAnimal ? "This field is required" : ""}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
        {submittedData && (
          <Box mt={4}>
            <Typography variant="h6">Submitted Answers</Typography>
            <pre>{JSON.stringify({ ...formData, ...submittedData }, null, 2)}</pre>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AnimalQuestions;
