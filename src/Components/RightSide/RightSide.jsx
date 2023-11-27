import { Avatar, Box, Typography } from "@mui/material"
import "./RightSide.css"

function RigthSide() {
  return (
    <div id="rightside">
      <Box className="familyGroup">
        <Typography>FamilyName</Typography>
        <Avatar sx={{width: 80, height: 80, marginBottom: 1}} className="familyIcon"/>
      </Box>
      <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 0.5,
          }}
        >
          <Avatar
            sx={{ width: 40, height: 40, marginRight: 2 }}
            alt="User Avatar"
            src="https://placekitten.com/200/200"
          />
          <Typography variant="subtitle1" fontWeight="bold">
            username
          </Typography>
        </Box>
        
    </div>
  )
}

export default RigthSide