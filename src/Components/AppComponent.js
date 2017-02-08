import React, { Component } from 'react';
import axios from 'axios';
import LoadingComponent from './LoadingComponent';
import PizzaComponent from './PizzaComponent';
import {FilterList, SortList} from './../Common/CommonFunctions';
import {MainContainer, FilterInput, SortButton} from './../Styles/AppComponentStyles';

/**This is a main container component which will hold the data and distribute it to other components*/
class AppComponent extends Component {
    
    constructor(){
        super();
        this.state = {
            pizzas : []
        };
        /**It will hold the original pizza list.  */
        this.originalPizzasList = [];
        this.noResultFound = false;
    }
    /**It will load data from json file.
     * It will update the state based once it will get response from json */
    loadPizzas() {
        axios.get(`./pizza.json`)
      .then(function (response) {          
        this.setState({pizzas : response.data.pizzas});
        this.originalPizzasList = this.state.pizzas;        
      }.bind(this))
      .catch(function (error) {          
        return error;           
      });
    }

    /**It will filter the pizza list based on value entered in text box.
     * @param : enteredValue : string - value entered in text box.
     */
    filterPizzaList(enteredValue) {         
        let filteredPizzaList = FilterList(enteredValue, this.originalPizzasList);
        if(filteredPizzaList.length === 0){
            this.noResultFound = true;
        }        
        this.setState({pizzas : filteredPizzaList});
    }

    /**It will sort the pizza list in desending order.*/
    sortPizzaList (){
        let sortedPizzaList = SortList(this.state.pizzas);
        this.setState({pizzas : sortedPizzaList});
    }

    componentDidMount() {            
      this.loadPizzas();       
    }

    render(){        
        if(this.state.pizzas.length > 0){
            return(<MainContainer>
                        <FilterInput type="text" onChange={(event) => this.filterPizzaList(event.target.value)}></FilterInput>
                        <SortButton onClick={() => this.sortPizzaList()}>Sort Pizzas</SortButton>
                        <PizzaComponent pizzas={this.state.pizzas}/>
                    </MainContainer>);
        }else{   
            /*When data is not available then this component will be show and it will show loading text.*/         
            return(<LoadingComponent noResultFound={this.noResultFound}/>);
        }                        
    }
}

export default AppComponent;