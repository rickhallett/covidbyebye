import AWS from "aws-sdk";

var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.credentials = credentials;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_SDK_LOAD_CONFIG: 1,
});

export default async function hander(req, res) {
  s3.getObject(
    {
      Bucket: "testingforall",
      Key: "public/" + req.body.filename,
    },
    function (error, data) {
      if (error != null) {
        console.log("Failed to retrieve an object: " + error);
      } else {
        console.log("Loaded " + data.ContentLength + " bytes");
        // do something with data.Body

        console.log(data);

        // downloadLink.href = `/${filename}`;

        // downloadLink.download = filename;
        // document.body.appendChild(downloadLink);
        // downloadLink.click();
        // document.body.removeChild(downloadLink);
      }
    }
  );
}
