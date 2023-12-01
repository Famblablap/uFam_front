import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function DecalogueApp() {

  return (
    <Box
      sx={{
        boxShadow: "10px 10px 28px -7px rgba(114, 9, 183, 1)",
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        bgcolor: "white",
        color: "white",
        borderRadius: 2,
        border: "3px solid white",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom
      sx={{
        marginTop: "25px"
      }}>
        <b style={{ fontSize: "50px", color: "#d6bbe9"}}>Decalogue for Kids</b>
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
        <b style={{fontSize: "35px", color: "#d6bbe9"}}>Navigating Social Media with Care and Respect</b>
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>1. Be Kind Online</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}>Treat others as you would like to be treated. Kindness is
                key.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>2. Privacy is Precious</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}>Keep your personal information private and safe.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>3. Pause Before You Post</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}>Think about the impact of your words and actions online.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>4. Respect Boundaries</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}>Ask for permission before sharing others' information or photos.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>5. Balance Your Time</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}>Make time for offline activities and enjoy the world outside screens.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>6. Speak Up About Bullying</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}>If you witness bullying, tell a trusted adult.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>7. Be a Critical Thinker</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}>Don't believe everything you see online; research and question.</b> 
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>8. Positive Vibes Only</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}> Use social media to spread positivity and good vibes.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>9. Take a Break</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}> If social media feels overwhelming, it's okay to step back.</b>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <b style={{fontSize: "20px", color: "black"}}>10. Ask for Help</b>
                <br></br>
                <b style={{fontSize: "15px", color: "#d6bbe9"}}> If something online makes you uncomfortable, talk to an adult.</b>
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default DecalogueApp