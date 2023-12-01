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
        <Typography variant="h5" style={{ fontSize: "30px", marginBottom: "15px" }}>{familyName}</Typography>
        <Avatar
          sx={{ width: 80, height: 80, marginBottom: 1 }}
          className="familyIcon"
        />
      </Box>
      <Box className="boxpalasrisas"></Box>
      <Box>
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
                sx={{ width: 45, height: 45, marginRight: 2 }}
                alt="User Avatar"
                src={familiar.profile_picture}
              />
              <Typography variant="subtitle1" fontWeight="bold" style={{ fontSize: "18px" }}>
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
                borderRadius: "50px",
                boxShadow: "10px 10px 28px -7px rgba(114, 9, 183,0.75)",
                // backgroundColor: "#7209B7",
                // border: "1px solid white",
                // borderRadius: "21px"
              },
            }}
          >
            <Avatar
              src={addFam}
              style={{ width: 45, height: 45, marginRight: 15 }}
            />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                fontSize: "15px",
                color: "#7209B7",
                // "&:hover": {
                //   color: "white",
                // },
              }}
            >
              Add relative
            </Typography>
          </Box>
        </Link>
      </Box>
    </div>
  );
}

export default RigthSide;
