import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      weather: []
    }
  }

 componentDidMount() {
    const api_key = '08ee8b6498e76e3286bdc1a2ca71768b';
    const api_end = `http://api.openweathermap.org/data/2.5/weather?zip=10014,us&APPID=${api_key}`;
    const self = this;

    axios.get(api_end)
    .then(function (response) {
      //console.log(response.data);
      let weatherData = response.data;
      self.setState({
        weather: weatherData
       });
    })
    .catch(function (error) {
      console.log(error);
    });
}

  render(){

    const { weather } = this.state;
    const { name, base, cod, main } = weather;
    //const { temp } = main.dataValues;

    console.log(main);
    //const weatherInfo = weather.weather;
    //const windInfo = weather.wind;
    //console.log(windInfo);

    //const mainArr = main.map((m,i) => {
      //return (
        //<div key={i}>
        //<h3>{w.dataValues.speed}</h3>
        //<h3>{w.dataValues.deg}</h3>
        //<h3>{w.dataValues.gust}</h3>
        //<br/>
        //<br/>
        //</div>
      //)
    //})

    return(
      <div className="Weather">
        <h4>{ name }</h4>
        <h4>{ base }</h4>
        <h4>{ cod }</h4>
      </div>
    )
  }
}

export default Weather;
