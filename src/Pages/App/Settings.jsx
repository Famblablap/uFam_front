import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
// import React from "react";

function Settings() {
  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5vh",
        backgroundColor: "rgba(114, 9, 183, 0.2 )",
        width: "100%",
        height: "95vh",
        borderRadius: "21px 21px 0px 0px",
      }}
    >
      <Box sx={{ textAlign: "start", width: "100%" }}>
        <Typography sx={{ marginLeft: "5%" }} fontWeight="bold">
          EDIT PROFILE:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          height: "15%",
          border: "1px solid black",
          borderRadius: "21px",
          backgroundColor: "rgba(114, 9, 183, 0.35)",
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold" margin={"3%"}>
          Choose your profile photo:
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Avatar style={{ width: 50, height: 50, marginRight: 20 }} />
          <Avatar style={{ width: 50, height: 50, marginRight: 20 }} />
          <Avatar style={{ width: 50, height: 50, marginRight: 20 }} />
          <Avatar style={{ width: 50, height: 50, marginRight: 20 }} />
          <Avatar style={{ width: 50, height: 50, marginRight: 20 }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          label="Name"
          required
          id="name"
          name="name"
          sx={{ marginTop: "2%", width: "80%" }}
        />
        <TextField
          label="Surname"
          required
          id="surname"
          name="surname"
          sx={{ marginTop: "2%", width: "80%" }}
        />
        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <TextField
          label="Birthdate"
          required
          name="birthdate"
          type="birthdate"
          id="birthdate"
          sx={{marginTop: "2%", width: "80%"}}
        />
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateField"]}>
            <DateField label="Basic date field" />
          </DemoContainer>
        </LocalizationProvider> */}
        <TextField
          label="Password"
          required
          name="password"
          type="password"
          id="password"
          sx={{ marginTop: "2%", width: "80%" }}
        />
        <Button sx={{ mt: 3, mb: 2 }}>Sign In</Button>
      </Box>
    </Box>
  );
}

export default Settings;
