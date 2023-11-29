import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required.";
    tempErrors.email = formData.email
      ? /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : "Email is not valid."
      : "Email is required.";
    tempErrors.message = formData.message ? "" : "Message is required.";
    setFormErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const endpoint = "http://localhost:5174/api/contact";

      axios
        .post(endpoint, formData)
        .then((response) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setSnackbar({
            open: true,
            message: "Message sent successfully!",
            severity: "success",
          });
        })
        .catch((error) => {
          setSnackbar({
            open: true,
            message: "An error occurred. Please try again later.",
            severity: "error",
          });
        });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        mt: 0,
        mb: 1.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={"bold"}>
        Contact Us
      </Typography>
      <TextField
        required
        error={!!formErrors.name}
        helperText={formErrors.name}
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        required
        error={!!formErrors.email}
        helperText={formErrors.email}
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        required
        error={!!formErrors.message}
        helperText={formErrors.message}
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        sx={{ backgroundColor: "white" }}
      />
      <Button
        component={NavLink}
        to="/contact"
        type="submit"
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#403f65" }}
      >
        SEND MESSAGE
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactForm