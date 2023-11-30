import { Avatar, Box, Typography } from "@mui/material";
import "./RightSide.css";
import { useEffect, useState } from "react";
import { getAllFamProfiles } from "../../Services/familyService";
import { Link } from "react-router-dom";
import addFam from "../../assets/img/add_fam.png";

function RigthSide() {
  const [family, setFamily] = useState([]);
  useEffect(() => {
    showFamily();
  }, []);

  async function showFamily() {
    const { data } = await getAllFamProfiles();
    setFamily(data);
  }
  const familyName = Array.from(
    new Set(
      family
        .filter((user) => user.family)
        .map((user) => user.family.family_name)
    )
  );
  return (
    <div id="rightside">
      <Box className="familyGroup">
        <Typography variant="h5">{familyName}</Typography>
        <Avatar
          sx={{ width: 80, height: 80, marginBottom: 1 }}
          className="familyIcon"
        />
      </Box>
      {family.map((familiar) => (
        <Link to={`/app/profile/${familiar.id}`} key={familiar.id}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 0.5,
              width: "250px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Avatar
              sx={{ width: 40, height: 40, marginRight: 2 }}
              alt="User Avatar"
              src={familiar.profile_picture}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              {familiar.name} {familiar.surname}
            </Typography>
          </Box>
        </Link>
      ))}
      <Link to="/app/invitation">
      <Box 
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 0.5,
            width: "250px",
            "&:hover": {
              cursor: "pointer",
            }
          }}
        >
          <Avatar src= {addFam}
            style={{ width: 40, height: 40, marginRight: 15 }}
          />
          <Typography variant="subtitle1" fontWeight="bold" sx={{color: "#7209B7"}}>
            Add familiar
          </Typography>
        </Box></Link> 
    </div>
  );
}

export default RigthSide;
