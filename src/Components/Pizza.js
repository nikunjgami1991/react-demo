import React from 'react';

/**It returns individual pizza as list item. */
const Pizza = (props) => {
     return (<li>{props.pizza}</li>);
}

/** It defines type of props that has been passed to this component. */
Pizza.propTypes = {
    pizzas : React.PropTypes.string
};

export default Pizza;