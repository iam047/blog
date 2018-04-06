import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from "../actions";
import { TextField, RaisedButton } from 'material-ui';
import { withRouter } from 'react-router-dom';

class NewPost extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            image: '',
            titleValid: '',
            descriptionValid: '',
            imageValid: '',
        };
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

    onTitleChange = e => {
        this.setState({ title: e.target.value });
    };

    onContentChange = e => {
        this.setState({ description: e.target.value });
        return e.target.value = '';
    };

    onImagesURLChange = e => {
        this.setState({ image: e.target.value });
        return e.target.value = '';
    };

    validate = () => {
        let isError = false;
        const errors = {
            titleValid: '',
            descriptionValid: '',
            imageValid: ''
        };

        if (this.state.title.trim() === '') {
            isError = true;
            errors.titleValid = "must be at least one letter";
        }
        if (this.state.description.trim() === '') {
            isError = true;
            errors.descriptionValid = "must be at least one letter";
        }
        if (this.state.image.indexOf("http") === -1) {
            isError = true;
            errors.imageValid = "you must copy the url of your image ";
        }
        this.setState({
            ...errors
        });
        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
          this.props.addPost(this.state);
          this.props.history.push('/posts');
        }
    };

    render() {
        return (
            <div>
                <div style={this.styles.createPost}>
                    <h1>Create a new post </h1>
                    <TextField
                        floatingLabelText="Name title"
                        onChange={this.onTitleChange}
                        value={this.state.title}
                        errorText={this.state.titleValid}
                    />
                    <TextField
                        floatingLabelText="Text description"
                        multiLine
                        onChange={this.onContentChange}
                        value={this.state.description}
                        errorText={this.state.descriptionValid}
                    />
                    <TextField
                        floatingLabelText="Images  url"
                        onChange={this.onImagesURLChange}
                        value={this.state.image}
                        errorText={this.state.imageValid}
                    />
                    <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary/>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    (null),
    dispatch => bindActionCreators({
       addPost
    }, dispatch)
)(NewPost));

