import React, {Component} from 'react';
import './App.css';
import EventList from "./EventList";
import CitySearch from "./CitySearch"; 
import NumberOfEvents from './NumberOfEvents';
import {getEvents, extractLocations} from "./api"
import "./nprogress.css";


class App extends Component{
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  };

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents = location === 'all' && eventCount === 0
          ? events
          : location !== 'all' && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  render(){
    return (
      <div className="App">
      <h1 className="welcome-title">Welcome to MeetApp</h1>
      <p>The only place to get the information you need about Events in your city</p>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
      <footer>MeetApp 2021</footer>
      </div>
    );
  }
}

export default App;

