import QRcode from "qrcode";

// const generateQR = async text => {
//   const timestamp = Date.now();
//   try {
//     await QRcode.toFile(`qr-${timestamp}`, text);
//   } catch (error) {
//     return false;
//   }

//   return timestamp;
// }

export default function handler(req, res) {
  // return res.status(200).json({ text: "QR Code" });
  // use res.body to grab form data
  // const user = {
  //   firstname: 'Boris',r
  //   lastname: 'Johnson',
  //   dob: '01/08/1923',
  //   email: 'imafuckingtwat@gov.uk'
  // };
  // const successTime = generateQR(JSON.stringify(user));
  // if (successTime) {
  //   return res.status(200).json({ filename: `qr-${successTime}`});
  // } else {
  //   return res.status(500).json({ error: 'Server encountered an error. Please call the police.'});
  // }
}
