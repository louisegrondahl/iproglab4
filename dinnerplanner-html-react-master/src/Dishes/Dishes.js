import React, {Component} from 'react';
import './Dishes.css';
import gif from '../Images/loading.gif';
// Alternative to passing the moderl as the component property, 
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import { Link } from 'react-router-dom';


class Dishes extends Component {
  
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL',
      filter: this.props.filter,
      type: this.props.filter
    }

  }
  
  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
    componentDidMount = () => {
      // when data is retrieved we update the state
      // this will cause the component to re-render
      modelInstance.getAllDishes(this.state.type, this.state.filter).then(dishes => {
        this.setState({
          status: 'LOADED',
          dishes: dishes.results
        })
      }).catch(() => {
        this.setState({
          status: 'ERROR'
        })
      })
    }

  render() {
    let dishesList = null;
    
    
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
        dishesList = <em><img src={gif} alt="Loading..." /></em>
        break;
      case 'LOADED':
        dishesList = this.state.dishes.map((dish) =>
        <div className="col-sm-4" key={dish.id}>
          <Link to={"/dishDetails/" + dish.id}>
            <img src={"https://spoonacular.com/recipeImages/"+dish.id+"-240x150.jpg"} alt="Didn't load"/>
          </Link>
          {dish.title}
        </div>
        )
        
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="class=col-sm-9">
      <div className="Dishes">

        <br></br>
        <div className="col-sm-9">
          {dishesList}
        </div>
      </div>
      </div>
    );
  }
  

}

export default Dishes;