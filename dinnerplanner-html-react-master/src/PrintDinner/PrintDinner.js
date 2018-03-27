import React, { Component } from 'react';
import './PrintDinner.css';
import { Link } from 'react-router-dom';

class PrintDinner extends Component {
  render() {
    return (
      <div className="PrintDinner">
        <h2>This is the Print Dinner screen</h2>
        <Link to="/confirmDinner">
          <button className="btn btn-primary left-block">Back to Confirm Dinner</button>
        </Link>
        <button className="btn btn-primary right-block">Print</button>
      
     
      </div>
    );
  }
}

export default PrintDinner;