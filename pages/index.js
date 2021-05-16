import Head from "next/head";
import { Component } from "react";
import QRcode from "qrcode.react";
import axios from "axios";
import AWS from "aws-sdk";
import Cors from "cors";

import Footer from "../components/Footer";

const s3 = new AWS.S3({
  // accessKeyId: process.env.AWS_ACCESS_KEY,
  accessKeyId: "AKIARMKNMLCZSE252ZXR",
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  secretAccessKey: "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",
});

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: {
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        dob: "",
        timestamp: null,
      },
    };
  }

  getQRCode() {
    const timestamp = Date.now().toString();
    this.state.apiData.timestamp = timestamp;
    axios
      .post("/api/qr", this.state.apiData)
      .then((res) => {
        const newState = { ...this.state };
        this.setState({ ...newState });
        this.downloadLastQR(res.data.filename);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getQRCodeString() {
    return JSON.stringify(this.state.apiData);
  }

  downloadLastQR(filename) {
    console.log("downloading...", filename);
    const downloadLink = document.createElement("a");
    // downloadLink.href = `/${filename}`;

    // call S3 to retrieve CORS configuration for selected bucket
    s3.getBucketCors(
      {
        Bucket: "testingforall",
      },
      function (err, data) {
        if (err) {
          alert(err);
          console.log("Error", err);
        } else if (data) {
          console.log("Success", JSON.stringify(data.CORSRules));
        }
      }
    );

    return;

    s3.listObjects(
      {
        Bucket: "testingforall",
      },
      function (err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
      }
    );

    return;

    s3.getObject(
      {
        Bucket: "testingforall",
        Key: "public/" + filename,
      },
      function (error, data) {
        if (error != null) {
          alert("Failed to retrieve an object: " + error);
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

    // downloadLink.download = filename;
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);
  }

  handleInput(evt) {
    const newState = { ...this.state };
    newState.apiData[evt.target.id] = evt.target.value;
    this.setState({ ...newState });
  }

  printState() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Covid Bye Bye</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          />
          <link rel="stylesheet" href="/css/index.css" />
        </Head>

        <main>
          <div className="registration-form">
            <h1>Registration</h1>
            <div className="form">
              <hr />

              <label id="icon">
                <i className="fas fa-user"></i>
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First name"
                onChange={(e) => this.handleInput(e)}
                // required
              />

              <label id="icon">
                <i className="fas fa-user"></i>
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last name"
                onChange={(e) => this.handleInput(e)}
                // required
              />

              <label id="icon">
                <i className="fas fa-envelope"></i>
              </label>
              <input
                type="text"
                name="email"
                id="name"
                placeholder="Email"
                onChange={(e) => this.handleInput(e)}
                // required
              />

              <label id="icon">
                <i className="fas fa-envelope"></i>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Mobile"
                onChange={(e) => this.handleInput(e)}
                // required
              />

              <label id="icon">
                <i className="fas fa-user"></i>
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                onChange={(e) => this.handleInput(e)}
                placeholder="dd/mm/yyyy"
                // required
              />

              <hr />

              <div className="btn-block">
                <p className="disclaimer">
                  By clicking submit, you agree on our &nbsp;
                  <a href="https://www.testingforall.org/terms-of-service/">
                    Terms and Conditions
                  </a>
                  .
                </p>
                <button onClick={() => this.getQRCode()}>Submit</button>
                {/* <button onClick={() => this.printState()}>State</button> */}
              </div>

              <hr />

              <QRcode
                className="qr-code"
                value={this.getQRCodeString()}
                size={128}
                level={"H"}
              ></QRcode>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
