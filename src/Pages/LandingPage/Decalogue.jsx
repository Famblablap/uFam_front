import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function Decalogue() {
  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        bgcolor: "rgba(64, 103, 129, 0.40)",
        color: "white",
        borderRadius: 2,
        border: "3px solid white",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Decalogue for Kids
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Navigating Social Media with Care and Respect
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="1. Be Kind Online - Treat others as you would like to be treated. Kindness is key." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Privacy is Precious - Keep your personal information private and safe." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Pause Before You Post - Think about the impact of your words and actions online." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. Respect Boundaries - Ask for permission before sharing others' information or photos." />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. Balance Your Time - Make time for offline activities and enjoy the world outside screens." />
        </ListItem>
        <ListItem>
          <ListItemText primary="6. Speak Up About Bullying - If you witness bullying, tell a trusted adult." />
        </ListItem>
        <ListItem>
          <ListItemText primary="7. Be a Critical Thinker - Don't believe everything you see online; research and question." />
        </ListItem>
        <ListItem>
          <ListItemText primary="8. Positive Vibes Only - Use social media to spread positivity and good vibes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="9. Take a Break - If social media feels overwhelming, it's okay to step back." />
        </ListItem>
        <ListItem>
          <ListItemText primary="10. Ask for Help - If something online makes you uncomfortable, talk to an adult." />
        </ListItem>
      </List>
    </Box>
  )
}

export default Decalogue;