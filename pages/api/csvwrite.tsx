import type { NextApiRequest, NextApiResponse } from 'next'
const fs = require('fs');

type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "" + req.query.message })
  console.log(req.body);
  const filePath = 'phonenumbers.csv';
//   fs.writeFileSync(filePath, csvContents, 'utf8')
}

// function to access phonenumbers.csv and add the phone number from the api request to the csv file