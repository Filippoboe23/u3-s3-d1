import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, alt } = this.props;
    return <img className="border border-info shadow-lg" src={src} alt={alt} style={{ maxWidth: "90%", height: "auto", borderRadius: "10px" }} />;
  }
}

export default ImageComponent;
