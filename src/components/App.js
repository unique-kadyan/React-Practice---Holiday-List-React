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
    // let newCityList = [...this.cityList];
    // newCityList = newCityList.filter((cities) => cities.country == "India");
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol>
          {/* {newCityList.map((city, index) => {
            return <li key={`loaction${index + 1}`}>{city.name}</li>;
          })} */}
          {this.cityList
            .filter((cities) => cities.country == "India")
            .map((city, index) => (
              <li key={`location${index + 1}`}>{city.name}</li>
            ))}
        </ol>
      </div>
    );
  }
}
export default App;
