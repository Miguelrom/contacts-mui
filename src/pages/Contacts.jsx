import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ContactsTable from "../components/ContactsTable";
import { Add as AddIcon } from "@mui/icons-material";

export default function Contacts() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('new');
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="end"
        sx={{ width: 940, margin: "0 auto", marginBottom: 1 }}
      >
        <Button variant="contained" size="large" startIcon={<AddIcon />} onClick={handleClick} >
          New
        </Button>
      </Box>
      <ContactsTable />
    </>
  );
}

