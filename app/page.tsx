'use client'

import Image from 'next/image'
import * as React from 'react';
// import * as Papa from 'papaparse';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
// import { parse } from 'papaparse';
// import {readFileSync, writeFileSync} from 'fs';
// import InputText from './inputtext' 


const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'black',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [csvContents, setCsvContents] = React.useState('');

  const config = {
    delimiter: "",  // auto-detect <--------- We don't want this!
    newline: "",    // auto-detect
    quoteChar: '"',
    header: false,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined
  }

  type UserData = {
    nameString: string;
    phoneNumberString: string;
    emailString: string;
  }

  // Store phone number from input textbox.
  const handleSubmit = async () => {

    if (name != '' && phoneNumber != '' && email != '') {
      console.log("name from input box: " + name);
      console.log("phone number from input box: " + phoneNumber);
      console.log("email from input box: " + email);

      const userInput: UserData = { nameString: name, phoneNumberString: phoneNumber, emailString: email };
      console.log("new name: " + userInput["nameString"]);
      console.log("new number: " + userInput["phoneNumberString"]);
      console.log("new email: " + userInput["emailString"]);

      await postData("api/csvwrite", userInput)

    }
    // TODO: error handling for invalid phone numbers

    // fetching csvwrite api endpoint to send the phone number to the server side
    async function postData(url: string, userInput: UserData) {
      // Formulate API request.
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(userInput)
      };
      // Make call to API endpoint.
      const response = await fetch(url, request);
      console.log("response status: " + response.status);
      return response.json(); // parses JSON response into native JavaScript objects
    }

  }


  return (
    <div>
      <Button onClick={handleOpen}>click for box!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            temporary title!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            explain why we need their information
          </Typography>
          <Box>
            {/* Textbox for phone number */}
            <TextField id="name" label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="phone_number" label="Phone Number" variant="standard" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <TextField id="email" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={handleSubmit}>submit</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>"test"</h2>
        {/* User information input box */}
        <BasicModal />
      </div>
    </main>
  )
}


