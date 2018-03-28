import React, {Component} from 'react';
import Header from './Header';
import PostList from './PostList'

export default class App extends Component {
    constructor(){
        super()
    }

    render(){

        return(
             <div>
                <Header />
                <PostList />
             </div>
        );
    }
}