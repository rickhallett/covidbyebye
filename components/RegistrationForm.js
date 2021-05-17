import { Component } from "react";
import QRcode from "qrcode.react";
import axios from "axios";

let backendURL =
  process.env.NODE_ENV == "production"
    ? "https://evening-bastion-69590.herokuapp.com"
    : "http://localhost:3123";

// backendURL = "https://evening-bastion-69590.herokuapp.com"; // dev override

export default class RegistrationForm extends Component {
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

  generateQRFile() {
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
      <div className="registration-form">
        <h1>Registration</h1>
        <div className="form">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              onChange={(e) => this.handleInput(e)}
              // required
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              onChange={(e) => this.handleInput(e)}
              // required
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => this.handleInput(e)}
              // required
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="phone"
              id="phone"
              placeholder="Mobile"
              onChange={(e) => this.handleInput(e)}
              // required
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="date"
              name="dob"
              id="dob"
              onChange={(e) => this.handleInput(e)}
              placeholder="dd/mm/yyyy"
              // required
            />
          </div>

          <div className="form-group">
            <div className="btn-block">
              <p className="disclaimer">
                By clicking submit, you agree on our &nbsp;
                <a href="https://www.testingforall.org/terms-of-service/">
                  Terms and Conditions
                </a>
                .
              </p>
              <a
                className="button mt-2 mr-md-4 px-3 text-white"
                onClick={() => this.generateQRFile()}
              >
                Submit
              </a>
            </div>
          </div>

          <div className="form-group">
            <label className="text-muted p-2">QR Code Preview</label>
            <br></br>
            <QRcode
              className="qr-code"
              value={this.getQRCodeString()}
              size={128}
              level={"H"}
            ></QRcode>
          </div>
        </div>
      </div>
    );
  }
}
