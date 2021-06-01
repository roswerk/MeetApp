import React, { Component } from "react";

class Event extends Component{

  state = {
    event: {},
    showHideDetails: false,
  };

  handleShowHideButton = () => {
    if(this.state.showHideDetails === true){
      this.setState({showHidenDetails: false})
    } else{
      this.setState({showHideDetails: true});
    };
  };

  render(){
    const {event} = this.props;
    return (<div>
      <h1 className="summary"></h1>
      <p className="dateTime"></p>
      <p className="location"></p>

      {this.state.showHideDetails && (
        <div className="event-details">
          <h2>About the event:</h2>
          <a href={event.htmlLink}>See Details on Google Calendar</a>
          <p>{event.description}</p>
        </div>
      )}
      <button className="seeMore-btn" onClick={ () => this.handleShowHideButton()}>{!this.state.showHideDetails? "Show details" : "Hide details"}</button>
    </div> )
  }
}

export default Event