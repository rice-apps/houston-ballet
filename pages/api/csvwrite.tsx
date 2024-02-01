import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import {google} from "googleapis";

const fs = require('fs');
const temp = require('os').tmpdir();

type ResponseData = {
  message: string
}

type SheetForm = {
  emailString: string,
  phoneNumberString: string
}
 
export const config = {
  api: {
    externalResolver: true,
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // receive a POST request

  console.log("in handler")
  // if (req.method != 'POST') {
  //   return res.status(405).send({ message: 'Only POST requests allowed' })
  // }
  const body = req.body as SheetForm

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    });
    const sheets = google.sheets({
      version: 'v4',
      auth
    });
    // const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() });


    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      // range: 'A1:B1',
      range: 'Sheet1!A1:B2',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
          values: [
              [body.emailString, body.phoneNumberString]
          ]
      }
    });
    console.log("response")
    console.log("response: ", response)

    return res.status(201).json({
      data: response.data
    })
  } catch(error: any) {
    console.error('Error appending data to Google Sheet:', error);
    return res.status(500).send({messasge: error.message})
    // return res.status(e.code).send({message: e.message})
  }
}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // res.status(200).json(("hello"))
//   console.log(req.body);
//   const message = "\n" + req.body["emailString"] + "," + req.body["phoneNumberString"];

//   res.status(200).json({ text: message });
  
//   console.log("message: " + message);
//   const filePath = '/phonenumbers.csv';

//   // Ensure the file exists. If not, create it with headers.
//   if (!fs.existsSync(filePath)) {
//     fs.writeFileSync(filePath, 'Email,PhoneNumber\n', { encoding: 'utf8' });
//   }

//   fs.appendFileSync(filePath, message);
//   console.log("wrote to file");
// }

