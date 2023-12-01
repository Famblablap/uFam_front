import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

function Support() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "60vh",
        bgcolor: "rgba(64, 103, 129, 0.40)",
        borderRadius: 2,
        border: "3px solid",
        borderColor: "white",
        color: "white",
        p: 3,
        m: 2,
        maxWidth: "800px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={"bold"}>
        Support Center
      </Typography>
      <Typography variant="body1" sx={{ mb: "1rem", fontSize: "15px" }}>
        Welcome to the uFam Support Center. Here, you can find articles and
        resources to help you and your family navigate social media safely and
        responsibly.
      </Typography>

      <Typography variant="h5" fontWeight={"bold"} sx={{ mt: "1rem" }}>
        Articles on Internet Safety
      </Typography>
      <List>
        <ListItem>
          <Link href="#privacy" color="inherit">
            <ListItemText primary="Protecting Your Family's Privacy Online" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#security-settings" color="inherit">
            <ListItemText primary="Understanding Social Media Security Settings" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#safe-environment" color="inherit">
            <ListItemText primary="Tips for Creating a Safe Online Environment" />
          </Link>
        </ListItem>
      </List>

      <Typography variant="h5" fontWeight={"bold"} sx={{ mt: "1rem" }}>
        Healthy Tech Habits
      </Typography>
      <List>
        <ListItem>
          <Link href="#screen-time" color="inherit">
            <ListItemText primary="Balancing Screen Time and Family Time" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#positive-interactions" color="inherit">
            <ListItemText primary="Encouraging Positive Online Interactions" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#educational-apps" color="inherit">
            <ListItemText primary="Educational Apps and Games for Children" />
          </Link>
        </ListItem>
      </List>

      <Typography variant="h5" fontWeight={"bold"} sx={{ mt: "1rem" }}>
        Digital Literacy for Families
      </Typography>
      <List>
        <ListItem>
          <Link href="#digital-footprints" color="inherit">
            <ListItemText primary="Teaching Your Kids About Digital Footprints" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#fact-checking" color="inherit">
            <ListItemText primary="The Importance of Fact-Checking Information" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#critical-thinking" color="inherit">
            <ListItemText primary="Building Critical Thinking in the Digital World" />
          </Link>
        </ListItem>
      </List>

      <Typography variant="h5" fontWeight={"bold"} sx={{ mt: "1rem" }}>
        Need More Help?
      </Typography>
      <Typography variant="body1">
        If you have any questions or need assistance, feel free to contact our
        support team.
      </Typography>
      <Box sx={{ mt: "1rem" }}>
        {/* Replace with your actual link to the contact page or support email */}
        <Link href="/contact" variant="body1" fontWeight={"bold"}>
          Contact Support
        </Link>
      </Box>
    </Box>
  );
}

export default Support