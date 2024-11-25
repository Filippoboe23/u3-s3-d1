import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }} />;
  }
}

export default ImageComponent;
