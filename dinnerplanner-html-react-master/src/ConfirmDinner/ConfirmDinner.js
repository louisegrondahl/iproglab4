import React, { Component } from 'react';
import './ConfirmDinner.css';
import { Link } from 'react-router-dom';

class ConfirmDinner extends Component {
  render() {
    return (
      <div className="ConfirmDinner">
        <h2>This is the ConfirmDinner screen</h2>
        	<Link to="/printDinner">
          		<button className="btn btn-primary right-block">To Print Dinner</button>
        	</Link>
        	<Link to="/search">
          		<button className="btn btn-primary left-block">Back to search</button>
        	</Link>
     
      </div>
    );
  }
}

export default ConfirmDinner;