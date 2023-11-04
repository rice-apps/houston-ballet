'use client'

import Image from 'next/image'
import * as React from 'react';
import * as Papa from 'papaparse';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import {parse} from 'papaparse';
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

  // Store phone number from input textbox.
  const handleSubmit = () => {
    
    if (phoneNumber != '') {
      console.log("here");
      console.log(phoneNumber)

      const newNumber = [[phoneNumber]];

      
      // Open csv file and write to csvContents.
      // const phoneNumberFile = fs.readFileSync(filePath, 'utf8');
      // var allNumbers = Papa.parse<string>(phoneNumberFile).data;
      
      // // Modify allNumbers.
      // allNumbers.push(newNumber)

      // Save allNumbers to csv file.
      setCsvContents(Papa.unparse(newNumber, config));
      postData("api/csvwrite", { message: newNumber }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
       
    }
    // TODO: error handling for invalid phone numbers

  // fetching csvwrite api endpoint to send the phone number to the server side
  // and not the client side so that it cannot be access by the client
    // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: "follow", // manual, *follow, error
      //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
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
            <TextField id="phone_number" label="Phone Number" variant="standard" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
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

