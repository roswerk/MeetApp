import React, { Component } from "react";
import {ErrorAlert} from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: " "
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value < 1) {
      return this.setState({
        errorText: "Please choose a number between 1 and 32",
        numberOfEvents: ""
      });

    } else if (value > 32) {
      return this.setState({
        errorText: "Please choose a number between 1 and 32",
        numberOfEvents: ""
      });

    } else {    
      this.setState({
        numberOfEvents: value,
        errorText:" "
      });
      this.props.updateEvents(" ", value);
    } 
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert className="errorAlert"text={this.state.errorText} />
        <label htmlFor="numberOfEvent" className="numberOfEventsLabel">N° Events</label>
        <input
          className="event-number-input"
          placeholder="1-32"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }; 
};

export default NumberOfEvents;