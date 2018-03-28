import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(){
        super()
    }

    render(){

        return(
            <h1>App </h1>
        );
    }
}

ReactDOM.render(
        <App />,
    document.getElementById('root')
);