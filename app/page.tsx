//
'use client'

import styled from "styled-components";
import Image from 'next/image'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import InputText from 'inputtext' 

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
const inputBox = styled.div`
  min-height: 380px;
  height: 16%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  // const handleSubmit = (e: string) => setPhoneNumber(e);
   // var phoneNumber:string;
  // const handleSubmit = (e) => 

  
  
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
            {/* <TextField id="standard-basic" label="Name" variant="standard" /> */}
            <TextField id="standard-basic" label="Phone Number" variant="standard" />
            {/* <label><input type="text" placeholder="Phone Number" required></input></label> */}
            {/* <Button onClick={handleSubmit}>Submit</Button> */}
            <InputText onSave={(text) => setPhoneNumber(text)}></InputText>
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
        <BasicModal />
      </div>
    </main>
  )
}


