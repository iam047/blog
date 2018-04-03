import React, {Component} from 'react';
import Header from './Header';
import NewPost from "../containers/NewPost";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import BlogPreview from './BlogPreview';
import Post from './Post';
import Edit from './Edit';

export default class App extends Component {
    constructor(){
        super()
    }

    render(){

        return(
             <div>
                 <Router >
                     <div>
                         <Header />
                         <Switch>
                             <Route exact path="/" component={BlogPreview} />
                             <Route  path="/posts/new" component={NewPost} />
                             <Route  path="/posts" component={PostList} />
                             <Route exact path="/post/:id" component={Post} />
                             <Route exact path="/post/:id/edit" component={Edit} />
                         </Switch>
                     </div>
                 </Router>
             </div>
        );
    }
}