import { Avatar, Box, Typography } from "@mui/material"
import userAvatar from "../../assets/img/user.png";

function Messages() {
  return (
    <>
    <Typography variant="h4" fontWeight="bold" sx={{ padding: 2 }}>Messages</Typography>
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(114, 9, 183, 0.2 )",
          borderRadius: "21px",
          border: "1px solid rgba(114, 9, 183)"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", padding: "17px"}}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            alt="User Avatar"
            src={userAvatar}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">Nombre de Usuario</Typography>
            <Typography variant="subtitle1">Nombre de Usuario</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    
    </>
  )
}

export default Messages