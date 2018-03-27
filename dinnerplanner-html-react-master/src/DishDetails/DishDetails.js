import React, {Component} from 'react';
import { Link, State, Route} from 'react-router';
import gif from '../Images/loading.gif';
import { modelInstance } from '../data/DinnerModel';


// Alternative to passing the moderl as the component property, 
// we can import the model instance directly


class DishDetails extends Component {
	constructor(props) {
	    super(props);
	    // We create the state to store the various statuses
	    // e.g. API data loading or error 
	    this.state = {
	      status: 'INITIAL',
	      //id: props.match.params.dishID,
	      dish: {},
	    }

	}

	componentDidMount = (props) => {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    console.log(this.props.match.params.dishID);
    let dishID = this.props.match.params.dishID
    modelInstance.getDish(dishID).then(dish => {
    	console.log(dish)
		this.setState({
			status: 'LOADED',
			dish: dish
		})
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }

  render() {
  	let dishDetails=null;

  	switch (this.state.status) {
      case 'INITIAL':
        dishDetails = <em><img src={gif} alt="Loading..." /></em>
        break;
      case 'LOADED':
        dishDetails = this.state.dish.title
        
        break;
      default:
        dishDetails = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="DishDetails">
        <h2>This is the Dish details screen</h2>
        {dishDetails}
      </div>
    );
  }
}

export default DishDetails;