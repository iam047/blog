import React, {Component} from "react";
import { withRouter, NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends Component {
    constructor(){
        super();
        this.styles = {
            blogTEXT: {
                display: 'flex',
                justifyContent: 'space-around',
            },
            menu: {
                display: 'flex',
                justifyContent: 'flex-start',
            },
            medium: {
                width: 200,
                height: 60,
                margin: 12,
            },
            large: {
                width: 220,
                height: 140,
                padding: 12,
            },
        };
    }

    render(){
        return(
            <div style={{backgroundColor: "#f2f2f2"}}>
                <div style={this.styles.blogTEXT} >
                    <NavLink to="/" >
                        <RaisedButton label="Menu" style={this.styles.medium}/>
                    </NavLink>
                    <span >
                        <NavLink to="/authentication">
                        <RaisedButton label="Authentication" style={this.styles.medium}
                        />
                        </NavLink>
                        <NavLink to="/posts">
                            <RaisedButton label="Posts" style={this.styles.medium}/>
                        </NavLink>
                        <span>
                            <NavLink to="/posts/new">
                                <RaisedButton label="NewPost" style={this.styles.medium}/>
                            </NavLink>
                        </span>
                    </span>
                </div>
            </div>
        );
    }
};