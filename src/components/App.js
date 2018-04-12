import React, { Component } from 'react';
import Header from './Header';
import NewPost from "../containers/NewPost";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import BlogPreview from './BlogPreview';
import Post from './Post';
import EditPost from '../containers/EditPost';

export default class App extends Component {
    constructor() {
        super();
        this.styles = {
            box: {
                display: 'flex',
                flexDirection: 'column',
                minWidth: 900
            }
        };
    }

    render() {
        return (
            <div>
                <Router>
                    <div style={this.styles.box}>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={BlogPreview}/>
                            <Route path="/posts/new" component={NewPost}/>
                            <Route path="/posts" component={PostList}/>
                            <Route exact path="/post/:id" component={Post}/>
                            <Route exact path="/post/:id/edit" component={EditPost}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}