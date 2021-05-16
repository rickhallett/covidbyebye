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
      <div>
        <Image src={this.state.path} width={200} height={200}></Image>
      </div>
    );
  }
}
