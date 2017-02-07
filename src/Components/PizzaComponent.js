import React from 'react';
import Pizza from './Pizza';

const PizzaComponent = (props) => {

    let pizzasList = null;  

    const renderPizzas = (pizzas) => {
        return pizzas.map((pizza, index) => {
            return(<ul key={index}>
                <Pizza pizza={pizza}/>
            </ul>);
        });        
    }

    pizzasList = renderPizzas(props.pizzas);
    return (<div>
                <input type="text"></input>
                <button>Sort</button>
                <div>{pizzasList}</div>
            </div>);
}

export default PizzaComponent;