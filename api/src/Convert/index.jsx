import React, { Component } from 'react';
import axios from 'axios';

class Convert extends Component {
  constructor(props){
    super(props);
    this.state = {
      valueEntered: 0,
      rateGBP: 0,
      rateEUR: 0,
      rateCAD: 0,
      rateJPY: 0,
      rateHKD: 0,
      rateAUD: 0,
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.getRates = this.getRates.bind(this);
  }

  handleUserInput(e) {
    this.setState ({
      valueEntered: e.target.value,
    });
  }

  async getRates() {
    const api_end = 'https://api.exchangeratesapi.io/latest?base=USD';
    const response = await axios.get(api_end)
    const rateGBP = response.data.rates.GBP;
    const rateEUR = response.data.rates.EUR;
    const rateCAD = response.data.rates.CAD;
    const rateJPY = response.data.rates.JPY;
    const rateHKD = response.data.rates.HKD;
    const rateAUD = response.data.rates.AUD;
    this.setState({
      rateGBP: rateGBP,
      rateEUR: rateEUR,
      rateCAD: rateCAD,
      rateJPY: rateJPY,
      rateHKD: rateHKD,
      rateAUD: rateAUD,
    });
  }

  componentDidMount() {
    this.getRates();
  }

  render() {
    const { rateGBP, rateEUR, rateCAD, rateJPY, rateHKD, rateAUD, valueEntered } = this.state;
    return(
      <div className="container">
        <h1>CURRENCY <span className="text-white">CONVERTER</span></h1>
        <br/>
        <p>Enter a figure in dollars and see how much you have in other currencies...</p>
        <div>
           &nbsp; &nbsp; <span className="text-white">USD</span> &nbsp;
           <input onChange={ this.handleUserInput } type="text"/> &nbsp; is equal to:
         <br/>
         <br/>
         <div className="row">
           <div className="col-sm-6 col-md-4">
             <p><span className="text-white">GBP</span> &nbsp;
             {(rateGBP * valueEntered).toFixed(2)}&nbsp; &nbsp; &nbsp;</p>
           </div>
           <div className="col-sm-6 col-md-4">
             <p><span className="text-white">EUR</span> &nbsp;
             {(rateEUR * valueEntered).toFixed(2)}&nbsp; &nbsp; &nbsp;</p>
           </div>
           <div className="col-sm-6 col-md-4">
             <p><span className="text-white">CAD</span> &nbsp;
             {(rateCAD * valueEntered).toFixed(2)}&nbsp; &nbsp; &nbsp;</p>
           </div>
           <div className="col-sm-6 col-md-4">
             <p><span className="text-white">JPY</span> &nbsp;
             {(rateJPY * valueEntered).toFixed(2)}&nbsp; &nbsp; &nbsp;</p>
           </div>
           <div className="col-sm-6 col-md-4">
             <p><span className="text-white">HKD</span> &nbsp;
             {(rateHKD * valueEntered).toFixed(2)}&nbsp; &nbsp; &nbsp;</p>
           </div>
          <div className="col-sm-6 col-md-4">
             <p><span className="text-white">AUD</span> &nbsp;
             {(rateAUD * valueEntered).toFixed(2)}&nbsp; &nbsp; &nbsp;</p>
           </div>
         </div>
       </div>
     </div>
      )
  }
}

export default Convert;
