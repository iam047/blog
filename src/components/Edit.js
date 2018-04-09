import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import moment from "moment/moment";
import { dellPost, changePost } from '../actions';
import { withRouter ,NavLink } from 'react-router-dom';
import { TextField } from 'material-ui';


const selectPostById = ( id, posts ) => {
    return posts.find(post => post.id === id);
};

class Edit extends Component {
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
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        postSize:{
            width: '68%',
        },
        input: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
        },
        medium: {
            width: "70%",
            height: 40,
            margin: 12,
        }
    };

}

    dellPost = id => {
        this.props.dellPost(id)
    };

    timeCreate = time =>{
        let now = moment(time);
        let createPostDate = now.format('dddd, MMMM DD YYYY, h:mm:ss');
        return createPostDate;
    };

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
        if (this.state.image.includes("http") === -1) {
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
            const { post } = this.props;
            this.props.changePost(post.id,this.state.title, this.state.description, this.state.image);
            this.props.history.push('/posts');
        }
    };

    render(){
        const { post } = this.props;
        return (
            <List style={this.styles.root} >
                <Card style={this.styles.postSize}>
                    <CardHeader
                        title={post.user}
                        subtitle={this.timeCreate(post.createdAt)}
                        avatar={post.userAvatar}
                    />
                    <span style={this.styles.input}>
                        <TextField
                            style={this.styles.medium}
                            placeholder = {post.title}
                            onChange={this.onTitleChange}
                            value={this.state.title}
                            errorText={this.state.titleValid}
                        />
                        <TextField
                            style={this.styles.medium}
                            placeholder = {post.description}
                            multiLine
                            onChange={this.onContentChange}
                            value={this.state.description}
                            errorText={this.state.descriptionValid}
                        />
                        <TextField
                            style={this.styles.medium}
                            onChange={this.onImagesURLChange}
                            value={this.state.image}
                            placeholder = {post.image}
                            errorText={this.state.imageValid}
                        />
                    </span>
                    <CardActions >
                        <NavLink to="/posts">
                            <FlatButton label="Back to posts" />
                        </NavLink>
                        <NavLink to="/posts">
                            <FlatButton label="Save Changes"
                                        onClick={ e => this.onSubmit(e)}
                            />
                        </NavLink>
                        <NavLink to="/posts">
                            <FlatButton label="Dell post"
                                        onClick={()=> this.dellPost(post.id)}
                            />
                        </NavLink>
                    </CardActions>
                </Card>
            </List>
        )
    }
}

export default withRouter(connect(
    ({ reducerHelper }, extraProps) => {
        const {id} = extraProps.match.params;
        return {
            post: selectPostById(Number(id),  reducerHelper.posts)
        }
    },
    dispatch => bindActionCreators({
        dellPost,
        changePost
    }, dispatch)
)(Edit));


