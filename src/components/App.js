import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" },
    ];
  }
  render() {
    var indianLocations = this.cityList.filter((item, index) => {
      return item.country === "India";
    });
    var otherLocations = this.cityList.filter((item, index) => {
      return item.country !== "India";
    });
    var newList = [...indianLocations, ...otherLocations];
    return (
      <div id="main">
        {/* Do not remove the main div */}
   <ol>
          {indianLocations.map((item, index) => (
            <li key={`location${index + 1}`}>{item.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}


export default App;
