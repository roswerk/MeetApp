import { getWhitelistUrls } from "atatus-spa";
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
      backgroundColor: "gainsboro",
      borderRadius: this.borderRadius,
      fontSize: "10px"
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
    this.color = "blue";
    this.borderRadius = "40px 5px";
  }
};

class ErrorAlert extends Alert{
  constructor(props){
    super(props);
    this.color = "orangered";
    this.borderRadius = "5px 40px";
  }
};


export {InfoAlert, ErrorAlert};