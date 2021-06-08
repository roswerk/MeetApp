import React, {Component} from "react";

class CitySearch extends Component{

  state = {
    query : "",
    suggestions: [],
    showSuggestions: undefined
    }

handleInputChanged = (event) => {
  const value = event.target.value;
  const suggestions = this.props.locations.filter((location) => {
    return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
  });
  this.setState({query: value,
  suggestions,
});
if (value === '') {
  this.setState({
    suggestions: [],
    query: '',
    showSuggestions: false,
  });
};
if (suggestions.length === 0) {
  this.setState({
    query: value,
    infoText: 'City not found. Please try another city',
    suggestions: []
  });
} else {  
  return this.setState({
    query: value,
    suggestions,
    infoText:''
  });
}
};

handleItemClicked = (suggestion) => {
  this.setState({
    query: suggestion,
    showSuggestions: false
  });
  this.props.updateEvents(suggestion, 0);
};

  render(){
    return(
      <div className="CitySearch">
        <input 
        type="text" 
        className="city"
        value= {this.state.query}
        onChange= {this.handleInputChanged}
        onFocus={() => { this.setState({ showSuggestions: true }) }}
        placeholder="Search events by city"
         />  

        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}> 
            {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
              ))}
            <li key={"all"} onClick={() => this.handleItemClicked("all")}>
            <b className="seeAllCities">See all cities</b>
            </li>
          </ul>
      </div>
    )
  }
}

export default CitySearch;

