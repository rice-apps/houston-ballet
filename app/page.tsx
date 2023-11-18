'use client'

import Image from 'next/image'
import * as React from 'react';
// import * as Papa from 'papaparse';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

export function InfoForm() {
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  // const [name, setName] = React.useState('');

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
    emailString: string;
    phoneNumberString: string;
  }

  // Store phone number from input textbox.
  const handleSubmit = async () => {

    if (email != '' && phoneNumber != '') {
      console.log("name from input box: " + name);
      console.log("phone number from input box: " + phoneNumber);
      console.log("email from input box: " + email);

      const userInput: UserData = { emailString: email, phoneNumberString: phoneNumber };
      console.log("new email: " + userInput["emailString"]);
      console.log("new number: " + userInput["phoneNumberString"]);

      await postData("api/csvwrite", userInput)

      // Clear form after submission
      setEmail("");
      setPhoneNumber("");
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
    <div className="bg-nutcrackerBackground bg-cover flex flex-col items-center justify-center min-h-screen min w-screen">
      <h1 className="mb- text-center text-7xl tracking-widest font-extrabold text-white mb-2">
        CONNECT
      </h1>
      <Typography id="subtitle" sx={{ mt: 2, color: 'white', fontWeight: 'bold' }}>
        Never miss a DEAL -- get notified about our raffle, promotions, and special events happening at the market!
      </Typography>
      <form className="bg-white flex flex-col outline-4">
        <span className="flex flex-col px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-100 dark:text-gray-400 dark:border-gray-600">
          Email
          <TextField className="rounded-2xl" id="email" label="Insert email here" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />

          Phone Number
          <TextField id="phone_number" label="Add phone number here" variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </span>
        <Button onClick={handleSubmit} variant="contained" className="dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">submit</Button>
      </form>
  */}
    </div>
  );
}


export default function Home() {
  return (
    <main className=" bg-white flex min-h-screen flex-col justify-between">
      <div>
        <InfoForm />
      </div>
    </main>
  )
}


