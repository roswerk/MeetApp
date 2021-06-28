import React, {Component} from 'react';
import './App.css';
import EventList from "./EventList";
import CitySearch from "./CitySearch"; 
import NumberOfEvents from './NumberOfEvents';
import {getEvents, extractLocations, checkToken, getAccessToken} from "./api"
import "./nprogress.css";
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
// import { toThrowErrorMatchingInlineSnapshot } from 'jest-snapshot';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import EventGenre from "./EventGenre"
import Navbar from "./Navbar";


class App extends Component{
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32, 
    offlineText: "",
    showWelcomeScreen: undefined
  }

  // updateEvents = (location) => {
  //   getEvents().then((events) => {
  //     const locationEvents = (location === 'all') ?
  //       events :
  //       events.filter((event) => event.location === location);
  //     this.setState({
  //       events: locationEvents
  //     });
  //   });
  // }

  async componentDidMount() {
    this.mounted = true;

    if(!navigator.onLine){
      this.setState({
        offlineText: "You're currently offline. You might see outdated data. Please connect to the internet in order to have the best experience.",
      })
    }

    getEvents().then((events) => {

      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });


    const access_token = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(access_token)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    
    // if ((code || isTokenValid) && this.mounted) {
      
          // if(!navigator.onLine){
          //   this.setState({
          //     offlineText: "You're currently offline. You might see outdated data. Please connect to the internet in order to have the best experience."
          //   })
          // }
          // else{
          //   this.setState({
          //     offlineText: ""
          //   });
          // }
 
      // };
    
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {

        const number = events.filter((event) => event.location === location).length
        const city = location.split(", ").shift();
        // console.log(location);
        console.log(city)
        console.log(number)
        return {city, number}
    })
    return data
  }
  


  render(){

    return (
      <div className="App">
      <div>
      <Navbar/>
      <OfflineAlert text={this.state.offlineText} />
      </div>  

      <div className="wrapper">
      <div className="data-vis-wrapper">
    
      <EventGenre events={this.state.events} height={300}/>

      <ResponsiveContainer height={300} id="recharts-responsive-container">
        
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="city" type="category" name="City"/>
      <YAxis dataKey="number" type="number" name="Number of events" allowDecimals={false}/>
      
      <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
      <Legend />
      <Scatter data={this.getData()} fill="#8884d8" />
      </ScatterChart>
      </ResponsiveContainer>
      </div>

      <div className="eventList">
      <div className="eventCommands">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
      </div>
      <EventList events={this.state.events} />
      </div>

      </div>
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      <footer>MeetApp 2021</footer>
      </div>
    );
  }
}

export default App;

