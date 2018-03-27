import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';


class SelectDish extends Component {
  constructor(props) {
    super();
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      filter: '',
      type: 'all'
    }

    this.filterChanged = this.filterChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit (evt) {
    evt.preventDefault();
    console.log(this.state.filter);
    // setState kanske? Behövs egentligen inte, kanske skicka vidare till
  }

  filterChanged (evt) {
    this.setState({
      filter: evt.target.value
    });
  }
  typeChanged (evt) {
    this.setState({
      type: evt.target.value
    });
  }

  static defaultProps = {
    categories: ['all', 'appetizer', 'beverage', 'bread', 'breakfast', 'dessert','main course', 'salad', 'sauce', 'side dish','soup']

  }
  
  render() {
    let categoryOptions = this.props.categories.map(category =>{
      return <option key={category} value={category}>{category}</option>

    }); 
    return (
      <div className="SelectDish">
        <h2>This is the Select Dish screen</h2>
        
        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model}/>

        <form id="search" onSubmit={this.handleSubmit}>
          <input id="searchinput" ref="filterInput" type="text" value={this.state.filter} onChange={evt => this.filterChanged(evt)} />
          <select ref="category" className="btn btn-primary" onChange={evt => this.typeChanged(evt)}>
            {categoryOptions}
          </select>

          <button id="searchbutton" type="submit" className="btn btn-primary">Search</button>
        </form>

        <Dishes filter={this.state.filter} type={this.state.type} />
        
      </div>
    );
  }
}

export default SelectDish;
