import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from "../actions";
import { TextField, RaisedButton } from 'material-ui';
import { withRouter, NavLink } from 'react-router-dom';

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
               this.onTitleChange = this.onTitleChange.bind(this);
               this.onContentChange = this.onContentChange.bind(this);
               this.onImagesURLChange = this.onImagesURLChange.bind(this);
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
    onTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    onContentChange(e) {
        this.setState({ description: e.target.value });
        return e.target.value = '';
    }
    onImagesURLChange(e) {
        this.setState({ image: e.target.value });
        return e.target.value = '';
    }

    validate = () => {
        let isError = false;
        const errors = {
            titleValid: '',
            descriptionValid: '',
            imageValid: ''
        };

        if (this.state.title === '') {
            isError = true;
            errors.titleValid = "must be at least one letter";
        }
        if (this.state.description === '') {
            isError = true;
            errors.descriptionValid = "must be at least one letter";
        }
        if (this.state.image.indexOf("http") === -1) {
            isError = true;
            errors.imageValid = "you must copy the url of your image ";
        }

        this.setState({
            ...this.state,
            ...errors
        });
        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
          this.props.addPost(this.state);
        }
    };

    render() {

        return (
            <div style={this.styles.createPost}>
                <div >
                    <h1>Create a new post </h1>
                    <TextField
                        floatingLabelText="Name title"
                        onChange={this.onTitleChange}
                        value={this.state.title}
                        errorText={this.state.titleValid}
                    /><br />
                <TextField
                    floatingLabelText="Text description"
                    multiLine
                    onChange={this.onContentChange}
                    value={this.state.description}
                    errorText={this.state.descriptionValid}
                /><br />
                <TextField
                    floatingLabelText="Images  url"
                    onChange={this.onImagesURLChange}
                    value={this.state.image}
                    errorText={this.state.imageValid}
                /><br />
                    <br />
                    <NavLink to="/post/1">
                        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary
                        />
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    () => ({

    }),
    dispatch => bindActionCreators({
       addPost
    }, dispatch)
)(NewPost));

