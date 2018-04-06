import React, {Component} from "react";
import { withRouter, NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import GitHubLogin from 'react-github-login';


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
            }
        };

    }

    onSuccess = ({code}) => {
        console.log(code);
        fetch(`https://github.com/login/oauth/access_token?client_id=3755509e8a57d214887d&client_secret=e8c1f0f4c96b73a46c2317e89b2b84979419d561&code=${code}`,{
            headers: {
                'Access-Control-Allow-Origin':'http://localhost:8080',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authorization',
            },
        }).then(response => console.log('res',response))

    };


    onFailure = response => console.error(response);
    render(){
        return(
            <div style={{backgroundColor: "#f2f2f2"}}>
                <div style={this.styles.blogTEXT} >
                    <NavLink to="/" >
                        <RaisedButton label="Menu" style={this.styles.medium}/>
                    </NavLink>
                    <span >
                        <GitHubLogin clientId="3755509e8a57d214887d"
                                     redirectUri="http://localhost:8080"
                                     onSuccess={this.onSuccess.bind(this)}
                                     onFailure={this.onFailure.bind(this)}
                        />
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