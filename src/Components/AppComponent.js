import React, { Component } from 'react';
import axios from 'axios';
import LoadingComponent from './LoadingComponent';
import PizzaComponent from './PizzaComponent';
class AppComponent extends Component {
    
    constructor(){
        super();
        this.state = {
            pizzas : []
        }        
    }

    loadPizzas() {
        axios.get(`./pizza.json`)
      .then(function (response) {          
        this.setState({pizzas : response.data.pizzas});
      }.bind(this))
      .catch(function (error) {          
        return error;           
      });
    }

    componentDidMount() {            
      this.loadPizzas();       
    }

    render(){
        if(this.state.pizzas.length > 0){
            return(<div>
                        <input type="text"></input>
                        <button>Sort</button>
                        <PizzaComponent pizzas={this.state.pizzas}/>
                    </div>);
        }else{
            return(<LoadingComponent/>);
        }                        
    }
}

export default AppComponent;