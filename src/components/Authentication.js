import React, { Component } from "react";

export default class Authentication extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        fetch('http://localhost:5000/auth/github')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Authentication</h1>
            </div>
        );
    }
};