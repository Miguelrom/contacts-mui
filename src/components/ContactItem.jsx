import { useNavigate } from "react-router-dom";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { Paper, Stack, Typography, Box, Button } from "@mui/material";

export default function ContactItem({ contact }) {

  const navigate = useNavigate();

  return (
    <Paper elevation={5} sx={{ maxWidth: 600, margin: "0 auto", padding: 5 }}>
      <Stack spacing={2} sx={{ marginBottom: 2 }}>
        <Box>
          <Typography variant="h6" >Name</Typography>
          <Typography>{contact.name}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Last name</Typography>
          <Typography>{contact.lastName}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Email</Typography>
          <Typography>{contact.email}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Phone number</Typography>
          <Typography>{contact.phoneNumber}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Company</Typography>
          <Typography>{contact.company}</Typography>
        </Box>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
          <Button
            color="success"
            variant="contained"
            startIcon={ <EditIcon /> }
            size="large"
            onClick={() => navigate('edit')}
          >
            Edit
          </Button>
          <Button
            color="error"
            variant="contained"
            startIcon={ <DeleteIcon /> }
            size="large"
          >
            Delete
          </Button>
        </Box>
    </Paper>
  );
}