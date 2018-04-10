import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardActions } from 'material-ui/Card';
import { List } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import { deletePost } from '../actions';
import { withRouter, NavLink } from 'react-router-dom';
import PostHeader from "../containers/PostHeader";

const selectPostById = (id, posts) => {
    return posts.find(post => post.id === id);
};

class Post extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            root: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
            postSize: {
                width: '58%',
            }
        };
    }

    deletePost = id => {
        this.props.deletePost(id)
    };

    render() {
        const {
            post: {
                user = 'user',
                userAvatar = 'http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg',
                title, image, createdAt, description, id
            }
        } = this.props;
        return (
            <List style={this.styles.root}>
                <Card style={this.styles.postSize}>
                    <PostHeader title={title}
                                image={image}
                                createdAt={createdAt}
                                description={description}
                                user={user}
                                userAvatar={userAvatar}
                    />
                    <CardActions>
                        <NavLink to="/posts">
                            <FlatButton label="Back to posts"/>
                        </NavLink>
                        <NavLink to={`/post/${id}/edit`}>
                            <FlatButton label="Edit"/>
                        </NavLink>
                        <NavLink to="/posts">
                            <FlatButton label="Dell post"
                                        onClick={() => this.deletePost(id)}/>
                        </NavLink>
                    </CardActions>
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
        deletePost
    }, dispatch)
)(Post));


