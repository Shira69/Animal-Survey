/* Dissanayaka Mudiyanselage Shiranga Malru Dissanayaka
M42W0225 */

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
          sx={{ height: '65px' }} // Adjust height as needed
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
          sx={{ height: '65px' }} // Adjust height as needed
          error={!!errors.email}
          helperText={errors.email ? "Invalid email address" : ""}
        />
      </Box>

      <Box mb={2}>
        <TextField
          {...register("phone", {
            required: true,
            pattern: /^[\d\s]+$/
          })}
          label="Phone number"
          variant="outlined"
          fullWidth
          sx={{ height: '65px' }} // Adjust height as needed
          error={!!errors.phone}
          helperText={errors.phone ? "Phone number must be numeric and can contain spaces" : ""}
        />
      </Box>

      <Box mb={2}>
        <TextField
          {...register("age", { required: true })}
          label="Age"
          variant="outlined"
          fullWidth
          sx={{ height: '65px' }} // Adjust height as needed
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
              label="Favorite Pet"
              variant="outlined"
              fullWidth
              sx={{ height: '65px' }} // Adjust height as needed
              error={!!errors.animalType}
            >
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="bird">Bird</MenuItem>
              <MenuItem value="fish">Fish</MenuItem>
              <MenuItem value="hamster">Hamster</MenuItem>
              <MenuItem value="rabbit">Rabbit</MenuItem>
              <MenuItem value="turtle">Turtle</MenuItem>
              <MenuItem value="guinea_pig">Guinea Pig</MenuItem>
              <MenuItem value="lizard">Lizard</MenuItem>
              <MenuItem value="snake">Snake</MenuItem>
              <MenuItem value="ferret">Ferret</MenuItem>
              <MenuItem value="parrot">Parrot</MenuItem>
              <MenuItem value="chinchilla">Chinchilla</MenuItem>
              <MenuItem value="hedgehog">Hedgehog</MenuItem>
              <MenuItem value="mouse">Mouse</MenuItem>
              <MenuItem value="rat">Rat</MenuItem>
              <MenuItem value="gerbil">Gerbil</MenuItem>
              <MenuItem value="cockatiel">Cockatiel</MenuItem>
              <MenuItem value="canary">Canary</MenuItem>
              <MenuItem value="finch">Finch</MenuItem>
              <MenuItem value="dove">Dove</MenuItem>
              <MenuItem value="quail">Quail</MenuItem>
              <MenuItem value="bunny">Bunny</MenuItem>
              <MenuItem value="pigeon">Pigeon</MenuItem>
              <MenuItem value="goat">Goat</MenuItem>
              <MenuItem value="sheep">Sheep</MenuItem>
              <MenuItem value="chicken">Chicken</MenuItem>
              <MenuItem value="duck">Duck</MenuItem>
              <MenuItem value="turkey">Turkey</MenuItem>
              <MenuItem value="pig">Pig</MenuItem>
              <MenuItem value="miniature_horse">Miniature Horse</MenuItem>
              <MenuItem value="alpaca">Alpaca</MenuItem>
              <MenuItem value="llama">Llama</MenuItem>
              <MenuItem value="hedgehog">Hedgehog</MenuItem>
              <MenuItem value="praying_mantis">Praying Mantis</MenuItem>
              <MenuItem value="tarantula">Tarantula</MenuItem>
              <MenuItem value="scorpion">Scorpion</MenuItem>
              <MenuItem value="snake">Snake</MenuItem>
              <MenuItem value="gecko">Gecko</MenuItem>
              <MenuItem value="hermit_crab">Hermit Crab</MenuItem>

            </TextField>
          )}
        />
        {errors.animalType && (
          <Typography color="error">Pet type is required</Typography>
        )}
      </Box>

      <Box mb={2}>
        <FormControlLabel
          control={<Checkbox {...register("petOwner")} />}
          label="Please select if you have a pet"
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
        Next
      </Button>
    </form>
  );
};

export default FormComponent;
