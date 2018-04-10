import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from "../actions";
import { withRouter } from 'react-router-dom';
import FormPost from './FormPost';

class NewPost extends Component {
    constructor() {
        super();
        this.styles = {
            createPost: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap',
            },
        };
    }

    render() {
        return (
            <div>
                <div style={this.styles.createPost}>
                    <h1>Create a new post </h1>
                    <FormPost
                        submitAction={this.props.addPost}
                        type={'newPost'}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    null,
    dispatch => bindActionCreators({
        addPost
    }, dispatch)
)(NewPost));

