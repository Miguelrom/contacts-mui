import { Box, Typography } from "@mui/material";

export default function Instructions() {
  return (
    <Box>
      <Typography variant="h4" component="h2">
        Instructions
      </Typography>
      <Box component="ul" sx={{ fontSize: 20, lineHeight: 2}} >
        <li>
          To browse all available contacts go to the Contacts menu option and
          use the table pagination controls.
        </li>
        <li>
          To to see the full information about a given contact click on its
          corresponding row in the table.
        </li>
        <li>
          To edit or delete a contact click on its corresponding row and click
          on the EDIT or DELETE button.
        </li>
        <li>
          To create a new contact go to the Contacts menu option and click on
          the NEW button.
        </li>
      </Box>
    </Box>
  );
}