'use client'

import Image from 'next/image'
import * as React from 'react';
// import * as Papa from 'papaparse';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import NextImage from 'next/image';

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
    <div style={
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div style={{
        backgroundPosition: 'center top',
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        filter: 'brightness(75%)',
        height: '65vh',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: '0',
      }}></div>
      <div style={
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
          position: 'relative',
          textAlign: 'center',
          marginTop: '10%'
        }}>
        <h1 className="text-center font-sans text-5xl font-bold tracking-widest text-white" style={{ fontSize: '6rem' }}>
          CONNECT
        </h1>

        <Typography className="text-center font-sans tracking-widest text-white" id="subtitle" sx={{ mt: 2, color: 'white', fontSize: '24px'}}>
            GET NOTIFIED ABOUT OUR RAFFLE, PROMOTIONS, AND SPECIAL EVENTS <br /> HAPPENING AT THE MARKET!
        </Typography>
        <form className="bg-white flex flex-col outline-4 bg-gray-200 border rounded-full dark:text-black-400 font-bold tracking-wide dark:border-gray-600" style={
          {
            display: 'flex',
            textAlign: 'left',
            width: '100%',
            maxWidth: '60%',
            marginTop: '10%',
            borderRadius: '20px',
            padding: '5%',
            zIndex: 1
          }}>
          <span style={
            {
              display: 'flex',
              flexDirection: 'column',
            }
          }>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}><img src="/email.png"></img> Email</div>
            <TextField InputProps={
              {
                style: {
                  marginBottom: '5%',
                  backgroundColor: '#dddddd',
                  borderRadius: '10px'
                }
              }} id="email" label="Insert email here" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}><img src="/phone.png"></img> Phone Number</div>
            <TextField id="phone_number" InputProps={
              {
                style: {
                  marginBottom: '5%',
                  backgroundColor: '#dddddd',
                  borderRadius: '10px'
                }
              }} label="Add phone number here" variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </span>
        </form>
        <Button onClick={handleSubmit} variant="contained" className="dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900" style={
          {
            display: 'flex',
            width: '10%',
            zIndex: 2,
            top: '-20px',
            borderRadius: '10px',
            textTransform: 'none',
          }}>Submit</Button>
      </div>
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


