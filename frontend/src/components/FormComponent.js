import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import userApi from "../services/userApi";
import { saveUserData } from "../actions/actions";

const FormComponent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    // Reset error if passwords match
    setError("");
    try {
      // Create the user
      const userData = {
        username: formData.username,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      };
      const newUser = await userApi.createUser(userData);
      if (newUser.token) {
        // Store token in local storage
        localStorage.setItem("userToken", newUser.token);
        console.log("User created:", newUser);
        // Dispatch action to store user data in Redux
        dispatch(saveUserData(userData));
      } else {
        setError("Token not received. Please try again.");
        console.error("Token not received");
      }
    } catch (error) {
      setError("Error creating user. Please try again.");
      console.error("Error creating user:", error);
    }
  };

  return (
    <form
      style={{ margin: "auto", maxWidth: 500, padding: 20 }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="username"
            label="User Name"
            value={formData.username}
            onChange={handleChange}
            variant="outlined"
            inputProps={{ maxLength: 32 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            variant="outlined"
            inputProps={{ maxLength: 10 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            inputProps={{ minLength: 6, maxLength: 12 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;
