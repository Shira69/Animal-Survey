import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  Box,
  Typography,
} from "@mui/material";
import FormContext from "../context/FormContext";

const FormComponent = () => {
  const { handleSubmit, control, register, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);

  const handleNext = (data) => {
    setFormData(data);
    navigate("/animal-questions");
  };

  return (
    <form onSubmit={handleSubmit(handleNext)} noValidate>
      <Box mb={2}>
        <TextField
          {...register("name", { required: true })}
          label="Name"
          variant="outlined"
          fullWidth
          error={!!errors.name}
          helperText={errors.name ? "Name is required" : ""}
        />
      </Box>

      <Box mb={2}>
        <TextField
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          label="Email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email ? "Invalid email address" : ""}
        />
      </Box>

      <Box mb={2}>
        <TextField
          {...register("phone", { required: true, pattern: /^\d+$/ })}
          label="Phone"
          variant="outlined"
          fullWidth
          error={!!errors.phone}
          helperText={errors.phone ? "Phone must be numeric" : ""}
        />
      </Box>

      <Box mb={2}>
        <TextField
          {...register("age", { required: true })}
          label="Age"
          variant="outlined"
          fullWidth
          error={!!errors.age}
          helperText={errors.age ? "Age is required" : ""}
        />
      </Box>

      <Box mb={2}>
        <Controller
          name="animalType"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Favorite Animal"
              variant="outlined"
              fullWidth
              error={!!errors.animalType}
            >
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="bird">Bird</MenuItem>
            </TextField>
          )}
        />
        {errors.animalType && (
          <Typography color="error">Animal type is required</Typography>
        )}
      </Box>

      <Box mb={2}>
        <FormControlLabel
          control={<Checkbox {...register("petOwner")} />}
          label="Do you own a pet?"
        />
      </Box>

      <Box mb={2}>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          )}
        />
        {errors.gender && (
          <Typography color="error">Gender is required</Typography>
        )}
      </Box>

      <Box mb={2}>
        <Typography variant="body1">Level of satisfaction</Typography>
        <Controller
          name="satisfaction"
          control={control}
          defaultValue={5}
          render={({ field }) => (
            <Slider
              {...field}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
            />
          )}
        />
      </Box>

      <Box mb={2}>
        <TextField
          {...register("satisfactionValue", { required: true })}
          label="Description"
          variant="outlined"
          fullWidth
          error={!!errors.satisfactionValue}
          helperText={
            errors.satisfactionValue ? "Satisfaction value is required" : ""
          }
        />
      </Box>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Next
      </Button>
    </form>
  );
};

export default FormComponent;
