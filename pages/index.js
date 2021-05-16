import Head from "next/head";
import { Component } from "react";
import QRcode from "qrcode.react";
import axios from "axios";

// import qrPNG from "/test-static.png";
import Image from "next/image";

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
      },
      qrcode: "",
      qrImage: "/test-static.png",
    };
  }

  getQRCode() {
    console.log("getting qr code with", this.state.apiData);
    axios
      .post("/api/qr", this.state.apiData)
      .then((res) => {
        console.log(res);
        this.setState({ qrcode: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getQRCodeString() {
    const str = this.state.apiData;
    return `${str.firstname}${str.lastname}${str.email}${str.phonenumber}${str.dob}`;
  }

  handleInput(evt) {
    const newState = { ...this.state };
    newState.apiData[evt.target.id] = evt.target.value;
    this.setState({ newState });
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
          {/* <link rel="stylesheet" href="assets/css/index.css" /> */}
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
                // required
              />

              <hr />

              <div className="btn-block">
                <p className="disclaimer">
                  By clicking submit, you agree on our &nbsp;
                  <a href="/nwo">Privacy Policy for A United Planet</a>.
                </p>
                <button onClick={() => this.getQRCode()}>Submit</button>
              </div>
            </div>
          </div>

          <p>ref:</p>
          <QRcode value={this.getQRCodeString()}></QRcode>

          <p>server:</p>
          {/* <img src="/test-static.png"></img> */}
          <Image src={this.state.qrImage} width={200} height={200}></Image>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>
      </div>
    );
  }
}
