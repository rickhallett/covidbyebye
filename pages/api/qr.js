import QRcode from "qrcode";
import fs from "fs";
import { s3 } from "../../aws.config";

const uploadToAWS = async (fileName) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;

    const params = {
      Bucket: "testingforall",
      Key: fileName,
      Body: data,
      ACL: "public-read",
      ContentType: "image/png",
      ContentDisposition: `attachment; filename=${fileName}`,
    };

    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err;
      console.log(`File uploaded successfully at ${data.Location}`);
    });
  });
};

const generateQRFile = async (data) => {
  const filepath =
    process.env.NODE_ENV == "production"
      ? `${data.lastname}-${data.dob}-${data.timestamp}.png`
      : `public/${data.lastname}-${data.dob}-${data.timestamp}.png`;

  try {
    await QRcode.toFile(filepath, JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return { error: true, msg: error };
  }

  return filepath;
};

export default async function handler(req, res) {
  const fileCreated = await generateQRFile(req.body);
  if (fileCreated.error) return res.status(500).json({ msg: fileCreated.msg });

  await uploadToAWS(fileCreated);

  return res.status(200).json({
    msg: `${fileCreated} created!`,
    filepath: fileCreated.substring(7),
  });
}
