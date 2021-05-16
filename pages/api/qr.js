import QRcode from "qrcode";
import fs from "fs";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  // accessKeyId: process.env.AWS_ACCESS_KEY,
  accessKeyId: "AKIARMKNMLCZSE252ZXR",
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  secretAccessKey: "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",
});

const uploadToAWS = (fileName) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    const params = {
      Bucket: "testingforall", // pass your bucket name
      Key: fileName,
      Body: data,
      ACL: "public-read",
      ContentType: "image/png",
    };
    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err;
      console.log(`File uploaded successfully at ${data.Location}`);
    });
  });
};

const generateQRToFile = async (data) => {
  const filename = `public/${data.lastname}-${data.dob}-${data.timestamp}.png`;
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

  const filename = fileCreated.substring(7);

  uploadToAWS(fileCreated);

  return res.status(200).json({
    msg: `${fileCreated} created!`,
    filename: filename,
  });
}
