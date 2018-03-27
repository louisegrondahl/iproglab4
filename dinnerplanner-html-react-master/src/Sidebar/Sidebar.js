import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
class Sidebar extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }


render() {
    function onPlusClicked (){

      this.props.model.setNumberOfGuests(this.props.model.getNumberOfGuests()+1)
    }

    function onMinusClicked (){

      this.props.model.setNumberOfGuests(this.props.model.getNumberOfGuests()-1)
    }
    return (
      <div className="col-sm-3">
      <div className="Sidebar">
        <h3>This is the sidebar</h3>
        <p>
        Change number of people: <input id="peopleinput" className="btn btn-primary" value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged}/>


        <button className="btn btn-primary" onClick={onPlusClicked.bind(this)}>Plus</button>
        <button className="btn btn-primary" onClick={onMinusClicked.bind(this)}>Minus</button>
        
        Total number of guests: {this.state.numberOfGuests}

        </p>
        <Link to="/confirmDinner">
            <button className="btn btn-primary">Confirm dinner</button>
        </Link>

      </div>
      </div>
    );
  }
}

export default Sidebar;
