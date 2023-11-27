import { Avatar, Box, Typography } from "@mui/material"
import "./RightSide.css"
import { useEffect, useState } from "react";
import { getAllFamProfiles } from "../../Services/familyService";

function RigthSide() {
    const [family, setFamily] = useState([]);
  
    useEffect(() => {
      showFamily();
    }, []);
  
    async function showFamily() {
      const {data} = await getAllFamProfiles();
      setFamily(data);
    }
  return (
    <div id="rightside">
      <Box className="familyGroup">
        <Typography>FamilyName</Typography>
        <Avatar sx={{width: 80, height: 80, marginBottom: 1}} className="familyIcon"/>
      </Box>
      {family.map((familiar) => 
      <Box key= {familiar.id}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 0.5,
            width: "200px",
            "&:hover": {
              cursor: "pointer",
            }
          }}
        >
          <Avatar
            sx={{ width: 40, height: 40, marginRight: 2 }}
            alt="User Avatar"
            src={familiar.profile_picture}
          />
          <Typography variant="subtitle1" fontWeight="bold">
            {familiar.name}
          </Typography>
        </Box>)}
    </div>
  )
}

export default RigthSide