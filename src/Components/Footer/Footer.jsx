import "./Footer.css"
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#66c6ec",
        bottom: 0,
        color: "white",
        pt: 2,
        pb: 3,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          noWrap
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "5rem",
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          uFam
        </Typography>
        <Box component="nav" sx={{ my: 2, fontSize: "2.5rem" }}>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 2, fontWeight: "bold" }}
          >
            About
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 2, fontWeight: "bold" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 2, fontWeight: "bold" }}
          >
            Cookies
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 2, fontWeight: "bold" }}
          >
            Legal
          </Link>
        </Box>
        <Box sx={{ my: 2 }}>
          <IconButton aria-label="Facebook" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="X" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="Instagram" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="white" fontSize={ "1.5rem" }>
          © {new Date().getFullYear()} uFam. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
