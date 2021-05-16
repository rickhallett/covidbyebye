import react, { Component } from "react";
import Image from "next/image";

export default class WrappedImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.path,
    };
  }

  render() {
    return (
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
    );
  }
}
