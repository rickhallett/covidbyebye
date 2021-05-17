import Head from "next/head";
import { Component } from "react";
import QRcode from "qrcode.react";
import axios from "axios";

import Footer from "../components/Footer";

const backendURL =
  process.env.NODE_ENV == "production"
    ? "https://evening-bastion-69590.herokuapp.com"
    : "http://localhost:3123";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        dob: "",
        timestamp: null,
      },
    };
  }

  getQRCode() {
    this.state.apiData.timestamp = Date.now().toString();
    axios
      .post(backendURL, this.state.apiData)
      .then((res) => {
        const newState = { ...this.state };
        this.setState({ ...newState });
        this.downloadImage(
          `${backendURL}/${res.data.filepath}`,
          res.data.filepath
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getQRCodeString() {
    return JSON.stringify(this.state.apiData);
  }

  async downloadImage(imageSrc, filepath) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = filepath.split("/")[1];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  handleInput(evt) {
    const newState = { ...this.state };
    newState.apiData[evt.target.id] = evt.target.value;
    this.setState({ ...newState });
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
                id="email"
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
