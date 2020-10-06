import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onADD5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSUB5}  />
                <hr></hr>
                <button onClick={this.props.onStore}>Store</button>
                <ul>
                    {this.props.results.map(result => <li onClick={(result) => this.props.onDelete(result.target.innerText)} key={result}>{result}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        ctr : state.counter,
        results: state.results
    }
}

const mapDispatchtoProps = dispatch =>{
    return {
        onIncrement : () => dispatch({type:"INCREMENT"}),
        onDecrement : () => dispatch({type:"DECREMENT"}),
        onADD5 : () => dispatch({type:"ADD5",value: 500}),
        onSUB5 : () => dispatch({type:"SUB5",value: 500}),
        onStore : () => dispatch({type: "STORE"}),
        onDelete : (result) => {console.log(result);return dispatch({type: "DELETE",va: result})}
        
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);