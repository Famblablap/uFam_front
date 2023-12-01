import { Avatar, Box, Typography } from "@mui/material";
// import userAvatar from "../../assets/img/user.png";
import { useEffect, useState } from "react";
import { getAllFamMessages } from "../../Services/messages";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    showMessages();
  }, []);

  async function showMessages() {
    const { data } = await getAllFamMessages();
    setMessages(data);
  }

  return (
    <>
      <Typography variant="h4" fontWeight="bold" sx={{ padding: 2 }}>
        Messages
      </Typography>
      {messages.map((message) => (
        <Box key={message.id}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "rgba(114, 9, 183, 0.2 )",
              borderRadius: "21px",
              border: "1px solid rgba(114, 9, 183)",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", padding: "17px" }}
            >
              <Avatar
                sx={{ width: 50, height: 50, marginRight: 2 }}
                alt="User Avatar"
                src={message.user.profile_picture}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold">{message.user.name}</Typography>
                <Typography variant="subtitle1">{message.message}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default Messages;
