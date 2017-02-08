import React from 'react';
import Pizza from './Pizza';
import {PizzaList} from './../Styles/PizzaComponentStyles';

const PizzaComponent = (props) => {

    let pizzasList = null; 
    /**It will generate list of pizza that needs to be displayed.
     * It will internally call pizza component to render individual pizza as list item.
     * @param : pizzas : array - list of pizzas.
     */
    const renderPizzas = (pizzas) => {
        return pizzas.map((pizza, index) => {
            return(<PizzaList key={index}>
                <Pizza pizza={pizza}/>
            </PizzaList>);
        });        
    }

    /**It will generate the pizza list based on props received from parent component.*/
    pizzasList = renderPizzas(props.pizzas);
    return (<div>{pizzasList}</div>);
}

/** It defines type of props that has been passed to this component. */
PizzaComponent.propTypes = {
    pizzas : React.PropTypes.array
};

export default PizzaComponent;