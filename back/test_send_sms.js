// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config();
const accountSid =  process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const csv = require('csv-parser');
const fs = require('fs');

// Store phone numbers
let names = [];
let countryCode = [];
let phoneNumbers = [];

fs.createReadStream('phonenumbers.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Read data from csv file.
    phoneNumbers.push(row['PhoneNumber']);  
    names.push(row['Name']);
    countryCode.push(row['CountryCode']);
    console.log("FILE: ", phoneNumbers)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    // Iterate over phone numbers and send message.
    for (let i = 0; i < phoneNumbers.length; i++) {
      console.log("PHONE NUMBER: " + phoneNumbers[i]);
      client.messages
      .create({
         body: 'hi ' + names[i] + ' yay slay :D wow amazing',
         from: '+18336746338',
         to: countryCode[i] + phoneNumbers[i]
       })
      .then(message => console.log(message.sid));
    }
  });

  
