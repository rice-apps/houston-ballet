'use client'

import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import NavBar from '../Components/Navbar';

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

  // fetching csvwrite api endpoint to send the phone number to the server side
  async function postData(url: string, userInput: UserData, type: string) {
    // Formulate API request.
    const request = {
      method: type,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userInput)
    };
    // Make call to API endpoint.
    console.log("url", url)
    const response = await fetch(url, request)
    if(response.ok){
     return response.json(); 
    }
  }


  // Store phone number from input textbox.
  const handleSubmit = async () => {
    // If inputs are non-empty
    if (email != '' && phoneNumber != '') {
      console.log("phone number from input box: " + phoneNumber);
      console.log("email from input box: " + email);

      const userInput: UserData = { emailString: email, phoneNumberString: phoneNumber };
      console.log("new email: " + userInput["emailString"]);
      console.log("new number: " + userInput["phoneNumberString"]);

      await postData("/api/csvwrite", userInput, "PUT").then(() => {
        console.log("logged")
        // Display notification toast
        toast.success("Submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })

      await postData("https://hb-strapi-production.up.railway.app/api/form-process", userInput, "POST").then(() => {
        console.log("pushed to strapi")
      })

      // Clear form after submission
      setEmail("");
      setPhoneNumber("");
    } else {
      // If email or phone number is empty
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
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

        <Typography className="text-center font-sans tracking-widest text-white" id="subtitle" sx={{ mt: 2, color: 'white', fontSize: '24px' }}>
          RAFFLES! PROMOTIONS! SPECIAL EVENTS!
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
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2%' }}><img src="/email.png"></img> Email</div>
            <TextField required InputProps={
              {
                style: {
                  marginBottom: '5%',
                  backgroundColor: '#dddddd',
                  borderRadius: '10px'
                }
              }} id="email" label="Insert email here" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2%' }}><img src="/phone.png"></img> Phone Number</div>
            <TextField required id="phone_number" InputProps={
              {
                style: {
                  marginBottom: '5%',
                  backgroundColor: '#dddddd',
                  borderRadius: '10px'
                }
              }} label="Add phone number here" variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </span>
        </form>
        <Button onClick={handleSubmit} variant="contained" className="dark:hover:bg-gray-800 dark:focus:ring-gray-900" style={
          {
            display: 'flex',
            width: '10%',
            zIndex: 2,
            top: '-20px',
            borderRadius: '10px',
            textTransform: 'none',
            backgroundColor: 'rgb(55,65,81)'
          }}>Get Notified!</Button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      {/* <ToastContainer /> */}
    </div>
  );

}


export default function Home() {
  return (
        <div className=" bg-white flex min-h-screen flex-col justify-between">
          <div className='relative'>
            <InfoForm/>
            <div className='absolute'>
              <NavBar />
            </div>
          </div>
        </div>
  )
}


