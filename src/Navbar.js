import React, {Component} from "react";
import "./Navbar.css"

class Navbar extends Component{

  render(){
    return(
<div className="welcomeBanner">
  <h1 className="welcomeTitle">MeetApp</h1>
  <p className="welcomeParag">The only place to get the information you need about Events in your city</p> 
</div>
    )
  }
}
export default Navbar