import React from 'react';

/**This will load text when data is not available. */
const LoadingComponent = (props) => {
    if(props.noResultFound){
        return (<h2>Sorry, No Result Found of entered value. Please reload the browser to search again.</h2>);
    }else{
        return (<h1>Loading.....</h1>);
    }     
}

/** It defines type of props that has been passed to this component. */
LoadingComponent.propTypes = {
    noResultFound : React.PropTypes.bool
};

export default LoadingComponent;