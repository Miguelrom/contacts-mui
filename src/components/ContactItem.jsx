import { useState } from "react";
import { useNavigate, useSubmit } from "react-router-dom";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import {
  Paper,
  Stack,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function ContactItem({ contact }) {

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const submit = useSubmit();

  const navigate = useNavigate();

  const handleDelete = () => {
    // This triggers the action registered for this route
    submit(null, { method: 'DELETE'});
  }

  const handleDialogclose = () => {
    setDeleteDialogOpen(false);
  }

  return (
    <>
      <Paper elevation={5} sx={{ maxWidth: 600, margin: "0 auto", padding: 5 }}>
        <Stack spacing={2} sx={{ marginBottom: 2 }}>
          <Box>
            <Typography variant="h6">Name</Typography>
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
            startIcon={<EditIcon />}
            size="large"
            onClick={() => navigate("edit")}
          >
            Edit
          </Button>
          <Button
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
            size="large"
            onClick={() => setDeleteDialogOpen(true)}
          >
            Delete
          </Button>
        </Box>
      </Paper>
      <Dialog open={isDeleteDialogOpen} onClose={handleDialogclose}>
        <DialogTitle>Delete contact</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete contact {contact.name}?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setDeleteDialogOpen(false)} >Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}