import fs from "fs";
import path from "path";
import QRcode from "qrcode";

const generateQRToFile = async (qrText) => {
  // const filename = `qr-${Date.now()}.png`;
  const filename = "./public/test-static.png";
  try {
    await QRcode.toFile(filename, qrText);
  } catch (error) {
    return false;
  }

  return filename;
};

export default async function handler(req, res) {
  const qrSuccess = await generateQRToFile(JSON.stringify(req.body));

  if (!qrSuccess)
    return res
      .status(500)
      .json({ error: "Server encountered an error. Please call the police." });

  const filePath = path.resolve(".", `${qrSuccess}`);
  const imageBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "image/png");
  res.send(imageBuffer);
}
