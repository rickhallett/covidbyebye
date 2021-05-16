import fs from "fs";
import path from "path";
import QRcode, { toDataURL } from "qrcode";

const generateQRToFile = async (data) => {
  const filename = `./public/${data.lastname}-${data.dob}-${data.timestamp}.png`;
  try {
    await QRcode.toFile(filename, JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return { error: true, msg: error };
  }

  return filename;
};

export default async function handler(req, res) {
  console.log("req", req.body);
  const fileCreated = await generateQRToFile(req.body);

  if (fileCreated.error) return res.status(500).json({ msg: fileCreated.msg });

  const filename = fileCreated.substring(9);

  return res.status(200).json({
    msg: `${fileCreated} created!`,
    filename: filename,
  });
}
