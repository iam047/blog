import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardHeader } from 'material-ui/Card';
import { List } from 'material-ui/List';
import moment from "moment/moment";
import { changePost } from '../actions/index';
import { withRouter } from 'react-router-dom';
import FormPost from "../components/FormPost";


const selectPostById = (id, posts) => {
    return posts.find(post => post.id === id);
};

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            root: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
            postSize: {
                width: '32%',
            },
            medium: {
                width: "70%",
                height: 40,
                margin: 12,
            }
        };
    }

    timeCreate = time => {
        let now = moment(time);
        let createPostDate = now.format('dddd, MMMM DD YYYY, h:mm:ss');
        return createPostDate;
    };


    render() {
        const { post } = this.props;
        return (
            <List style={this.styles.root}>
                <Card style={this.styles.postSize}>
                    <CardHeader
                        title={post.user}
                        subtitle={this.timeCreate(post.createdAt)}
                        avatar={post.userAvatar}
                    />
                    <FormPost
                        style={this.styles.postSize}
                        submitAction={this.props.changePost}
                        type={'editPost'}

                    />
                </Card>
            </List>
        )
    }
}

export default withRouter(connect(
    ({ reducerPost }, extraProps) => {
        const { id } = extraProps.match.params;
        return {
            post: selectPostById(Number(id), reducerPost.posts)
        }
    },
    dispatch => bindActionCreators({
        changePost
    }, dispatch)
)(EditPost));


