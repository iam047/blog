import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from "react-redux";

class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            image: '',
            titleValid: '',
            descriptionValid: '',
            imageValid: '',
        };
        this.styles = {
            input: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap',
            },
            button: {
                display: 'flex',
                justifyContent: 'space-around',
                margin: 10,
            }
        };
    }

    onTitleChange = e => {
        this.setState({ title: e.target.value });
    };

    onContentChange = e => {
        this.setState({ description: e.target.value });
    };

    onImagesURLChange = e => {
        this.setState({ image: e.target.value });
    };

    validate = () => {
        let isError = false;
        const errors = {
            titleValid: '',
            descriptionValid: '',
            imageValid: ''
        };
        const { title, image, description } = this.state;

        if (title.trim() === '') {
            isError = true;
            errors.titleValid = "must be at least one letter";
        }
        if (description.trim() === '') {
            isError = true;
            errors.descriptionValid = "must be at least one letter";
        }
        const regular = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        if (image.search(regular)) {
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
        const { submitAction, match: { params } } = this.props;
        const { title, image, description } = this.state;
        const postData = {
            id: Number(params.id),
            title,
            description,
            image
        };
        if (!err) {
            submitAction(postData);
            this.props.history.push('/posts');
        }
    };

    render() {
        return (
            <div>
                <div style={this.styles.input}>
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
                </div>
                <div style={this.styles.button}>
                    <CardActions>
                        <NavLink to="/posts">
                            <FlatButton label="Back to posts"/>
                        </NavLink>
                        <FlatButton label="Save "
                                    onClick={e => this.onSubmit(e)}
                        />
                    </CardActions>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, null)(FormPost));
