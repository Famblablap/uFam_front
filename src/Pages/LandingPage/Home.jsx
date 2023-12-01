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
      heading: <p style={{fontSize: "40px"}}>Protect</p>,
      text: <p style={{fontSize: "15px"}}>"Discover essential strategies to safeguard your family’s personal information on the internet, ensuring privacy and security in the digital realm."</p>,
    },
    {
      id: 2,
      heading: <p style={{fontSize: "40px"}}>Balance</p>,
      text: <p style={{fontSize: "15px"}}>"Explore effective ways to balance screen time with quality family moments, ensuring a healthy digital lifestyle for you and your loved ones."</p>
    },
    {
      id: 3,
      heading: <p style={{fontSize: "40px"}}>Footprint</p>,
      text: <p style={{fontSize: "15px"}}>"An insightful piece on educating children about the concept of digital footprints, emphasizing the long-term impact of their online activities."</p>
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
            minHeight: { xs: "auto", sm: "60vh" },
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
                width: "auto",
                height: "auto",
                objectFit: "contain",
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
              <h1 style={{fontSize: "30px"}}>Welcome to uFam! 🏡✨</h1>
              <p style={{fontSize: "15px"}}>
                Join us in creating treasured moments and <br></br>nurturing
                digital wellness for every family member.
                <br />
                <br></br>With uFam, you can celebrate life's milestones, <br />
                big and small, on a platform that values privacy,
                <br /> togetherness, and positive online experiences.
              </p>
              <IconButton
                component={NavLink}
                to="/login"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 16px",
                  height: "45px",
                  borderRadius: "20px",
                  border: "2px solid",
                  borderColor: "white",
                  backgroundColor: "transparent",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#64c4ec",
                  },
                }}
              >
                <p style={{fontSize: "20px"}}>Log In</p>
              </IconButton>
            </Typography>
          </Box>
        </Box>
        <Box
          id="landing-text"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            minHeight: { xs: "auto", sm: "60vh" },
          }}
        >
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
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              fontWeight={"bold"}
            >
              <h1 style={{fontSize: "30px"}}>This is uFam!</h1>
            </Typography>
            <Typography variant="body1">
            <p style={{fontSize: "15px"}}>
              Empower your little ones with the tools to flourish in the online
              world, embracing technology with wisdom and joy 🌐👨‍👩‍👧‍👦 <br /> <br />
              Start your family's adventure today and craft a legacy of happy
              and healthy digital memories. 💌🚀</p>
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={turtle}
              alt="Family"
              style={{
                maxWidth: "100%",
                height: "50vh",
                borderRadius: "20px",
              }}
            />
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
                    <Button size="small" sx={{ color: "white", fontSize: "15px" }}>
                      Visit article here
                    </Button>
                  </NavLink>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
        <Box id="landing-contact">
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
            <ContactForm />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
