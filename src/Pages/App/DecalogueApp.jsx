import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function DecalogueApp() {

  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        bgcolor: "rgba(114, 9, 183, 0.2 )",
        color: "white",
        borderRadius: 2,
        border: "3px solid white",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Decalogue for Kids
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
        Navigating Social Media with Care and Respect
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>1. Be Kind Online</b>
                <br /> Treat others as you would like to be treated. Kindness is
                key.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>2. Privacy is Precious</b>
                <br /> Keep your personal information private and safe.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>3. Pause Before You Post</b>
                <br /> Think about the impact of your words and actions online.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>4. Respect Boundaries</b>
                <br /> Ask for permission before sharing others' information or
                photos.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>5. Balance Your Time</b>
                <br /> Make time for offline activities and enjoy the world
                outside screens.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>6. Speak Up About Bullying</b>
                <br /> If you witness bullying, tell a trusted adult.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>7. Be a Critical Thinker</b>
                <br /> Don't believe everything you see online; research and
                question.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>8. Positive Vibes Only</b>
                <br /> Use social media to spread positivity and good vibes.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>9. Take a Break</b>
                <br /> If social media feels overwhelming, it's okay to step
                back.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px"}}>10. Ask for Help</b>
                <br /> If something online makes you uncomfortable, talk to an
                adult.
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default DecalogueApp