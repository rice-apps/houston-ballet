import type { NextApiRequest, NextApiResponse } from 'next'
const fs = require('fs');

type ResponseData = {
  message: string
}
 
export default function writeNumber(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' + "request body: " + req.body })
  console.log(req.body);
  const filePath = 'phonenumbers.csv';
//   fs.writeFileSync(filePath, csvContents, 'utf8')
}

