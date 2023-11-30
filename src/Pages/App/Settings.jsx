import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { updateUser } from "../../Services/user";
import { getProfile } from "..//../Services/user"
import { useEffect } from "react";

// import React from "react";

function Settings() {
  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [profileInfo, setProfileInfo] = useState(false)

  async function getInfoProfile(){
    const {data} = await getProfile()
    setName(data.name)
    setSurname(data.surname)
    setBirthdate(data.birthdate)
    // console.log(name)
    setProfileInfo(true)
  }

  useEffect(() => {getInfoProfile()}, [])

  async function updateProfile(updatedUserData) {
    const { data } = await updateUser(updatedUserData);
    console.log (data)
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const updatedUserData = { name, surname, birthdate, password };
      await updateProfile(updatedUserData);
    } catch (error) {
      console.error("Error submitting user");
    }
  };

  return (
    profileInfo && 
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
        <Typography
          sx={{ marginLeft: "5%", marginBottom: "5%" }}
          fontWeight="bold"
        >
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
        <Typography variant="subtitle2" fontWeight="bold" margin={"2.5%"}>
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
        <Typography sx={{ marginTop: "2%", width: "80%" }}>Name:</Typography>
        <TextField
          required
          id="name"
          name="name"
          sx={{ width: "80%" }}
          onChange={handleNameChange}
          value={name}
        />
        <Typography sx={{ marginTop: "2%", width: "80%" }}>Surname:</Typography>
        <TextField
          required
          id="surname"
          name="surname"
          sx={{ width: "80%"}}
          onChange={handleSurnameChange}
          value={surname}
          />
        <Typography sx={{ marginTop: "2%", width: "80%" }}>
          Birthdate:
        </Typography>
        <TextField
          required
          name="birthdate"
          type="date"
          id="birthdate"
          sx={{ width: "80%" }}
          onChange={handleBirthdateChange}
          value={birthdate}
        />
        <Typography sx={{ marginTop: "2%", width: "80%" }}>
          Password:
        </Typography>
        <TextField
          label="Change your password"
          required
          name="password"
          type="password"
          id="password"
          sx={{ width: "80%"}}
          onChange={handlePasswordChange}
        />
        <Button
          sx={{
            marginTop: "10px",
            width: "120px",
            height: "40px",
            border: "3px solid black",
            borderRadius: "30px",
            color: "black",
            backgroundColor: "rgba(114, 9, 183, 0.35)",
            "&:hover": {
              backgroundColor: "white",
              color: "#7209B7",
              border: "3px solid #7209B7",
            },
          }}
          onClick={handleSubmit}
        >
          <b>Submit</b>
        </Button>


      </Box>
    </Box>
  );
}


export default Settings;
