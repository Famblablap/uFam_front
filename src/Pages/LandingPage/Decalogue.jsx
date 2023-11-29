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
          <ListItemText
            primary={
              <>
                <b>1. Be Kind Online</b>
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
                <b>2. Privacy is Precious</b>
                <br /> Keep your personal information private and safe.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b>3. Pause Before You Post</b>
                <br /> Think about the impact of your words and actions online.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b>4. Respect Boundaries</b>
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
                <b>5. Balance Your Time</b>
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
                <b>6. Speak Up About Bullying</b>
                <br /> If you witness bullying, tell a trusted adult.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b>7. Be a Critical Thinker</b>
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
                <b>8. Positive Vibes Only</b>
                <br /> Use social media to spread positivity and good vibes.
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b>9. Take a Break</b>
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
                <b>10. Ask for Help</b>
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

export default Decalogue;
