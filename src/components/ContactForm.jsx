import { useState, useRef } from "react";
import { Form } from "react-router-dom";
import validator from "validator";
import { TextField, Stack, Box, Paper, Button, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

// This regex checks the validity of the phoneNumber field. 
// It tests true for empty or 10-digit strings.
export const validPhoneNumberRegex = /^$|^\d{10}$/;

export default function ContactForm( { title = 'New contact',  method = 'POST', contact =  {
  name: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  company: '',
} }) {

  method = method.toUpperCase();

  const [isNameValid, setIsNameValid] = useState(!validator.isEmpty(contact.name));
  const [isLastNameValid, setIsLastNameValid] = useState(!validator.isEmpty(contact.lastName));
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const nameRef = useRef({ value: contact.name });
  const lastNameRef = useRef({ value: contact.lastName });

  const handleNameChange = (event) => {

    if (validator.isEmpty(event.target.value)) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }

  }

  const handleLastNameChange = (event) => {

    if (validator.isEmpty(event.target.value)) {
      setIsLastNameValid(false);
    } else {
      setIsLastNameValid(true);
    }
  }

  const handleEmailChange = (event) => {

    const value = event.target.value;

    if (value === '' || validator.isEmail(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

  }

  const handlePhoneNumberChange = (event) => {

    if (validPhoneNumberRegex.test(event.target.value)) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  }

  const isFormValid = () => {
    
    if (nameRef.current.value === "" || lastNameRef.current.value === "") {
      return false;
    }

    return isNameValid && isLastNameValid && isEmailValid && isPhoneNumberValid;

  };

  return (
    <Paper elevation={5} sx={{ maxWidth: 600, margin: "0 auto", padding: 5 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
      </Box>
      <Form method={method}>
        <Stack spacing={2} sx={{ marginBottom: 2 }}>
          <TextField
            inputRef={nameRef}
            name="name"
            label="Name"
            required
            error={!isNameValid}
            helperText={!isNameValid && "Required field"}
            defaultValue={contact.name}
            onChange={handleNameChange}
          />
          <TextField
            inputRef={lastNameRef}
            name="lastName"
            label="Last name"
            required
            error={!isLastNameValid}
            helperText={!isLastNameValid && "Required field"}
            onChange={handleLastNameChange}
            defaultValue={contact.lastName}
          />
          <TextField
            name="email"
            label="E-mail"
            type="email"
            error={!isEmailValid}
            helperText={!isEmailValid && "Invalid email address"}
            onChange={handleEmailChange}
            defaultValue={contact.email}
          />
          <TextField
            name="phoneNumber"
            label="Phone number"
            error={!isPhoneNumberValid}
            helperText={
              !isPhoneNumberValid && "Phone number must be 10 digits"
            }
            onChange={handlePhoneNumberChange}
            defaultValue={contact.phoneNumber}
          />
          <TextField
            name="company"
            label="Company"
            defaultValue={contact.company}
          />
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
