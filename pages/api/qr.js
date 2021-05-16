import QRcode from "qrcode";

const generateQRToFile = async (text) => {
  const timestamp = Date.now();
  try {
    await QRcode.toFile(`qr-${timestamp}.jpg`, text);
  } catch (error) {
    return false;
  }

  return timestamp;
};

export default async function handler(req, res) {
  const qrSuccess = await generateQRToFile(JSON.stringify(req.body));

  if (!qrSuccess)
    return res
      .status(500)
      .json({ error: "Server encountered an error. Please call the police." });

  return res.status(200).json({ filename: `qr-${qrSuccess}` });
}
