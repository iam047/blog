import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePost, valueSearch, sortDate } from "../actions";
import { Card } from 'material-ui/Card';
import { List } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import { grey50 } from 'material-ui/styles/colors';
import PostHeader from "../containers/PostHeader";
import { withRouter, NavLink } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';

class PostList extends Component {
    constructor() {
        super();
        this.styles = {
            root: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
            postSize: {
                width: '35%',
            },
            buttonDEll: {
                display: 'flex',
                position: 'relative',
                left: '94%',
                top: -14,
            },
            menu: {
                display: 'flex',
                justifyContent: 'center',
            },
            input: {
                width: 200,
                height: 60,

            },
            sort: {
                width: 100,
                height: 30,
                margin: 25,
            },
        };
    }


    deletePost = id => {
        this.props.deletePost(id)
    };
    search = e => {
        this.props.valueSearch(e.target.value);
    };
    sortDate = () => {
        this.props.sortDate();
    };

    render() {
        const { posts, searchValue } = this.props;
        const filterSearch = posts.filter(({ title }) => {
            return title.toLowerCase().includes(searchValue);
        });
        return (
            <div>
                <div>
                    <div style={this.styles.menu}>
                        <RaisedButton
                            label="sort"
                            style={this.styles.sort}
                            onClick={() => this.sortDate()}
                        />
                        <TextField
                            style={this.styles.input}
                            floatingLabelText="Search post"
                            onChange={(e) => this.search(e)}
                        />
                    </div>
                </div>
                {filterSearch.map(({
                                       user = 'user',
                                       userAvatar = 'http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg',
                                       id, createdAt, title, image, description
                                   }) => (
                    <List style={this.styles.root} key={id}>
                        <Card style={this.styles.postSize}>
                            <Chip style={this.styles.buttonDEll}
                                  onRequestDelete={() => this.deletePost(id)}
                                  backgroundColor={grey50}
                            >
                            </Chip>
                            <NavLink to={`/post/${id}`}>
                                <PostHeader title={title}
                                            image={image}
                                            createdAt={createdAt}
                                            description={description}
                                            user={user}
                                            userAvatar={userAvatar}
                                />
                            </NavLink>
                            <NavLink to={`/post/${id}/edit`}>
                                <FlatButton label="Edit"/>
                            </NavLink>
                        </Card>
                    </List>
                ))
                }
            </div>
        );
    }
}

export default withRouter(connect(
    ({ reducerPost }) => ({
        posts: reducerPost.posts,
        searchValue: reducerPost.searchValue,

    }),
    dispatch => bindActionCreators({
        deletePost,
        valueSearch,
        sortDate
    }, dispatch)
)(PostList));


