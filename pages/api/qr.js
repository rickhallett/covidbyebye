import fs from "fs";
import path from "path";
import QRcode, { toDataURL } from "qrcode";

const generateQRToFile = async (data) => {
  // const filename = `qr-${Date.now()}.png`;
  console.log("req", data);
  const filename = `./public/${data.timestamp}.png`;
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

  const filePath = path.resolve(".", `${fileCreated}`);
  const imageBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "image/png");
  res.send({
    imageRaw: imageBuffer,
    filePath: fileCreated,
    fileName: fileCreated.split("/")[2],
  });
}
