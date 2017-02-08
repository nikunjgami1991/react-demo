import React from 'react';
import {PizzaStyle} from './../Styles/PizzaStyles';

/**It returns individual pizza as list item. */
const Pizza = (props) => {
     return (<PizzaStyle>{props.pizza}</PizzaStyle>);
}

/** It defines type of props that has been passed to this component. */
Pizza.propTypes = {
    pizzas : React.PropTypes.string
};

export default Pizza;