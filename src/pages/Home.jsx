import { Typography, Box } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Instructions from "../components/Instructions";

export default function Home() {
  return (
    <>
      <Typography align="center" variant="h3" component="h1" sx={{ marginBottom: 10 }} >
        Welcome to your Contacts!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 500, marginBottom: 10, mx: 'auto'}} >
        <PhoneIcon sx={{ fontSize: 60 }} />
        <ContactMailIcon sx={{ fontSize: 60 }} />
        <AlternateEmailIcon sx={{ fontSize: 60 }} />
      </Box>
      <Instructions />
    </>
  );
}