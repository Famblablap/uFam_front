import {
  Box,
  Container,
  IconButton,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import welcomeimage from "../../assets/welcome-image.jpg";
import turtle from "../../assets/text-image.jpg";
import ContactForm from "../../Components/ContactForm/ContactForm";

function Home() {
  const cards = [
    {
      id: 1,
      heading: "Create Family",
      text: "Sign up in our app, choose 'Create Family Account,' invite members, and enjoy a private shared space.",
    },
    {
      id: 2,
      heading: "How to post",
      text: "Tap '+', select 'Upload' and share. It's quick, private, and secure.",
    },
    {
      id: 3,
      heading: "Decalogue",
      text: "Check our 'Decalogue' for family-friendly social media use.",
    },
  ];

  return (
    <>
      <Container sx={{ margin: "0 auto", padding: "1rem" }}>
        <Box
          id="landing-welcome"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            minHeight: { xs: 'auto', sm: '60vh' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={welcomeimage}
              alt="Family"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: "20px",
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                flex: 1,
                bgcolor: "rgba(64, 103, 129, 0.40)",
                borderRadius: 2,
                border: "3px solid",
                borderColor: "white",
                color: "white",
                p: 3,
                m: 2,
                textAlign: "left",
              }}
            >
              <h2>Welcome to uFam!</h2>
              <p>
                Create lovely moments with your family <br></br>and help your
                little ones to properly use social media.
              </p>
              <IconButton
                component={NavLink}
                to="/signup"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 16px",
                  borderRadius: "20px",
                  border: "2px solid",
                  borderColor: "white",
                  backgroundColor: "transparent",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#64c4ec",
                  },
                }}
              >
                Log In
              </IconButton>
            </Typography>
          </Box>
        </Box>
        <Box id="landing-text"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            minHeight: { xs: 'auto', sm: '60vh' },
            mt: { xs: 4, sm: 0 },
          }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              my: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: 2,
              }}
            >
              <img
                src={turtle}
                alt="Family"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: "20px",
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                bgcolor: "rgba(64, 103, 129, 0.40)",
                borderRadius: 2,
                border: "3px solid",
                borderColor: "white",
                color: "white",
                p: 3,
                m: 2,
                textAlign: "left",
              }}
            >
              <h2>This is uFam!</h2>
              <p>
                Create lovely moments with your family <br></br>and help your
                little ones to properly use social media.
              </p>
            </Box>
          </Box>
        </Box>
        <Box
          id="landing-faq"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {cards.map((card) => (
            <Box
              key={card.id}
              sx={{ width: "100%", maxWidth: 345, m: 2, flexGrow: 1 }}
            >
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexShrink: 0,
                  width: 230,
                  height: 350,
                  bgcolor: "rgba(64, 103, 129, 0.40)",
                  borderRadius: 2,
                  border: "3px solid",
                  borderColor: "white",
                  color: "white",
                  p: 3,
                  m: 2,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h4>{card.heading}</h4>
                  </Typography>
                  <Typography variant="body2" color="white" fontSize={"1rem"}>
                    {card.text}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "center", paddingBottom: 2 }}
                >
                  <NavLink to="/support" style={{ textDecoration: "none" }}>
                    <Button size="small" sx={{ color: "white" }}>
                      Visit article here
                    </Button>
                  </NavLink>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
        <Box id="landing-contact"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          minHeight: { xs: 'auto', sm: '20vh' },
        }}>
          <ContactForm/>
        </Box>
      </Container>
    </>
  );
}

export default Home;