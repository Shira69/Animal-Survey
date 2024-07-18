/* Dissanayaka Mudiyanselage Shiranga Malru Dissanayaka
M42W0225 */

import React, { useContext, useState } from "react";
import { Box, TextField, Typography, Button, Paper, Divider, MenuItem } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Timer from "../components/Timer";
import FormContext from "../context/FormContext";

const AnimalQuestions = () => {
  const { handleSubmit, register, control, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const { formData, setFormData } = useContext(FormContext);

  const onSubmit = (data) => {
    setSubmittedData(data);
    setFormData({ ...formData, ...data });
  };

  return (
    <>
      <Timer />
      <Box p={3} mx={2} sx={{ '@media (min-width:600px)': { mx: 'auto', maxWidth: 1150 } }}>

        <Typography variant="h4" mb={3}>
          Please Answer The Questions Below
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box mb={2}>
            <Controller
              name="animalRegistration"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Is your pet registered?"
                  variant="outlined"
                  fullWidth
                  error={!!errors.animalRegistration}
                  helperText={errors.animalRegistration ? "This field is required" : ""}
                >
                  <MenuItem value="Registered">Registered</MenuItem>
                  <MenuItem value="Not registered">Not registered</MenuItem>
                  <MenuItem value="Expecting to register">Expecting to register</MenuItem>
                  <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                </TextField>
              )}
            />
          </Box>

          <Box mb={2}>
            <TextField
              {...register("favoriteAnimal", { required: true })}
              label="What is your favorite pet?"
              variant="outlined"
              fullWidth
              error={!!errors.favoriteAnimal}
              helperText={errors.favoriteAnimal ? "This field is required" : ""}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("reasonForFavorite", { required: true })}
              label="Why do you like this pet?"
              variant="outlined"
              fullWidth
              error={!!errors.reasonForFavorite}
              helperText={errors.reasonForFavorite ? "This field is required" : ""}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("ownPets", { required: true })}
              label="Do you like to own multiple pets?"
              variant="outlined"
              fullWidth
              error={!!errors.ownPets}
              helperText={errors.ownPets ? "This field is required" : ""}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("desiredPet", { required: true })}
              label="If you could own any pet, what would it be?"
              variant="outlined"
              fullWidth
              error={!!errors.desiredPet}
              helperText={errors.desiredPet ? "This field is required" : ""}
            />
          </Box>
          <Box mb={2}>
            <TextField
              {...register("fearedAnimal", { required: true })}
              label="What pet do you fear the most?"
              variant="outlined"
              fullWidth
              error={!!errors.fearedAnimal}
              helperText={errors.fearedAnimal ? "This field is required" : ""}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: '200px',
              height: '60px',
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto',
              marginTop: '50px'
            }}
          >
            Submit
          </Button>
        </form>

        {submittedData && (
          <Box mt={4} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Thank you for your submission!
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Submitted Answers
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              {Object.entries({ ...formData, ...submittedData }).map(([key, value]) => (
                <Box key={key} sx={{ marginBottom: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </Typography>
                  <Typography variant="body2">
                    {value}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AnimalQuestions;
