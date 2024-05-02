import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import validator from "validator";
import { TextField, Stack, Box, Paper, Button, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

export default function ContactForm() {

  const [isNameInvalid, setIsNameInvalid] = useState(null);
  const [isLastNameInvalid, setIsLastNameInvalid] = useState(null);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false);

  const handleNameChange = (event) => {

    if (validator.isEmpty(event.target.value)) {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }

  }

  const handleLastNameChange = (event) => {

    if (validator.isEmpty(event.target.value)) {
      setIsLastNameInvalid(true);
    } else {
      setIsLastNameInvalid(false);
    }
  }

  const handleEmailChange = (event) => {

    const value = event.target.value;

    if (value === '' || validator.isEmail(value)) {
      setIsEmailInvalid(false);
    } else {
      setIsEmailInvalid(true);
    }

  }

  const handlePhoneNumberChange = (event) => {

    const value = event.target.value

    if (validator.isNumeric(value, { no_symbols: true }) && value.length === 10) {
      setIsPhoneNumberInvalid(false);
    } else {
      setIsPhoneNumberInvalid(true);
    }
  }

  const isFormValid = () => {
    return (
      isNameInvalid === false &&
      isLastNameInvalid === false &&
      isEmailInvalid === false &&
      isPhoneNumberInvalid === false
    );
  }

  return (
    <Paper elevation={5} sx={{ maxWidth: 600, margin: "0 auto", padding: 5 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h4" component="h2">
          New contact
        </Typography>
      </Box>
      <Form method="post">
        <Stack spacing={2} sx={{ marginBottom: 2 }}>
          <TextField
            name="name"
            label="Name"
            required
            error={isNameInvalid}
            helperText={isNameInvalid && "Required field"}
            onChange={handleNameChange}
          />
          <TextField
            name="lastName"
            label="Last name"
            required
            error={isLastNameInvalid}
            helperText={isLastNameInvalid && "Required field"}
            onChange={handleLastNameChange}
          />
          <TextField
            name="email"
            label="E-mail"
            type="email"
            error={isEmailInvalid}
            helperText={isEmailInvalid && "Invalid email address"}
            onChange={handleEmailChange}
          />
          <TextField
            name="phoneNumber"
            label="Phone number"
            error={isPhoneNumberInvalid}
            helperText={isPhoneNumberInvalid && "Phone number must be 10 digits"}
            onChange={handlePhoneNumberChange}
            
          />
          <TextField name="company" label="Company" />
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
            size="large"
            disabled={!isFormValid()}
          >
            Save
          </Button>
        </Box>
      </Form>
    </Paper>
  );
}

ContactForm.action = async ({ request }) => {

  const data = await request.formData();

  const contactData = {
    name: data.get('name'),
    lastName: data.get('lastName'),
    email: data.get('email'),
    phoneNumber: data.get('phoneNumber'),
    company: data.get('company'),
  }

  console.log('contactData', contactData)

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    throw new Error({ message: 'Could not save contact.' }, { status: 500 });
  }

  return redirect('/contacts');

}