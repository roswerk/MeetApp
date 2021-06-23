// import { SummaryReporter } from "@jest/reporters";
// import { getWhitelistUrls } from "atatus-spa";
import React, { Component } from "react";

class Alert extends Component {
  constructor(props){
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: "bold",
      fontStyle: "italic",
      backgroundColor: this.backgroundColor,
      borderRadius: this.borderRadius,
      fontSize: this.fontSize
    };
  };

  render(){
    return (
      <div className="Alert">
        <p style={this.getStyle()} className="Alert-text">{this.props.text}</p>
      </div>
    );
  }
};

class InfoAlert extends Alert{
  constructor(props){
    super(props);
    this.color = "white";
    this.fontWeight = "bold";
    this.fontSize = "10px";
    this.backgroundColor = "red";
  }
};

class ErrorAlert extends Alert{
  constructor(props){
    super(props);
    this.color = "white";
    this.fontSize = "10px";
    this.fontWeight = "bold";
    this.backgroundColor = "red";
  }
};

class OfflineAlert extends Alert{
  constructor(props){
    super(props);
    this.color = "yellow";
    this.backgroundColor = "grey";
    this.fontSize = "20px";
  }
}


export {InfoAlert, ErrorAlert ,OfflineAlert};