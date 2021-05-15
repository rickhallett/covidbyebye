import Head from "next/head";
import { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      dob: "",
    };
  }

  getQRCode() {
    console.log("getting qr code with", this.state);
  }

  render() {
    console.log(this.state);
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
          {/* <link rel="stylesheet" href="../assets/css/index.css" /> */}
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
                onChange={(value) => {
                  this.setState({
                    firstname: value.target.value,
                  });
                }}
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
                onChange={(value) => {
                  this.setState({
                    lastname: value.target.value,
                  });
                }}
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
                onChange={(value) => {
                  this.setState({
                    email: value.target.value,
                  });
                }}
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
                onChange={(value) => {
                  this.setState({
                    phonenumber: value.target.value,
                  });
                }}
                // required
              />

              <label id="icon">
                <i className="fas fa-user"></i>
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                onChange={(value) => {
                  this.setState({
                    dob: value.target.value,
                  });
                }}
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
