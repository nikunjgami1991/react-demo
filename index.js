import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import fetch from 'isomorphic-fetch';
import PizzaComponent from './src/Components/PizzaComponent';

function loadPizzas ()  {
     axios.get(`./pizza.json`)
      .then(function (response) {          
        ReactDOM.render(<PizzaComponent pizzas={response.data.pizzas}/>,document.getElementById('root'));
      }.bind(this))
      .catch(function (error) {          
        return error;           
      });
}

loadPizzas();
// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed,
// so you may use that, or install another http client. remember that fetch uses promises.

// step 2: in case you're not familiar with rendering a top level react component, you'll need some code that looks
// like this: `ReactDOM.render(<Filter />, document.querySelector('.content'));` somewhere in the application
