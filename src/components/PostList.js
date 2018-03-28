import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Post from './Post';

class PostList extends Component {

    render() {

         let { posts } = this.props;
     console.log(posts);

        return (
            <div>
                {posts.map(post => (
                    <Post key={post.id}
                          post = {post}
                    />
                ))
                }
            </div>
        );
    }
}

export default connect(
    ({reducPost}) => ({

        posts: reducPost
    }),
    dispatch => bindActionCreators({

    }, dispatch)
)(PostList);