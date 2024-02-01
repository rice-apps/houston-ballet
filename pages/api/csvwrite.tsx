import type { NextApiRequest, NextApiResponse } from 'next'
const fs = require('fs');
const temp = require('os').tmpdir();

type ResponseData = {
  message: string
}
 
export const config = {
  api: {
    externalResolver: true,
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // res.status(200).json(("hello"))
  console.log(req.body);
  const message = "\n" + req.body["emailString"] + "," + req.body["phoneNumberString"];

  res.status(200).json({ text: message });
  
  console.log("message: " + message);
  const filePath = temp + '/phonenumbers.csv';

  // Ensure the file exists. If not, create it with headers.
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'Email,PhoneNumber\n', { encoding: 'utf8' });
  }

  fs.appendFileSync(filePath, message);
  console.log("wrote to file");
}

